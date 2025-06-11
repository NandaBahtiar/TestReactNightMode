import React, { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import { createBrowserRouter, Outlet, useNavigate } from "react-router";
import Homepage from "./homepage";
import ProtectedRoute from "./guard/ProtectedRoute";
import Login from "./components/Login";
import Logout from "./components/logout";
import HomeButton from "./components/homeButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/users",
        element: (
          <div>
            <Logout />
            Dashboard Users
            <HomeButton />
          </div>
        ),
      },
      {
        path: "/dashboard/orders",
        element: <div>Dashboard Orders</div>,
      },
      {
        path: "/dashboard/menus",
        element: <div>Dashboard Menus</div>,
      },
    ],
  },
]);

export default router;
