import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cartItemRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();


const app = express();

// CORS configuration
// Allow both localhost and your Vercel frontend
const allowedOrigins = [
  "http://localhost:3000",
  "https://checkout-frontend-omega.vercel.app"
];

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use("/api/cart", cartItemRoutes);
app.use("/api/orders", orderRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));




