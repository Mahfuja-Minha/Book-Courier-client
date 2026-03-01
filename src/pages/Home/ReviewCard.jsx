import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, review: testimonial, image, role, rating } = review;

  return (
    <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <FaQuoteLeft className="text-lime-500 text-2xl mb-4" />

      {/* rating */}
      <div className="flex text-yellow-400 mb-2">{"★".repeat(rating)}</div>

      <p className="mb-4text-gray-600 dark:text-gray-300">{testimonial}</p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-lime-500">
          <img src={image} className="w-full h-full object-cover" />
        </div>

        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
