<template>
  <div class="container">
    <div v-for="task in tasks" :key="task.id" class="item">
      <label>
        <input
          type="checkbox"
          v-model="task.done"
        />
        {{ task.text }}
      </label>
      <button @click="$emit('delete', task.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: ["tasks"],
  emits: ["delete"],
}
</script>

<style scoped>
.item {
  display: flex;
  gap: 1em;
  align-items: center;
  margin-bottom: 2em;
}

label {
  font-size: 1.2em;
}

button {
  margin-left: auto;
}

input {
  margin-right: 0.5em;
}
</style>