// Comprehensive Sample Data for SME Application

import { formatCurrency, generateOrderNumber } from "./helpers";

// Sample Orders Data
export const SAMPLE_ORDERS = [
  {
    id: "ORD-001",
    orderNumber: "SO-2024-1247",
    clientName: "ABC Manufacturing Ltd",
    clientContact: "rajesh@abcmfg.com",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-25",
    products: [
      {
        name: "Industrial Ball Valve 2 inch",
        quantity: 15,
        unitPrice: 2850,
        total: 42750,
      },
      {
        name: "Safety Helmet with Chin Strap",
        quantity: 50,
        unitPrice: 485,
        total: 24250,
      },
    ],
    totalAmount: 67000,
    status: "confirmed" as const,
    notes: "Urgent delivery required for ongoing project",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "ORD-002",
    orderNumber: "SO-2024-1248",
    clientName: "XYZ Engineering Works",
    clientContact: "priya@xyzeng.com",
    orderDate: "2024-01-16",
    deliveryDate: "2024-01-30",
    products: [
      {
        name: "Electric Centrifugal Pump 5HP",
        quantity: 2,
        unitPrice: 18500,
        total: 37000,
      },
      {
        name: "PVC Pipe 4 inch x 6 meter",
        quantity: 20,
        unitPrice: 1250,
        total: 25000,
      },
    ],
    totalAmount: 62000,
    status: "processing" as const,
    notes: "Installation support required",
    createdAt: "2024-01-16T14:15:00Z",
  },
  {
    id: "ORD-003",
    orderNumber: "SO-2024-1249",
    clientName: "PQR Construction Co",
    clientContact: "amit@pqrconstruction.com",
    orderDate: "2024-01-17",
    deliveryDate: "2024-02-05",
    products: [
      {
        name: "Galvanized Steel Pipe 2 inch",
        quantity: 100,
        unitPrice: 850,
        total: 85000,
      },
      {
        name: "Industrial Ball Valve 2 inch",
        quantity: 25,
        unitPrice: 2850,
        total: 71250,
      },
    ],
    totalAmount: 156250,
    status: "pending" as const,
    notes: "Bulk order for construction project",
    createdAt: "2024-01-17T09:20:00Z",
  },
];

// Sample Payments Data
export const SAMPLE_PAYMENTS = [
  {
    id: "PAY-001",
    paymentNumber: "PAY-2024-0156",
    paymentType: "received" as const,
    clientName: "ABC Manufacturing Ltd",
    amount: 67000,
    paymentDate: "2024-01-18",
    paymentMethod: "bank_transfer" as const,
    referenceNumber: "TXN123456789",
    description: "Payment for Sales Order SO-2024-1247",
    invoiceNumber: "INV-2024-0789",
    status: "completed" as const,
    createdAt: "2024-01-18T11:45:00Z",
  },
  {
    id: "PAY-002",
    paymentNumber: "PAY-2024-0157",
    paymentType: "received" as const,
    clientName: "XYZ Engineering Works",
    amount: 31000,
    paymentDate: "2024-01-19",
    paymentMethod: "upi" as const,
    referenceNumber: "UPI789654123",
    description: "Partial payment for SO-2024-1248",
    invoiceNumber: "INV-2024-0790",
    status: "completed" as const,
    createdAt: "2024-01-19T16:30:00Z",
  },
  {
    id: "PAY-003",
    paymentNumber: "PAY-2024-0158",
    paymentType: "paid" as const,
    clientName: "Valve Tech Industries",
    amount: 125000,
    paymentDate: "2024-01-20",
    paymentMethod: "cheque" as const,
    referenceNumber: "CHQ456789123",
    description: "Payment for Purchase Order PO-2024-089",
    invoiceNumber: "PO-2024-089",
    status: "completed" as const,
    createdAt: "2024-01-20T10:15:00Z",
  },
];

// Sample Invoices Data
export const SAMPLE_INVOICES = [
  {
    id: "INV-001",
    invoiceNumber: "INV-2024-0789",
    orderNumber: "SO-2024-1247",
    clientName: "ABC Manufacturing Ltd",
    clientAddress:
      "Plot 15, Industrial Area, Phase-II, Gurgaon, Haryana 122001",
    invoiceDate: "2024-01-15",
    dueDate: "2024-02-14",
    products: [
      {
        name: "Industrial Ball Valve 2 inch",
        quantity: 15,
        unitPrice: 2850,
        total: 42750,
      },
      {
        name: "Safety Helmet with Chin Strap",
        quantity: 50,
        unitPrice: 485,
        total: 24250,
      },
    ],
    subtotal: 67000,
    taxAmount: 12060, // 18% GST
    totalAmount: 79060,
    paidAmount: 67000,
    balanceAmount: 12060,
    status: "partially_paid" as const,
    notes: "Balance amount pending",
    createdAt: "2024-01-15T10:30:00Z",
  },
];

// Sample Quotations Data
export const SAMPLE_QUOTATIONS = [
  {
    id: "QUO-001",
    quotationNumber: "QT-2024-456",
    clientName: "PQR Construction Co",
    clientContact: "amit@pqrconstruction.com",
    quotationDate: "2024-01-14",
    validUntil: "2024-02-14",
    products: [
      {
        name: "Galvanized Steel Pipe 2 inch",
        quantity: 100,
        unitPrice: 850,
        total: 85000,
      },
      {
        name: "Industrial Ball Valve 2 inch",
        quantity: 25,
        unitPrice: 2850,
        total: 71250,
      },
      {
        name: "PVC Pipe 4 inch x 6 meter",
        quantity: 50,
        unitPrice: 1250,
        total: 62500,
      },
    ],
    subtotal: 218750,
    discountPercent: 5,
    discountAmount: 10937.5,
    taxAmount: 37426.25, // 18% GST on discounted amount
    totalAmount: 245238.75,
    status: "sent" as const,
    notes:
      "Bulk discount applied. Installation support can be provided at additional cost.",
    createdAt: "2024-01-14T15:20:00Z",
  },
  {
    id: "QUO-002",
    quotationNumber: "QT-2024-457",
    clientName: "DEF Industries",
    clientContact: "manager@defindustries.com",
    quotationDate: "2024-01-16",
    validUntil: "2024-02-16",
    products: [
      {
        name: "Electric Centrifugal Pump 5HP",
        quantity: 5,
        unitPrice: 18500,
        total: 92500,
      },
      {
        name: "Safety Helmet with Chin Strap",
        quantity: 100,
        unitPrice: 485,
        total: 48500,
      },
    ],
    subtotal: 141000,
    discountPercent: 3,
    discountAmount: 4230,
    taxAmount: 24618.6, // 18% GST on discounted amount
    totalAmount: 161388.6,
    status: "pending" as const,
    notes: "Follow up required for decision",
    createdAt: "2024-01-16T12:10:00Z",
  },
];

// Sample Purchase Orders Data
export const SAMPLE_PURCHASE_ORDERS = [
  {
    id: "PO-001",
    purchaseOrderNumber: "PO-2024-089",
    supplierName: "Valve Tech Industries",
    supplierContact: "suresh@valvetech.in",
    orderDate: "2024-01-18",
    expectedDelivery: "2024-01-25",
    products: [
      {
        name: "Industrial Ball Valve 2 inch",
        quantity: 50,
        unitPrice: 2200,
        total: 110000,
      },
      {
        name: "Ball Valve 1 inch",
        quantity: 25,
        unitPrice: 1800,
        total: 45000,
      },
    ],
    subtotal: 155000,
    taxAmount: 27900, // 18% GST
    totalAmount: 182900,
    status: "confirmed" as const,
    notes: "Quality inspection required on delivery",
    createdAt: "2024-01-18T09:30:00Z",
  },
  {
    id: "PO-002",
    purchaseOrderNumber: "PO-2024-090",
    supplierName: "Safety First Supplies",
    supplierContact: "deepika@safetyfirst.in",
    orderDate: "2024-01-19",
    expectedDelivery: "2024-01-26",
    products: [
      {
        name: "Safety Helmet with Chin Strap",
        quantity: 200,
        unitPrice: 385,
        total: 77000,
      },
      { name: "Safety Gloves", quantity: 100, unitPrice: 125, total: 12500 },
    ],
    subtotal: 89500,
    taxAmount: 16110, // 18% GST
    totalAmount: 105610,
    status: "pending" as const,
    notes: "Bulk order for safety equipment",
    createdAt: "2024-01-19T14:45:00Z",
  },
];

// Sample Enquiries Data
export const SAMPLE_ENQUIRIES = [
  {
    id: "ENQ-001",
    enquiryNumber: "ENQ-2024-234",
    clientName: "RST Manufacturing",
    clientContact: "enquiry@rstmfg.com",
    clientPhone: "+91-9876543211",
    enquiryDate: "2024-01-20",
    subject: "Industrial Pumps and Valves Requirement",
    description:
      "We need quotation for 10 units of 5HP centrifugal pumps and 20 units of 2-inch ball valves for our new facility.",
    products: ["Electric Centrifugal Pump 5HP", "Industrial Ball Valve 2 inch"],
    estimatedValue: 250000,
    priority: "medium" as const,
    status: "new" as const,
    assignedTo: "Sales Team",
    followUpDate: "2024-01-22",
    notes: "Potential for long-term partnership",
    createdAt: "2024-01-20T11:20:00Z",
  },
  {
    id: "ENQ-002",
    enquiryNumber: "ENQ-2024-235",
    clientName: "UVW Construction",
    clientContact: "procurement@uvwconstruction.com",
    clientPhone: "+91-9988776644",
    enquiryDate: "2024-01-21",
    subject: "Pipe Fittings for Construction Project",
    description:
      "Requirement for various pipe sizes and fittings for our residential project. Need competitive rates.",
    products: ["PVC Pipe 4 inch x 6 meter", "Galvanized Steel Pipe 2 inch"],
    estimatedValue: 180000,
    priority: "high" as const,
    status: "in_progress" as const,
    assignedTo: "Rajesh Kumar",
    followUpDate: "2024-01-23",
    notes: "Decision expected by month end",
    createdAt: "2024-01-21T16:30:00Z",
  },
];

// Sample Materials Received Data
export const SAMPLE_MATERIALS_RECEIVED = [
  {
    id: "MR-001",
    receiptNumber: "MR-2024-156",
    purchaseOrderNumber: "PO-2024-089",
    supplierName: "Valve Tech Industries",
    receivedDate: "2024-01-25",
    receivedBy: "Warehouse Manager",
    products: [
      {
        name: "Industrial Ball Valve 2 inch",
        orderedQuantity: 50,
        receivedQuantity: 50,
        unitPrice: 2200,
        total: 110000,
        condition: "good",
        remarks: "All units in perfect condition",
      },
      {
        name: "Ball Valve 1 inch",
        orderedQuantity: 25,
        receivedQuantity: 23,
        unitPrice: 1800,
        total: 41400,
        condition: "good",
        remarks: "2 units short delivered, informed supplier",
      },
    ],
    totalValue: 151400,
    status: "partially_received" as const,
    qualityCheck: "passed",
    notes:
      "2 units of 1-inch valve short delivered. Supplier will deliver balance in next shipment.",
    createdAt: "2024-01-25T10:15:00Z",
  },
];

// Sample Journal Entries Data
export const SAMPLE_JOURNAL_ENTRIES = [
  {
    id: "JE-001",
    journalNumber: "JE-2024-001",
    entryDate: "2024-01-20",
    reference: "Bank charges deduction",
    description: "Monthly bank charges and service fees",
    entries: [
      { account: "Bank Charges", debit: 1250, credit: 0 },
      { account: "Bank Account", debit: 0, credit: 1250 },
    ],
    totalDebit: 1250,
    totalCredit: 1250,
    status: "posted" as const,
    createdBy: "Accountant",
    createdAt: "2024-01-20T14:30:00Z",
  },
  {
    id: "JE-002",
    journalNumber: "JE-2024-002",
    entryDate: "2024-01-21",
    reference: "Office rent payment",
    description: "Monthly office rent for January 2024",
    entries: [
      { account: "Rent Expense", debit: 45000, credit: 0 },
      { account: "Bank Account", debit: 0, credit: 45000 },
    ],
    totalDebit: 45000,
    totalCredit: 45000,
    status: "posted" as const,
    createdBy: "Accountant",
    createdAt: "2024-01-21T09:45:00Z",
  },
];

// Sample Bank Accounts Data
export const SAMPLE_BANK_ACCOUNTS = [
  {
    id: "BANK-001",
    bankName: "HDFC Bank",
    accountNumber: "12345678901234",
    accountType: "Current Account",
    branchName: "Gurgaon Sector 14",
    ifscCode: "HDFC0001234",
    balance: 2456780,
    lastUpdated: "2024-01-21T18:00:00Z",
    status: "active" as const,
  },
  {
    id: "BANK-002",
    bankName: "ICICI Bank",
    accountNumber: "56789012345678",
    accountType: "Current Account",
    branchName: "Noida Sector 62",
    ifscCode: "ICIC0005678",
    balance: 1234560,
    lastUpdated: "2024-01-21T18:00:00Z",
    status: "active" as const,
  },
];

// Sample Users Data
export const SAMPLE_USERS = [
  {
    id: "USER-001",
    username: "admin",
    email: "admin@ammarindustrial.com",
    fullName: "Administrator",
    role: "Admin",
    department: "Management",
    phone: "+91-9876543210",
    joinDate: "2023-01-01",
    lastLogin: "2024-01-21T09:30:00Z",
    status: "active" as const,
    permissions: ["all"],
  },
  {
    id: "USER-002",
    username: "rajesh.sales",
    email: "rajesh@ammarindustrial.com",
    fullName: "Rajesh Kumar",
    role: "Sales Manager",
    department: "Sales",
    phone: "+91-9876543211",
    joinDate: "2023-03-15",
    lastLogin: "2024-01-21T10:15:00Z",
    status: "active" as const,
    permissions: ["sales", "clients", "quotations", "orders"],
  },
  {
    id: "USER-003",
    username: "priya.accounts",
    email: "priya@ammarindustrial.com",
    fullName: "Priya Sharma",
    role: "Accountant",
    department: "Accounts",
    phone: "+91-9876543212",
    joinDate: "2023-05-20",
    lastLogin: "2024-01-21T11:00:00Z",
    status: "active" as const,
    permissions: ["accounts", "payments", "journal", "reports"],
  },
  {
    id: "USER-004",
    username: "amit.warehouse",
    email: "amit@ammarindustrial.com",
    fullName: "Amit Patel",
    role: "Warehouse Manager",
    department: "Warehouse",
    phone: "+91-9876543213",
    joinDate: "2023-07-10",
    lastLogin: "2024-01-21T08:45:00Z",
    status: "active" as const,
    permissions: ["inventory", "products", "materials", "stock"],
  },
];

// Business Insights Data
export const BUSINESS_INSIGHTS = {
  monthlyTrends: {
    sales: [
      { month: "Aug 2023", value: 756000 },
      { month: "Sep 2023", value: 823000 },
      { month: "Oct 2023", value: 697000 },
      { month: "Nov 2023", value: 891000 },
      { month: "Dec 2023", value: 945000 },
      { month: "Jan 2024", value: 845250 },
    ],
    orders: [
      { month: "Aug 2023", value: 67 },
      { month: "Sep 2023", value: 73 },
      { month: "Oct 2023", value: 58 },
      { month: "Nov 2023", value: 79 },
      { month: "Dec 2023", value: 84 },
      { month: "Jan 2024", value: 85 },
    ],
  },
  topSellingProducts: [
    { name: "Industrial Ball Valve 2 inch", salesVolume: 245, revenue: 699250 },
    { name: "Safety Helmet with Chin Strap", salesVolume: 156, revenue: 75660 },
    { name: "PVC Pipe 4 inch x 6 meter", salesVolume: 189, revenue: 236250 },
    { name: "Electric Centrifugal Pump 5HP", salesVolume: 12, revenue: 222000 },
    { name: "Galvanized Steel Pipe 2 inch", salesVolume: 267, revenue: 226950 },
  ],
  topClients: [
    { name: "ABC Manufacturing Ltd", orderCount: 15, totalValue: 456780 },
    { name: "XYZ Engineering Works", orderCount: 12, totalValue: 378900 },
    { name: "PQR Construction Co", orderCount: 8, totalValue: 567890 },
    { name: "DEF Industries", orderCount: 6, totalValue: 234560 },
    { name: "GHI Enterprises", orderCount: 9, totalValue: 345670 },
  ],
};

// Export all sample data for easy access
export const ALL_SAMPLE_DATA = {
  orders: SAMPLE_ORDERS,
  payments: SAMPLE_PAYMENTS,
  invoices: SAMPLE_INVOICES,
  quotations: SAMPLE_QUOTATIONS,
  purchaseOrders: SAMPLE_PURCHASE_ORDERS,
  enquiries: SAMPLE_ENQUIRIES,
  materialsReceived: SAMPLE_MATERIALS_RECEIVED,
  journalEntries: SAMPLE_JOURNAL_ENTRIES,
  bankAccounts: SAMPLE_BANK_ACCOUNTS,
  users: SAMPLE_USERS,
  insights: BUSINESS_INSIGHTS,
};
