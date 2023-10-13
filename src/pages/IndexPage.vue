<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
name: "IndexPage";
const newTask = ref("");
const addNewTask = () => {
  tasks.value.push({ title: newTask.value, done: false });
  newTask.value = "";
};
const tasks = ref([]);
const deleteTask = (taskToDelete) => {
  tasks.value = tasks.value.filter((task) => task !== taskToDelete);
};
const confirmDelete = (task) => {
  $q.dialog({
    title: "Confirm",
    message: `Would you like to delete ${task.title}`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    deleteTask(task);
    $q.notify(`${task.title} has been deleted successfully`);
  });
};
</script>
<template>
  <q-page class="bg-gray-3 column q-pa-lg">
    <div>Add Task</div>
    <div class="row q-pa-sm">
      <q-input
        v-model="newTask"
        @keyup.enter="addNewTask"
        class="col bg-white"
        label="new task"
        dense
      >
        <q-btn @click="addNewTask" round dense flat icon="add" />
        <template v-slot:before>
          <q-icon name="event" />
        </template>
      </q-input>
    </div>

    <q-list class="bg-white" separator>
      <q-item
        v-for="(task, index) in tasks"
        :key="index"
        v-ripple
        :class="{ 'done bg-blue-1': task.done }"
        @click="task.done = !task.done"
        clickable
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="primary"
            class="no-pointer-events"
            size="xs"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-capitalize">{{ task.title }} </q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="confirmDelete(task)"
            flat
            color="deep-orange"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="absolute-center">
      <!-- <q-icon name="info" size="20px" color="secondary" /> -->
      <p class="text-grey-6">No task added yet!</p>
    </div>
  </q-page>
</template>
<style lang="scss">
.done {
  .q-item__label {
    color: red;
    text-decoration: line-through;
  }
}
</style>
