import { BookUser, Home, ListOrdered, User, User2, Users } from "lucide-react";
import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { GrAdd, GrOrderedList } from "react-icons/gr";
import { WiShowers } from "react-icons/wi";
import { Link, Outlet } from "react-router";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const dashboardTitle =
    role === "admin"
      ? "Admin Dashboard"
      : role === "librarian"
        ? "Librarian Dashboard"
        : "User Dashboard";

  return (
    <div className="relative min-h-screen md:flex bg-white">
      {/* Left Side: Sidebar Component */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4 font-semibold">{dashboardTitle}</div>
          </nav>
          {/* Page content here */}
          <div className="p-4 ">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to={"/"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <Home className="w-4 h-4" />
                  <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
              </li>
              {role === "user" && (
                <>
                  {/* List item */}
                  <li>
                    <Link
                      to={"myOrders"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Order"
                    >
                      <GrOrderedList className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">My Order</span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"wishlist"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Wishlist"
                    >
                      <WiShowers className="w-5 h-5" />
                      <span className="is-drawer-close:hidden">Wishlist</span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"payment-history"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Payment History"
                    >
                      <FaRegCreditCard className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">
                        Payment History
                      </span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"profile"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Profile"
                    >
                      <User2 className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">Profile</span>
                    </Link>
                  </li>
                </>
              )}

              {role === "librarian" && (
                <>
                  {/* List item */}
                  <li>
                    <Link
                      to={"add-book"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Add Book"
                    >
                      <GrAdd className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">Add Book</span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"my-books"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="My Books"
                    >
                      <BookUser className="w-5 h-5" />
                      <span className="is-drawer-close:hidden">My Books</span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"librarian-orders"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="librarian-orders"
                    >
                      <ListOrdered className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">Orders</span>
                    </Link>
                  </li>
                </>
              )}

              {role === "admin" && (
                <>
                  {/* List item */}
                  <li>
                    <Link
                      to={"all-users"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="All users"
                    >
                      <Users className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">All Users</span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"manage-books"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Manage Books"
                    >
                      <BookUser className="w-5 h-5" />
                      <span className="is-drawer-close:hidden">
                        Manage Books
                      </span>
                    </Link>
                  </li>
                  {/* List item */}
                  <li>
                    <Link
                      to={"admin-profile"}
                      className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      data-tip="Profile"
                    >
                      <User className="w-4 h-4" />
                      <span className="is-drawer-close:hidden">Profile</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
