<template>
  <form @submit="handleSubmit">
    <label>
      Title:
      <input v-model="title" />
    </label>
    <label>
      Body:
      <textarea v-model="body" />
    </label>
    <button :disabled="this.title || this.body">
      Add
    </button>
  </form>
</template>

<script>
  export default {
    name: "NewTask",
    emits: ["add"],
    data() {
      return {
        title: "",
        body: "",
      };
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.$emit("add", this.input);

        this.title = "";
        this.body = "";
      }
    },
  };
</script>