<template>
  <div class="form_wrap">
    <input type="text" class="form_input" v-model="formInput" placeholder="Название задачи" @keydown.enter="addTask">
    <button class="form_add" @click="addTask" :disabled="formInput.replaceAll(' ', '').length == 0">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#fff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTaskStore } from "../stores/taskStore.ts"

export default defineComponent({
  setup () {
    const formInput: Ref<string> = ref("");
    const store = useTaskStore();

    function addTask() {
      if (formInput.value.replaceAll(' ', '').length > 0) {
        store.addTask(formInput.value);
        formInput.value = "";
      }
    }

    return { formInput, addTask }
  }
})
</script>

<style scoped lang="scss">

.form_wrap {
  --form-border: 20px;
  display: flex;
  gap: 5px;
  padding: 6px;
  box-sizing: border-box;
  border-radius: var(--form-border);
  transition: box-shadow 0.3s, outline 0.3s;
  outline: 1px solid #616161;
  &:has(.form_input:focus) {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8);
    outline: 3px solid #616161;
  }
}

.form_input {
  width: 100%; 
  border-radius: var(--form-border);
  border: none;
  padding-left: 10px;
  background: none;
  color: #fff;
  outline: none;
}

.form_add {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-size: 20px;
  border-radius: 100%;
  transition: background-color 0.3s, opacity 0.3s;

  &:disabled {
    opacity: 0.5;
    &:hover {
      background: none;
    }

  }

  &:hover {
    background: rgba($color: #fff, $alpha: 0.3);
  }
}


</style>
