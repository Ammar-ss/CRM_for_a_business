// Application Types

// User Types
export interface User {
  id: string;
  username: string;
  email: string;
  role?: string;
  lastLogin?: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  unit: string;
  supplier?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductFormData {
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  unit: string;
  supplier: string;
  description: string;
}

// Client Types
export interface Client {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  gstNumber?: string;
  creditLimit?: number;
  outstandingAmount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ClientFormData {
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  gstNumber: string;
  creditLimit: number;
}

// Supplier Types
export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  gstNumber?: string;
  products?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface SupplierFormData {
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessType: string;
  gstNumber: string;
  products: string[];
}

// Order Types
export interface OrderItem {
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  clientName: string;
  clientContact?: string;
  orderDate: string;
  deliveryDate?: string;
  products: OrderItem[];
  totalAmount: number;
  notes?: string;
  status: "pending" | "confirmed" | "processing" | "completed" | "cancelled";
  createdAt: string;
  updatedAt?: string;
}

export interface OrderFormData {
  orderNumber: string;
  clientName: string;
  clientContact: string;
  orderDate: string;
  deliveryDate: string;
  products: OrderItem[];
  notes: string;
  status: string;
}

// Payment Types
export interface Payment {
  id: string;
  paymentNumber: string;
  paymentType: "received" | "paid";
  clientName: string;
  amount: number;
  paymentDate: string;
  paymentMethod:
    | "cash"
    | "cheque"
    | "bank_transfer"
    | "online"
    | "upi"
    | "card"
    | "other";
  referenceNumber?: string;
  description?: string;
  invoiceNumber?: string;
  status: "completed" | "pending" | "failed" | "cancelled";
  createdAt: string;
  updatedAt?: string;
}

export interface PaymentFormData {
  paymentNumber: string;
  paymentType: "received" | "paid";
  clientName: string;
  amount: number;
  paymentDate: string;
  paymentMethod: string;
  referenceNumber: string;
  description: string;
  invoiceNumber: string;
  status: string;
}

// Menu Types
export interface MenuItem {
  id: string;
  label: string;
  path: string;
  hasSubmenu?: boolean;
  submenu?: MenuItem[];
}

export interface MenuSection {
  heading: string;
  items: MenuItem[];
}

// Dashboard Stats Types
export interface DashboardStat {
  name: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: any; // Lucide icon component
}

export interface RecentActivity {
  id: number;
  type: string;
  description: string;
  time: string;
  amount?: string;
}

// Form Component Props Types
export interface FormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export interface DashboardHeaderProps {
  onTabChange: (tab: string) => void;
  onShowProductForm: () => void;
  onShowClientForm: () => void;
  onShowSupplierForm: () => void;
  onShowCalculator: () => void;
  onToggleSidebar: () => void;
  activeTab: string;
}

export interface DashboardOverviewProps {
  onShowProductForm?: () => void;
  onShowClientForm?: () => void;
  onShowOrderForm?: () => void;
  onShowPaymentForm?: () => void;
}

export interface PageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: {
    primary?: { label: string; onClick: () => void; icon?: React.ReactNode };
    secondary?: {
      label: string;
      onClick: () => void;
      icon?: React.ReactNode;
    }[];
  };
  showSearch?: boolean;
  showFilters?: boolean;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Table Column Types
export interface TableColumn {
  key: string;
  title: string;
  sortable?: boolean;
  render?: (value: any, record: any) => React.ReactNode;
}

// Filter Types
export interface FilterOption {
  label: string;
  value: string;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

// Chart Data Types
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

// Status Badge Types
export type StatusColor =
  | "green"
  | "yellow"
  | "red"
  | "blue"
  | "purple"
  | "gray";

export interface StatusOption {
  value: string;
  label: string;
  color: StatusColor;
}

// Business Logic Types
export interface BusinessMetrics {
  totalSales: number;
  totalProducts: number;
  activeClients: number;
  pendingOrders: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
}

export interface InventoryItem {
  productId: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  reorderLevel: number;
  lastUpdated: string;
}

// Notification Types
export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// File Upload Types
export interface FileUpload {
  file: File;
  progress: number;
  status: "pending" | "uploading" | "completed" | "error";
  url?: string;
  error?: string;
}

// Export Types
export interface ExportOptions {
  format: "csv" | "excel" | "pdf";
  dateRange?: DateRange;
  filters?: Record<string, any>;
  columns?: string[];
}
