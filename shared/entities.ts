// Product Types
export interface Product {
  id: string;
  productName: string;
  groupName: string;
  description: string;
  alias: string;
  reorderPoint: number;
  productCategory: string;
  subCategory: string;
  openingStock: number;
  unit: string;
  costPrice: number;
  salePrice: number;
  tax: string;
  hsn: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductRequest {
  productName: string;
  groupName: string;
  description: string;
  alias: string;
  reorderPoint: number;
  productCategory: string;
  subCategory: string;
  openingStock: number;
  unit: string;
  costPrice: number;
  salePrice: number;
  tax: string;
  hsn: string;
}

// Client Types
export interface ContactPerson {
  name: string;
  designation: string;
  mobile: string;
  email: string;
}

export interface BankDetails {
  accountName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
}

export interface Client {
  id: string;
  clientName: string;
  printedName: string;
  clientCategory: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  gstin: string;
  gstinType: string;
  state: string;
  country: string;
  contactPersons: ContactPerson[];
  bankDetails: BankDetails;
  createdAt: string;
  updatedAt: string;
}

export interface ClientRequest {
  clientName: string;
  printedName: string;
  clientCategory: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  gstin: string;
  gstinType: string;
  state: string;
  country: string;
  contactPersons: ContactPerson[];
  bankDetails: BankDetails;
}

// Supplier Types  
export interface Supplier {
  id: string;
  supplierName: string;
  printedName: string;
  supplierCategory: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  gstin: string;
  gstinType: string;
  state: string;
  country: string;
  contactPersons: ContactPerson[];
  bankDetails: BankDetails;
  createdAt: string;
  updatedAt: string;
}

export interface SupplierRequest {
  supplierName: string;
  printedName: string;
  supplierCategory: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  gstin: string;
  gstinType: string;
  state: string;
  country: string;
  contactPersons: ContactPerson[];
  bankDetails: BankDetails;
}

// Common Response Types
export interface EntityResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface ListResponse<T> {
  success: boolean;
  message?: string;
  data?: T[];
  total?: number;
}
