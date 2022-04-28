import TaskRepository from "./task.repo";

export default class TaskController {
  static getAll(res) {
    const tasks = TaskRepository.getAll();
    if (!tasks) throw new Error("No task available");
    return res.json(tasks);
  }

  static create(req, res, next) {
    const { id } = req.params;
    const task = TaskRepository.get(id);

    if (task) throw new Error("This task already exits");

    try {
      const tasks = TaskRepository.create({ ...req.body });
      return res.status(201).json(tasks);
    } catch (error) {
      return next(error);
    }
  }

  static update(req, res, next) {
    const { id } = req.params;
    const task = TaskRepository.get(id);

    if (!task) throw new Error("This task doesn't exist");

    try {
      const tasks = TaskRepository.update(id, { ...req.body });
      return res.status(201).json(tasks);
    } catch (error) {
      return next(error);
    }
  }

  static destroy(req, res, next) {
    const { id } = req.params;
    const task = TaskRepository.get(id);

    if (!task) throw new Error("This task doesn't exist");

    try {
      const tasks = TaskRepository.destroy(id);
      return res.status(200).json(tasks);
    } catch (error) {
      return next(error);
    }
  }
}
