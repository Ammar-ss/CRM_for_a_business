// Application Constants

// Company Information
export const COMPANY_INFO = {
  name: "AMMAR Industrial Corporation",
  logo: "https://cdn.builder.io/api/v1/image/assets%2F54f8588728e94fb0b8646e3f37922df0%2Fd7768f3705f94b159a78994f71c5676e?format=webp&width=800",
  heroImage: "https://cdn.builder.io/api/v1/image/assets%2F54f8588728e94fb0b8646e3f37922df0%2F18131d2f53ad4e7780e2c0e6abcabfe9?format=webp&width=800",
  defaultUser: {
    username: "admin",
    password: "123"
  }
};

// Payment Methods
export const PAYMENT_METHODS = [
  { value: "cash", label: "Cash" },
  { value: "cheque", label: "Cheque" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "online", label: "Online Payment" },
  { value: "upi", label: "UPI" },
  { value: "card", label: "Credit/Debit Card" },
  { value: "other", label: "Other" }
] as const;

// Order Status Options
export const ORDER_STATUS_OPTIONS = [
  { value: "pending", label: "Pending", color: "yellow" },
  { value: "confirmed", label: "Confirmed", color: "blue" },
  { value: "processing", label: "Processing", color: "purple" },
  { value: "completed", label: "Completed", color: "green" },
  { value: "cancelled", label: "Cancelled", color: "red" }
] as const;

// Payment Status Options
export const PAYMENT_STATUS_OPTIONS = [
  { value: "completed", label: "Completed", color: "green" },
  { value: "pending", label: "Pending", color: "yellow" },
  { value: "failed", label: "Failed", color: "red" },
  { value: "cancelled", label: "Cancelled", color: "gray" }
] as const;

// Product Categories
export const PRODUCT_CATEGORIES = [
  "Industrial Valves",
  "Pipes & Fittings",
  "Pumps & Motors",
  "Electrical Components",
  "Safety Equipment",
  "Tools & Hardware",
  "Raw Materials",
  "Spare Parts"
] as const;

// Client/Supplier Types
export const BUSINESS_TYPES = [
  "Manufacturing Company",
  "Trading Company", 
  "Retail Business",
  "Service Provider",
  "Government Entity",
  "Individual",
  "Other"
] as const;

// Financial Year Options
export const FINANCIAL_YEARS = [
  "2023-2024",
  "2024-2025", 
  "2025-2026",
  "2026-2027"
] as const;

// Currency
export const CURRENCY = {
  symbol: "₹",
  code: "INR",
  name: "Indian Rupee"
} as const;

// Navigation Menu Structure
export const MENU_SECTIONS = [
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
] as const;

// Sample Data for SME
export const SAMPLE_PRODUCTS = [
  {
    id: "PROD-001",
    name: "Industrial Ball Valve 2 inch",
    category: "Industrial Valves",
    sku: "IBV-200-SS",
    price: 2850,
    stock: 45,
    unit: "pieces",
    supplier: "Valve Tech Industries",
    description: "Stainless steel ball valve with 2-inch diameter, suitable for high-pressure applications"
  },
  {
    id: "PROD-002", 
    name: "PVC Pipe 4 inch x 6 meter",
    category: "Pipes & Fittings",
    sku: "PVC-400-6M",
    price: 1250,
    stock: 120,
    unit: "pieces",
    supplier: "Pipe Solutions Ltd",
    description: "High-grade PVC pipe for industrial plumbing and drainage systems"
  },
  {
    id: "PROD-003",
    name: "Electric Centrifugal Pump 5HP",
    category: "Pumps & Motors", 
    sku: "ECP-5HP-SS",
    price: 18500,
    stock: 8,
    unit: "pieces",
    supplier: "Motor Works Co",
    description: "5HP centrifugal pump with stainless steel impeller for industrial applications"
  },
  {
    id: "PROD-004",
    name: "Safety Helmet with Chin Strap",
    category: "Safety Equipment",
    sku: "SH-CS-WHT",
    price: 485,
    stock: 200,
    unit: "pieces", 
    supplier: "Safety First Supplies",
    description: "ANSI approved safety helmet with adjustable chin strap in white color"
  },
  {
    id: "PROD-005",
    name: "Galvanized Steel Pipe 2 inch",
    category: "Pipes & Fittings",
    sku: "GSP-200-3M",
    price: 850,
    stock: 75,
    unit: "pieces",
    supplier: "Steel Pipe Corp",
    description: "Galvanized steel pipe 2-inch diameter, 3-meter length for industrial use"
  }
] as const;

export const SAMPLE_CLIENTS = [
  {
    id: "CLI-001",
    name: "ABC Manufacturing Ltd",
    contactPerson: "Rajesh Kumar",
    email: "rajesh@abcmfg.com",
    phone: "+91-9876543210",
    address: "Plot 15, Industrial Area, Phase-II, Gurgaon, Haryana 122001",
    businessType: "Manufacturing Company",
    gstNumber: "06AABCA1234C1Z5",
    creditLimit: 500000,
    outstandingAmount: 125000
  },
  {
    id: "CLI-002", 
    name: "XYZ Engineering Works",
    contactPerson: "Priya Sharma",
    email: "priya@xyzeng.com",
    phone: "+91-9988776655",
    address: "B-42, Sector 63, Noida, Uttar Pradesh 201307",
    businessType: "Service Provider",
    gstNumber: "09AABCX5678E1Z9",
    creditLimit: 300000,
    outstandingAmount: 75000
  },
  {
    id: "CLI-003",
    name: "PQR Construction Co",
    contactPerson: "Amit Patel",
    email: "amit@pqrconstruction.com", 
    phone: "+91-8877665544",
    address: "12/A, Commercial Complex, Vastrapur, Ahmedabad, Gujarat 380015",
    businessType: "Trading Company",
    gstNumber: "24AABCP9876F2Z1",
    creditLimit: 750000,
    outstandingAmount: 245000
  }
] as const;

export const SAMPLE_SUPPLIERS = [
  {
    id: "SUP-001",
    name: "Valve Tech Industries",
    contactPerson: "Suresh Gupta",
    email: "suresh@valvetech.in",
    phone: "+91-9123456789",
    address: "Industrial Plot 25, Udyog Vihar, Gurgaon, Haryana 122016",
    businessType: "Manufacturing Company",
    gstNumber: "06AABCV1111A1Z5",
    products: ["Industrial Valves", "Pipe Fittings"]
  },
  {
    id: "SUP-002",
    name: "Steel Pipe Corporation",
    contactPerson: "Manoj Singh",
    email: "manoj@steelpipe.co.in",
    phone: "+91-9876512345",
    address: "Steel Market, Sector 18, Faridabad, Haryana 121002",
    businessType: "Trading Company", 
    gstNumber: "06AABCS2222B1Z5",
    products: ["Pipes & Fittings", "Raw Materials"]
  },
  {
    id: "SUP-003",
    name: "Safety First Supplies",
    contactPerson: "Deepika Jain",
    email: "deepika@safetyfirst.in",
    phone: "+91-9988112233",
    address: "Safety Equipment Hub, Industrial Area, Ludhiana, Punjab 141003",
    businessType: "Trading Company",
    gstNumber: "03AABCS3333C1Z5",
    products: ["Safety Equipment", "Tools & Hardware"]
  }
] as const;

// Default form field configurations
export const DEFAULT_FORM_CONFIG = {
  product: {
    category: PRODUCT_CATEGORIES[0],
    unit: "pieces",
    price: 0,
    stock: 0
  },
  order: {
    status: ORDER_STATUS_OPTIONS[0].value,
    quantity: 1,
    unitPrice: 0
  },
  payment: {
    type: "received",
    method: PAYMENT_METHODS[0].value,
    status: PAYMENT_STATUS_OPTIONS[0].value
  }
} as const;
