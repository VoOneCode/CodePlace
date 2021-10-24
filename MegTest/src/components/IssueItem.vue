<template>
  <div class="issue_item" @click="$emit('issue-selected')">
    <span class="issue_item__id">{{ item.id }}</span>
    <span v-for="prop in item.properties" :key="'item_prop_'+prop.name" class="issue_item__info">
      {{prop.value}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'IssueItem',
  props: {
    item: Object
  },
}
</script>

<style scoped lang="scss">
  .issue_item {
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
  }
</style>
