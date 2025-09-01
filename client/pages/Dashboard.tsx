import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import DashboardHeader from "../components/DashboardHeader";
import ProductForm from "../components/ProductForm";
import ClientForm from "../components/ClientForm";
import SupplierForm from "../components/SupplierForm";
import OrderForm from "../components/OrderForm";
import PaymentForm from "../components/PaymentForm";
import Calculator from "../components/Calculator";
import DashboardOverview from "../components/pages/DashboardOverview";
import { SalesOrderPage, ProformaInvoicePage, SalesInvoicePage, ReceiptPage, PaymentFollowupPage, CreditNotePage } from "../components/pages/SalesPages";
import { MaterialsReceivedPage, PurchaseOrderPage, PurchaseInvoicePage, PaymentsPage, DebitNotePage } from "../components/pages/PurchasePages";
import { EnquiriesPage, QuotationsPage, ROPPage, JournalPage, BanksPage, UsersPage, GenericPage } from "../components/pages/OtherPages";

interface User {
  id: string;
  username: string;
  email: string;
}

const menuSections = [
  {
    heading: "Dashboard",
    items: [
      { id: "dashboard", label: "Dashboard", path: "/dashboard" }
    ]
  },
  {
    heading: "Primary",
    items: [
      { id: "enquiries", label: "Enquiries", path: "/dashboard/enquiries" },
      { id: "quotations", label: "Quotations", path: "/dashboard/quotations" },
      {
        id: "sales",
        label: "Sales",
        path: "/dashboard/sales",
        hasSubmenu: true,
        submenu: [
          { id: "sales-order", label: "Sales Order", path: "/dashboard/sales/orders" },
          { id: "proforma-invoice", label: "Proforma Invoice", path: "/dashboard/sales/proforma" },
          { id: "sales-invoice", label: "Sales Invoice", path: "/dashboard/sales/invoice" },
          { id: "receipt", label: "Receipt", path: "/dashboard/sales/receipt" },
          { id: "payment-followup", label: "Payment Follow up", path: "/dashboard/sales/followup" },
          { id: "credit-note", label: "Credit Note", path: "/dashboard/sales/credit-note" }
        ]
      },
      {
        id: "purchase",
        label: "Purchase",
        path: "/dashboard/purchase",
        hasSubmenu: true,
        submenu: [
          { id: "materials-received", label: "Materials Received", path: "/dashboard/purchase/materials" },
          { id: "purchase-order", label: "Purchase Order", path: "/dashboard/purchase/orders" },
          { id: "purchase-invoice", label: "Purchase Invoice", path: "/dashboard/purchase/invoice" },
          { id: "payments", label: "Payments", path: "/dashboard/purchase/payments" },
          { id: "debit-note", label: "Debit Note", path: "/dashboard/purchase/debit-note" }
        ]
      },
      { id: "journal", label: "Journal", path: "/dashboard/journal" }
    ]
  },
  {
    heading: "Reports",
    items: [
      { id: "sales-ledger", label: "Sales Ledger", path: "/dashboard/sales-ledger" },
      { id: "purchase-ledger", label: "Purchase Ledger", path: "/dashboard/purchase-ledger" }
    ]
  },
  {
    heading: "Management",
    items: [
      { id: "banks", label: "Banks", path: "/dashboard/banks" },
      { id: "contra-entry", label: "Contra Entry", path: "/dashboard/contra-entry" },
      {
        id: "products",
        label: "Products",
        path: "/dashboard/products",
        hasSubmenu: true,
        submenu: [
          { id: "product-list", label: "Product", path: "/dashboard/products/list" },
          { id: "rop", label: "ROP", path: "/dashboard/products/rop" }
        ]
      },
      { id: "assemblies", label: "Assemblies", path: "/dashboard/assemblies" },
      { id: "adjustments", label: "Adjustments", path: "/dashboard/adjustments" },
      { id: "clients", label: "Clients", path: "/dashboard/clients" },
      { id: "suppliers", label: "Suppliers", path: "/dashboard/suppliers" },
      { id: "users", label: "Users", path: "/dashboard/users" }
    ]
  },
  {
    heading: "Extras",
    items: [
      { id: "estimate-approvals", label: "Estimate/Approvals", path: "/dashboard/estimate-approvals" },
      { id: "secondary-purchase", label: "Secondary Purchase", path: "/dashboard/secondary-purchase" },
      { id: "estimate-approvals-items", label: "Estimate/Approvals Items", path: "/dashboard/estimate-approvals-items" }
    ]
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showProductForm, setShowProductForm] = useState(false);
  const [showClientForm, setShowClientForm] = useState(false);
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [activeTab, setActiveTab] = useState("products");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

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

  const handleMenuClick = (itemId: string, hasSubmenu?: boolean) => {
    if (hasSubmenu) {
      setExpandedMenus(prev =>
        prev.includes(itemId)
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      setActiveSection(itemId);
      setSidebarOpen(false);
    }
  };

  const renderPageContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <DashboardOverview
            onShowProductForm={() => setShowProductForm(true)}
            onShowClientForm={() => setShowClientForm(true)}
            onShowOrderForm={() => setShowOrderForm(true)}
            onShowPaymentForm={() => setShowPaymentForm(true)}
          />
        );

      // Primary Section
      case "enquiries":
        return <EnquiriesPage />;
      case "quotations":
        return <QuotationsPage />;

      // Sales Submenu
      case "sales-order":
        return <SalesOrderPage />;
      case "proforma-invoice":
        return <ProformaInvoicePage />;
      case "sales-invoice":
        return <SalesInvoicePage />;
      case "receipt":
        return <ReceiptPage />;
      case "payment-followup":
        return <PaymentFollowupPage />;
      case "credit-note":
        return <CreditNotePage />;

      // Purchase Submenu
      case "materials-received":
        return <MaterialsReceivedPage />;
      case "purchase-order":
        return <PurchaseOrderPage />;
      case "purchase-invoice":
        return <PurchaseInvoicePage />;
      case "payments":
        return <PaymentsPage />;
      case "debit-note":
        return <DebitNotePage />;

      case "journal":
        return <JournalPage />;

      // Reports
      case "sales-ledger":
        return <GenericPage title="Sales Ledger" description="Customer account statements and sales reports" />;
      case "purchase-ledger":
        return <GenericPage title="Purchase Ledger" description="Supplier account statements and purchase reports" />;

      // Management
      case "banks":
        return <BanksPage />;
      case "contra-entry":
        return <GenericPage title="Contra Entry" description="Manage contra journal entries for fund transfers" />;
      case "product-list":
        return activeTab === "products" ? (
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Products Management</h3>
              <p className="text-gray-600 mb-6">
                Manage your product inventory, categories, and pricing. Click "Add Product" to create new products.
              </p>
              <div className="text-center py-8">
                <p className="text-gray-500">Product list will be displayed here with existing products</p>
              </div>
            </div>
          </div>
        ) : <GenericPage title="Products" description="Manage product inventory and information" />;
      case "rop":
        return <ROPPage />;
      case "assemblies":
        return <GenericPage title="Assemblies" description="Manage product assemblies and bill of materials" />;
      case "adjustments":
        return <GenericPage title="Adjustments" description="Record inventory adjustments and stock corrections" />;
      case "clients":
        return <GenericPage title="Clients" description="Manage customer information and relationships" />;
      case "suppliers":
        return <GenericPage title="Suppliers" description="Manage supplier information and relationships" />;
      case "users":
        return <UsersPage />;

      // Extras
      case "estimate-approvals":
        return <GenericPage title="Estimate/Approvals" description="Manage estimates and approval workflows" />;
      case "secondary-purchase":
        return <GenericPage title="Secondary Purchase" description="Handle secondary purchase transactions" />;
      case "estimate-approvals-items":
        return <GenericPage title="Estimate/Approvals Items" description="Manage items in estimates and approvals" />;

      default:
        return <DashboardOverview />;
    }
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
      <div className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 flex flex-col ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
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
        <nav className="flex-1 overflow-y-auto min-h-0">
          <div className="p-4">
            {menuSections.map((section, sectionIndex) => (
              <div key={section.heading} className={sectionIndex > 0 ? "mt-6" : ""}>
                {/* Section Heading */}
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {section.heading}
                </h3>

                {/* Section Items */}
                <ul className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <div>
                        <button
                          onClick={() => handleMenuClick(item.id, item.hasSubmenu)}
                          className={`w-full flex items-center justify-between px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                            activeSection === item.id && !item.hasSubmenu
                              ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span>{item.label}</span>
                          {item.hasSubmenu ? (
                            <ChevronDown
                              size={16}
                              className={`text-gray-400 transition-transform ${
                                expandedMenus.includes(item.id) ? 'rotate-180' : ''
                              }`}
                            />
                          ) : (
                            <ChevronRight size={16} className="text-gray-400" />
                          )}
                        </button>

                        {/* Submenu */}
                        {item.hasSubmenu && expandedMenus.includes(item.id) && (
                          <ul className="mt-1 ml-4 space-y-1">
                            {item.submenu?.map((subItem) => (
                              <li key={subItem.id}>
                                <button
                                  onClick={() => handleMenuClick(subItem.id)}
                                  className={`w-full flex items-center justify-between px-4 py-2 text-left text-sm rounded-lg transition-colors ${
                                    activeSection === subItem.id
                                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                                      : "text-gray-600 hover:bg-gray-50"
                                  }`}
                                >
                                  <span className="text-xs">{subItem.label}</span>
                                  <ChevronRight size={14} className="text-gray-400" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* User Info & Logout */}
        <div className="border-t p-4 flex-shrink-0 bg-white">
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
      <div className="w-full">
        {/* Dashboard Header */}
        <DashboardHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onShowProductForm={() => setShowProductForm(true)}
          onShowClientForm={() => setShowClientForm(true)}
          onShowSupplierForm={() => setShowSupplierForm(true)}
          onShowCalculator={() => setShowCalculator(true)}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Page Content */}
        <main className="p-6">
          {renderPageContent()}
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

      <ClientForm
        isOpen={showClientForm}
        onClose={() => setShowClientForm(false)}
        onSuccess={() => {
          alert("Client created successfully!");
          setShowClientForm(false);
        }}
      />

      <SupplierForm
        isOpen={showSupplierForm}
        onClose={() => setShowSupplierForm(false)}
        onSuccess={() => {
          alert("Supplier created successfully!");
          setShowSupplierForm(false);
        }}
      />

      <OrderForm
        isOpen={showOrderForm}
        onClose={() => setShowOrderForm(false)}
        onSuccess={() => {
          alert("Sales order created successfully!");
          setShowOrderForm(false);
        }}
      />

      <PaymentForm
        isOpen={showPaymentForm}
        onClose={() => setShowPaymentForm(false)}
        onSuccess={() => {
          alert("Payment recorded successfully!");
          setShowPaymentForm(false);
        }}
      />

      <Calculator
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </div>
  );
}
