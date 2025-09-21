import TitleHeader from "@/components/heading/TitleHeader";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AppFormItem from "@/components/ui/app-form-field";
import React from "react";
import AppAvatar from "@/components/ui/app-avatar";
import AppFormButton from "@/components/ui/app-form-button";

interface FieldsType {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
}

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

      <Card
        sx={{
          maxHeight: "744px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            maxWidth: "780px",
            maxHeight: "624px",
          }}
        >
          {/* Avatar */}
          <AppAvatar title="Upload Logo" />

          {/* Form item */}
          <Grid container spacing={3}>
            {fields.map((field) => (
              <Grid
                size={{ xs: 12, md: field.type === "textarea" ? 12 : 6 }}
                key={field.id}
              >
                <AppFormItem
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  type={field.type && field.type}
                />
              </Grid>
            ))}
          </Grid>

          {/* Save form button */}
          <AppFormButton btnTitle="Save" />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default SettingsPage;
