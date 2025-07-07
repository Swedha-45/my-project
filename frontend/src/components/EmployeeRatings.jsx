import React, { useEffect, useState } from "react";
import { Typography, Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import axios from "axios";

const EmployeeRatings = ({ targetId }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/ratings/${targetId}/`)
      .then(res => setRatings(res.data))
      .catch(() => console.log("No ratings found or error fetching ratings."));
  }, [targetId]);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>Received Ratings</Typography>
      {ratings.length === 0 ? (
        <Typography>No ratings found.</Typography>
      ) : (
        <List sx={{ bgcolor: "#f9f9f9", borderRadius: 2 }}>
          {ratings.map((r) => (
            <React.Fragment key={r.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={`Rating: ${r.rating} | Category: ${r.category}`}
                  secondary={`Date: ${new Date(r.created_at).toLocaleDateString()}`}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );
};

export default EmployeeRatings;
