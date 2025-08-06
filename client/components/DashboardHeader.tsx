import { useState } from "react";
import { Plus, Menu } from "lucide-react";
import FinancialYearPicker from "./FinancialYearPicker";

interface DashboardHeaderProps {
  onTabChange: (tab: string) => void;
  onShowProductForm: () => void;
  onShowClientForm: () => void;
  onShowSupplierForm: () => void;
  onShowCalculator: () => void;
  onToggleSidebar: () => void;
  activeTab: string;
}

export default function DashboardHeader({
  onTabChange,
  onShowProductForm,
  onShowClientForm,
  onShowSupplierForm,
  onShowCalculator,
  onToggleSidebar,
  activeTab
}: DashboardHeaderProps) {
  const [selectedFinancialYear, setSelectedFinancialYear] = useState("2025-2026");

  const tabs = [
    { id: "products", label: "Products", onClick: () => onTabChange("products") },
    { id: "client", label: "Client", onClick: onShowClientForm },
    { id: "supplier", label: "Supplier", onClick: onShowSupplierForm },
    { id: "calculator", label: "Calculator", onClick: onShowCalculator }
  ];

  return (
    <div className="bg-white border-b shadow-sm">
      {/* Top section with tabs */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <div className="flex items-center space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={tab.onClick}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          {/* Online status indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Ammar</span>
            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center border">
              <span className="text-sm font-medium text-gray-700">A</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with dashboard and actions */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            title="Toggle Menu"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>

          {/* Add buttons - show appropriate button based on active tab */}
          {activeTab === "products" && (
            <button
              onClick={onShowProductForm}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add Product
            </button>
          )}

          {activeTab === "client" && (
            <button
              onClick={onShowClientForm}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add Client
            </button>
          )}

          {activeTab === "supplier" && (
            <button
              onClick={onShowSupplierForm}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add Supplier
            </button>
          )}
        </div>

        {/* Financial Year Picker */}
        <FinancialYearPicker
          selectedYear={selectedFinancialYear}
          onYearChange={setSelectedFinancialYear}
        />
      </div>
    </div>
  );
}
