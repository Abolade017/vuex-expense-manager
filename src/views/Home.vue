<template>
  <div class="home">
    <Expenses />
  </div>
</template>

<script>
// @ is an alias to /src
import Expenses from '@/components/Expenses.vue'

export default {
  name: 'Home',
  components: {
    Expenses
  }
}
</script>
