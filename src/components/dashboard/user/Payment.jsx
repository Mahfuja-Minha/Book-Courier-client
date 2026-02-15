import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: order } = useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders/${id}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const orderPaymentInfo = {
      price: order.price,
      orderId: order._id,
      email: order.userEmail,
      bookTitle: order.bookTitle,
    };

    const res = await axiosSecure.post(
      "/create-checkout-session",
      orderPaymentInfo,
    );

    window.location.href = res.data.url;
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

return (
  <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-96 border-2 border-lime-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Please Pay ${order.price}
      </h2>

      <p className="mb-6 text-gray-600">
        Book: {order.bookTitle}
      </p>

      <button
        onClick={handlePayment}
        className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-2 rounded-lg transition"
      >
        Pay Now
      </button>
    </div>
  </div>
);

};

export default Payment;
