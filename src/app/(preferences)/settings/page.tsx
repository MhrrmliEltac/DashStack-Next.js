import TitleHeader from "@/components/dashboard-heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import SettingsFormElement from "@/components/settings/SettingsFormElement";
import { type FieldsType } from "@/lib/types/types";
import React from "react";

const fields: FieldsType[] = [
  { label: "Site Name", id: "site_name", type: "text" },
  { label: "Copy Right", id: "copy_right", type: "text" },
  { label: "SEO Title", id: "seo_title", type: "text" },
  { label: "SEO Keywords", id: "seo_keyword", type: "text" },
  { label: "SEO Description", id: "seo_desc", type: "textarea" },
];

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <TitleHeader title="General Settings" />
      {/* Add your form or content for adding a team member here */}{" "}
      <SettingsFormElement fields={fields} />
    </DashboardLayout>
  );
};

export default SettingsPage;
