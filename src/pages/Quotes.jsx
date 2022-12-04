import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import QuoteTable from "../components/QuoteTable";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/quotes.scss";

function Quotes() {
  const { quotesData } = useContext(DataContext);
  let navigate = useNavigate();
  if (!quotesData.length) return;
  return (
    <div>
      <QuoteTable quotes={quotesData} />
      <Button
        sx={{
          margin: "1% 40% 1% 40%",
          width: "300px",
        }}
        variant="contained"
        className="next__page"
        onClick={() => {
          navigate("/randomquotes");
        }}
      >
        Get a random quote!
      </Button>
    </div>
  );
}

export default Quotes;
