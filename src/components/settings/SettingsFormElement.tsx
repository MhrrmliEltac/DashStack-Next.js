"use client";
import AppAvatar from "@/components/ui/app-avatar";
import AppFormButton from "@/components/ui/app-form-button";
import AppFormItem from "@/components/ui/app-form-field";
import { useForm, SubmitHandler } from "react-hook-form";
import { FieldsType, type SettingsType } from "@/lib/types/types";
import { settingSchema } from "@/lib/validation/settingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, Grid } from "@mui/material";
import toast from "react-hot-toast";

const SettingsFormElement = ({ fields }: { fields: FieldsType[] }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SettingsType>({
    resolver: zodResolver(settingSchema),
  });

  const onSubmit: SubmitHandler<SettingsType> = (data) => {
    toast.success("Settings updated successfully!");
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

export default SettingsFormElement;
