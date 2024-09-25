import { defineStore } from "pinia";

interface taskObject {
  completed: boolean,
  name: string
}

export const useTaskStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [] as taskObject[],
      id: 0,
    }
  },
  actions: {
    addTask(taskName: string) {
      this.tasks.push({
        completed: false,
        name: taskName,
      });
    },

    removeTask(id: number) {
      this.tasks.splice(id, 1);
    },

    editTask(id: number, name: string) {
      this.tasks[id].name = name;
    },

    toggleDone(id: number) {
      this.tasks[id].completed = !this.tasks[id].completed;
    },

    loadLocalstore() {
    }
  }
})
