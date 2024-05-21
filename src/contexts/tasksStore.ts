import { create } from "zustand";
import { TaskType, idType } from "../d.types";

interface TaskState {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  editTask: (id: idType, updataTask: Partial<TaskType>) => void;
  removeTask: (id: idType) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  editTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTaskStore;
