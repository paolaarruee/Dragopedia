import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home, Login, DragonsList, NewDragon } from "@/features";
import { AppWrapper } from "@/components/Layout";

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
      { path: "/cadastrar-dragao", element: <NewDragon /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
