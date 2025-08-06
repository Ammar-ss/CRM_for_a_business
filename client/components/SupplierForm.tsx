import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { SupplierRequest, EntityResponse, ContactPerson, BankDetails } from "@shared/entities";

interface SupplierFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function SupplierForm({ isOpen, onClose, onSuccess }: SupplierFormProps) {
  const [formData, setFormData] = useState<SupplierRequest>({
    supplierName: "",
    printedName: "",
    supplierCategory: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pincode: "",
    gstin: "",
    gstinType: "",
    state: "",
    country: "INDIA",
    contactPersons: [{ name: "", designation: "", mobile: "", email: "" }],
    bankDetails: { accountName: "", bankName: "", accountNumber: "", ifscCode: "" }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/suppliers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data: EntityResponse<any> = await response.json();

      if (data.success) {
        onSuccess();
        onClose();
        // Reset form
        setFormData({
          supplierName: "",
          printedName: "",
          supplierCategory: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          pincode: "",
          gstin: "",
          gstinType: "",
          state: "",
          country: "INDIA",
          contactPersons: [{ name: "", designation: "", mobile: "", email: "" }],
          bankDetails: { accountName: "", bankName: "", accountNumber: "", ifscCode: "" }
        });
      } else {
        setError(data.message || "Failed to create supplier");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactPersonChange = (index: number, field: keyof ContactPerson, value: string) => {
    setFormData(prev => ({
      ...prev,
      contactPersons: prev.contactPersons.map((person, i) => 
        i === index ? { ...person, [field]: value } : person
      )
    }));
  };

  const addContactPerson = () => {
    setFormData(prev => ({
      ...prev,
      contactPersons: [...prev.contactPersons, { name: "", designation: "", mobile: "", email: "" }]
    }));
  };

  const removeContactPerson = (index: number) => {
    if (formData.contactPersons.length > 1) {
      setFormData(prev => ({
        ...prev,
        contactPersons: prev.contactPersons.filter((_, i) => i !== index)
      }));
    }
  };

  const handleBankDetailsChange = (field: keyof BankDetails, value: string) => {
    setFormData(prev => ({
      ...prev,
      bankDetails: { ...prev.bankDetails, [field]: value }
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Add New Supplier</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Row 1: Supplier Name, Printed Name, Supplier Category */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Supplier Name</label>
              <input
                type="text"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                placeholder="Enter Supplier Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Please enter name of the supplier.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Printed Name</label>
              <input
                type="text"
                name="printedName"
                value={formData.printedName}
                onChange={handleChange}
                placeholder="Enter Print Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Please enter name to be printed.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Supplier Category</label>
              <select
                name="supplierCategory"
                value={formData.supplierCategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Supplier Type</option>
                <option value="Raw Material">Raw Material</option>
                <option value="Finished Goods">Finished Goods</option>
                <option value="Services">Services</option>
                <option value="Equipment">Equipment</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Please select the appropriate category.</p>
            </div>

            {/* Row 2: Address Line 1, Address Line 2, City, Pincode */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Address Line 1</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="Enter Address Line 1"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Enter Address Line 2"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter City"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter Pincode"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Row 3: GSTIN, GSTIN Type, State, Country */}
            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">GSTIN</label>
              <input
                type="text"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                placeholder="Enter GSTIN"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">GSTIN Type</label>
              <select
                name="gstinType"
                value={formData.gstinType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Registered/Regular</option>
                <option value="Regular">Regular</option>
                <option value="Unregistered">Unregistered</option>
                <option value="Composition">Composition</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
          </div>

          {/* Contact Persons Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-blue-600">Contact Persons</label>
              <button
                type="button"
                onClick={addContactPerson}
                className="flex items-center text-sm text-blue-600 hover:text-blue-700"
              >
                <Plus size={16} className="mr-1" />
                Add
              </button>
            </div>

            {formData.contactPersons.map((person, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 p-4 border rounded-lg">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={person.name}
                    onChange={(e) => handleContactPersonChange(index, 'name', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Designation"
                    value={person.designation}
                    onChange={(e) => handleContactPersonChange(index, 'designation', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile"
                    value={person.mobile}
                    onChange={(e) => handleContactPersonChange(index, 'mobile', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={person.email}
                    onChange={(e) => handleContactPersonChange(index, 'email', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  {formData.contactPersons.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeContactPerson(index)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bank Details Section */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-blue-600 mb-4">Bank Details</label>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Account Name"
                  value={formData.bankDetails.accountName}
                  onChange={(e) => handleBankDetailsChange('accountName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Name</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Bank Name"
                  value={formData.bankDetails.bankName}
                  onChange={(e) => handleBankDetailsChange('bankName', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Bank</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Account Number"
                  value={formData.bankDetails.accountNumber}
                  onChange={(e) => handleBankDetailsChange('accountNumber', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Account Number</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter IFSC Code"
                  value={formData.bankDetails.ifscCode}
                  onChange={(e) => handleBankDetailsChange('ifscCode', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">IFSC Code</p>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-4 mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
