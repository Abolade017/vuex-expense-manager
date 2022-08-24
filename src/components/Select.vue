<template>
  <div>
    <select
      class="border rounded-md h-12 w-48"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option value="false">False</option>
    </select>
  </div>
</template>
<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
Footer