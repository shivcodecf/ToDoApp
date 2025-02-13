import express from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  
  // markAsCompleted,
} from "../controllers/todoController.js";
// import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create",  createTodo);

router.get("/",  getTodos);

router.put("/:id",  updateTodo);

router.delete("/:id",  deleteTodo);

// router.patch("/:id/complete", authenticate, markAsCompleted);


export default router;
