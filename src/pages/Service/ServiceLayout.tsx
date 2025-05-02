import { Outlet, NavLink, useLocation } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";
import CustomAccordion from "@/components/CustomAccordion/CustomAccordion";
import ServiceTopBar from "@/components/service/ServiceTopBar";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchService } from "@/store/Slices/ServiceSlice/serviceSlice";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import { Product } from "@/types/ProductInterface";

type ViewContextType = {
  currentView: "list" | "grid";
  setCurrentView: (view: "list" | "grid") => void;
};

export const ViewContext = React.createContext<ViewContextType>({
  currentView: "list",
  setCurrentView: () => {},
});

const ServiceLayout = () => {
  const [currentView, setCurrentView] = useState<"list" | "grid">("list");
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { service, loading, error } = useAppSelector((state) => state.service);
  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchService());
    dispatch(fetchProducts({ page: 1, limit: 10 })); // Fetch products once when the component mounts
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-16 h-screen w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-20">Error: {error}</div>;
  }

  // Check if we're inside a product details page
  const isProductDetailsPage = location.pathname.includes("product-details");

  const ProductFilterAccordion = ({
    productsToFilter,
  }: {
    productsToFilter: Product[];
  }) => {
    const [selectedFilters, setSelectedFilters] = useState<
      Record<string, string[]>
    >({});

    const extractFilterOptions = (products: Product[]) => {
      if (!products || !Array.isArray(products)) {
        return {};
      }

      const filtersMap: Record<string, Set<string>> = {};
      products.forEach((product) => {
        if (!product.filters || !Array.isArray(product.filters)) {
          return;
        }

        product.filters.forEach(
          (filter: { name: string; value: string | number }) => {
            if (!filtersMap[filter.name]) {
              filtersMap[filter.name] = new Set<string>();
            }
            filtersMap[filter.name].add(String(filter.value));
          }
        );
      });

      const finalFilters: Record<string, string[]> = {};
      for (const key in filtersMap) {
        finalFilters[key] = Array.from(filtersMap[key]);
      }

      return finalFilters;
    };

    const allFilterOptions = extractFilterOptions(productsToFilter);

    const items = Object.entries(allFilterOptions).map(([name, values]) => ({
      id: name,
      title: name,
      filters: values,
    }));

    const handleFilterChange = (
      name: string,
      value: string,
      checked: boolean
    ) => {
      setSelectedFilters((prev) => {
        const values = new Set(prev[name] || []);
        if (checked) {
          values.add(value);
        } else {
          values.delete(value);
        }
        return {
          ...prev,
          [name]: Array.from(values),
        };
      });
    };

    return (
      <CustomAccordion
        items={items}
        onFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        allowMultiple
      />
    );
  };

  const getProductsForFilters = () => {
    if (location.pathname.includes("custom-server")) {
      return products.filter((p) => p.service?.title === "Custom Server");
    }
    if (location.pathname.includes("gpu-rental")) {
      return products.filter((p) => p.service?.title === "GPU rental");
    }
    if (location.pathname.includes("enterprise-storage")) {
      return products.filter((p) => p.service?.title === "Enterprise Storage");
    }
    // Add other service routes as needed
    return products; // Default: all products
  };

  return (
    <div className="px-6 py-4">
      <CommonWrapper>
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4 mt-4">
          <span>Home</span> &gt; <span>Services</span>
        </div>
        <hr className="w-full" />

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {/* Sidebar - Hide on ProductDetails */}
          {!isProductDetailsPage && (
            <aside className="flex flex-col md:w-1/4 space-y-1 border border-gray-300 rounded-sm p-2">
              <h2 className="text-lg font-semibold mb-2">Our Services</h2>
              <div className="flex flex-col space-y-1">
                {Array.isArray(service) &&
                  service.map((serviceItem) => {
                    const slug = serviceItem.title
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    return (
                      <NavLink
                        to={slug}
                        key={serviceItem.id}
                        className={({ isActive }) =>
                          `bg-primary-blue py-2 px-4 hover:bg-primary-orange hover:text-white 
                  ${
                    isActive
                      ? "text-white bg-primary-orange font-bold"
                      : "text-white"
                  }`
                        }
                      >
                        {serviceItem.title}
                      </NavLink>
                    );
                  })}
              </div>
              <hr className="mt-3" />
              <div>
                <ProductFilterAccordion
                  productsToFilter={getProductsForFilters()}
                />
              </div>
            </aside>
          )}

          <main className="flex-1">
            <ViewContext.Provider value={{ currentView, setCurrentView }}>
              {/* ServiceTopBar - Hide on ProductDetails */}
              {!isProductDetailsPage && <ServiceTopBar />}
              <Outlet />
            </ViewContext.Provider>
          </main>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ServiceLayout;
