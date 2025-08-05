import { useState } from "react";
import { X } from "lucide-react";

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Calculator({ isOpen, onClose }: CalculatorProps) {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handlePlusMinus = () => {
    const value = parseFloat(display);
    setDisplay(String(-value));
  };

  const handlePercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Calculator</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Calculator */}
        <div className="p-4">
          {/* Display */}
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="text-right text-2xl font-mono text-gray-900 min-h-[60px] flex items-center justify-end">
              {display}
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {/* Row 1 */}
            <button
              onClick={handleClear}
              className="bg-gray-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors"
            >
              AC
            </button>
            <button
              onClick={handlePlusMinus}
              className="bg-gray-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors"
            >
              +/-
            </button>
            <button
              onClick={handlePercent}
              className="bg-gray-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-600 transition-colors"
            >
              %
            </button>
            <button
              onClick={() => handleOperation("÷")}
              className="bg-orange-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              ÷
            </button>

            {/* Row 2 */}
            <button
              onClick={() => handleNumber("7")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              7
            </button>
            <button
              onClick={() => handleNumber("8")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              8
            </button>
            <button
              onClick={() => handleNumber("9")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              9
            </button>
            <button
              onClick={() => handleOperation("×")}
              className="bg-orange-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              ×
            </button>

            {/* Row 3 */}
            <button
              onClick={() => handleNumber("4")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              4
            </button>
            <button
              onClick={() => handleNumber("5")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              5
            </button>
            <button
              onClick={() => handleNumber("6")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              6
            </button>
            <button
              onClick={() => handleOperation("-")}
              className="bg-orange-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              -
            </button>

            {/* Row 4 */}
            <button
              onClick={() => handleNumber("1")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              1
            </button>
            <button
              onClick={() => handleNumber("2")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              2
            </button>
            <button
              onClick={() => handleNumber("3")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              3
            </button>
            <button
              onClick={() => handleOperation("+")}
              className="bg-orange-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              +
            </button>

            {/* Row 5 */}
            <button
              onClick={() => handleNumber("0")}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors col-span-2"
            >
              0
            </button>
            <button
              onClick={handleDecimal}
              className="bg-gray-600 text-white p-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              .
            </button>
            <button
              onClick={handleEquals}
              className="bg-orange-500 text-white p-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
