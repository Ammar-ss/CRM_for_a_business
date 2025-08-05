import { Product, Client, Supplier } from "@shared/entities";
import fs from "fs";
import path from "path";

const PRODUCTS_FILE = path.join(process.cwd(), "products.json");
const CLIENTS_FILE = path.join(process.cwd(), "clients.json");
const SUPPLIERS_FILE = path.join(process.cwd(), "suppliers.json");

// Initialize database files if they don't exist
[PRODUCTS_FILE, CLIENTS_FILE, SUPPLIERS_FILE].forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify([], null, 2));
  }
});

export class ProductDatabase {
  private static getProducts(): Product[] {
    try {
      const data = fs.readFileSync(PRODUCTS_FILE, "utf-8");
      return JSON.parse(data) as Product[];
    } catch {
      return [];
    }
  }

  private static saveProducts(products: Product[]): void {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
  }

  static async getAllProducts(): Promise<Product[]> {
    return this.getProducts();
  }

  static async getProductById(id: string): Promise<Product | null> {
    const products = this.getProducts();
    return products.find(product => product.id === id) || null;
  }

  static async createProduct(productData: Omit<Product, "id" | "createdAt" | "updatedAt">): Promise<Product> {
    const products = this.getProducts();
    const newProduct: Product = {
      id: Date.now().toString(),
      ...productData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    products.push(newProduct);
    this.saveProducts(products);
    return newProduct;
  }

  static async updateProduct(id: string, productData: Partial<Omit<Product, "id" | "createdAt">>): Promise<Product | null> {
    const products = this.getProducts();
    const index = products.findIndex(product => product.id === id);
    
    if (index === -1) return null;
    
    products[index] = {
      ...products[index],
      ...productData,
      updatedAt: new Date().toISOString(),
    };
    
    this.saveProducts(products);
    return products[index];
  }

  static async deleteProduct(id: string): Promise<boolean> {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => product.id !== id);
    
    if (filteredProducts.length === products.length) return false;
    
    this.saveProducts(filteredProducts);
    return true;
  }
}

export class ClientDatabase {
  private static getClients(): Client[] {
    try {
      const data = fs.readFileSync(CLIENTS_FILE, "utf-8");
      return JSON.parse(data) as Client[];
    } catch {
      return [];
    }
  }

  private static saveClients(clients: Client[]): void {
    fs.writeFileSync(CLIENTS_FILE, JSON.stringify(clients, null, 2));
  }

  static async getAllClients(): Promise<Client[]> {
    return this.getClients();
  }

  static async getClientById(id: string): Promise<Client | null> {
    const clients = this.getClients();
    return clients.find(client => client.id === id) || null;
  }

  static async createClient(clientData: Omit<Client, "id" | "createdAt" | "updatedAt">): Promise<Client> {
    const clients = this.getClients();
    const newClient: Client = {
      id: Date.now().toString(),
      ...clientData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    clients.push(newClient);
    this.saveClients(clients);
    return newClient;
  }

  static async updateClient(id: string, clientData: Partial<Omit<Client, "id" | "createdAt">>): Promise<Client | null> {
    const clients = this.getClients();
    const index = clients.findIndex(client => client.id === id);
    
    if (index === -1) return null;
    
    clients[index] = {
      ...clients[index],
      ...clientData,
      updatedAt: new Date().toISOString(),
    };
    
    this.saveClients(clients);
    return clients[index];
  }

  static async deleteClient(id: string): Promise<boolean> {
    const clients = this.getClients();
    const filteredClients = clients.filter(client => client.id !== id);
    
    if (filteredClients.length === clients.length) return false;
    
    this.saveClients(filteredClients);
    return true;
  }
}

export class SupplierDatabase {
  private static getSuppliers(): Supplier[] {
    try {
      const data = fs.readFileSync(SUPPLIERS_FILE, "utf-8");
      return JSON.parse(data) as Supplier[];
    } catch {
      return [];
    }
  }

  private static saveSuppliers(suppliers: Supplier[]): void {
    fs.writeFileSync(SUPPLIERS_FILE, JSON.stringify(suppliers, null, 2));
  }

  static async getAllSuppliers(): Promise<Supplier[]> {
    return this.getSuppliers();
  }

  static async getSupplierById(id: string): Promise<Supplier | null> {
    const suppliers = this.getSuppliers();
    return suppliers.find(supplier => supplier.id === id) || null;
  }

  static async createSupplier(supplierData: Omit<Supplier, "id" | "createdAt" | "updatedAt">): Promise<Supplier> {
    const suppliers = this.getSuppliers();
    const newSupplier: Supplier = {
      id: Date.now().toString(),
      ...supplierData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    suppliers.push(newSupplier);
    this.saveSuppliers(suppliers);
    return newSupplier;
  }

  static async updateSupplier(id: string, supplierData: Partial<Omit<Supplier, "id" | "createdAt">>): Promise<Supplier | null> {
    const suppliers = this.getSuppliers();
    const index = suppliers.findIndex(supplier => supplier.id === id);
    
    if (index === -1) return null;
    
    suppliers[index] = {
      ...suppliers[index],
      ...supplierData,
      updatedAt: new Date().toISOString(),
    };
    
    this.saveSuppliers(suppliers);
    return suppliers[index];
  }

  static async deleteSupplier(id: string): Promise<boolean> {
    const suppliers = this.getSuppliers();
    const filteredSuppliers = suppliers.filter(supplier => supplier.id !== id);
    
    if (filteredSuppliers.length === suppliers.length) return false;
    
    this.saveSuppliers(filteredSuppliers);
    return true;
  }
}
