import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";
import CustomAccordion from "@/components/CustomAccordion/CustomAccordion";
import ServiceTopBar from "@/components/service/ServiceTopBar";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchService } from "@/store/Slices/ServiceSlice/serviceSlice";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import { Product } from "@/types/ProductInterface";
import { ViewContext } from "./ViewContext";
import { fetchFilteredProducts } from "@/store/Slices/ProductSlice/dynamicProductSlice";

const ProductFilterAccordion = React.memo(
  ({ productsToFilter }: { productsToFilter: Product[] }) => {
    const [selectedFilters, setSelectedFilters] = useState<
      Record<string, string[]>
    >({});
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    // Initialize filters from URL on component mount
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const initialFilters: Record<string, string[]> = {};

      // Get all unique parameter names from URL
      const paramNames = Array.from(new Set(searchParams.keys()));

      paramNames.forEach((key) => {
        const values = searchParams.getAll(key);
        if (values.length > 0) {
          initialFilters[key] = values;
        }
      });

      setSelectedFilters(initialFilters);
    }, [location.search]);

    // Update URL and fetch filtered products when filters change
    useEffect(() => {
      const handler = setTimeout(() => {
        const searchParams = new URLSearchParams();

        // Add all selected filters to URL (using multiple params for same key)
        for (const key in selectedFilters) {
          selectedFilters[key].forEach((value) => {
            searchParams.append(key, value);
          });
        }

        // Update URL without page reload
        navigate(`?${searchParams.toString()}`, { replace: true });

        // Dispatch the action with the raw filter object
        dispatch(
          fetchFilteredProducts(
            Object.fromEntries(
              Object.entries(selectedFilters).map(([key, value]) => [
                key,
                value,
              ])
            )
          )
        );
      }, 500);

      return () => clearTimeout(handler);
    }, [dispatch, selectedFilters, navigate]);

    // Rest of your component remains the same...
    const extractFilterOptions = useMemo(() => {
      const filtersMap: Record<string, Set<string>> = {};

      productsToFilter?.forEach((product) => {
        product.filters?.forEach(({ name, value }) => {
          if (!filtersMap[name]) {
            filtersMap[name] = new Set();
          }
          filtersMap[name].add(String(value));
        });
      });

      const finalFilters: Record<string, string[]> = {};
      for (const key in filtersMap) {
        finalFilters[key] = Array.from(filtersMap[key]);
      }

      return finalFilters;
    }, [productsToFilter]);

    const items = Object.entries(extractFilterOptions).map(
      ([name, values]) => ({
        id: name,
        title: name,
        filters: values,
      })
    );

    const handleFilterChange = (
      name: string,
      value: string,
      checked: boolean
    ) => {
      setSelectedFilters((prev) => {
        const values = new Set(prev[name] || []);
        if (checked) values.add(value);
        else values.delete(value);

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
  }
);

const ServiceLayout = () => {
  const [currentView, setCurrentView] = useState<"list" | "grid">("list");
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { service, loading, error } = useAppSelector((state) => state.service);
  const { products } = useAppSelector((state) => state.product);
  const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);

  console.log(filteredProducts, "Filtered Products");

  useEffect(() => {
    dispatch(fetchService());
    dispatch(fetchProducts({ page: 1, limit: 10 })); // Fetch products once when the component mounts
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-16 h-screen w-full flex items-center justify-center">
             <svg
        className="animate-spin h-10 w-10 text-primary-orange"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a1 1 0 011 1v1.07a7.967 7.967 0 013.39.99l.76-.76a1 1 0 011.41 1.41l-.76.76c.63 1.02.99 2.2.99 3.39H21a1 1 0 110 2h-1.07a7.967 7.967 0 01-.99 3.39l.76.76a1 1 0 11-1.41 1.41l-.76-.76a7.967 7.967 0 01-3.39.99V21a1 1 0 11-2 0v-1.07a7.967 7.967 0 01-3.39-.99l-.76.76a1 1 0 01-1.41-1.41l.76-.76a7.967 7.967 0 01-.99-3.39H3a1 1 0 110-2h1.07a7.967 7.967 0 01.99-3.39l-.76-.76a1 1 0 011.41-1.41l.76.76a7.967 7.967 0 013.39-.99V3a1 1 0 011-1zm0 6a4 4 0 100 8 4 4 0 000-8z" />
      </svg>

      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-20">Error: {error}</div>;
  }

  // Check if we're inside a product details page
  const isProductDetailsPage = location.pathname.includes("product-details");

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
                      <button
                        onClick={() => {
                          const path = `/service/${slug}`;
                          window.location.href = path;
                        }}
                        key={serviceItem.id}
                        className={`bg-primary-blue py-2 text-white text-start px-4 hover:bg-primary-orange hover:text-black`}
                      >
                        {serviceItem.title}
                      </button>
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
