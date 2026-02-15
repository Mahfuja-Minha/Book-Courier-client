import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BookCard from "../../components/cards/BookCard";
import { Link } from "react-router";

const FeaturedBooks = () => {
  const axiosSecure = useAxiosSecure();

  const { data: books = [] } = useQuery({
    queryKey: ["featured-books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/books");
      return res.data.slice(0, 6);
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-lime-600">Featured</span> Books
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
        Discover the most popular books
      </p>
        </div>
      

      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Link to={"/books"}>
          <button className="btn bg-lime-500 text-white   transition">
            All Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooks;
