"use client";

import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AddTodoInput from "@/components/todo/AddTodoInput";
import TodoListCard from "@/components/todo/TodoListCard";
import { generateId } from "@/lib/helpers/generateId";
import { TodoItem } from "@/lib/types/types";
import React, { useState } from "react";

const AddNewTodo = () => {
  const [value, setValue] = useState<string>("");

  const [_, setTodoList] = useState<TodoItem[]>([
    {
      id: generateId(),
      todoTitle: "Meeting with CEO",
    },
    {
      id: generateId(),
      todoTitle: "Pick up kids from school",
    },
  ]);

  const reset = () => {
    setValue("");
  };

  const handleAddTodo = () => {
    setTodoList((prev) => [...prev, { id: generateId(), todoTitle: value }]);
    reset();
  };

  return (
    <DashboardLayout>
      <TitleHeader
        title="Add New To-Do"
        btnTitle="Save"
        showBtn
        onClick={handleAddTodo}
      />
      <AddTodoInput />
      <TodoListCard />
    </DashboardLayout>
  );
};

export default AddNewTodo;
