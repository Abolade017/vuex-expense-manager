import { createStore } from 'vuex';
let id = 0;
export default createStore({
  state: {
    newName: '',
    newAmount: '',
    newCompleted: false,
    isModalboxVisible: false,
    expenses: [
      { id: id++, name: "DSTV Sub", amount: 20, completed: false },
      { id: id++, name: "Phone Airtime", amount: 20, completed: false },
      { id: id++, name: "Data Sub", amount: 20, completed: false },
      { id: id++, name: "Food", amount: 20, completed: false },
      { id: id++, name: "Car Fuel", amount: 20, completed: false },
      { id: id++, name: "Generator Fuel", amount: 20, completed: false },
      { id: id++, name: "School Fees", amount: 20, completed: false },
      { id: id++, name: "Transport", amount: 20, completed: false },
      { id: id++, name: "Hair Do", amount: 20, completed: true },
      { id: id++, name: "Electricity fee", amount: 20, completed: false },
      { id: id++, name: "Water", amount: 20, completed: false },
    ],
  },
  getters: {
    expenses(state) {
      return state.expenses;
    },
    filteredExpenses(state) {
      return state.expenses.filter((e) => e.completed == true);
    },

  },
  mutations: {
    addExp(state) {
      console.log(state.expenses);
      return state.expenses.unshift({
        id: id++,
        name: state.newName,
        amount: state.newAmount,
        completed: state.newCompleted
      });
    },
    showModalbox(state) {
      state.isModalboxVisible = true;
    },
    deleteExp(state, expense) {
      state.expenses = state.expenses.filter((e) => e !== expense);
      state.isModalboxVisible=false;
    },

  },
  actions: {
  },
  modules: {
  }
});
