import { Frown } from "lucide-react";
import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-4 ">
      <Frown strokeWidth={1.25} className="w-50 h-50 text-gray-400" />

      <h1 className="text-8xl font-bold text-gray-400">404</h1>
      <p className="text-xl text-[#627382]">page not found!</p>
      <p className="text-xl text-[#627382]">
        The page you are looking for is not available.
      </p>
      <Link
        to={"/"}
        className="btn  bg-lime-500  text-white rounded-lg font-semibold  hover:scale-105 transition ease-in-out px-7 py-5"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
