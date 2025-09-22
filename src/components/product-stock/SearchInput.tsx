"use client";
import { useStock } from "@/store/useStock";
import { Search } from "@mui/icons-material";
import { InputAdornment, styled, TextField } from "@mui/material";
import React from "react";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    height: 38,
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    paddingRight: 0,
    "& input": {
      backgroundColor: "#FFFFFF",
    },
    "& fieldset": {
      borderColor: "#D5D5D5",
    },
    "&:hover fieldset": {
      borderColor: "#D5D5D5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D5D5D5",
    },
  },
});

const SearchInput = () => {
  const stockStore = useStock();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    stockStore.setQuery(event.target.value);
  };

  return (
    <CustomTextField
      type="search"
      placeholder="Search product name"
      value={stockStore.query}
      onChange={handleChange}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "#9E9E9E" }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
