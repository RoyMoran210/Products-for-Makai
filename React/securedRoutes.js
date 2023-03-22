import { lazy } from "react";
const PageNotFound = lazy(() => import("../components/errors/Error404"));
const ProductsForm = lazy(() => import("../components/products/ProductsForm"));

// dashboard
const BlogForm = lazy(() => import("../components/blogs/BlogAdminForm"));

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboards",
    header: "Navigation",
    children: [
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        element: AdminDashBoard,
        roles: ["Admin"],
        exact: true,
        isAnonymous: false,
      },
      {
        path: "/sitetraffic",
        name: "A Secured Admin Route",
        exact: true,
        element: PageVisits,
        roles: ["Admin"],
        isAnonymous: false,
      },
    ],
  },
];

const products = [
  {
    path: "/products/new",
    name: "New Product",
    exact: true,
    element: ProductsForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const errorRoutes = [
  {
    path: "/error-404",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: false,
  },
];


const allRoutes = [
  ...dashboardRoutes,
  ...test,
  ...errorRoutes,
  ...products,
];

export default allRoutes;
