import { useState } from "react";
import { Calendar, ChevronDown, Plus } from "lucide-react";

interface DashboardHeaderProps {
  onTabChange: (tab: string) => void;
  onShowProductForm: () => void;
  onShowClientForm: () => void;
  onShowSupplierForm: () => void;
  onShowCalculator: () => void;
  activeTab: string;
}

export default function DashboardHeader({ 
  onTabChange, 
  onShowProductForm, 
  onShowClientForm, 
  onShowSupplierForm, 
  onShowCalculator,
  activeTab 
}: DashboardHeaderProps) {
  const [dateRange, setDateRange] = useState("Apr 1, 2024 - Mar 31, 2026");

  const tabs = [
    { id: "products", label: "Products", onClick: () => onTabChange("products") },
    { id: "client", label: "Client", onClick: onShowClientForm },
    { id: "supplier", label: "Supplier", onClick: onShowSupplierForm },
    { id: "calculator", label: "Calculator", onClick: onShowCalculator }
  ];

  return (
    <div className="bg-white border-b">
      {/* Top section with tabs */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={tab.onClick}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Online status indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Ammar</span>
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-green-700">A</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with dashboard and actions */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          
          {/* Add Product button - only show when on products tab */}
          {activeTab === "products" && (
            <button
              onClick={onShowProductForm}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              Add Product
            </button>
          )}
        </div>

        {/* Date range picker */}
        <div className="flex items-center space-x-2 bg-white border rounded-lg px-3 py-2">
          <Calendar size={16} className="text-gray-500" />
          <button className="flex items-center space-x-2 text-sm text-gray-700">
            <span>{dateRange}</span>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
