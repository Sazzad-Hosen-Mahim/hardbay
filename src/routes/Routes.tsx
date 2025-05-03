import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Service from "@/pages/Service";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
// import Products from "@/pages/Products";

import ServiceLayout from "@/pages/Service/ServiceLayout";
import CustomServer from "@/pages/Service/CustomServer";
import GpuRental from "@/pages/Service/GpuRental";
import EnterpriseStorage from "@/pages/Service/EnterpriseStorage";
import ITHardwareConsult from "@/pages/Service/ITHardwareConsult";
import PartnersLayout from "@/pages/partners/PartnersLayout";

import NVIDIA from "@/pages/partners/NVIDIA";
import Micron from "@/pages/partners/Micron";
import Supermicro from "@/pages/partners/Supermicro";
import Gigabyte from "@/pages/partners/Gigabyte";
import Asus from "@/pages/partners/Asus";
import WekaIO from "@/pages/partners/WekaIO";
import Intel from "@/pages/partners/Intel";
import Amd from "@/pages/partners/Amd";
import Partners from "@/pages/Partners";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Service/Cart";
import Checkout from "@/pages/Checkout";
import Configure from "@/pages/Configure";
import NewDetails from "@/pages/Service/NewDetails";
import ForgetPassword from "@/pages/ForgetPassword";
import ResetPassword from "@/pages/ResetPassword";
import PartnerDetailsPage from "@/components/pertners/PartnersDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/products",
      //   element: <Products />,
      // },

      {
        path: "/configure",
        element: <Configure />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <ServiceLayout />,
        children: [
          {
            path: "",
            element: <Service />,
          },
          {
            path: "product-details/:id",
            element: <ProductDetails />,
          },
          {
            path: "custom-server",
            element: <CustomServer />,
          },
          {
            path: "gpu-rental",
            element: <GpuRental />,
          },
          {
            path: "enterprise-storage",
            element: <EnterpriseStorage />,
          },
          {
            path: "it-hardware-consult",
            element: <ITHardwareConsult />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/solutions",
        element: <PartnersLayout />,
        children: [
          {
            path: "",
            element: <Partners />,
          },
          {
            path: "new-details",
            element: <NewDetails />,
          },
          {
            path: "NVIDIA",
            element: <NVIDIA />,
          },
          {
            path: "micron",
            element: <Micron />,
          },
          {
            path: "supermicro",
            element: <Supermicro />,
          },
          {
            path: "gigabyte",
            element: <Gigabyte />,
          },
          {
            path: "asus",
            element: <Asus />,
          },
          {
            path: "wekaIO",
            element: <WekaIO />,
          },
          {
            path: "intel",
            element: <Intel />,
          },
          {
            path: "amd",
            element: <Amd />,
          },
        ],
      },
      {
        path: "/partners",
        element: <Blog />,
      },
      {
        path: "/partners/:id",
        element: <PartnerDetailsPage />,
      },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/admin",
        element: <AdminRoute />,
        children: [{ path: "", element: <AdminDashboard /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
