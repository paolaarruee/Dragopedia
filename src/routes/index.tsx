import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/login";
import { DragonList } from "@/pages";

export const RouterConfig = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/lista-dragoes",
    element: <DragonList />,
  },
]);
