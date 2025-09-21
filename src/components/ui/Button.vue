<template>
  <button :class="['btn', className]" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  className: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
})
</script>

<style scoped>
/* button styles inherited from global .btn */
</style>
