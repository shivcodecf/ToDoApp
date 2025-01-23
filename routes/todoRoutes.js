import express from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  
  markAsCompleted,
} from "../controllers/todoController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authenticate, createTodo);
router.get("/", authenticate, getTodos);
router.put("/:id", authenticate, updateTodo);
router.delete("/:id", authenticate, deleteTodo);
router.patch("/:id/complete", authenticate, markAsCompleted);


export default router;
