import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TeamFormElement from "@/components/team/TeamFormElement";
import { FieldsType, MemberType } from "@/lib/types/types";
import React from "react";

const fields: FieldsType<MemberType>[] = [
  { label: "First Name", id: "first_name", type: "text" },
  { label: "Last Name", id: "last_name", type: "text" },
  { label: "Your email", id: "email", type: "email" },
  { label: "Position", id: "position", type: "text" },
  { label: "Phone Number", id: "phone_number", type: "tel" },
  { label: "Gender", id: "gender", type: "select" },
];

const AddTeamMember = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Add Team Member" />

      {/* Add your form or content for adding a team member here */}
      <TeamFormElement fields={fields} />
    </DashboardLayout>
  );
};

export default AddTeamMember;
