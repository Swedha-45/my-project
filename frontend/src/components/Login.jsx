import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/jwt/create/", form);
      localStorage.setItem("token", res.data.access);
      alert("Login successful!");
      window.location.href = "/profile";
    } catch (err) {
      alert(err.response?.data?.detail || "Login failed.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 450,
        mx: "auto",
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField label="Username" name="username" value={form.username} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
      <TextField label="Password" type="password" name="password" value={form.password} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, py: 1 }}>Login</Button>
    </Box>
  );
};

export default Login;
