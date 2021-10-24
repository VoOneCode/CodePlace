<template>
  <div class="items-list flex-column flex-justify-start">
    <div v-if="issuesActive">
      <issue-item @issue-selected="$emit('issue-selected',item.id)" v-for="item in issues" :item="item" :key="item.id"/>
    </div>
    <div v-else> 
      <task-item @task-selected="$emit('task-selected',item.id)" v-for="item in tasks" :item="item" :users="users" :key="item.id"/>
    </div>
  </div>
</template>

<script>
import IssueItem from '@/components/IssueItem'
import TaskItem from '@/components/TaskItem'
export default {
  name: 'ItemsList',
  components: { IssueItem, TaskItem },
  props: {
    issues: Array,
    tasks: Array,
    users: Array,
    issuesActive: Boolean,
  },
  emits: ['issue-selected','task-selected'],
}
</script>

<style scoped lang="scss">
  .items-list {
    gap: 10px;
  }
</style>
