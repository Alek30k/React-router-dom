import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
