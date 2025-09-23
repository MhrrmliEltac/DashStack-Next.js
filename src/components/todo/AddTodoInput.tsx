"use client";
import { TodoState } from "@/lib/types/types";
import { useTodo } from "@/store/useTodo";
import { Card, CardContent, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

const AddTodoInput = () => {
  const todoState: TodoState = useTodo();

  return (
    <Card sx={{ height: "93px", borderRadius: "12px", p: 0, m: 0, mb: "24px" }}>
      <CardContent sx={{ px: "32px", py: "27px", m: 0 }}>
        <TextField
          type="text"
          placeholder="Write Your task name here"
          sx={{ width: "50%" }}
          value={todoState.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            todoState.handleValue(e)
          }
        />
      </CardContent>
    </Card>
  );
};

export default AddTodoInput;
