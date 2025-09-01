import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileText,
  DollarSign,
} from "lucide-react";
import PageLayout from "../PageLayout";
import { formatCurrency, formatDate, getStatusColor } from "../../lib/helpers";

// Estimate/Approvals Page
export function EstimateApprovalsPage() {
  const [showEstimateForm, setShowEstimateForm] = useState(false);
  const [selectedEstimate, setSelectedEstimate] = useState<any>(null);

  const estimates = [
    {
      id: "EST-001",
      estimateNumber: "EST-2024-001",
      projectName: "Industrial Facility Expansion",
      clientName: "ABC Manufacturing Ltd",
      estimateDate: "2024-01-15",
      totalAmount: 1250000,
      status: "pending_approval",
      approver: "General Manager",
      submittedBy: "Rajesh Kumar",
      priority: "high",
      category: "Construction",
      validUntil: "2024-02-15",
    },
    {
      id: "EST-002",
      estimateNumber: "EST-2024-002",
      projectName: "Safety Equipment Upgrade",
      clientName: "XYZ Engineering Works",
      estimateDate: "2024-01-18",
      totalAmount: 485000,
      status: "approved",
      approver: "Safety Manager",
      submittedBy: "Priya Sharma",
      priority: "medium",
      category: "Safety",
      validUntil: "2024-02-18",
    },
    {
      id: "EST-003",
      estimateNumber: "EST-2024-003",
      projectName: "Pump Installation Service",
      clientName: "PQR Construction Co",
      estimateDate: "2024-01-20",
      totalAmount: 325000,
      status: "rejected",
      approver: "Technical Manager",
      submittedBy: "Amit Patel",
      priority: "low",
      category: "Service",
      validUntil: "2024-02-20",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "pending_approval":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <PageLayout
      title="Estimates & Approvals"
      description="Manage project estimates and approval workflows"
      actions={{
        primary: {
          label: "New Estimate",
          onClick: () => setShowEstimateForm(true),
          icon: <Plus className="h-4 w-4 mr-2" />,
        },
        secondary: [
          {
            label: "Export",
            onClick: () => {},
            icon: <FileText className="h-4 w-4 mr-2" />,
          },
        ],
      }}
    >
      <div className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">
                  Total Estimates
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  {estimates.length}
                </p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Approved</p>
                <p className="text-2xl font-bold text-green-900">
                  {estimates.filter((e) => e.status === "approved").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {
                    estimates.filter((e) => e.status === "pending_approval")
                      .length
                  }
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">
                  Total Value
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  {formatCurrency(
                    estimates.reduce((sum, e) => sum + e.totalAmount, 0),
                  )}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Estimates Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Estimates List
              </h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search estimates..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estimate Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {estimates.map((estimate) => (
                  <tr key={estimate.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {estimate.estimateNumber}
                        </div>
                        <div className="text-sm text-gray-500">
                          {estimate.projectName}
                        </div>
                        <div className="text-xs text-gray-400">
                          {formatDate(estimate.estimateDate)} |{" "}
                          {estimate.category}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {estimate.clientName}
                      </div>
                      <div className="text-xs text-gray-500">
                        Valid until: {formatDate(estimate.validUntil)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatCurrency(estimate.totalAmount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(estimate.status)}
                        <span
                          className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(estimate.status)}`}
                        >
                          {estimate.status.replace("_", " ").toUpperCase()}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        By: {estimate.approver}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(estimate.priority)}`}
                      >
                        {estimate.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedEstimate(estimate)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

// Secondary Purchase Page
export function SecondaryPurchasePage() {
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  const secondaryPurchases = [
    {
      id: "SP-001",
      purchaseNumber: "SP-2024-001",
      supplierName: "Local Hardware Store",
      purchaseDate: "2024-01-20",
      category: "Emergency Purchase",
      totalAmount: 12500,
      status: "completed",
      urgency: "urgent",
      approvedBy: "Warehouse Manager",
      reason: "Urgent requirement for ongoing project",
      items: [
        { name: "Emergency Bolts", quantity: 50, unitPrice: 125, total: 6250 },
        { name: "Safety Wire", quantity: 25, unitPrice: 250, total: 6250 },
      ],
    },
    {
      id: "SP-002",
      purchaseNumber: "SP-2024-002",
      supplierName: "Quick Supply Co",
      purchaseDate: "2024-01-21",
      category: "Maintenance Purchase",
      totalAmount: 8750,
      status: "pending",
      urgency: "normal",
      approvedBy: "Maintenance Head",
      reason: "Routine maintenance supplies",
      items: [
        {
          name: "Cleaning Supplies",
          quantity: 10,
          unitPrice: 375,
          total: 3750,
        },
        {
          name: "Maintenance Tools",
          quantity: 5,
          unitPrice: 1000,
          total: 5000,
        },
      ],
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "urgent":
        return "bg-red-100 text-red-800";
      case "normal":
        return "bg-blue-100 text-blue-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <PageLayout
      title="Secondary Purchase"
      description="Manage secondary purchases and emergency procurement"
      actions={{
        primary: {
          label: "New Secondary Purchase",
          onClick: () => setShowPurchaseForm(true),
          icon: <Plus className="h-4 w-4 mr-2" />,
        },
        secondary: [
          {
            label: "Purchase Reports",
            onClick: () => {},
            icon: <FileText className="h-4 w-4 mr-2" />,
          },
        ],
      }}
    >
      <div className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">
                  Total Secondary Purchases
                </p>
                <p className="text-2xl font-bold text-orange-900">
                  {secondaryPurchases.length}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600">
                  Urgent Purchases
                </p>
                <p className="text-2xl font-bold text-red-900">
                  {
                    secondaryPurchases.filter((p) => p.urgency === "urgent")
                      .length
                  }
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">
                  Total Value
                </p>
                <p className="text-2xl font-bold text-green-900">
                  {formatCurrency(
                    secondaryPurchases.reduce(
                      (sum, p) => sum + p.totalAmount,
                      0,
                    ),
                  )}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>

        {/* Purchases Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Secondary Purchases
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Purchase Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Supplier
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Urgency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {secondaryPurchases.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {purchase.purchaseNumber}
                        </div>
                        <div className="text-sm text-gray-500">
                          {purchase.category}
                        </div>
                        <div className="text-xs text-gray-400">
                          {formatDate(purchase.purchaseDate)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {purchase.supplierName}
                      </div>
                      <div className="text-xs text-gray-500">
                        Approved by: {purchase.approvedBy}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatCurrency(purchase.totalAmount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(purchase.urgency)}`}
                      >
                        {purchase.urgency.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(purchase.status)}`}
                      >
                        {purchase.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

// Estimate/Approvals Items Page
export function EstimateApprovalsItemsPage() {
  const estimateItems = [
    {
      id: "EI-001",
      estimateNumber: "EST-2024-001",
      itemName: "Industrial Valve Installation",
      category: "Labor",
      quantity: 15,
      unitPrice: 2500,
      totalPrice: 37500,
      status: "approved",
      approvalDate: "2024-01-16",
      notes: "Standard installation charges",
    },
    {
      id: "EI-002",
      estimateNumber: "EST-2024-001",
      itemName: "Material Cost - Industrial Valves",
      category: "Material",
      quantity: 15,
      unitPrice: 2850,
      totalPrice: 42750,
      status: "approved",
      approvalDate: "2024-01-16",
      notes: "Premium grade valves",
    },
    {
      id: "EI-003",
      estimateNumber: "EST-2024-002",
      itemName: "Safety Equipment Setup",
      category: "Service",
      quantity: 1,
      unitPrice: 45000,
      totalPrice: 45000,
      status: "pending",
      approvalDate: "",
      notes: "Comprehensive safety audit included",
    },
  ];

  return (
    <PageLayout
      title="Estimate/Approval Items"
      description="Detailed view of individual items in estimates and their approval status"
    >
      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Estimate Items
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unit Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {estimateItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.itemName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.estimateNumber}
                        </div>
                        {item.notes && (
                          <div className="text-xs text-gray-400 mt-1">
                            {item.notes}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(item.unitPrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(item.totalPrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}
                      >
                        {item.status.toUpperCase()}
                      </span>
                      {item.approvalDate && (
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(item.approvalDate)}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
