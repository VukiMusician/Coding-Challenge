import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const RandomDataContext = createContext();

export function RandomQuoteProvider({ children }) {
  
    const [ randomQuote, setRandomQuote ] = useState([]);
    const [ clicked , setClicked] = useState();

    useEffect(() => {
        axios.get('https://api.quotable.io/random').then(res => {
          setRandomQuote(res.data)
        }).catch(err => {
          console.log(err);
        })
      },[clicked]) 
      console.log(randomQuote);

return (
    <RandomDataContext.Provider value={{ randomQuote , setClicked}}>
        { children }
    </RandomDataContext.Provider>
)
};
