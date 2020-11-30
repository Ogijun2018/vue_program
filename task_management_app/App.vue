<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: { // 値が変更された時とかに呼び出される
    tasks() {
      return this.$store.state.tasks
    },
  }
}
</script>