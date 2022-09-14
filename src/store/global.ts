import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment(val: number) {
      this.count += val;
    },
    reset() {
      this.count = 0;
    },
  },
  getters: {
    nextCountValue: (state) => state.count + 1,
  },
});
