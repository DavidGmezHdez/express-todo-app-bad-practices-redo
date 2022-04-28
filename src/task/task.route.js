import { Router } from "express";
import TaskController from "./task.controller";

const TaskRouter = Router();

// get all tasks
TaskRouter.get("/task", (req, res) => {
  TaskController.getAll;
});

// create a task
TaskRouter.post("/task", (req, res) => {
  TaskController.create;
});

// delete a task
TaskRouter.delete("/task/:id", (req, res) => {
  TaskController.destroy;
});

// update a task
TaskRouter.patch("/task/:id", (req, res) => {
  TaskController.update;
});

export default TaskRouter;
