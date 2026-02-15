import React, { useRef } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const BookDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const orderModalRef = useRef(null);

  const { data: book, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const handleModalOpen = () => {
    if (!user) {
      Swal.fire("Please login first");
      return;
    }
    orderModalRef.current.showModal();
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const phone = form.phone.value;
    const address = form.address.value;

    const orderData = {
      bookId: book._id,
      bookName: book.name,
      price: book.price,
      userEmail: user.email,
      userName: user.displayName,
      phone,
      address,
    };

    await axiosSecure.post("/orders", orderData);

    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    form.reset();
    orderModalRef.current.close();
  };
  console.log(book.name);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-[420px] object-cover rounded-lg"
        />

        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-2">{book.name}</h2>

          <p className="text-gray-500 mb-2">by {book.author}</p>
          <p className="text-gray-500 mb-2">by {book.description}</p>
          <p className="text-2xl font-bold text-lime-600 mb-4">
            ${Number(book.price).toFixed(2)}
          </p>

          <button
            onClick={handleModalOpen}
            disabled={book.status !== "published"}
            className={`mt-auto py-2 rounded-md text-white ${
              book.status === "published"
                ? "bg-lime-500 hover:bg-lime-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Order Now
          </button>
        </div>
      </div>

      <dialog ref={orderModalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Place Your Order</h3>

          <form onSubmit={handleOrderSubmit} className="space-y-3">
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full"
            />

            <input
              type="email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered w-full"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              required
              className="textarea textarea-bordered w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-700 text-white w-full py-2 rounded-md"
            >
              Confirm Order
            </button>
          </form>

          <div className="modal-action">
            <button
              onClick={() => orderModalRef.current.close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookDetails;
