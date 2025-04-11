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
import Products from "@/pages/Products";
import BlogPostDetail from "@/components/blog/BlogpostDetail";
import ServiceLayout from "@/pages/Service/ServiceLayout";
import CustomServer from "@/pages/Service/CustomServer";
import GpuRental from "@/pages/Service/GpuRental";
import EnterpriseStorage from "@/pages/Service/EnterpriseStorage";
import ITHardwareConsult from "@/pages/Service/ITHardwareConsult";

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
      {
        path: "/products",
        element: <Products />,
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
            path: "custom-server-build",
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogPostDetail />,
      },
      {
        path: "/Case Studies",
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
