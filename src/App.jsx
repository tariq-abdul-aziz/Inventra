import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

// Page Components
import Dashboard from "./page/Dashboard";
import Products from "./page/Products";
import Categories from "./page/Categories";
import Inventory from "./page/Inventory";
import StockIn from "./page/StockIn";
import StockOut from "./page/StockOut";
import Reports from "./page/Reports";
import Settings from "./page/Settings";
import Login from "./page/Login";

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-[#0D1931] text-amber-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard Layout Wrap */}
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="stock-in" element={<StockIn />} />
            <Route path="stock-out" element={<StockOut />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Fallback Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
