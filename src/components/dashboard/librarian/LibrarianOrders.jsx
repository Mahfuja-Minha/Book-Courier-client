import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const LibrarianOrders = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["librarian-orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/librarian-orders");
      return res.data;
    },
  });

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axiosSecure.patch(`/orders/status/${id}`, {
        status: newStatus,
      });
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel",
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.patch(`/orders/status/${id}`, {
        status: "cancelled",
      });

      if (res.data.modifiedCount > 0) {
        Swal.fire("Cancelled!", "Order has been cancelled.", "success");
        refetch();
      }
    }
  };

  if (isLoading) return <p>Loading Orders...</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Orders</h2>

     <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>User Email</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} >
                <td>{index + 1}</td>

                <td>{order.bookTitle}</td>

                <td>{order.userEmail}</td>

                <td>
                  <span className="font-semibold badge badge-outline">{order.status}</span>
                </td>

                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                    className="border px-2 py-1 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>

                <td>
                  <button
                    onClick={() => handleCancel(order._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    disabled={order.status === "cancelled"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibrarianOrders;
