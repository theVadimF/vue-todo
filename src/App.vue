<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import TaskList from "./components/TaskList.vue"
import TaskForm from './components/TaskForm.vue'
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
</script>

<template>
  <h1 class="heading">To-Do</h1>
  <div class="todo_wrapper">
    <TaskForm />
    <TaskList />
  </div>
</template>

<style scoped lang="scss">

.todo_wrapper {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 800px;
}

.heading {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  font-weight: 700;
}
</style>
