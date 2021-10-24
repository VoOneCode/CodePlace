<template>
  <div class="task_item" @click="$emit('task-selected')">
    <span class="task_item__id">{{ item.id }}</span>
    <span class="task_item__name">{{ item.name }}</span>
    <span class="task_item__additional">{{ item.requirement }} {{ whoUser(item.user) }} </span>
    <!-- other task's properties -->
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    item: Object,
    users: Array,
  },
  methods: {
    whoUser(id){
      let name = this.users.find(el => {
        return el.id == id
      })
      let fullName = '- '+ (name.last_name ? name.last_name : ' ')
      return fullName
    },
  },
}
</script>

<style scoped lang="scss">
  .task_item {
    border: 1px solid lightgray;
    padding: 8px;
    text-align: left;
    width: 80%;
    margin: 5px auto;
    span {
      padding-right: 15px;
    }
    &__id{
      font-weight: 600;
    }
    &__name{
      font-style: italic;
    }
    &__additional{
      font-size: 0.7rem;
    }
  }
</style>
