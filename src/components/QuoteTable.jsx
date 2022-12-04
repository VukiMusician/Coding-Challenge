import React from "react";
import QuoteRow from "./QuoteRow";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import "../styles/quotes.scss";
function QuoteTable({ quotes }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <TableCell sx={{ color: "white" }}>ID</TableCell>
            <TableCell sx={{ color: "white" }} align="left">
              Author
            </TableCell>
            <TableCell sx={{ color: "white" }} align="left">
              Quote&nbsp;
            </TableCell>
            <TableCell sx={{ color: "white" }} align="left">
              Age&nbsp;
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes.map((quote, key) => {
            return (
              <QuoteRow
                author={quote.author}
                content={quote.content}
                id={key}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default QuoteTable;
