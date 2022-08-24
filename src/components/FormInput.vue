<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      class="border rounded-md h-12 w-48"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
