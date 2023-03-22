import { lazy } from "react";
const Landing = lazy(() => import("../components/landing/Landing"));
const Registration = lazy(() =>
  import("../components/authentication/Registration")
);
const Login = lazy(() => import("../components/authentication/Login"));
const ConfirmEmail = lazy(() =>
  import("../components/authentication/ConfirmEmail")
);
const Reservations = lazy(() =>
  import("../components/reservations/Reservations")
);
const PageNotFound = lazy(() => import("../components/errors/Error404"));
const ServerError = lazy(() => import("../components/errors/Error500"));
const Blogs = lazy(() => import("../components/blogs/Blogs"));
const Faqs = lazy(() => import("../components/common/Faqs"));
const BlogDetail = lazy(() => import("../components/blogs/BlogDetail"));
const TestProduct = lazy(() => import("../components/stripe/TestProduct"));
const CheckoutSuccess = lazy(() =>
  import("../components/stripe/CheckoutSuccess")
);
const RegisterSuccess = lazy(() =>
  import("../components/stripe/RegisterSuccess")
);
const Partner = lazy(() => import("../components/stripe/Partner"));
const ContactUsForm = lazy(() =>
  import("../components/contactus/ContactUsForm")
);
const SiteReference = lazy(() =>
  import("../components/sitereference/SiteReference")
);
const LocationForm = lazy(() => import("../components/locations/LocationForm"));
const Map = lazy(() => import("../components/map/Map"));
const Products = lazy(() => import("../components/products/Products"));
const FileUploader = lazy(() => import("../components/FileUploader"));
const PartnerRegistration = lazy(() =>
  import("../components/partners/PartnerRegistration")
);
const LocalPartner = lazy(() => import("../components/partners/LocalPartner"));
const StandsLocationFinder = lazy(() =>
  import("../components/stands/StandsLocationFinder")
);
const TransferCard = lazy(() => import("../components/stripe/TransferCard"));
const PodcastPage = lazy(() => import("../components/podcasts/PodcastPage"));
const WeatherDisplay = lazy(() => import("components/weather/WeatherDisplay"));

const routes = [
  {
    path: "/weather",
    name: "Weather",
    exact: true,
    element: WeatherDisplay,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/podcastPage",
    name: "PodcastPage",
    exact: true,
    element: PodcastPage,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/",
    name: "Landing",
    exact: true,
    element: Landing,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/blogs",
    name: "Blogs",
    exact: true,
    element: Blogs,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/blogs/:id",
    name: "BlogDetail",
    exact: true,
    element: BlogDetail,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/register",
    name: "Registration",
    exact: true,
    element: Registration,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    element: Login,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/confirm",
    name: "Confirm",
    exact: true,
    element: ConfirmEmail,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/contactus",
    name: "ContactUsForm",
    exact: true,
    element: ContactUsForm,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/blogs",
    name: "Blogs",
    exact: true,
    element: Blogs,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/sitereference",
    name: "SiteReference",
    exact: true,
    element: SiteReference,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "locations/new",
    name: "Location Form",
    exact: true,
    element: LocationForm,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "locations/update",
    name: "Locations Update",
    exact: true,
    element: LocationForm,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "locations/map",
    name: "Map",
    exact: true,
    element: Map,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "products",
    name: "Products",
    exact: true,
    element: Products,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/files",
    name: "FileUploader",
    exact: true,
    element: FileUploader,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/partner/new",
    name: "Partner Registration",
    exact: true,
    element: PartnerRegistration,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/partner",
    name: "Partner Card",
    exact: true,
    element: LocalPartner,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/reservations",
    name: "Reservations",
    exact: true,
    element: Reservations,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/stands/standsfinder",
    name: "StandsLocationFinder",
    exact: true,
    element: StandsLocationFinder,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/faqs",
    name: "Faqs",
    exact: true,
    element: Faqs,
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

const stripeRoutes = [
  {
    path: "/stripe/testproduct",
    name: "TestProduct",
    exact: true,
    element: TestProduct,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/stripe/checkout/success",
    name: "CheckoutSuccess",
    exact: true,
    element: CheckoutSuccess,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/stripe/register/success",
    name: "RegisterSuccess",
    exact: true,
    element: RegisterSuccess,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/stripe/partner",
    name: "Partner",
    exact: true,
    element: Partner,
    roles: [],
    isAnonymous: true,
  },
  {
    path: "/stripe/transfer",
    name: "Transfer",
    exact: true,
    element: TransferCard,
    roles: [],
    isAnonymous: true,
  },
];

const allRoutes = [...routes, ...errorRoutes, ...stripeRoutes];

export default allRoutes;
