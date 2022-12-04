import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { RandomDataContext } from "../Context/RandomDataContext";
import { useNavigate } from "react-router-dom";
import "../styles/randomquotes.scss";

function RandomQuotes() {
  const { randomQuote, setClicked } = useContext(RandomDataContext);
  let navigate = useNavigate();
  const newQuote = (e) => {
    setClicked(e);
  };
  if (!randomQuote.length) return;
  return (
    <div>
      <div className="random__quotes">
        <h1>{randomQuote.content}</h1>
        <h3>{randomQuote.author}</h3>
      </div>
      <div className="buttons">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Get Back!
        </Button>
        <Button variant="contained" onClick={newQuote}>
          Generate a new quote!
        </Button>
      </div>
    </div>
  );
}
export default RandomQuotes;
