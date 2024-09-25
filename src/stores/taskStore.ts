import { defineStore } from "pinia";

interface taskObject {
  completed: boolean,
  name: string
}

const loadStorage = () => {
  const localData = localStorage.getItem("localTasks");
  if (localData !== null) {
    return JSON.parse(localData);
  }
  return [];
}

export const useTaskStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: loadStorage() as taskObject[],
    }
  },
  actions: {
    addTask(taskName: string) {
      this.tasks.push({
        completed: false,
        name: taskName,
      });
      localStorage.setItem("localTasks", JSON.stringify(this.tasks));
    },

    removeTask(id: number) {
      this.tasks.splice(id, 1);
      localStorage.setItem("localTasks", JSON.stringify(this.tasks));
    },

    editTask(id: number, name: string) {
      this.tasks[id].name = name;
      localStorage.setItem("localTasks", JSON.stringify(this.tasks));
    },

    toggleDone(id: number) {
      this.tasks[id].completed = !this.tasks[id].completed;
      localStorage.setItem("localTasks", JSON.stringify(this.tasks));
    },
  }
})
