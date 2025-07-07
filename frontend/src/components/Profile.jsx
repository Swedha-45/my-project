import React, { useEffect, useState } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    axios.get("http://127.0.0.1:8000/api/auth/users/me/", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setProfile(res.data))
    .catch(() => alert("Session expired. Please login again."));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  if (!profile) return <Typography align="center">Loading profile...</Typography>;

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" gutterBottom>Profile</Typography>
      <Typography><strong>Username:</strong> {profile.username}</Typography>
      <Typography><strong>Role:</strong> {profile.role}</Typography>
      <Button variant="outlined" sx={{ mt: 2, mb: 2 }} onClick={logout}>Logout</Button>
      <Divider sx={{ my: 3, borderColor: "#1976d2" }} />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Ratings and feedback features coming soon.
      </Typography>
    </Box>
  );
};

export default Profile;
