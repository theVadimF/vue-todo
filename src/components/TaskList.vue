<template>
  <div class="task_list">
    <TaskItem v-for="(item, id) in store.tasks" :taskName="item.name" :id="id" :taskCompleted="item.completed" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useTaskStore } from '../stores/taskStore.ts'
import TaskItem from './TaskItem.vue'

const store = useTaskStore();

</script>

<style scoped lang="scss">
.task_list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
