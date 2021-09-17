<template>
  <NewTaskForm @add="addTask" />
  <TaskList
    :tasks="tasks"
    @delete="remove"
  />
</template>

<script>
import NewTaskForm from './components/NewTaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: {
    NewTaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    }
  },
  methods: {
    addTask(text) {
      this.tasks = [...this.tasks, {
        id: Date.now(),
        text,
        done: false,
      }];
    },
    remove(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
  watch: {
    tasks: {
      handler(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      },
      deep: true,
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 500px;
  margin: auto;
  padding: 2em;
}

button {
  padding: 0.5em 1em;
  border-radius: 5px;
  border: none;
  background-color: #ddd;
  outline: none;
  font-size: inherit;
}

button:hover {
  background-color: #ccc;
}

input:hover {
  background-color: #ccc;
}

input {
  outline: none;
  font-size: inherit;
}

input:focus-visible {
  box-shadow: 0 0 0 2px dodgerblue;
}

button:focus-visible {
  box-shadow: 0 0 0 2px dodgerblue;
}
</style>
