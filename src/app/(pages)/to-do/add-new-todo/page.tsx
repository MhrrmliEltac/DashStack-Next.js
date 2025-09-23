import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AddTodoInput from "@/components/todo/AddTodoInput";
import TodoListCard from "@/components/todo/TodoListCard";
import React from "react";

const AddNewTodo = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Add New To-Do" btnTitle="Save" showBtn addTodo />
      <AddTodoInput />
      <TodoListCard />
    </DashboardLayout>
  );
};

export default AddNewTodo;
