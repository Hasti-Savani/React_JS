import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({
  path: "./.env",
});

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// DB connectionw
mongoose
  .connect(
    "mongodb+srv://savanihasti9_db_user:Hasti@1909@cluster0.kd9ywmu.mongodb.net/?appName=Cluster0",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Failed", err));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});