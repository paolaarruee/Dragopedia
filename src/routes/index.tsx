import { createBrowserRouter } from "react-router-dom";

import { Login } from "@/pages/login";

export const RouterConfig = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);
