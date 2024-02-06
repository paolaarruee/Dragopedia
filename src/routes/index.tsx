import { Navigate, createBrowserRouter } from "react-router-dom";

import { Login, DragonList } from "@/features";
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
      { path: "/home", element: <Home /> },
      { path: "/lista-dragoes", element: <DragonList /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
