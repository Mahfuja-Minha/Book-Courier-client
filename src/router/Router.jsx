import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import AllBooks from "../pages/Books/AllBooks";
import BookDetails from "../pages/Books/BookDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyOrders from "../components/dashboard/user/MyOrders";
import Wishlist from "../components/dashboard/user/Wishlist";
import MyProfile from "../components/dashboard/user/MyProfile";
import Coverage from "../pages/Home/Coverage";
import Payment from "../components/dashboard/user/Payment";
import PaymentSuccess from "../components/dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../components/dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../components/dashboard/Payment/PaymentHistory";
import LibrarianRoute from "./LibrarianRoute";
import AddBook from "../components/dashboard/librarian/AddBook";
import MyBooks from "../components/dashboard/librarian/MyBooks";
import LibrarianOrders from "../components/dashboard/librarian/LibrarianOrders";
import EditBook from "../components/dashboard/librarian/EditBook";
import AdminRoute from "./AdminRoute";
import AllUsers from "../components/dashboard/admin/AllUsers";
import ManageBooks from "../components/dashboard/admin/ManageBooks";
import Profile from "../components/dashboard/admin/Profile";
import ErrorPage from "../pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: AllBooks,
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/coverage",
        Component: Coverage,
        // loader: ()=>fetch('/deliveryCenter.json').then(res=>res.json())

        loader: async () => {
          const res = await fetch("/deliveryCenter.json");
          return res.json();
        },
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "myOrders",
        Component: MyOrders,
      },
      {
        path: "payment/:id",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "wishlist",
        Component: Wishlist,
      },
      {
        path: "profile",
        Component: MyProfile,
      },

      {
        path: "add-book",
        element: (
          <LibrarianRoute>
            <AddBook />
          </LibrarianRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <LibrarianRoute>
            <MyBooks />
          </LibrarianRoute>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <LibrarianRoute>
            <EditBook />
          </LibrarianRoute>
        ),
      },
      {
        path: "librarian-orders",
        element: (
          <LibrarianRoute>
            <LibrarianOrders />
          </LibrarianRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageBooks />
          </AdminRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <Profile />
          </AdminRoute>
        ),
      },
    ],
  },
]);
