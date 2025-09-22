import { theme } from "@/theme/theme";
import {
  FormControl,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  type?: "text" | "email" | "textarea" | "select" | "tel";
  control: Control<T>;
  error?: FieldErrors<T>;
};

const AppFormItem = <T extends FieldValues>({
  label,
  id,
  type = "text",
  control,
  error,
}: Props<T>) => {
  // error obyektində id varsa mesajı götür
  const hasError = error?.[id]?.message;

  const handleFocus = (
    _: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldOnChange: (value: string) => void,
    currentValue: string
  ) => {
    if (type === "tel" && !currentValue?.toString().startsWith("+994")) {
      fieldOnChange("+994");
    }
  };

  return (
    <FormControl fullWidth>
      <FormGroup>
        <FormLabel htmlFor={id}>{label}</FormLabel>

        <Controller
          name={id}
          control={control}
          defaultValue={"" as any} // T-yə görə defaultValue
          render={({ field }) =>
            type === "textarea" ? (
              <TextareaAutosize
                {...field}
                id={id}
                minRows={5}
                placeholder="Enter description..."
                style={{
                  width: "100%",
                  backgroundColor: "#F5F6FA",
                  borderRadius: "8px",
                  border: "1px solid #D5D5D5",
                  padding: "10px",
                  fontFamily: "inherit",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />
            ) : type === "select" ? (
              <Select
                {...field}
                fullWidth
                id={id}
                value={field.value || ""}
                onChange={field.onChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>Choose one</em>
                </MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
              </Select>
            ) : (
              <TextField
                {...field}
                id={id}
                fullWidth
                type={type}
                onFocus={(e) => handleFocus(e, field.onChange, field.value)}
              />
            )
          }
        />

        {hasError && (
          <Typography
            variant="caption"
            sx={{ color: theme.palette.error.contrastText, mt: 0.5 }}
          >
            {String(hasError)}
          </Typography>
        )}
      </FormGroup>
    </FormControl>
  );
};

export default AppFormItem;
