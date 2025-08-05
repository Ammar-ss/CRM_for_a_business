import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleRegister, handleLogin } from "./routes/auth";
import {
  getAllProducts, createProduct, updateProduct, deleteProduct,
  getAllClients, createClient, updateClient, deleteClient,
  getAllSuppliers, createSupplier, updateSupplier, deleteSupplier
} from "./routes/entities";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Authentication routes
  app.post("/api/auth/register", handleRegister);
  app.post("/api/auth/login", handleLogin);

  // Product routes
  app.get("/api/products", getAllProducts);
  app.post("/api/products", createProduct);
  app.put("/api/products/:id", updateProduct);
  app.delete("/api/products/:id", deleteProduct);

  // Client routes
  app.get("/api/clients", getAllClients);
  app.post("/api/clients", createClient);
  app.put("/api/clients/:id", updateClient);
  app.delete("/api/clients/:id", deleteClient);

  // Supplier routes
  app.get("/api/suppliers", getAllSuppliers);
  app.post("/api/suppliers", createSupplier);
  app.put("/api/suppliers/:id", updateSupplier);
  app.delete("/api/suppliers/:id", deleteSupplier);

  return app;
}
