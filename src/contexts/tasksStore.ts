import { create } from "zustand";
import { TaskType } from "../d.types";

interface TaskState {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  editTask: (id: number, updataTask: Partial<TaskType>) => void;
  removeTask: (id: number) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    { id: 1, title: "Description task", completed: false },
    { id: 2, title: "Description task 2", completed: true },
  ],
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
