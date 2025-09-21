// components/FormItem.tsx
import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React from "react";

type Props = {
  label: string;
  id: string;
  type?: "text" | "email" | "textarea";
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const AppFormItem = ({
  label,
  id,
  type = "text",
  value = "",
  onChange,
}: Props) => {
  return (
    <FormControl fullWidth>
      <FormGroup>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        {type === "textarea" ? (
          <TextareaAutosize
            id={id}
            value={value}
            onChange={onChange}
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
              flex: "1",
            }}
          />
        ) : (
          <TextField id={id} fullWidth value={value} onChange={onChange} />
        )}
      </FormGroup>
    </FormControl>
  );
};

export default AppFormItem;
