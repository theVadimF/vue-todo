<template>
  <div class="form_wrap">
    <input type="text" class="form_input" v-model="formInput">
    <button class="form_add" @click="addTask">Add</button>
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
  display: flex;
  gap: 5px;
}

</style>
