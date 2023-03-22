import { lazy } from "react";
const Landing = lazy(() => import("../components/landing/Landing"));
const Products = lazy(() => import("../components/products/Products"));


const routes = [
  {
    path: "products",
    name: "Products",
    exact: true,
    element: Products,
    roles: [],
    isAnonymous: true,
  },
];

const errorRoutes = [
  {
    path: "/error-500",
    name: "Error - 500",
    element: ServerError,
    roles: [],
    exact: true,
    isAnonymous: true,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: true,
  },
];



const allRoutes = [...routes, ...errorRoutes];

export default allRoutes;
