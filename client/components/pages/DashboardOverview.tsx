import { BarChart3, TrendingUp, Package, Users, ShoppingCart, DollarSign, AlertTriangle, FileText, Clock, CheckCircle } from "lucide-react";
import { formatCurrency, getRelativeTime } from "../../lib/helpers";
import { SAMPLE_CLIENTS, SAMPLE_PRODUCTS } from "../../lib/constants";

interface DashboardOverviewProps {
  onShowProductForm?: () => void;
  onShowClientForm?: () => void;
  onShowOrderForm?: () => void;
  onShowPaymentForm?: () => void;
}

export default function DashboardOverview({
  onShowProductForm,
  onShowClientForm,
  onShowOrderForm,
  onShowPaymentForm
}: DashboardOverviewProps) {
  // More realistic SME stats
  const stats = [
    { name: "Monthly Sales", value: formatCurrency(845250), change: "+18.2%", trend: "up", icon: DollarSign },
    { name: "Total Products", value: "156", change: "+12", trend: "up", icon: Package },
    { name: "Active Clients", value: "42", change: "+3", trend: "up", icon: Users },
    { name: "Pending Orders", value: "8", change: "-2", trend: "down", icon: ShoppingCart },
  ];

  // More comprehensive recent activities for an SME
  const recentActivities = [
    {
      id: 1,
      type: "Sale",
      description: "Sales Order SO-2024-1247 from ABC Manufacturing Ltd for Industrial Valves",
      time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      amount: formatCurrency(45600),
      client: "ABC Manufacturing Ltd"
    },
    {
      id: 2,
      type: "Payment",
      description: "Payment received from XYZ Engineering Works via UPI",
      time: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
      amount: formatCurrency(28900),
      client: "XYZ Engineering Works"
    },
    {
      id: 3,
      type: "Purchase",
      description: "Purchase Order PO-2024-089 sent to Valve Tech Industries",
      time: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      amount: formatCurrency(62400),
      client: "Valve Tech Industries"
    },
    {
      id: 4,
      type: "Product",
      description: "Stock updated for PVC Pipe 4 inch - 25 units added",
      time: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
      amount: "",
      client: ""
    },
    {
      id: 5,
      type: "Quote",
      description: "Quotation QT-2024-456 sent to PQR Construction Co",
      time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      amount: formatCurrency(125000),
      client: "PQR Construction Co"
    },
    {
      id: 6,
      type: "Alert",
      description: "Low stock alert: Safety Helmets below reorder level",
      time: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(), // 1 day ago
      amount: "",
      client: ""
    }
  ];

  // Low stock alerts for SME
  const lowStockItems = [
    { name: "Safety Helmet with Chin Strap", currentStock: 12, minStock: 50, urgency: "high" },
    { name: "Industrial Ball Valve 2 inch", currentStock: 8, minStock: 15, urgency: "medium" },
    { name: "Electric Centrifugal Pump 5HP", currentStock: 2, minStock: 5, urgency: "high" }
  ];

  // Pending follow-ups
  const pendingFollowups = [
    { client: "ABC Manufacturing Ltd", amount: formatCurrency(125000), daysOverdue: 15, priority: "high" },
    { client: "XYZ Engineering Works", amount: formatCurrency(75000), daysOverdue: 8, priority: "medium" },
    { client: "DEF Industries", amount: formatCurrency(42000), daysOverdue: 3, priority: "low" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "Sale": return <ShoppingCart className="h-5 w-5 text-green-600" />;
      case "Payment": return <DollarSign className="h-5 w-5 text-blue-600" />;
      case "Purchase": return <Package className="h-5 w-5 text-purple-600" />;
      case "Product": return <Package className="h-5 w-5 text-orange-600" />;
      case "Quote": return <FileText className="h-5 w-5 text-indigo-600" />;
      case "Alert": return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default: return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className={`self-center flex-shrink-0 h-4 w-4 ${
                          stat.trend === 'down' ? 'rotate-180' : ''
                        }`} />
                        <span className="ml-1">{stat.change}</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className="flex-shrink-0 mt-1">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 leading-tight">{activity.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">{getRelativeTime(activity.time)}</p>
                    {activity.amount && (
                      <p className="text-sm font-medium text-green-600">{activity.amount}</p>
                    )}
                  </div>
                  {activity.client && (
                    <p className="text-xs text-blue-600 mt-1">{activity.client}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Inventory Alerts</h3>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {lowStockItems.length} items
            </span>
          </div>
          <div className="space-y-3">
            {lowStockItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Current: {item.currentStock} | Min: {item.minStock}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full ${
                    item.urgency === 'high' ? 'bg-red-500' :
                    item.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></span>
                  <span className={`text-xs font-medium ${
                    item.urgency === 'high' ? 'text-red-600' :
                    item.urgency === 'medium' ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {item.urgency.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All Inventory →
          </button>
        </div>
      </div>

      {/* Additional SME Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Products */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Products</h3>
          <div className="space-y-3">
            {SAMPLE_PRODUCTS.slice(0, 4).map((product, index) => (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{formatCurrency(product.price)}</p>
                  <p className="text-xs text-gray-500">{product.stock} in stock</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Follow-ups */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Follow-ups</h3>
          <div className="space-y-3">
            {pendingFollowups.map((followup, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-900">{followup.client}</p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    followup.priority === 'high' ? 'bg-red-100 text-red-800' :
                    followup.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {followup.priority.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{followup.amount}</p>
                <p className="text-xs text-red-600 mt-1">{followup.daysOverdue} days overdue</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Targets */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Targets</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Sales Target</span>
                <span className="text-sm text-gray-600">₹12,00,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '70.4%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">₹8,45,250 achieved (70.4%)</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">New Clients</span>
                <span className="text-sm text-gray-600">15</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '53.3%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">8 clients acquired (53.3%)</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">Orders</span>
                <span className="text-sm text-gray-600">100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">85 orders completed (85%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={onShowProductForm}
            className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Product</span>
          </button>
          <button
            onClick={onShowClientForm}
            className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Client</span>
          </button>
          <button
            onClick={onShowOrderForm}
            className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-purple-300 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <ShoppingCart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">New Order</span>
          </button>
          <button
            onClick={onShowPaymentForm}
            className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-orange-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Payment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
