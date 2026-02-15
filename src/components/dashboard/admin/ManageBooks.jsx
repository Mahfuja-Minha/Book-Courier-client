import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageBooks = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: books = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["admin-books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/books");
      return res.data;
    },
  });

  const handleStatus = async (id, status) => {
    await axiosSecure.patch(`/admin/books/status/${id}`, { status });
    toast.success("Book Updated Successfully");
    refetch();
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This book & all related orders will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    });

    if (confirm.isConfirmed) {
      await axiosSecure.delete(`/admin/books/${id}`);

      Swal.fire("Deleted!", "Book removed successfully.", "success");
      refetch();
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Books</h2>
      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>

                <td className="flex items-center gap-3">
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <span>{book.name}</span>
                </td>

                <td>
                  <span
                    className={`badge text-white ${
                      book.status === "published"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>

                <td className="space-x-2">
                  <button
                    disabled={book.status === "published"}
                    onClick={() => handleStatus(book._id, "published")}
                    className="btn btn-xs bg-green-500 text-white disabled:bg-gray-400"
                  >
                    Publish
                  </button>

                  <button
                    disabled={book.status === "unpublished"}
                    onClick={() => handleStatus(book._id, "unpublished")}
                    className="btn btn-xs bg-yellow-500 text-white disabled:bg-gray-400"
                  >
                    Unpublish
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-xs bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
