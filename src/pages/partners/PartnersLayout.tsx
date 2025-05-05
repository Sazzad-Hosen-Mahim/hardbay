import { Outlet, NavLink } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";
import CustomAccordion from "@/components/CustomAccordion/CustomAccordion";
import ServiceTopBar from "@/components/service/ServiceTopBar";
import { useState } from "react";
import { PartnersaccordionItems } from "@/lib/dataPartners";
import { ViewContext } from "../Service/ViewContext";

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
              {[
                "NVIDIA",
                "micron",
                "supermicro",
                "gigabyte",
                "asus",
                "intel",
                "amd",
              ].map((partner) => (
                <NavLink
                  key={partner}
                  to={partner}
                  className={({ isActive }) =>
                    `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                    ${
                      isActive
                        ? "text-white bg-primary-orange font-bold"
                        : "text-white"
                    }`
                  }
                >
                  {partner.charAt(0).toUpperCase() + partner.slice(1)}
                </NavLink>
              ))}
            </div>
            <hr className="mt-3" />
            <CustomAccordion
              items={PartnersaccordionItems}
              allowMultiple
              onFilterChange={(filters) => console.log("Filters:", filters)}
              selectedFilters={{}}
            />
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
