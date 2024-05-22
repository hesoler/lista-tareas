import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskType, idType } from "../d.types";

interface TaskState {
  tasks: TaskType[];
  getTasks: () => Promise<void>;
  setTasks: (initialTasks: TaskType[]) => void;
  addTask: (task: TaskType) => void;
  editTask: (id: idType, updataTask: Partial<TaskType>) => void;
  removeTask: (id: idType) => void;
}

const useTaskStore = create(
  persist<TaskState>(
    (set) => ({
      tasks: [],
      getTasks: async () => {
        try {
          const response = await fetch("src/data/data.json");
          const data = await response.json();
          const { tasks } = data;
          set((state) => ({ ...state, tasks }));
        } catch (error) {
          console.error("Error:", error);
        }
      },
      setTasks: (initialTasks) => set({ tasks: initialTasks }),
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
    }),
    { name: "tasks" }
  )
);

export default useTaskStore;
