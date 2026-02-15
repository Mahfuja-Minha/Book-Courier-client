import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const MyBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

 
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-books", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books?email=${user.email}`);
      return res.data;
    },
  });

  const handleStatusToggle = async (book) => {
    const newStatus = book.status === "published" ? "unpublished" : "published";

    await axiosSecure.patch(`/books/${book._id}`, {
      status: newStatus,
    });

    refetch();
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Books</h2>

      {books.length === 0 ? (
        <p>No Books Added Yet</p>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Book Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book,index) => (
                <tr key={book._id}>
                <td>{index+1}</td>
                  <td>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>

                  <td>{book.title}</td>

                  <td>
                    <button
                      onClick={() => handleStatusToggle(book)}
                      className={`px-3 py-2 rounded  ${
                        book.status === "published"
                          ? "border border-lime-600"
                          : "bg-gray-500"
                      }`}
                    >
                      {book.status}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        navigate(`/dashboard/edit-book/${book._id}`)
                      }
                      className="bg-lime-500 text-white px-3 py-2 rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBooks;
