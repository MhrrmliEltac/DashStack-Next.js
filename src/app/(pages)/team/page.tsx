import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const TeamPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader
        title="Team"
        btnTitle="Add New Member"
        href="/team/add-new-member"
        showBtn
      />
    </DashboardLayout>
  );
};

export default TeamPage;
