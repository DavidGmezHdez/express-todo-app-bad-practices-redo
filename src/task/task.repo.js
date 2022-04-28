import { items } from "../database";

export default class TaskRepository {
  static getAll() {
    return items;
  }

  static get(id) {
    return items.find((item) => item.id === id);
  }

  static create(task) {
    const nextIndex = items[items.length].index++;
    items.push({
      index: nextIndex,
      value: task.value,
      done: false,
    });
    return items;
  }
  static update(id, task) {
    items = items.map((item) => {
      if (item.id === id) return { ...item, ...task };
      else return item;
    });
    return items;
  }

  static destroy(id) {
    items = items.map((item) => item.id !== id);
    return items;
  }
}
