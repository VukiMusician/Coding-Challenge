import React, { useState, useEffect } from "react";
import axios from "axios";
import { TableRow, TableCell } from "@mui/material";

function QuoteRow({ author, content, id }) {
  const [authorAge, setAuthorAge] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.agify.io?name=${author.split(" ")[0]}`)
      .then((res) => {
        console.log(res.data.age);
        if (res.data.age < 50) {
          setAuthorAge("👶");
        } else {
          setAuthorAge("👴");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [author]);

  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="left">{id}</TableCell>
      <TableCell component="th" scope="row">
        {author}
      </TableCell>
      <TableCell align="left" className="content">
        {content}
      </TableCell>
      <TableCell align="left">{authorAge}</TableCell>
    </TableRow>
  );
}

export default QuoteRow;
