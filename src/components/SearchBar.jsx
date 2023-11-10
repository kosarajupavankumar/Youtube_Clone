import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      onSubmit={() => { }}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3', // Set border to 'none' to remove the rectangular border
        pl: 2,
        width:'30%',
        boxShadow: 'none',
        mr: { sm: 5 },
        display: 'flex', // Ensure the input and icon are displayed in a row
        alignItems: 'center', // Align items vertically in the center
      }}>
      <input
        className="search-bar"
        placeholder="Search.."
        value=""
        onChange={() => { }}
        style={{ border: 'none', outline: 'none', width: '150%', padding: '10px' }}
      />

      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
