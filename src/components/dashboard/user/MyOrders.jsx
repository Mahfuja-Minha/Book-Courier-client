import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user?.email}`);
      return res.data;
    },
  });

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.patch(`/orders/${id}`, {
        status: "cancelled",
      });

      if (res.data.modifiedCount > 0) {
        Swal.fire("Cancelled!", "Order has been cancelled.", "success");
        refetch();
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">No orders found.</div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">My Orders</h2>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.bookTitle}</td>
                <td>${order.price}</td>
                <td>{new Date(order.orderDate).toLocaleDateString()}</td>

                <td>
                  <span className="badge badge-outline">{order.status}</span>
                </td>

                <td>
                  <span className="badge badge-outline">
                    {order.paymentStatus}
                  </span>
                </td>

                <td className="space-x-2">
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="btn btn-sm btn-error"
                    >
                      Cancel
                    </button>
                  )}

                  {order.status === "pending" &&
                    order.paymentStatus === "unpaid" && (
                      <button
                        onClick={() =>
                          navigate(`/dashboard/payment/${order._id}`)
                        }
                        className="btn btn-sm btn-success"
                      >
                        Pay
                      </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
