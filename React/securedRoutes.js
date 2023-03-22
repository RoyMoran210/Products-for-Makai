import { lazy } from "react";
const EmergencyContactsForm = lazy(() =>
  import("../components/emergencycontacts/EmergencyContactForm")
);
const Orders = lazy(() => import("../components/orders/Orders"));
const OrdersInfo = lazy(() => import("../components/orders/OrdersInfo"));
const AdminDashBoard = lazy(() =>
  import("../components/dashboards/default/index")
);
const PageNotFound = lazy(() => import("../components/errors/Error404"));
const ProductsForm = lazy(() => import("../components/products/ProductsForm"));

// dashboard
const BlogForm = lazy(() => import("../components/blogs/BlogAdminForm"));

const PageVisits = lazy(() => import("../components/gadashboard/PageVisits"));
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

const emergencyContactRoutes = [
  {
    path: "/emergency/contact/form",
    name: "EmergencyContacts",
    exact: true,
    element: EmergencyContactsForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const orders = [
  {
    path: "/orders",
    name: "Orders",
    exact: true,
    element: Orders,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/orders/:id",
    name: "Orders/id",
    exact: true,
    element: OrdersInfo,
    roles: [],
    isAnonymous: true,
  },
];

const test = [
  {
    path: "/test",
    name: "Test",
    exact: true,
    element: AdminDashBoard,
    roles: ["Fail"],
    isAnonymous: false,
  },
  {
    path: "/secured2",
    name: "A Secured Route",
    exact: true,
    element: AdminDashBoard,
    roles: ["Admin"],
    isAnonymous: false,
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

const blogAdminRoute = [
  {
    path: "/blogs/admin",
    name: "adminForm",
    exact: true,
    element: BlogForm,
    roles: [],
  },
];

const allRoutes = [
  ...dashboardRoutes,
  ...test,
  ...errorRoutes,
  ...emergencyContactRoutes,
  ...orders,
  ...blogAdminRoute,
  ...products,
];

export default allRoutes;
