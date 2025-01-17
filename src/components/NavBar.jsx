// src/components/NavBar.jsx

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#172029" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DI Task 8 temporary nav bar
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/tickets">
            Tickets
          </Button>
          <Button color="inherit" component={Link} to="/skills">
            Skills
          </Button>
          <Button color="inherit" component={Link} to="/events">
            Events
          </Button>
          <Button color="inherit" component={Link} to="/contracts">
            Contracts
          </Button>
          <Button color="inherit" component={Link} to="/add-lead">
            Add Lead
          </Button>
          <Button color="inherit" component={Link} to="/tasks">
            Tasks
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
