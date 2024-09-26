<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import TaskList from "./components/TaskList.vue"
import TaskForm from './components/TaskForm.vue'
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
</script>

<template>
  <div class="content_wrap">
    <h1 class="heading">Задачи</h1>
    <div class="todo_wrapper">
      <TaskForm />
      <TaskList />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content_wrap {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}


.todo_wrapper {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  color: #fff;
}

.heading {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
