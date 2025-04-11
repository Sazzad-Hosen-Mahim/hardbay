import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface CustomAccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

const CustomAccordion = ({
  items,
  allowMultiple = false,
}: CustomAccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev[0] === id ? [] : [id]));
    }
  };

  return (
    <div className="w-full space-y-2">
      {items.map(({ id, title, content }) => {
        const isOpen = openItems.includes(id);
        return (
          <div
            key={id}
            className="border rounded-none bg-white shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleItem(id)}
              className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-50"
            >
              {title}
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaPlus />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden px-4"
                >
                  <div className="py-3 text-gray-600">{content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
