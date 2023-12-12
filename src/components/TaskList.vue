<template>
  <div>
    <div
      class="container-row task-list"
      v-for="(task, index) in taskList.list"
      :key="index"
    >
      <div class="task-list-short">
        <h3>{{ task.code }}</h3>
        <p>{{ task.summary }}</p>
      </div>
      <div class="container-column task-time">
        <label>{{ formatTime(task.start) }}</label>
        <label>{{ formatDuration(task.duration) }}</label>
        <label>{{ formatTime(task.end) }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskList from "@/models/TaskList";
import TimeSpan from "@/models/TimeSpan";
import Task from "@/models/Task";

export default defineComponent({
  setup() {
    const taskList = ref<TaskList>({
      list: Array.from({ length: 10 }, (_, i) => {
        const start = new Date();
        const end = new Date();
        end.setHours(start.getHours() + 1);

        const task = new Task(
          `TASK${i + 1}`,
          `Task summary ${i + 1}`,
          start,
          end
        );
        return task;
      }),
    });

    function formatTime(date: Date): string {
      return (
        date.getHours().toString().padStart(2, "0") +
        ":" +
        date.getMinutes().toString().padStart(2, "0")
      );
    }

    function formatDuration(duration: TimeSpan): string {
      return duration.getDurationInMinutes() + " minutes";
    }

    return { taskList, formatTime, formatDuration };
  },
});
</script>

<style scoped lang="scss">
.task-list {
  padding-top: 5px;
  padding-bottom: 5px;
}
.task-list-short {
  min-width: 240px;
  h3,
  p {
    margin: auto;
  }
}

.task-time label {
  margin: auto;
}
</style>
