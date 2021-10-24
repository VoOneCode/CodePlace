<template>
  <button class="btn btn-sm btn-tab" @click="$emit('btn-tab-clicked')">
    <slot>tab</slot>
  </button>
</template>

<script>
export default {
  name: 'BtnTab',
  emits: ['btn-tab-clicked']
}
</script>
