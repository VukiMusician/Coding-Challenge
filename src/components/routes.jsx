import { Routes, Route } from "react-router-dom";
import Quotes from "../pages/Quotes";
import RandomQuotes from "../pages/RandomQuotes";

export const PagesRoutes = () => (
  <Routes>
    <Route path="/" element={<Quotes />} />
    <Route path="/randomquotes" element={<RandomQuotes />} />
  </Routes>
);
