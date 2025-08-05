import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Menu, X, ChevronRight } from "lucide-react";
import DashboardHeader from "../components/DashboardHeader";
import ProductForm from "../components/ProductForm";
import Calculator from "../components/Calculator";

interface User {
  id: string;
  username: string;
  email: string;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard" },
  { id: "primary", label: "Primary", path: "/dashboard/primary" },
  { id: "enquiries", label: "Enquiries", path: "/dashboard/enquiries" },
  { id: "quotations", label: "Quotations", path: "/dashboard/quotations" },
  { id: "sales", label: "Sales", path: "/dashboard/sales" },
  { id: "purchase", label: "Purchase", path: "/dashboard/purchase" },
  { id: "journal", label: "Journal", path: "/dashboard/journal" },
  { id: "reports", label: "Reports", path: "/dashboard/reports" },
  { id: "sales-ledger", label: "Sales Ledger", path: "/dashboard/sales-ledger" },
  { id: "purchase-ledger", label: "Purchase Ledger", path: "/dashboard/purchase-ledger" },
  { id: "management", label: "Management", path: "/dashboard/management" },
  { id: "banks", label: "Banks", path: "/dashboard/banks" },
  { id: "contra-entry", label: "Contra Entry", path: "/dashboard/contra-entry" },
  { id: "products", label: "Products", path: "/dashboard/products" },
  { id: "assemblies", label: "Assemblies", path: "/dashboard/assemblies" },
  { id: "adjustments", label: "Adjustments", path: "/dashboard/adjustments" },
  { id: "clients", label: "Clients", path: "/dashboard/clients" },
  { id: "suppliers", label: "Suppliers", path: "/dashboard/suppliers" },
  { id: "users", label: "Users", path: "/dashboard/users" },
  { id: "extras", label: "Extras", path: "/dashboard/extras" },
  { id: "estimate-approvals", label: "Estimate/Approvals", path: "/dashboard/estimate-approvals" },
  { id: "secondary-purchase", label: "Secondary Purchase", path: "/dashboard/secondary-purchase" },
  { id: "estimate-approvals-items", label: "Estimate/Approvals Items", path: "/dashboard/estimate-approvals-items" }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showProductForm, setShowProductForm] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/");
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleMenuClick = (itemId: string) => {
    setActiveSection(itemId);
    setSidebarOpen(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:z-auto`}>
        {/* Logo Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F54f8588728e94fb0b8646e3f37922df0%2Fd7768f3705f94b159a78994f71c5676e?format=webp&width=800"
            alt="AMMAR Logo"
            className="h-12 object-contain"
          />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-4 space-y-1">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Info & Logout */}
        <div className="border-t p-4">
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-900">{user.username}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Dashboard Header */}
        <DashboardHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onShowProductForm={() => setShowProductForm(true)}
          onShowClientForm={() => alert("Client form - Coming Soon")}
          onShowSupplierForm={() => alert("Supplier form - Coming Soon")}
          onShowCalculator={() => setShowCalculator(true)}
        />

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === "products" ? (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Products Management</h3>
                  <p className="text-gray-600">
                    Manage your product inventory, categories, and pricing. Click "Add Product" to create new products.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 capitalize">
                  {activeTab}
                </h2>
                <p className="text-gray-600 mb-6">
                  This section is under development. The content for this module will be implemented based on your specific business requirements.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                  <span className="text-sm">Coming Soon</span>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      <ProductForm
        isOpen={showProductForm}
        onClose={() => setShowProductForm(false)}
        onSuccess={() => {
          alert("Product created successfully!");
          setShowProductForm(false);
        }}
      />

      <Calculator
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </div>
  );
}
