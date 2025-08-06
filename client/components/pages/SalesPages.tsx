import { useState } from "react";
import { Plus, Download, FileText } from "lucide-react";
import PageLayout from "../PageLayout";
import DataTable from "../DataTable";
import { SalesOrderForm, SalesInvoiceForm, ReceiptForm } from "../forms/SalesForms";

// Sales Order Page
export function SalesOrderPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "orderNo", label: "Order No." },
    { key: "clientName", label: "Client" },
    { key: "orderDate", label: "Order Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
        value === 'Completed' ? 'bg-green-100 text-green-800' :
        'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { orderNo: "SO-2024-001", clientName: "ABC Industries", orderDate: "2024-01-15", amount: 15600, status: "Pending" },
    { orderNo: "SO-2024-002", clientName: "XYZ Corp", orderDate: "2024-01-14", amount: 28900, status: "Completed" },
    { orderNo: "SO-2024-003", clientName: "Tech Solutions", orderDate: "2024-01-13", amount: 42300, status: "Pending" },
  ];

  return (
    <>
      <PageLayout
        title="Sales Orders"
        description="Manage customer sales orders and track order status"
        actions={{
          primary: { label: "New Sales Order", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> },
          secondary: [
            { label: "Export", onClick: () => {}, icon: <Download className="h-4 w-4 mr-2" /> }
          ]
        }}
      >
        <DataTable
          columns={columns}
          data={data}
          actions={{
            view: (row) => console.log("View:", row),
            edit: (row) => console.log("Edit:", row),
            delete: (row) => console.log("Delete:", row)
          }}
        />
      </PageLayout>

      <SalesOrderForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Sales Order created successfully!")}
      />
    </>
  );
}

// Proforma Invoice Page
export function ProformaInvoicePage() {
  const columns = [
    { key: "invoiceNo", label: "Proforma No." },
    { key: "clientName", label: "Client" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "validUntil", label: "Valid Until" }
  ];

  const data = [
    { invoiceNo: "PI-2024-001", clientName: "ABC Industries", date: "2024-01-15", amount: 15600, validUntil: "2024-02-15" },
    { invoiceNo: "PI-2024-002", clientName: "XYZ Corp", date: "2024-01-14", amount: 28900, validUntil: "2024-02-14" },
  ];

  return (
    <PageLayout
      title="Proforma Invoices"
      description="Create and manage proforma invoices for quotations"
      actions={{
        primary: { label: "New Proforma", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Sales Invoice Page
export function SalesInvoicePage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "invoiceNo", label: "Invoice No." },
    { key: "clientName", label: "Client" },
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
    { invoiceNo: "SI-2024-001", clientName: "ABC Industries", invoiceDate: "2024-01-15", amount: 15600, paymentStatus: "Paid" },
    { invoiceNo: "SI-2024-002", clientName: "XYZ Corp", invoiceDate: "2024-01-14", amount: 28900, paymentStatus: "Pending" },
  ];

  return (
    <>
      <PageLayout
        title="Sales Invoices"
        description="Manage sales invoices and track payments"
        actions={{
          primary: { label: "New Invoice", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <SalesInvoiceForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Sales Invoice created successfully!")}
      />
    </>
  );
}

// Receipt Page
export function ReceiptPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "receiptNo", label: "Receipt No." },
    { key: "clientName", label: "Client" },
    { key: "receiptDate", label: "Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "paymentMode", label: "Payment Mode" }
  ];

  const data = [
    { receiptNo: "RCP-2024-001", clientName: "ABC Industries", receiptDate: "2024-01-15", amount: 15600, paymentMode: "Bank Transfer" },
    { receiptNo: "RCP-2024-002", clientName: "XYZ Corp", receiptDate: "2024-01-14", amount: 28900, paymentMode: "Cheque" },
  ];

  return (
    <>
      <PageLayout
        title="Payment Receipts"
        description="Record and manage payment receipts from customers"
        actions={{
          primary: { label: "New Receipt", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <ReceiptForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Payment Receipt recorded successfully!")}
      />
    </>
  );
}

// Payment Follow up Page
export function PaymentFollowupPage() {
  const columns = [
    { key: "invoiceNo", label: "Invoice No." },
    { key: "clientName", label: "Client" },
    { key: "dueDate", label: "Due Date" },
    { key: "amount", label: "Outstanding", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "overdueDays", label: "Overdue Days", render: (value: number) => (
      <span className={`font-medium ${value > 30 ? 'text-red-600' : value > 0 ? 'text-yellow-600' : 'text-green-600'}`}>
        {value > 0 ? `${value} days` : 'Current'}
      </span>
    )}
  ];

  const data = [
    { invoiceNo: "SI-2024-001", clientName: "ABC Industries", dueDate: "2024-01-30", amount: 15600, overdueDays: 5 },
    { invoiceNo: "SI-2024-002", clientName: "XYZ Corp", dueDate: "2024-02-15", amount: 28900, overdueDays: 0 },
  ];

  return (
    <PageLayout
      title="Payment Follow-up"
      description="Track overdue payments and follow up with customers"
      showSearch={true}
      showFilters={true}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Credit Note Page
export function CreditNotePage() {
  const columns = [
    { key: "creditNoteNo", label: "Credit Note No." },
    { key: "clientName", label: "Client" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "reason", label: "Reason" }
  ];

  const data = [
    { creditNoteNo: "CN-2024-001", clientName: "ABC Industries", date: "2024-01-15", amount: 1560, reason: "Product Return" },
    { creditNoteNo: "CN-2024-002", clientName: "XYZ Corp", date: "2024-01-14", amount: 2890, reason: "Discount Adjustment" },
  ];

  return (
    <PageLayout
      title="Credit Notes"
      description="Manage credit notes issued to customers"
      actions={{
        primary: { label: "New Credit Note", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}
