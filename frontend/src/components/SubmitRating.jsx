import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const SubmitRating = ({ targetId }) => {
  const [rating, setRating] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://127.0.0.1:8000/api/ratings/", {
        target: targetId,
        rating,
        category,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Rating submitted successfully!");
    } catch (err) {
      alert(err.response?.data?.detail || "Error submitting rating.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        p: 3,
        boxShadow: 1,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" gutterBottom>Submit Rating</Typography>
      <TextField
        label="Rating (1-5)"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        inputProps={{ min: 1, max: 5 }}
        required
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
        required
      />
      <Button variant="contained" type="submit" fullWidth sx={{ py: 1 }}>
        Submit
      </Button>
    </Box>
  );
};

export default SubmitRating;
