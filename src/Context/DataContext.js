import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';

export const DataContext = createContext(); 
/* i only used Context APi because i treated it like
it would have been a big project where prop drilling would look messy 
even tho for this small project using props would have been enough*/
                                        

export function DataProvider({ children }) {

const [ quotesData, setQuotesData ] = useState([]);

  useEffect(() => {
    axios.get('https://api.quotable.io/quotes?page=1').then(res => {
      setQuotesData(res.data.results)
    }).catch(err => {
      console.log(err);
    })
  },[])  

return (
    <DataContext.Provider value={{ quotesData }}>
        { children }
    </DataContext.Provider>
)
};

