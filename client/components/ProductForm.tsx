import { useState } from "react";
import { X } from "lucide-react";
import { ProductRequest, EntityResponse } from "@shared/entities";

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ProductForm({ isOpen, onClose, onSuccess }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductRequest>({
    productName: "",
    groupName: "",
    description: "",
    alias: "",
    reorderPoint: 0,
    productCategory: "",
    subCategory: "",
    openingStock: 0,
    unit: "",
    costPrice: 0,
    salePrice: 0,
    tax: "",
    hsn: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/products", {
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
        setFormData({
          productName: "",
          groupName: "",
          description: "",
          alias: "",
          reorderPoint: 0,
          productCategory: "",
          subCategory: "",
          openingStock: 0,
          unit: "",
          costPrice: 0,
          salePrice: 0,
          tax: "",
          hsn: ""
        });
      } else {
        setError(data.message || "Failed to create product");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Price') || name.includes('Stock') || name === 'reorderPoint' 
        ? parseFloat(value) || 0 
        : value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Add New Product</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Please enter name of the product.</p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Product Description"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Please enter description of the product.</p>
              </div>

              {/* Product Category */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Product Category</label>
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Raw Materials">Raw Materials</option>
                  <option value="Finished Goods">Finished Goods</option>
                  <option value="Work in Progress">Work in Progress</option>
                  <option value="Consumables">Consumables</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Please select the appropriate category.</p>
              </div>

              {/* Cost Price */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Cost Price</label>
                <input
                  type="number"
                  name="costPrice"
                  value={formData.costPrice}
                  onChange={handleChange}
                  placeholder="Enter cost price"
                  step="0.01"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Please enter cost price.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Group Name */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Group Name</label>
                <select
                  name="groupName"
                  value={formData.groupName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Group</option>
                  <option value="Group A">Group A</option>
                  <option value="Group B">Group B</option>
                  <option value="Group C">Group C</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Please enter group name of the product.</p>
              </div>

              {/* Alias and Reorder Point */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">Alias</label>
                  <input
                    type="text"
                    name="alias"
                    value={formData.alias}
                    onChange={handleChange}
                    placeholder="Product Alias"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please enter alias name of the product.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">Reorder Point</label>
                  <input
                    type="number"
                    name="reorderPoint"
                    value={formData.reorderPoint}
                    onChange={handleChange}
                    placeholder="Reorder Point"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please enter the ROP.</p>
                </div>
              </div>

              {/* Sub Category */}
              <div>
                <label className="block text-sm font-medium text-blue-600 mb-2">Sub Category</label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Sub Category</option>
                  <option value="Sub A">Sub A</option>
                  <option value="Sub B">Sub B</option>
                  <option value="Sub C">Sub C</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Please select the appropriate sub category.</p>
              </div>

              {/* Opening Stock and Unit */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">Opening Stock</label>
                  <input
                    type="number"
                    name="openingStock"
                    value={formData.openingStock}
                    onChange={handleChange}
                    placeholder="Enter Opening Stock"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please enter opening stock.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">Unit</label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Unit</option>
                    <option value="PCS">PCS</option>
                    <option value="KG">KG</option>
                    <option value="METER">METER</option>
                    <option value="LITER">LITER</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Please select the unit.</p>
                </div>
              </div>

              {/* Sale Price, Tax, HSN */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">Sale Price</label>
                  <input
                    type="number"
                    name="salePrice"
                    value={formData.salePrice}
                    onChange={handleChange}
                    placeholder="Enter sale price"
                    step="0.01"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please enter sale price.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">Tax</label>
                  <select
                    name="tax"
                    value={formData.tax}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Tax</option>
                    <option value="GST 5%">GST 5%</option>
                    <option value="GST 12%">GST 12%</option>
                    <option value="GST 18%">GST 18%</option>
                    <option value="GST 28%">GST 28%</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Please select tax category.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-600 mb-2">HSN</label>
                  <input
                    type="text"
                    name="hsn"
                    value={formData.hsn}
                    onChange={handleChange}
                    placeholder="Enter HSN code"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please hsn code.</p>
                </div>
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
