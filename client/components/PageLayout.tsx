import { ReactNode } from "react";
import { Plus, Search, Filter, Download, Upload } from "lucide-react";

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: {
    primary?: { label: string; onClick: () => void; icon?: ReactNode };
    secondary?: { label: string; onClick: () => void; icon?: ReactNode }[];
  };
  showSearch?: boolean;
  showFilters?: boolean;
}

export default function PageLayout({ 
  title, 
  description, 
  children, 
  actions,
  showSearch = true,
  showFilters = true 
}: PageLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            )}
          </div>
          
          {/* Action Buttons */}
          {actions && (
            <div className="flex items-center space-x-3">
              {actions.secondary?.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
              
              {actions.primary && (
                <button
                  onClick={actions.primary.onClick}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {actions.primary.icon}
                  {actions.primary.label}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Search and Filter Bar */}
        {(showSearch || showFilters) && (
          <div className="mt-4 flex items-center space-x-4">
            {showSearch && (
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}
            
            {showFilters && (
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Page Content */}
      <div className="bg-white shadow-sm rounded-lg">
        {children}
      </div>
    </div>
  );
}
