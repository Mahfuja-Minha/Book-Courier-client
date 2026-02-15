import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "font-bold text-lime-500 border-b-2 border-lime-400"
          : `${className} font-semibold text-base-content hover:text-lime-600`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
