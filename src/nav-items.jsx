import { Home, Info, Briefcase, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/#about",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Services",
    to: "/#services",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];
