import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [transactionId, setTransactionId] = useState("");
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          if (res.data.success) {
            setTransactionId(res.data.transactionId);
          }
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-lime-200">
        <h2 className="text-2xl font-bold text-lime-600 mb-4">
          Payment Successful
        </h2>
        <p className="text-gray-700 font-semibold">
          Transaction ID:
        </p>
        <p className="font-mono text-sm text-gray-900 mt-2">
          {transactionId}
        </p>
      </div>
    </div>
  );
};


export default PaymentSuccess;
