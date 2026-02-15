import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRoleChange = async (id, role) => {
    await axiosSecure.patch(`/users/role/${id}`, { role });
    Swal.fire("Done");
    refetch();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">All Users</h2>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || "user"}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleRoleChange(user._id, "librarian")}
                    className="btn btn-sm bg-lime-500 text-white"
                  >
                    Make Librarian
                  </button>

                  <button
                    onClick={() => handleRoleChange(user._id, "admin")}
                    className="btn btn-sm bg-lime-500 text-white"
                  >
                    Make Admin
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

export default AllUsers;
