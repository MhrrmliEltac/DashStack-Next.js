import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TodoListCard from "@/components/todo/TodoListCard";
import React from "react";

const ToDoPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="To-Do List" btnTitle="Add New Task" showBtn href="/to-do/add-new-todo" />
      <TodoListCard />
    </DashboardLayout>
  );
};

export default ToDoPage;
