import { Navigate, createBrowserRouter } from "react-router-dom";

import { Login, DragonsList } from "@/features";
import { AppWrapper } from "@/components/Layout";
import { Home } from "@/features/home";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    element: <AppWrapper />,
    children: [
      { path: "/inicio", element: <Home /> },
      { path: "/lista-dragoes", element: <DragonsList /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
