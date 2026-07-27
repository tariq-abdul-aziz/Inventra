import React from "react";
import { useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

const pageTitles = {
  "/": "Dashboard",
  "/products": "Products Overview",
  "/categories": "Categories",
  "/inventory": "Inventory Status",
  "/stock-in": "Stock In Records",
  "/stock-out": "Stock Out Records",
  "/reports": "Reports & Analytics",
  "/settings": "Settings",
};

const Header = () => {
  const location = useLocation();
  const { user } = useAuth();

  // Get current title or fallback to standard path format
  const title = pageTitles[location.pathname] || "Inventra";
  const subtitle = user ? `Good Day, ${user.name}` : "Welcome back";

  return (
    <div>
      <header className="flex flex-col flex-wrap">
        <h2 className="text-xl sm:text-base md:text-lg font-bold">{title}</h2>
        <h1 className="text-sm text-gray-400">{subtitle}</h1>
      </header>
    </div>
  )
}
