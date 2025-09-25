"use client";
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

interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <CustomTextField
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
