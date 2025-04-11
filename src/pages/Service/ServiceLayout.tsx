import CommonWrapper from "@/common/CommonWrapper";
import { Outlet, NavLink } from "react-router-dom";
import { accordionItems } from "@/lib/data";
import CustomAccordion from "@/components/blog/CustomAccordion/CustomAccordion";

const ServiceLayout = () => {
  return (
    <div className="px-6 py-4">
      <CommonWrapper>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4 mt-4">
          <span>Home</span> &gt; <span>Services</span>
        </div>
        <hr className="w-full" />

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {/* Sidebar Filter */}
          <aside className="flex flex-col md:w-1/4 space-y-1 border border-gray-300 rounded-sm p-2">
            <h2 className="text-lg font-semibold mb-2">Our Services</h2>
            <div className="flex flex-col space-y-1 ">
              <NavLink
                to="custom-server-build"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
                Custom Server Build
              </NavLink>
              <NavLink
                to="gpu-rental"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
                GPU Rental
              </NavLink>
              <NavLink
                to="enterprise-storage"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
                Enterprise Storage
              </NavLink>
              <NavLink
                to="it-hardware-consult"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
                IT Hardware Consult
              </NavLink>
            </div>
            <hr className="mt-3" />
            <div>
              <CustomAccordion items={accordionItems} allowMultiple />
            </div>
          </aside>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ServiceLayout;
