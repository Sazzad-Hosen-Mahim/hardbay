export const buildAccordionItems = (services) => {
  console.log(services, "services in buildAccordionItems");
  const filterMap: Record<string, Set<string>> = {};

  services.forEach((service) => {
    console.log(service);
    // Assuming each service has products with `filters`
  });

  // Convert Set to array and map to AccordionItem[]
  //   const accordionItems = Object.entries(filterMap).map(([name, values]) => ({
  //     id: name,
  //     title: name,
  //     filters: Array.from(values),
  //   }));

  //   return accordionItems;
};
