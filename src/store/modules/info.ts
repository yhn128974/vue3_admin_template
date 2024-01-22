// 定义info仓库

import { defineStore } from "pinia";

// 第一个参数为厂库名。第二个为配置对象
// 该方法会返回一个函数，该函数的作用就是用于接收该厂库的数据
let UseInfoStore = defineStore("info", {
  // 函数式写法
  state: () => {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 7, 8],
    };
  },

  actions: {
    // actions 函数没有上下文对象
    // 没有commit,mutation去修改数据
    changeCount(num1: number, num2: number): void {
      this.count = num1 + num2;
    },
  },
  getters: {
    total(): number {
      return this.arr.reduce((prev: number, next: number) => {
        return prev + next;
      }, 0);
    },
  },
});

// 对外暴露该方法
export default UseInfoStore;
