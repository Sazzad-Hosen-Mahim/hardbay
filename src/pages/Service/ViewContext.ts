import { createContext } from "react";

export type ViewContextType = {
  currentView: "list" | "grid";
  setCurrentView: (view: "list" | "grid") => void;
};

export const ViewContext = createContext<ViewContextType>({
  currentView: "list",
  setCurrentView: () => {},
});