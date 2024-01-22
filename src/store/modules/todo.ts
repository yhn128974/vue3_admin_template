import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 创建todo厂库
let useTodoStore = defineStore("todo", () => {
  let todos = ref([
    {
      id: 1,
      title: "have lunch",
    },
    {
      id: 2,
      title: "sleeping",
    },
    {
      id: 3,
      title: "working for a componey",
    },
  ]);

  let arr = ref([1, 2, 3, 4, 5]);

  const total = computed(() => {
    return arr.value.reduce((pre, next) => {
      return next + pre;
    }, 0);
  });

  const updateTodo = () => {
    todos.value.forEach((todo) => {
      todo.title = todo.title + "was update";
    });
  };

  // 务必返回一个对象，属性与方法可以提供给组件使用
  return { todos, arr, updateTodo, total };
});
export default useTodoStore;
