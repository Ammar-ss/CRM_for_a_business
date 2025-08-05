import { RequestHandler } from "express";
import { ProductRequest, ClientRequest, SupplierRequest, EntityResponse, ListResponse } from "@shared/entities";
import { ProductDatabase, ClientDatabase, SupplierDatabase } from "../entities-database";

// Product Routes
export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const products = await ProductDatabase.getAllProducts();
    res.json({ success: true, data: products, total: products.length } as ListResponse<any>);
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const productData: ProductRequest = req.body;
    
    if (!productData.productName || !productData.productCategory) {
      return res.status(400).json({
        success: false,
        message: "Product name and category are required"
      } as EntityResponse<any>);
    }

    const newProduct = await ProductDatabase.createProduct(productData);
    res.status(201).json({ success: true, data: newProduct, message: "Product created successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const updateProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    
    const updatedProduct = await ProductDatabase.updateProduct(id, productData);
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" } as EntityResponse<any>);
    }

    res.json({ success: true, data: updatedProduct, message: "Product updated successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deleted = await ProductDatabase.deleteProduct(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Product not found" } as EntityResponse<any>);
    }

    res.json({ success: true, message: "Product deleted successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

// Client Routes
export const getAllClients: RequestHandler = async (req, res) => {
  try {
    const clients = await ClientDatabase.getAllClients();
    res.json({ success: true, data: clients, total: clients.length } as ListResponse<any>);
  } catch (error) {
    console.error("Get clients error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const createClient: RequestHandler = async (req, res) => {
  try {
    const clientData: ClientRequest = req.body;
    
    if (!clientData.clientName || !clientData.clientCategory) {
      return res.status(400).json({
        success: false,
        message: "Client name and category are required"
      } as EntityResponse<any>);
    }

    const newClient = await ClientDatabase.createClient(clientData);
    res.status(201).json({ success: true, data: newClient, message: "Client created successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Create client error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const updateClient: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const clientData = req.body;
    
    const updatedClient = await ClientDatabase.updateClient(id, clientData);
    if (!updatedClient) {
      return res.status(404).json({ success: false, message: "Client not found" } as EntityResponse<any>);
    }

    res.json({ success: true, data: updatedClient, message: "Client updated successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Update client error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const deleteClient: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deleted = await ClientDatabase.deleteClient(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Client not found" } as EntityResponse<any>);
    }

    res.json({ success: true, message: "Client deleted successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Delete client error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

// Supplier Routes
export const getAllSuppliers: RequestHandler = async (req, res) => {
  try {
    const suppliers = await SupplierDatabase.getAllSuppliers();
    res.json({ success: true, data: suppliers, total: suppliers.length } as ListResponse<any>);
  } catch (error) {
    console.error("Get suppliers error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const createSupplier: RequestHandler = async (req, res) => {
  try {
    const supplierData: SupplierRequest = req.body;
    
    if (!supplierData.supplierName || !supplierData.supplierCategory) {
      return res.status(400).json({
        success: false,
        message: "Supplier name and category are required"
      } as EntityResponse<any>);
    }

    const newSupplier = await SupplierDatabase.createSupplier(supplierData);
    res.status(201).json({ success: true, data: newSupplier, message: "Supplier created successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Create supplier error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const updateSupplier: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const supplierData = req.body;
    
    const updatedSupplier = await SupplierDatabase.updateSupplier(id, supplierData);
    if (!updatedSupplier) {
      return res.status(404).json({ success: false, message: "Supplier not found" } as EntityResponse<any>);
    }

    res.json({ success: true, data: updatedSupplier, message: "Supplier updated successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Update supplier error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};

export const deleteSupplier: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deleted = await SupplierDatabase.deleteSupplier(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Supplier not found" } as EntityResponse<any>);
    }

    res.json({ success: true, message: "Supplier deleted successfully" } as EntityResponse<any>);
  } catch (error) {
    console.error("Delete supplier error:", error);
    res.status(500).json({ success: false, message: "Internal server error" } as EntityResponse<any>);
  }
};
