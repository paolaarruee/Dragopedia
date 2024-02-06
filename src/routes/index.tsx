import { Navigate, createBrowserRouter } from "react-router-dom";

import { Home, Login, DragonsList, NewDragon, EditDragon } from "@/features";
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
      { path: "/editar-dragao/:id", element: <EditDragon /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
