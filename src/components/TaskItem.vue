<template>
  <div class="task_item" v-if="!edit_mode">
    <input type="checkbox" name="" :checked="taskCompleted" @change="store.toggleDone(id)">
    <span class="task_name">{{taskName}}</span>
    <div class="controls">
      <button @click="toggleEditMode">Edit</button>
      <button @click="store.removeTask(id)">Delete</button>
    </div>
  </div>
  <div v-else class="task_item">
    <input type="checkbox" name="" :checked="taskCompleted" disabled>
    <input type="text" v-model="edited_name">
    <div class="controls">
      <button @click="saveChanges">Save</button>
      <button @click="toggleEditMode">Cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useTaskStore } from '../stores/taskStore.ts'

const store = useTaskStore();
const edit_mode: Ref<boolean> = ref(false);
const edited_name: Ref<string> = ref("")

const toggleEditMode = () => {
  edited_name.value = props.taskName;
  edit_mode.value = !edit_mode.value;
}

const saveChanges = () => {
  store.editTask(props.id, edited_name);
  edit_mode.value = false;
}

const props = defineProps({
  id: Number,
  taskCompleted: Boolean,
  taskName: String
})

</script>

<style scoped>

</style>
