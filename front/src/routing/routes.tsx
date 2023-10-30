import { RouteObject, createBrowserRouter } from "react-router-dom";
import Layout from "../componnents/Layout/Layout";
import Home from "../pages/Home/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default routes;
