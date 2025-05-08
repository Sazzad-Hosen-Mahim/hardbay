interface Service {
  products: Product[];
}

interface Product {
  filters: Record<string, string>;
}

interface AccordionItem {
  id: string;
  title: string;
  filters: string[];
}

export const buildAccordionItems = (services: Service[]): AccordionItem[] => {
  console.log(services, "services in buildAccordionItems");
  const filterMap: Record<string, Set<string>> = {};

  services.forEach((service: Service) => {
    console.log(service);
    // Assuming each service has products with `filters`
  });

  // Convert Set to array and map to AccordionItem[]
  const accordionItems: AccordionItem[] = Object.entries(filterMap).map(
    ([name, values]) => ({
      id: name,
      title: name,
      filters: Array.from(values),
    })
  );

  return accordionItems;
};
