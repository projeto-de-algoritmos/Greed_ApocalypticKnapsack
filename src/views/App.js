import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomizedButton from "../components/Button";
import "./App.css";

function App() {
  return (
    <Box sx={{ flexGrow: 1, height: "auto" }}>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          xs
          sm
          md
        >
          <Box sx={{ height: "60vh" }}>
            <CustomizedButton text="Teste">Teste</CustomizedButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sm={8}
          md={6}
        >
          <Box sx={{ height: "100vh" }} />
        </Grid>
        <Grid
          item
          xs
          sm
          md
        >
          <Box sx={{ height: "80vh" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
