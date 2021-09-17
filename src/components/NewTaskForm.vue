<template>
  <form @submit="handleSubmit" class="container">
    <input v-model="input" placeholder="New task" />
    <button :disabled="!input">Add</button>
  </form>
</template>

<script>
export default {
  name: "NewTaskForm",
  props: ["addTask"],
  emits: ["add"],
  data() {
    return {
      input: "",
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("add", this.input);
      this.input = "";
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  gap: 1em;
}

input {
  flex-grow: 1;
  padding: 0.5em;
  border: none;
  background-color: lightgray;
  border-radius: 5px;
  font-size: inherit;
  outline: none;
  flex-shrink: 1;
  width: 0;
}
</style>