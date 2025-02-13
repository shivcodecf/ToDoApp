import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import todoRoutes from "./routes/todoRoutes.js";


dotenv.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/todos", todoRoutes);




const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error(err));
