// App.jsx
import React from "react";
import CarsPage from "./pages/CarsPage";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => (
  <ThemeProvider>
    <CarsPage />
  </ThemeProvider>
);

export default App;
