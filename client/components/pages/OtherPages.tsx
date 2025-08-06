import { useState } from "react";
import { Plus, Users, AlertTriangle, Building, BookOpen } from "lucide-react";
import PageLayout from "../PageLayout";
import DataTable from "../DataTable";
import { EnquiryForm, QuotationForm, JournalEntryForm, BankAccountForm, UserForm } from "../forms/OtherForms";

// Enquiries Page
export function EnquiriesPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "enquiryNo", label: "Enquiry No." },
    { key: "clientName", label: "Client" },
    { key: "enquiryDate", label: "Date" },
    { key: "productCategory", label: "Product Category" },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Open' ? 'bg-blue-100 text-blue-800' :
        value === 'Quoted' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { enquiryNo: "ENQ-2024-001", clientName: "ABC Industries", enquiryDate: "2024-01-15", productCategory: "Industrial Valves", status: "Open" },
    { enquiryNo: "ENQ-2024-002", clientName: "XYZ Corp", enquiryDate: "2024-01-14", productCategory: "Pipe Fittings", status: "Quoted" },
  ];

  return (
    <>
      <PageLayout
        title="Customer Enquiries"
        description="Manage customer enquiries and track responses"
        actions={{
          primary: { label: "New Enquiry", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <EnquiryForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Enquiry created successfully!")}
      />
    </>
  );
}

// Quotations Page
export function QuotationsPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "quotationNo", label: "Quotation No." },
    { key: "clientName", label: "Client" },
    { key: "quotationDate", label: "Date" },
    { key: "amount", label: "Amount", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "validUntil", label: "Valid Until" },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Sent' ? 'bg-blue-100 text-blue-800' :
        value === 'Accepted' ? 'bg-green-100 text-green-800' :
        'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { quotationNo: "QT-2024-001", clientName: "ABC Industries", quotationDate: "2024-01-15", amount: 15600, validUntil: "2024-02-15", status: "Sent" },
    { quotationNo: "QT-2024-002", clientName: "XYZ Corp", quotationDate: "2024-01-14", amount: 28900, validUntil: "2024-02-14", status: "Accepted" },
  ];

  return (
    <>
      <PageLayout
        title="Quotations"
        description="Create and manage customer quotations"
        actions={{
          primary: { label: "New Quotation", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <QuotationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Quotation created successfully!")}
      />
    </>
  );
}

// ROP (Reorder Point) Page
export function ROPPage() {
  const columns = [
    { key: "productCode", label: "Product Code" },
    { key: "productName", label: "Product Name" },
    { key: "currentStock", label: "Current Stock" },
    { key: "reorderPoint", label: "Reorder Point" },
    { key: "suggestedOrder", label: "Suggested Order Qty" },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Critical' ? 'bg-red-100 text-red-800' :
        value === 'Low' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { productCode: "IV-001", productName: "Industrial Valve Type A", currentStock: 5, reorderPoint: 10, suggestedOrder: 50, status: "Critical" },
    { productCode: "PF-002", productName: "Pipe Fitting 2 inch", currentStock: 15, reorderPoint: 20, suggestedOrder: 100, status: "Low" },
    { productCode: "BV-003", productName: "Ball Valve 4 inch", currentStock: 35, reorderPoint: 15, suggestedOrder: 0, status: "Good" },
  ];

  return (
    <PageLayout
      title="Reorder Point Management"
      description="Monitor stock levels and manage reorder points"
      actions={{
        primary: { label: "Generate PO", onClick: () => {}, icon: <Plus className="h-4 w-4 mr-2" /> }
      }}
    >
      <DataTable columns={columns} data={data} />
    </PageLayout>
  );
}

// Journal Page
export function JournalPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "journalNo", label: "Journal No." },
    { key: "date", label: "Date" },
    { key: "description", label: "Description" },
    { key: "debitAmount", label: "Debit", render: (value: number) => value ? `₹${value.toLocaleString()}` : "-" },
    { key: "creditAmount", label: "Credit", render: (value: number) => value ? `₹${value.toLocaleString()}` : "-" }
  ];

  const data = [
    { journalNo: "JE-2024-001", date: "2024-01-15", description: "Bank charges", debitAmount: 500, creditAmount: 0 },
    { journalNo: "JE-2024-002", date: "2024-01-16", description: "Interest received", debitAmount: 0, creditAmount: 1200 },
  ];

  return (
    <>
      <PageLayout
        title="Journal Entries"
        description="Record and manage accounting journal entries"
        actions={{
          primary: { label: "New Journal Entry", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <JournalEntryForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Journal Entry created successfully!")}
      />
    </>
  );
}

// Banks Page
export function BanksPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "accountNo", label: "Account No." },
    { key: "bankName", label: "Bank Name" },
    { key: "accountType", label: "Account Type" },
    { key: "balance", label: "Balance", render: (value: number) => `₹${value.toLocaleString()}` },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { accountNo: "1234567890", bankName: "HDFC Bank", accountType: "Current", balance: 2450000, status: "Active" },
    { accountNo: "0987654321", bankName: "ICICI Bank", accountType: "Savings", balance: 890000, status: "Active" },
  ];

  return (
    <>
      <PageLayout
        title="Bank Accounts"
        description="Manage bank accounts and track balances"
        actions={{
          primary: { label: "Add Bank Account", onClick: () => setShowForm(true), icon: <Plus className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <BankAccountForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("Bank Account added successfully!")}
      />
    </>
  );
}

// Users Page
export function UsersPage() {
  const [showForm, setShowForm] = useState(false);
  const columns = [
    { key: "username", label: "Username" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "lastLogin", label: "Last Login" },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`px-2 py-1 text-xs rounded-full ${
        value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    )}
  ];

  const data = [
    { username: "admin", email: "admin@ammar.com", role: "Administrator", lastLogin: "2024-01-20 10:30", status: "Active" },
    { username: "user1", email: "user1@ammar.com", role: "Sales Manager", lastLogin: "2024-01-19 15:45", status: "Active" },
    { username: "user2", email: "user2@ammar.com", role: "Purchase Manager", lastLogin: "2024-01-18 09:15", status: "Active" },
  ];

  return (
    <>
      <PageLayout
        title="User Management"
        description="Manage system users and their permissions"
        actions={{
          primary: { label: "Add User", onClick: () => setShowForm(true), icon: <Users className="h-4 w-4 mr-2" /> }
        }}
      >
        <DataTable columns={columns} data={data} />
      </PageLayout>

      <UserForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSuccess={() => alert("User created successfully!")}
      />
    </>
  );
}

// Generic placeholder page for other menu items
export function GenericPage({ title, description }: { title: string; description: string }) {
  return (
    <PageLayout title={title} description={description}>
      <div className="p-12 text-center">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
        <p className="text-gray-600 mb-6">
          This section is under development. The functionality for {title.toLowerCase()} will be implemented based on your specific requirements.
        </p>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add {title}
        </button>
      </div>
    </PageLayout>
  );
}
