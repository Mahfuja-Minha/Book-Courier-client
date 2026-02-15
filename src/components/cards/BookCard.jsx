import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col">
      
      <img
        src={book.image}
        alt={book.bookTitle}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
          {book.bookName}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
          {book.author}
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
          {book.category}
        </p>

        <p className="text-indigo-600 font-semibold mb-4">
          ${book.price}
        </p>

        <Link
          to={`/books/${book._id}`}
          className="mt-auto text-center bg-lime-500 hover:bg-lime-700 text-white py-2 rounded-md font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
