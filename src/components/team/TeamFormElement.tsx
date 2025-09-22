"use client";
import { FieldsType, MemberType } from "@/lib/types/types";
import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import AppAvatar from "../ui/app-avatar";
import AppFormButton from "../ui/app-form-button";
import AppFormItem from "../ui/app-form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { memberSchema } from "@/lib/validation/memberValidation";

const TeamFormElement = ({ fields }: { fields: FieldsType[] }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<MemberType>({
    resolver: zodResolver(memberSchema),
  });

  const onSubmit: SubmitHandler<MemberType> = (data) => {
    console.log(data);
    toast.success("Team member added successfully!");
    control._reset();
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
            {fields.map((field) => (
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

export default TeamFormElement;
