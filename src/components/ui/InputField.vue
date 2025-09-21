<template>
  <div>
    <label v-if="label" class="label">{{ label }}</label>
    <input
      :placeholder="placeholder"
      class="input"
      v-model="modelValue"
      @input="$emit('update:modelValue', modelValue)"
      :type="type"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' }
})
const emit = defineEmits(['update:modelValue'])
const modelValue = ref(props.modelValue)
watch(() => props.modelValue, v => modelValue.value = v)
</script>

<style scoped>
/* uses global .input and .label */
</style>
