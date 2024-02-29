import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex items-center">
      <TextField
        value={query}
        id="filled-basic"
        label="Search..."
        variant="filled"
        size="small"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="outlined"
                onClick={() => {
                  setQuery("");
                }}
              >
                X
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <IconButton onClick={handleSearch} aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </div>
  );
};

export default Search;
