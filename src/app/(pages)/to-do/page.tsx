import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const ToDoPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="To-Do List" btnTitle="Add New Task" showBtn />
    </DashboardLayout>
  );
};

export default ToDoPage;
