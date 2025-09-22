import ContactFormElement from "@/components/contact/ContactFormElement";
import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TeamFormElement from "@/components/team/TeamFormElement";
import { FieldsType } from "@/lib/types/types";
import { ContactFormType } from "@/lib/validation/contactFormValidation";
import React from "react";

const fields: FieldsType<ContactFormType>[] = [
  {
    id: "first_name",
    label: "First Name",
    type: "text",
  },
  {
    id: "last_name",
    label: "Last Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "phone_number",
    label: "Phone Number",
    type: "tel",
  },
  {
    id: "date_of_birth",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "gender",
    label: "Gender",
    type: "select",
  },
];

const AddNewContact = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="Add New Contact" />

      <ContactFormElement fields={fields} />
    </DashboardLayout>
  );
};

export default AddNewContact;
