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
    /* Her skal I lave en kopi af linje 11-14 og
         tilpasse kopien, så den er til priority/priorities */
  },
}).mount("#app");
