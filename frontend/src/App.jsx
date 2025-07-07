import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Employee & Employer Portal
          </Typography>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
