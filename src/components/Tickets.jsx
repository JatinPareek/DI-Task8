import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DescriptionIcon from "@mui/icons-material/Description";
import AddIcon from "@mui/icons-material/Add";
import GetAppIcon from "@mui/icons-material/GetApp";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CreateIcon from "@mui/icons-material/Create";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { DataGrid } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const columns = [
  { field: "ticketNumber", headerName: "Ticket #", flex: 1 },
  { field: "subject", headerName: "Ticket Subject", flex: 2 },
  { field: "requesterName", headerName: "Requester Name", flex: 1 },
  { field: "requestedOn", headerName: "Requested On", flex: 1 },
  { field: "others", headerName: "Others", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: (params) => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const rows = [];

const Tickets = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
            Tickets
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ ml: 2, textTransform: "none" }}
          >
            Home • Tickets
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
          backgroundColor: "white",
          px: 2,
          borderBottom: "1px solid #eef2f6",
        }}
      >
        <Button
          variant="text"
          sx={{
            paddingRight: "70px",
            width: "auto",
            textTransform: "none",
            borderRight: "1px solid #eef2f6",
            borderRadius: 0,
            color: "gray",
            "&:hover": { backgroundColor: "transparent" },
            "&:focus": { backgroundColor: "transparent" },
          }}
        >
          Duration Start Date To End Date
        </Button>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            borderRight: "1px solid #eef2f6",
            borderRadius: 0,
            color: "gray",
            "&:hover": { backgroundColor: "transparent" },
            "&:focus": { backgroundColor: "transparent" },
          }}
        >
          Status
          <TextField
            select
            size="small"
            defaultValue="Open Tickets"
            sx={{
              ml: 1,
              width: "auto",
              minWidth: 50,
              "& .MuiOutlinedInput-root": {
                border: "none",
                "& fieldset": { border: "none" },
              },
            }}
          >
            <MenuItem value="Open Tickets">Open Tickets</MenuItem>
            <MenuItem value="Closed Tickets">Closed Tickets</MenuItem>
            <MenuItem value="Pending Tickets">Pending Tickets</MenuItem>
            <MenuItem value="Resolved Tickets">Resolved Tickets</MenuItem>
          </TextField>
        </Button>
        <IconButton
          sx={{
            backgroundColor: "#f3f4f8",
            border: "solid 1px",
            borderColor: "#c4c4c4",
            borderRadius: 0,
            p: 1,
            height: "40px",
            width: "45px",
            ml: "30px",
          }}
        >
          <SearchIcon />
        </IconButton>
        <TextField
          size="large"
          variant="outlined"
          placeholder="Start Typing to search"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          sx={{
            borderRight: "1px solid #eef2f6",
            borderRadius: 0,
            paddingRight: "20px",
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeft: "none",
              mt: 0.8,
            },
          }}
        />
        <Button
          variant="text"
          sx={{
            marginLeft: "550px",
            textTransform: "none",
            borderLeft: "1px solid #eef2f6",
            borderRadius: 0,
            color: "gray",
            "&:hover": { backgroundColor: "transparent" },
            "&:focus": { backgroundColor: "transparent" },
          }}
        >
          <FilterAltIcon sx={{ mr: 1 }} />
          Filters
        </Button>
      </Box>

      <Box
        container
        spacing={2}
        sx={{ mt: "20px", mx: "30px", display: "flex", gap: "15px" }}
      >
        {[
          "Total Tickets",
          "Closed Tickets",
          "Open Tickets",
          "Pending Tickets",
          "Resolved Tickets",
        ].map((title) => (
          <Box
            item
            sx={{ flexGrow: 1 }}
            xs={1}
            sm={6}
            md={4}
            lg={2}
            key={title}
          >
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    marginTop: 1,
                  }}
                >
                  <Typography variant="small">{title}</Typography>

                  <Typography variant="small" color="#ed6c02">
                    0
                  </Typography>
                </Box>
                <ConfirmationNumberIcon />
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 2, marginTop: "30px", pl: 4, mb: 2 }}>
        <Button variant="contained" color="warning" startIcon={<AddIcon />}>
          Create Ticket
        </Button>
        <Button variant="contained" startIcon={<CreateIcon />}>
          Ticket Form
        </Button>
        <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>
          Export
        </Button>
      </Box>

      <Box
        sx={{
          height: 200,
          mr: 8,
          ml: 4,
          backgroundColor: "white",
        }}
      >
        <DataGrid
          rows={rows}
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

export default Tickets;
