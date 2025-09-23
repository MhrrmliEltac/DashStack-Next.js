"use client";
import { TodoItem, TodoState } from "@/lib/types/types";
import { useTodo } from "@/store/useTodo";
import { theme } from "@/theme/theme";
import { Star, StarBorder, Clear, Delete } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Box,
  Checkbox,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";

const TodoListCard = () => {
  const todoStore: TodoState = useTodo();

  const handleCheckClick = (id: string) => {
    todoStore.handleChecked(id);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {todoStore.todo &&
        todoStore.todo.map((todo: TodoItem) => (
          <Card
            key={todo.id}
            sx={{
              height: "100%",
              maxHeight: "93px",
              borderRadius: "12px",
              p: 0,
              m: 0,
              backgroundColor: todo.checked
                ? theme.palette.secondary.main
                : "#fff",
              transition: "all 0.1s ease-in-out",
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
                transition: "all 0.1s ease-in-out",
              }}
            >
              <Box>
                <Checkbox
                  sx={{
                    color: todo.checked ? "white" : theme.palette.primary.main,
                    "&.Mui-checked": {
                      color: todo.checked
                        ? "white"
                        : theme.palette.primary.main,
                    },
                  }}
                  value={todo.checked}
                  onChange={() => handleCheckClick(todo.id)}
                />
                <Typography
                  component={"span"}
                  sx={{
                    color: todo.checked
                      ? theme.palette.common.white
                      : undefined,
                  }}
                >
                  {todo.todoTitle}
                </Typography>
              </Box>
              {todo.checked ? (
                <IconButton
                  disableTouchRipple
                  sx={{
                    maxWidth: "65px",
                    maxHeight: "40px",
                    px: "23px",
                    py: "11px",
                    backgroundColor: "#6C99FF",
                    borderRadius: "12px",
                  }}
                  onClick={() => todoStore.handleRemoveTodo(todo.id)}
                >
                  <Delete htmlColor="white" />
                </IconButton>
              ) : (
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
              )}
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default TodoListCard;
