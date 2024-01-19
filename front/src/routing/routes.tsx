import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../componnents/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/products";
import ProductNotice from "../pages/ProductNotice/ProductNotice";

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
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductNotice />,
      },

      {
        path: "about",
        element: <About />,
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
