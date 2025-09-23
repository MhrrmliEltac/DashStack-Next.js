"use client";
import { TodoItem, TodoState } from "@/lib/types/types";
import { useTodo } from "@/store/useTodo";
import { Star, StarBorder, Clear } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Box,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

const TodoListCard = () => {
  const todoStore: TodoState = useTodo();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {todoStore &&
        todoStore.todo.map((todo: TodoItem) => (
          <Card
            key={todo.id}
            sx={{
              height: "100%",
              maxHeight: "93px",
              borderRadius: "12px",
              p: 0,
              m: 0,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 0,
                px: "32px !important",
                py: "34px !important",
                height: "93px",
              }}
            >
              <Box>
                <Checkbox
                  value={todoStore.checked}
                  onChange={() => todoStore.handleChecked()}
                />
                <Typography component={"span"}>{todo.todoTitle}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  disableTouchRipple
                  sx={{ minWidth: "0px" }}
                  onClick={() => todoStore.handleAddFavorite(todo)}
                >
                  {todoStore.isFavorite(todo.id) ? (
                    <Star htmlColor="#FFD56D" />
                  ) : (
                    <StarBorder />
                  )}
                </Button>
                <Button
                  disableTouchRipple
                  sx={{
                    minWidth: "0px",
                  }}
                  onClick={() => todoStore.handleRemoveTodo(todo.id)}
                >
                  <Clear fontSize="small" htmlColor="#B3B3B3" />
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default TodoListCard;
