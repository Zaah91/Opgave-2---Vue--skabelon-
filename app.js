Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValueGoal: "",
      priorities: [],
      enteredValuePriority: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValueGoal);
      this.enteredValueGoal = "";
    },
    addPriority(){
      this.priorities.push(this.enteredValuePriority);
      this.enteredValuePriority = "";
    },
  },
}).mount("#app");
