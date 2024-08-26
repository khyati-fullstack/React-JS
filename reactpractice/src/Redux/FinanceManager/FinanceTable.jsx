import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
export default function FinanceTable() {
  const state = useSelector((state) => state.preosnalExpesekey);
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "5px", overflow: "hidden" }}
    >
      <Table
        sx={{
          width: "100%",
          "& .MuiTableCell-root": {
            py: "10px",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={{ bgcolor: "#202832" }}>
            <TableCell sx={{ color: "white" }} align="center">
              Sr. No
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              Expanse Name
            </TableCell>
            <TableCell sx={{ color: "white" }} align="center">
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.Expense.length == 0 ? (
            <TableRow>
              <TableCell colSpan={3} align="left">
                Loading.....!
              </TableCell>
            </TableRow>
          ) : (
            state.Expense.map(({ expense_Name, amount }, i) => (
              <TableRow key={i}>
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">{expense_Name}</TableCell>
                <TableCell align="center">{amount}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter sx={{ bgcolor: grey[200] }}>
          <TableRow>
            <TableCell colSpan={2} align="center">
              <Typography color="black" variant="subtitle2" fontWeight="600">
                Total Expenses Amount{" "}
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography color="black" variant="subtitle2" fontWeight="600">
                {" "}
                ₹ {state.ExpanseAmount}
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
