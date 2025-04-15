import CommonWrapper from "@/common/CommonWrapper";
import { Outlet, NavLink } from "react-router-dom";
import { PartnersaccordionItems } from "@/lib/dataPartners";
import CustomAccordion from "@/components/CustomAccordion/CustomAccordion";
import ServiceTopBar from "@/components/service/ServiceTopBar";
import React, { useState } from "react";

type ViewContextType = {
  currentView: "list" | "grid";
  setCurrentView: (view: "list" | "grid") => void;
};

export const 
ViewContext = React.createContext<ViewContextType>({
  currentView: "list",
  setCurrentView: () => {},
});

const PartnersLayout = () => {
  const [currentView, setCurrentView] = useState<"list" | "grid">("list");

  return (
    <div className="px-6 py-4">
      <CommonWrapper>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4 mt-4">
          <span>Home</span> &gt; <span>Partners</span>
        </div>
        <hr className="w-full" />

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {/* Sidebar Filter */}
          <aside className="flex flex-col md:w-1/4 space-y-1 border border-gray-300 rounded-sm p-2">
            <h2 className="text-lg font-semibold mb-2">Our Partners</h2>
            <div className="flex flex-col space-y-1 ">
              <NavLink
                to="NVIDIA"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }` 
                }
              >
              NVIDIA
              </NavLink>
              <NavLink
                to="micron"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
               Micron
              </NavLink>
              <NavLink
                to="supermicro"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                
                }
              >
               Supermicro
              </NavLink>
              <NavLink
                to="gigabyte"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
              Gigabyte
              </NavLink>  
               <NavLink
                to="asus"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
          Asus
              </NavLink> 
               <NavLink
                to="intel"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
         Intel
              </NavLink>
               <NavLink
                to="amd"
                className={({ isActive }) =>
                  `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                ${
                  isActive
                    ? "text-white bg-primary-orange font-bold"
                    : "text-white"
                }`
                }
              >
         Amd
              </NavLink>

            </div>
            <hr className="mt-3" />
            <div>
              <CustomAccordion items={PartnersaccordionItems} allowMultiple />
            </div>
          </aside>
          <main className="flex-1">
            <ViewContext.Provider value={{ currentView, setCurrentView }}>
              <ServiceTopBar />
              <Outlet />
            </ViewContext.Provider>
           
          </main>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default PartnersLayout;
