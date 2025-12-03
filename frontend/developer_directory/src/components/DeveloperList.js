import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Typography,
  IconButton,
  Snackbar,
  Alert
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../api";
import "../styles/DeveloperList.css";

const DeveloperList = ({ developers, setDevelopers }) => {
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    let data = developers;

    if (search.trim() !== "") {
      data = data.filter(
        (d) =>
          d.techStack.toLowerCase().includes(search.toLowerCase()) ||
          d.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (roleFilter !== "") {
      data = data.filter((d) => d.role === roleFilter);
    }

    setFiltered(data);
  }, [search, roleFilter, developers]);

  // DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);

      setSnackbar({
        open: true,
        message: "Developer deleted",
        severity: "success",
      });

      // remove from UI instantly
      const updated = developers.filter((d) => d.id !== id);
      setDevelopers(updated);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Delete failed",
        severity: "error",
      });
    }
  };

  return (
    <Card className="table-card">
      <CardContent>
        <Typography variant="h6" className="table-title">
          Developers List
        </Typography>

        {/* Filters */}
        <div className="filters">
          <TextField
            label="Search by Tech / Name"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="filter-input"
          />

          <TextField
            select
            label="Filter by Role"
            variant="outlined"
            size="small"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="filter-input"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Frontend">Frontend</MenuItem>
            <MenuItem value="Backend">Backend</MenuItem>
            <MenuItem value="Full-Stack">Full-Stack</MenuItem>
          </TextField>
        </div>

        {/* Table */}
        <Table className="dev-table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Tech Stack</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filtered.map((dev) => (
              <TableRow key={dev.id?.toString() || Math.random()}>
                <TableCell>{dev.name}</TableCell>
                <TableCell>{dev.role}</TableCell>
                <TableCell>{dev.techStack}</TableCell>
                <TableCell>{dev.experience} Years</TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(dev.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={2000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
};

export default DeveloperList;
