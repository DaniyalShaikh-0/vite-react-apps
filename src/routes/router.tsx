import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    // element
  },
]);
