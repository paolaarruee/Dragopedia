import { Navigate, createBrowserRouter } from "react-router-dom";

import { Login, Dragons } from "@/features";
import { MainContainer } from "@/components/Layout";
import { Home } from "@/features/home";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    element: <MainContainer />,
    children: [
      { path: "/inicio", element: <Home /> },
      { path: "/dragoes", element: <Dragons /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
