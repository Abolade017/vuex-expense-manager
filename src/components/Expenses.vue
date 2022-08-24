<template>
  <div class="mx-10 md:px-24">
    <form action="" @submit.prevent="">
      <label for="" class="py-2">expense name</label><br />
      <FormInput v-model="$store.state.newName" />
      <label for="" class="py-2">expense amount</label><br />
      <FormInput v-model.number="$store.state.newAmount" />
      <label for="">completed</label><br />
      <Select v-model="$store.state.newCompleted" />

      <button
        @click="addExp"
        class="bg-blue-900 text-white h-6 rounded-sm mt-4 w-20"
      >
        Add Expenses
      </button>
    </form>

    <div class="flex justify-between items-center py-6">
      <h1 class="text-blue-700 text-lg md:text-xl font-bold">All Expenses</h1>
      <h1 class="text-blue-700 text-lg md:text-xl font-bold">Amount</h1>
    </div>
    <div class="text-left">
      <div
        class="flex text-blue-900 text-opacity-72 justify-between items-start text-md md:text-lg"
        :class="{ completed: expense.completed }"
        v-for="expense in expenses"
        :key="expense.id"
      >
        <div>
          <input
            type="checkbox"
            id=""
            :name="expense.name"
            v-model="expense.completed"
          />
          <span>{{ expense.name }} </span>
        </div>

        <div class="text-left">${{ expense.amount }}</div>
      </div>

      <div class="bg-blue-900 text-white h-10 text-center my-8">
        <h1 class="py-2">Completed</h1>
      </div>
      <div class="flex justify-between items-center py-6">
        <h1 class="text-blue-700 text-lg md:text-xl font-bold">All Expenses</h1>
        <h1 class="text-blue-700 text-lg md:text-xl font-bold">Amount</h1>
      </div>
      <div class="" v-for="expense in filteredExpenses" :key="expense.id">
        <div
          class="flex text-blue-900 text-opacity-72 justify-between items-center text-md md:text-lg"
        >
          <button @click="isModalboxVisible = true">
            <div class="">{{ expense.name }}</div>
          </button>
          <button @click="isModalboxVisible = true">
            <div class="">${{ expense.amount }}</div>
          </button>

          <modal-box
            v-show="isModalboxVisible"
            @close="isModalboxVisible = false"
            @delete-expenses="deleteCompletedExp(expense)"
          >
            <template v-slot:body>
              <p
                class="font-bold text-lg flex justify-center items-center py-6"
              >
                Are you sure that you want to delete this?
              </p>
            </template>
            <template v-slot:footer>
              <div class="mt-4 absolute bottom-10 left-10 right-10">
                <div class="flex justify-center items-center space-x-10">
                  <Button
                    class="rounded-sm h-12 w-36 text-white bg-blue-900 opacity-80"
                    @click="deleteExp(expense)"
                    >Yes</Button
                  >
                  <Button
                    class="rounded-sm h-12 w-36 text-white bg-red-900 opacity-80"
                    @click="hideModalBox"
                    >No</Button
                  >
                </div>
              </div>
            </template>
          </modal-box>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let id = 0;
import ModalBox from "@/components/ModalBox.vue";
import Button from "@/components/Button.vue";
import FormInput from "./FormInput.vue";
import Select from "./Select";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Expenses",
  props: {},
  components: { ModalBox, Button, FormInput, Select },
  data() {
    return {
      isComplete: false,
      isModalboxVisible: false,
    };
  },
  computed: {
    ...mapGetters(["expenses", "filteredExpenses"]),
  },
  methods: {
    ...mapMutations(["addExp", "showModalbox", "deleteExp"]),
    hideModalBox() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
