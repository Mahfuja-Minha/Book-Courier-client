import React, { useState } from "react";
import BookCard from "../../components/cards/BookCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const { data: books = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/books");
      return res.data;
    },
  });

  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(search.toLowerCase()),
  );

  if (sort === "low") {
    filteredBooks.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredBooks.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              All Books
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Explore books from nearby libraries
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search by book name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-transparent text-slate-900 dark:text-white"
            >
              <option value="">Sort by Price</option>
              <option value="low">Low → High</option>
              <option value="high">High → Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBooks;
