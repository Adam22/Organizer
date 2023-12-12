<template>
  <div class="home">
    <HomeComponent msg="Welcome to Your Vue.js + TypeScript App" />
    <TaskList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeComponent from "@/components/HomeComponent.vue";
import TaskList from "@/components/TaskList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeComponent,
    TaskList,
  },
});
</script>
