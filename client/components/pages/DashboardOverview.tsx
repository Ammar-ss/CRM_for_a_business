import { BarChart3, TrendingUp, Package, Users, ShoppingCart, DollarSign } from "lucide-react";

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
  const stats = [
    { name: "Total Sales", value: "₹2,45,680", change: "+12%", trend: "up", icon: DollarSign },
    { name: "Total Products", value: "1,247", change: "+5%", trend: "up", icon: Package },
    { name: "Active Clients", value: "89", change: "+8%", trend: "up", icon: Users },
    { name: "Pending Orders", value: "23", change: "-3%", trend: "down", icon: ShoppingCart },
  ];

  const recentActivities = [
    { id: 1, type: "Sale", description: "New sales order SO-2024-001", time: "2 hours ago", amount: "₹15,600" },
    { id: 2, type: "Purchase", description: "Purchase order PO-2024-045 received", time: "4 hours ago", amount: "₹8,900" },
    { id: 3, type: "Payment", description: "Payment received from Client ABC Ltd", time: "6 hours ago", amount: "₹25,000" },
    { id: 4, type: "Product", description: "New product added - Industrial Valve XV-200", time: "1 day ago", amount: "" },
  ];

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
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Overview</h3>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Sales chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-600">
                      {activity.type.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                    {activity.amount && (
                      <p className="text-sm font-medium text-green-600">{activity.amount}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Product</span>
          </button>
          <button className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Client</span>
          </button>
          <button className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <ShoppingCart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">New Order</span>
          </button>
          <button className="p-4 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Payment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
