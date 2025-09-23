"use client";

import { useTodo } from "@/store/useTodo";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";

interface TitleHeaderProps {
  title: string;
  btnTitle?: string;
  showBtn?: boolean;
  href?: string;
  addTodo?: boolean;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
  btnTitle,
  showBtn = false,
  href,
  addTodo,
}) => {
  const todoStore = useTodo();

  useEffect(() => {
    todoStore.resetChecked();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ mb: "23px", display: "flex", alignItems: "center" }}>
        <Typography variant="h1">{title}</Typography>
      </Box>

      {showBtn && (
        <Button
          LinkComponent={Link}
          variant="contained"
          color="secondary"
          href={href}
          sx={{ maxWidth: "155px", height: "48px" }}
          onClick={() => {
            if (addTodo) {
              todoStore.handleAddTodo(todoStore.value);
            }
          }}
        >
          <Typography component={"span"} variant="button">
            {btnTitle}
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default TitleHeader;
