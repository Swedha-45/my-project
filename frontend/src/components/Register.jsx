import React, { useState } from "react";
import { TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "employee",
    city: "",
    skills: "",
    industry: "",
    company_size: "",
    location: "",
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/auth/users/", {
        username: form.username,
        password: form.password,
      });
      alert("Registered successfully! Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.username || "Error registering.");
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
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField label="Username" name="username" value={form.username} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
      <TextField label="Password" type="password" name="password" value={form.password} onChange={handleChange} fullWidth sx={{ mb: 2 }} required />
      <TextField label="Role" name="role" value={form.role} onChange={handleChange} select fullWidth sx={{ mb: 2 }}>
        <MenuItem value="employee">Employee</MenuItem>
        <MenuItem value="employer">Employer</MenuItem>
      </TextField>
      <TextField label="City" name="city" value={form.city} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Skills" name="skills" value={form.skills} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Industry" name="industry" value={form.industry} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Company Size" name="company_size" value={form.company_size} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <TextField label="Location" name="location" value={form.location} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, py: 1 }}>Register</Button>
    </Box>
  );
};

export default Register;
