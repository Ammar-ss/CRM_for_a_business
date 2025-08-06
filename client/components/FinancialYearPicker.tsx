import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

interface FinancialYearPickerProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

interface FinancialYear {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
}

export default function FinancialYearPicker({ selectedYear, onYearChange }: FinancialYearPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Generate financial years (April to March)
  const generateFinancialYears = (): FinancialYear[] => {
    const currentYear = new Date().getFullYear();
    const years: FinancialYear[] = [];
    
    // Current year is 2025-2026, so generate from 2022-2023 to 2025-2026
    for (let i = 3; i >= 0; i--) {
      const startYear = currentYear - i;
      const endYear = startYear + 1;
      years.push({
        id: `${startYear}-${endYear}`,
        label: `${startYear}-${endYear}`,
        startDate: `Apr 1, ${startYear}`,
        endDate: `Mar 31, ${endYear}`
      });
    }
    
    return years;
  };

  const financialYears = generateFinancialYears();
  const currentFinancialYear = financialYears.find(year => year.id === selectedYear);

  const handleYearSelect = (yearId: string) => {
    onYearChange(yearId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-3 py-2 hover:border-gray-400 transition-colors min-w-[240px]">
        <Calendar size={16} className="text-gray-500" />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-sm text-gray-700"
        >
          <span>
            {currentFinancialYear ? `${currentFinancialYear.startDate} - ${currentFinancialYear.endDate}` : selectedYear}
          </span>
          <ChevronDown 
            size={16} 
            className={`text-gray-400 transition-transform ml-2 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Select Financial Year</h3>
              
              <div className="space-y-2">
                {financialYears.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => handleYearSelect(year.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedYear === year.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{year.label}</span>
                      {year.id === "2025-2026" && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {year.startDate} to {year.endDate}
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Date Selection */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-medium text-gray-700 mb-2">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleYearSelect("2025-2026")}
                    className="text-xs px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    Current FY
                  </button>
                  <button
                    onClick={() => handleYearSelect("2024-2025")}
                    className="text-xs px-3 py-2 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Previous FY
                  </button>
                </div>
              </div>

              {/* Custom Date Range (Future Enhancement) */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  className="w-full text-xs px-3 py-2 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  📅 Custom Date Range (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
