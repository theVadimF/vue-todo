<template>
  <div class="task_item" :class="{__completed: taskCompleted}" v-if="!edit_mode">
    <div class="checkbox_wrap">
      <input type="checkbox" :id="id" class="checkbox_input" :checked="taskCompleted" @change="store.toggleDone(id)">
      <label class="box" :for="id">
        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z"/></svg>
      </label>
    </div>
    <div class="name_wrap">
      <span class="task_name">{{taskName}}</span>
    </div>
    <div class="controls">
      <button @click="toggleEditMode" class="ctl_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/></svg>
      </button>
      <button @click="store.removeTask(id)" class="ctl_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#de2c1f" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
      </button>
    </div>
  </div>
  <div v-else class="task_item">
    <input type="checkbox" name="" :checked="taskCompleted" disabled>
    <input type="text" v-model="edited_name" class="edit_input">
    <div class="controls">
      <button @click="saveChanges" class="ctl_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#43a047" d="M40.6 12.1L17 35.7l-9.6-9.6L4.6 29L17 41.3l26.4-26.4z"/></svg>
      </button>
      <button @click="toggleEditMode" class="ctl_btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#de2c1f" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"/></svg>
      </button>
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

<style lang="scss" scoped>
.task_item {
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;

  .name_wrap {
    width: 100%;

    .task_name {
      position: relative;
      transition: opacity 0.2s, background-size 0.2s;
      background:linear-gradient(#000,#000) left center no-repeat;
      background-size:0% 2px;
    }
  }

  &:not(:first-child) {
    border-top: 1px solid #bebebe;
  }

  &.__completed {
    .task_name {
      opacity: 0.5;
      background-size:100% 2px;
    }
  }


  .controls {
    display: flex;
    gap: 5px;
  }

  .ctl_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border: none;
    background: none;
  }

  .edit_input {
    width: 100%;
  }


  .checkbox_wrap {
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px;
      box-sizing: border-box;
      border: 1px solid #000;
      border-radius: 5px;
      font-size: 20px;

      .checkmark {
        opacity: 0;
        transition: opacity 0.2s, transform 0.2s;
        transform: scale(0.5);
      }
    }

    .checkbox_input {
      display: none;

      &:checked ~.box .checkmark {
        opacity: 1;
        transform: none;
      }
    }
  }
}




</style>
