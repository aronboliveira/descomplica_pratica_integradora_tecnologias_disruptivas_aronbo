import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import theme from "./theme"; //importando dark theme
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}
export default App;
