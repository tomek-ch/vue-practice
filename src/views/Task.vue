<template>
  <h1>{{ task.title }}</h1>
  <p>{{ task.body }}</p>
</template>

<script>
  export default {
    name: "Task",
    props: ["tasks"],
    computed: {
      task() {
        return this.tasks.find(task => task.id === this.$route.params.id);
      },
    },
  };
</script>