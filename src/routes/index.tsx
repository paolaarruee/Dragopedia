import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login";
import DragonList from "../pages/dragon-list";
import Home from "../pages/home/components";
import NewDragon from "../pages/new-dragon";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/listagem",
    element: <DragonList />,
  },
  {
    path: "/cadastrar",
    element: <NewDragon />,
  },
]);

export default router;
