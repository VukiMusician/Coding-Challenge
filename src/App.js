import React from "react";
import { DataProvider } from "./Context/DataContext";
import './styles/app.scss'
import { PagesRoutes } from './components/routes.jsx';
import { RandomQuoteProvider } from "./Context/RandomDataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <RandomQuoteProvider>
        <PagesRoutes />
        </RandomQuoteProvider>
      </DataProvider>
    </div>
  )
}
export default App;
