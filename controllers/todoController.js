import Todo from "../models/Todo.js";
import mongoose from "mongoose";



export const createTodo = async (req, res) => {
  try {

    const { title, description } = req.body;

    if (!title) {

      return res.status(400).json({ message: "Title is required" });

    }

    const todo = await Todo.create({ title, description });

    res.status(201).json({ message: "Todo created successfully", todo });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Server error", error });

  }

};


export const getTodos = async (req, res) => {
  try {

    const todos = await Todo.find();

    res.status(200).json({ todos });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Server error", error });

  }
};


export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description } = req.body;

  
    if (!mongoose.isValidObjectId(id)) {

      return res.status(400).json({ message: "Invalid ID format" });

    }

    const updatedTodo = await Todo.findByIdAndUpdate(

      id,
      
      { title, description },

      { new: true } 

    );


    if (!updatedTodo) {

      return res.status(404).json({ message: "Todo not found" });

    }

    res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Server error", error });

  }
};



export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params; 

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {

      return res.status(404).json({ message: "Todo not found", success: false });

    }

    res.status(200).json({ message: "Todo deleted successfully", success: true });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: "Server error", success: false });

  }
};


// export const markAsCompleted = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const todo = await Todo.findByIdAndUpdate(
//       id,
//       { isCompleted: true },
//       { new: true }
//     );

//     if (!todo) {
//       return res.status(404).json({ message: "Todo not found" });
//     }

//     res.status(200).json({ message: "Todo marked as completed", todo });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error", error });
//   }
// };
