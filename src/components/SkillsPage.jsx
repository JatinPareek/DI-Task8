import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const columns = [
  {
    field: "subject",
    headerName: "Subject",
    width: 200,
    headerClassName: "header-text",
    flex: 1,
    align: "center",
    headerAlign: "center",
    cellClassName: "cell-padding",
  },
  {
    field: "Action",
    headerName: "Action",
    width: 200,
    headerClassName: "header-text",
    flex: 1,
    align: "right",
    headerAlign: "right",
    cellClassName: "cell-padding",
    renderCell: (params) => {
      return (
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      );
    },
  },
];

const rowsData = [
  { id: 1, subject: "Wordpress" },
  { id: 2, subject: "Social Media" },
  { id: 3, subject: "Skill" },
  { id: 4, subject: "Psychology Background" },
  { id: 5, subject: "Node Js" },
  { id: 6, subject: "Creative Writing" },
  { id: 7, subject: "Content Writing" },
];

const SkillsPage = () => {
  const [rows, setRows] = React.useState(rowsData);
  const [clientFilter, setClientFilter] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleClientChange = (event) => {
    setClientFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const client = row.client ? row.client.toLowerCase() : "";
    const subject = row.subject ? row.subject.toLowerCase() : "";

    return (
      (clientFilter === "All" || row.client === clientFilter) &&
      (client.includes(searchTerm.toLowerCase()) ||
        subject.includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <Box sx={{ backgroundColor: "#f3f4f8", minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "white",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          borderBottom: "1px solid #eef2f6",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ textTransform: "none" }}
          >
            Skills
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ ml: 2, textTransform: "none" }}
          >
            Home • Skills
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "#616e7f" }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <InboxIcon />
          </IconButton>
          <IconButton>
            <AccessTimeIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "White",
          px: 1,
          py: 1,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #eef2f6",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <IconButton
            sx={{
              backgroundColor: "#f3f4f8",
              border: "1px solid",
              borderColor: "#c4c4c4",
              borderRadius: "4px 0 0 4px",
              borderRight: "none",
              height: "40px",
            }}
          >
            <SearchIcon />
          </IconButton>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Start Typing to search"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
            sx={{
              width: "350px",
              "& .MuiOutlinedInput-root": {
                height: "40px",
                borderRadius: "0 4px 4px 0",
                borderLeft: "none",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#f3f4f8",
          px: 2,
          py: 2,
          ml: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "#ff9000",
            color: "white",
            mr: 1,
            border: "none",
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add Skills
        </Button>
      </Box>
      <Box
        sx={{
          height: 400,
          mr: 8,
          ml: 4,
          backgroundColor: "white",
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          sx={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default SkillsPage;
