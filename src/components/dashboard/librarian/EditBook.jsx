import React from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const EditBook = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      return res.data;
    },
  });


  const handleUpdateBook = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      image: form.image.value,
      category: form.category.value,
      quantity: parseInt(form.quantity.value),
      description: form.description.value,status: form.status.value,
    };

    await axiosSecure.patch(`/books/${id}`, updatedBook);
    toast.success("Book Updated Successfully");
    navigate("/dashboard/my-books");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6 ">
      <h2 className="text-2xl font-bold mb-6">Edit Book</h2>

      <form onSubmit={handleUpdateBook} className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="mt-2">
              <label className="font-semibold">Book Name</label>
              <input
                name="title"
                defaultValue={book.title}
                className="input input-bordered w-full mt-2"
                placeholder="Book Title"
                required
              />
            </div>
            <div className="mt-2">
              <label className="font-semibold">Author</label>
              <input
                name="author"
                defaultValue={book.author}
                className="input input-bordered w-full mt-2"
                placeholder="Author Name"
              />
            </div>
            <div className="mt-2">
              <label className="font-semibold">Image URL</label>
              <input
                name="image"
                defaultValue={book.image}
                className="input input-bordered w-full mt-2"
                placeholder="Image URL"
                required
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <label className="font-semibold">Category</label>
              <input
                name="category"
                defaultValue={book.category}
                className="input input-bordered w-full mt-2"
                placeholder="Category"
                required
              />
            </div>
            <div className="mt-2">
              <label className="font-semibold">Status</label>
              <select name="status" className="select select-bordered w-full mt-2" required>
                <option value="published">Published</option>
                <option value="unpublished">Unpublished</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="font-semibold">Stock Quantity</label>
              <input
                name="quantity"
                type="number"
                defaultValue={book.quantity}
                className="input input-bordered w-full mt-2"
                placeholder="Quantity"
                required
              />
            </div>
          </div>
        </div>

        <label className="font-semibold">Description</label>
        <textarea
          name="description"
          defaultValue={book.description}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>

        <button className="btn bg-lime-500 w-full mt-8 text-white">Update</button>
      </form>
    </div>
  );
};

export default EditBook;
