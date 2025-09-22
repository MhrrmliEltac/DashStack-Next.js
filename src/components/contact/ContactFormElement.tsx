"use client";
import { FieldsType } from "@/lib/types/types";
import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import AppAvatar from "../ui/app-avatar";
import AppFormButton from "../ui/app-form-button";
import AppFormItem from "../ui/app-form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
  contactFormSchema,
  ContactFormType,
} from "@/lib/validation/contactFormValidation";

const ContactFormElement = ({
  fields,
}: {
  fields: FieldsType<ContactFormType>[];
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormType> = (data) => {
    console.log(data);
    toast.success("Team member added successfully!");
    reset();
  };

  return (
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
          maxHeight: "654px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Avatar */}
          <AppAvatar title="Upload Logo" />

          {/* Form item */}
          <Grid container spacing={3}>
            {fields.map((field: FieldsType<ContactFormType>) => (
              <Grid
                size={{ xs: 12, md: field.type === "textarea" ? 12 : 6 }}
                key={field.id}
              >
                <AppFormItem
                  id={field.id}
                  label={field.label}
                  type={field.type && field.type}
                  control={control}
                  error={errors}
                />
              </Grid>
            ))}
          </Grid>

          {/* Save form button */}
          <AppFormButton btnTitle="Save" />
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactFormElement;
