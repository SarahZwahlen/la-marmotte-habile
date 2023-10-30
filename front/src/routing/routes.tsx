import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../componnents/Layout/Layout";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import JewelryNotice from "../pages/JewelryNotice/JewelryNotice";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "jewelry/:id",
        element: <JewelryNotice />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
