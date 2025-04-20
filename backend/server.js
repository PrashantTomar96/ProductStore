import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // this is a middleware that allows us to access JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server Started at http://localhost:" + PORT)
}) 

