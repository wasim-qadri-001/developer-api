import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert, Box, MenuItem } from "@mui/material";
import api from "../api";
import "../styles/DeveloperForm.css";

const DeveloperForm = ({ onAdd }) => {
  const [developer, setDeveloper] = useState({
    name: "",
    role: "",
    techStack: "",
    experience: ""
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setDeveloper({ ...developer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("", developer);
      onAdd(res.data);

      setSnackbar({
        open: true,
        message: "Developer added successfully!",
        severity: "success",
      });

      setDeveloper({
        name: "",
        role: "",
        techStack: "",
        experience: ""
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Validation error!",
        severity: "error",
      });
    }
  };

  return (
    <Box component="form" className="developer-form" onSubmit={handleSubmit}>

      <TextField
        label="Name"
        name="name"
        value={developer.name}
        onChange={handleChange}
        required
      />

      {/* ✅ ROLE DROPDOWN ADDED HERE */}
      <TextField
        select
        label="Role"
        name="role"
        value={developer.role}
        onChange={handleChange}
        required
      >
        <MenuItem value="Frontend">Frontend</MenuItem>
        <MenuItem value="Backend">Backend</MenuItem>
        <MenuItem value="Full-Stack">Full-Stack</MenuItem>
      </TextField>

      <TextField
        label="Tech Stack"
        name="techStack"
        value={developer.techStack}
        onChange={handleChange}
        required
      />

      <TextField
        type="number"
        label="Experience (years)"
        name="experience"
        value={developer.experience}
        onChange={handleChange}
        required
      />

      <Button variant="contained" color="primary" type="submit">
        Add Developer
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default DeveloperForm;
