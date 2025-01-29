"use client";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  Avatar,
  Tooltip,
  IconButton,
  Grid,
  TextField,
  Stack,
  Pagination,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import { IconTrash } from "@tabler/icons-react";
import Chips from "../../ui-components/chips/Chips";
import TypoGraphy from "../../ui-components/typography/Typography";

const products = [
  {
    id: "1",
    ticket: "Sed ut perspiciatis unde omnis iste",
    post: "ab illo inventore veritatis et quasi archite...",
    assignedTo: "Liam",
    status: "Closed",
    color: "error",
    date: "Tue, Mar 26",
    budget: "3.9",
  },
  {
    id: "2",
    ticket: "Consequuntur magni dolores eos qui ratione",
    post: "ab illo inventore veritatis et quasi archi",
    assignedTo: "Steve",
    status: "Pending",
    color: "warning",
    date: "Sun, Oct 20",
    budget: "24.5",
  },
  {
    id: "3",
    ticket: "Exercitationem ullam corporis",
    post: "ab illo inventore veritatis et quasi arc",
    assignedTo: "Jack",
    status: "Open",
    color: "success",
    date: "Thu, Dec 22",
    budget: "12.8",
  },
  {
    id: "4",
    ticket: "Sed ut perspiciatis unde omnis iste",
    post: "ab illo inventore veritatis et quasi ",
    assignedTo: "Steve",
    status: "Closed",
    color: "error",
    date: "Sun, Aug 27",
    budget: "2.4",
  },
];

const Table1 = () => {
  const [searchText, setSearchText] = useState<string>("");
  const handleTextboxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchText(val);
  };
  return (
    <BaseCard>
      <Box
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={2}
            sx={{ backgroundColor: "#edf5fd", color: "#1b84ff", p: 3, m: 1 }}
          >
            <Typography variant="h3">8</Typography>
            <Typography variant="h4">Tickers</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            sx={{ backgroundColor: "#fffce6", color: "#f6c000", p: 3, m: 1 }}
          >
            <Typography variant="h3">8</Typography>
            <Typography variant="h4">Tickers</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            sx={{ backgroundColor: "#edfde9", color: "#2cd07e", p: 3, m: 1 }}
          >
            <Typography variant="h3">8</Typography>
            <Typography variant="h4">Tickers</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            sx={{ backgroundColor: "#fff0f4", color: "#f8285a", p: 3, m: 1 }}
          >
            <Typography variant="h3">8</Typography>
            <Typography variant="h4">Tickers</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" pt={1}>
          <TextField
            id="outlined-basic"
            label="Search"
            type="search"
            variant="outlined"
            value={searchText}
            onChange={handleTextboxInputChange}
            // error={errors.search.error}
            // helperText={errors.search.error ? errors.search.message : ""}
            autoComplete="off"
            // InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <TableContainer>
          <Table
            aria-label="simple table"
            sx={{
              whiteSpace: "nowrap",
              mt: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Ticket
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Assigned To
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    Status
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography color="textSecondary" variant="h6">
                    Date
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary" variant="h6">
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Typography fontSize="15px" fontWeight={500}>
                      {product.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Typography fontSize="14px" fontWeight={600}>
                          {product.ticket}
                        </Typography>
                        <Typography color="textSecondary" fontSize="13px">
                          {product.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar
                        alt={product.assignedTo}
                        src={`/images/users/${product.id}.jpg`}
                      />
                      <Typography color="textSecondary" fontSize="16px">
                        {product.assignedTo}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {product.status === "Open" ? (
                      <Chips
                        chip={true}
                        label={product.status}
                        color={product.color}
                      />
                    ) : (
                      <Chips
                        disabledChip={true}
                        label={product.status}
                        color={product.color}
                      />
                    )}
                  </TableCell>
                  <TableCell align="left">
                    <Typography fontSize="14px">{product.date}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Delete">
                      <IconButton>
                        <IconTrash width={20} height={20} />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container justifyContent="center" pt={4}>
          <Pagination count={10} color="primary" />
        </Grid>
      </Box>
    </BaseCard>
  );
};

export default Table1;
