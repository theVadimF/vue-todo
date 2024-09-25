<template>
  <div class="form_wrap">
    <input type="text" class="form_input" v-model="formInput" placeholder="Задача">
    <button class="form_add" @click="addTask">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
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
      store.addTask(formInput.value);
      formInput.value = "";
    }

    return { formInput, addTask }
  }
})
</script>

<style scoped lang="scss">

.form_wrap {
  --form-border: 10px;
  display: flex;
  gap: 5px;
  padding: 6px;
  box-sizing: border-box;
  background-color: #dadada;
  border-radius: var(--form-border);
}

.form_input {
  width: 100%; 
  border-radius: var(--form-border);
  border: none;
  padding-left: 10px;
}

.form_add {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-size: 20px;
  border-radius: 100%;
  transition: background-color 0.3s;

  &:hover {
    background: #fff;
  }
}


</style>
