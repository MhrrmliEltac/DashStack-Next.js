"use client";
import { usePagination } from "@/store/usePagination";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const CustomIconButton = styled(IconButton)(() => ({
  margin: "0px",
  padding: "0px",
  "&:hover": { backgroundColor: "transparent" },
}));

const AppPagination = () => {
  const paginationStore = usePagination();

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      sx={{ mt: "22px" }}
    >
      <Typography
        component={"span"}
        variant="body1"
        color="rgba(32, 34, 36, 0.6)"
      >
        {`Showing ${paginationStore.prevPage + 1}-${
          paginationStore.nextPage
        } of ${paginationStore.totalPages}`}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#FAFBFD",
          maxWidth: "86px",
          height: "30px",
          borderRadius: "8px",
          px: "10px",
          py: "3px",
          display: "flex",
          gap: "6px",
          border: "1px solid #D5D5D5",
        }}
      >
        <CustomIconButton onClick={paginationStore.handlePrevPage}>
          <ChevronLeft fontSize="small" />
        </CustomIconButton>
        <Divider
          sx={{ width: "1px", height: "100%", backgroundColor: "#979797" }}
        />
        <CustomIconButton onClick={paginationStore.handleNextPage}>
          <ChevronRight fontSize="small" />
        </CustomIconButton>
      </Box>
    </Stack>
  );
};

export default AppPagination;
