<template>
  <div class="task_list" v-for="(item, id) in store.tasks">
    <TaskItem :taskName="item.name" :id="id" :taskCompleted="item.completed" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useTaskStore } from '../stores/taskStore.ts'
import TaskItem from './TaskItem.vue'

const store = useTaskStore();

</script>

<style scoped>

</style>
