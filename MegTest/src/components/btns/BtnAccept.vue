<template>
  <button class="btn btn-sm btn-accept" @click="$emit('btn-accept-clicked')">
    <slot>Accept</slot>
  </button>
</template>

<script>
export default {
  name: 'BtnAccept',
  emits: ['btn-accept-clicked']
}
</script>
