import { createBrowserRouter } from "react-router-dom";
import { Login } from "@/features/login";

export const RouterConfig = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);
