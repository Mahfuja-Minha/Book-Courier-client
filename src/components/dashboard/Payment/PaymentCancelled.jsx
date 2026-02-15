import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  // return (
  //     <div>
  //        <h2>cancel</h2>
  //        <Link to={"/dashboard/myOrders"}>
  //        <button>try again</button></Link>
  //     </div>
  // );
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-lime-200">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Payment Cancelled 
        </h2>

        <Link to={"/dashboard/myOrders"}>
          <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-lg">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancelled;
