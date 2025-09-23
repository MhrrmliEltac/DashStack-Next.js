import { generateId } from "@/lib/helpers/generateId";
import { TodoItem, TodoState } from "@/lib/types/types";
import { ChangeEvent } from "react";
import { create } from "zustand";


export const useTodo = create<TodoState>((set, get) => ({
  todo: [
    {
      id: generateId(),
      todoTitle: "Meeting with CEO",
    },
    {
      id: generateId(),
      todoTitle: "Pick up kids from school",
    },
  ],
  favoriteTodo: [],
  value: "",
  checked: false,

  handleAddTodo(value: string) {
    set((state: TodoState) => ({
      todo: [...state.todo, { id: generateId(), todoTitle: value }],
    }));
  },

  handleRemoveTodo(id: string) {
    const filteredItem = get().todo.filter((todo) => todo.id !== id);
    set(() => ({ todo: filteredItem }));
  },

  handleAddFavorite(todo: TodoItem) {
    set((state: TodoState) => ({
      favoriteTodo: [...state.favoriteTodo, todo],
    }));
  },

  handleChecked() {
    set((state: TodoState) => ({
      checked: !state.checked,
    }));
  },

  handleValue(e: ChangeEvent<HTMLInputElement>) {
    set(() => ({
      value: e.target.value,
    }));
  },

  isFavorite(id: string) {
    return get().favoriteTodo.some((fav) => fav.id === id);
  },
}));
