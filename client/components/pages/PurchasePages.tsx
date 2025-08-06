import { Plus, Download, Package } from "lucide-react";
import PageLayout from "../PageLayout";
import DataTable from "../DataTable";

// Materials Received Page
export function MaterialsReceivedPage() {
  const columns = [
    { key: "receiptNo", label: "Receipt No." },
    { key: "supplierName", label: "Supplier" },
    { key: "receiptDate", label: "Date" },
    { key: "poNumber", label: "PO Number" },
    { key: "itemsCount", label: "Items", render: (value: number) => `${value} items` },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Received' ? 'bg-green-100 text-green-800' :
        value === 'Partial' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { receiptNo: "MR-2024-001", supplierName: "Steel Works Ltd", receiptDate: "2024-01-15", poNumber: "PO-2024-001", itemsCount: 5, status: "Received" },
    { receiptNo: "MR-2024-002", supplierName: "Valve Industries", receiptDate: "2024-01-14", poNumber: "PO-2024-002", itemsCount: 3, status: "Partial" },
  ];

  return (
    <PageLayout
      title="Materials Received"
      description="Track and record materials received from suppliers"
      actions={{
        primary: { label: "Record Receipt", onClick: () => {}, icon: <Package className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Purchase Order Page
export function PurchaseOrderPage() {
  const columns = [
    { key: "orderNo", label: "PO No." },
    { key: "supplierName", label: "Supplier" },
    { key: "orderDate", label: "Order Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "deliveryDate", label: "Expected Delivery" },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
        value === 'Delivered' ? 'bg-green-100 text-green-800' :
        'bg-blue-100 text-blue-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { orderNo: "PO-2024-001", supplierName: "Steel Works Ltd", orderDate: "2024-01-10", amount: 85600, deliveryDate: "2024-01-20", status: "Delivered" },
    { orderNo: "PO-2024-002", supplierName: "Valve Industries", orderDate: "2024-01-12", amount: 45300, deliveryDate: "2024-01-22", status: "Pending" },
  ];

  return (
    <PageLayout
      title="Purchase Orders"
      description="Create and manage purchase orders to suppliers"
      actions={{
        primary: { label: "New Purchase Order", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Purchase Invoice Page
export function PurchaseInvoicePage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No." },
    { key: "supplierName", label: "Supplier" },
    { key: "invoiceDate", label: "Invoice Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "paymentStatus", label: "Payment Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Paid' ? 'bg-green-100 text-green-800' :
        value === 'Partial' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { invoiceNo: "PI-SUP-001", supplierName: "Steel Works Ltd", invoiceDate: "2024-01-15", amount: 85600, paymentStatus: "Paid" },
    { invoiceNo: "PI-SUP-002", supplierName: "Valve Industries", invoiceDate: "2024-01-16", amount: 45300, paymentStatus: "Pending" },
  ];

  return (
    <PageLayout
      title="Purchase Invoices"
      description="Manage supplier invoices and track payments"
      actions={{
        primary: { label: "New Invoice", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Payments Page
export function PaymentsPage() {
  const columns = [
    { key: "paymentNo", label: "Payment No." },
    { key: "supplierName", label: "Supplier" },
    { key: "paymentDate", label: "Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "paymentMode", label: "Payment Mode" },
    { key: "reference", label: "Reference" }
  ];

  const data = [
    { paymentNo: "PAY-2024-001", supplierName: "Steel Works Ltd", paymentDate: "2024-01-18", amount: 85600, paymentMode: "Bank Transfer", reference: "TXN123456" },
    { paymentNo: "PAY-2024-002", supplierName: "Valve Industries", paymentDate: "2024-01-19", amount: 22650, paymentMode: "Cheque", reference: "CHQ789012" },
  ];

  return (
    <PageLayout
      title="Supplier Payments"
      description="Record and track payments made to suppliers"
      actions={{
        primary: { label: "New Payment", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Debit Note Page
export function DebitNotePage() {
  const columns = [
    { key: "debitNoteNo", label: "Debit Note No." },
    { key: "supplierName", label: "Supplier" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "reason", label: "Reason" }
  ];

  const data = [
    { debitNoteNo: "DN-2024-001", supplierName: "Steel Works Ltd", date: "2024-01-15", amount: 5600, reason: "Quality Issue" },
    { debitNoteNo: "DN-2024-002", supplierName: "Valve Industries", date: "2024-01-16", amount: 3200, reason: "Late Delivery" },
  ];

  return (
    <PageLayout
      title="Debit Notes"
      description="Manage debit notes issued to suppliers"
      actions={{
        primary: { label: "New Debit Note", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}
