import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CustomizedButton from "../components/Button";
import { Typography } from "@mui/material";
import backpack from "../assets/backpack.png";
import Stack from '@mui/material/Stack';
import "./App.css";
import { margin } from "@mui/system";

function App() {
  const [bagCapacity, setBagCapacity] = React.useState(5);

  return (
    <Box sx={{ flexGrow: 1, height: "auto", backgroundColor: "#C4C4C4" }}>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justify="center"
      >
        <Grid item xs sm md>
          <Box
            sx={{
              height: "60vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "space-between",
            }}
          >
            <Typography
              sx={{ fontSize: 18 }}
              color="black"
              variant="h4"
              textAlign={"center"}
              margin={"5%"}
            >
              Selecione o peso suportado pela mochila que você irá levar
            </Typography>
            <img src={backpack} alt="b" width={"50%"} height={"50%"} />
            <Stack spacing={5} direction="row"  sx={{margin: "5%"}}>
              <CustomizedButton  onClick={() => setBagCapacity(5)}  selected={bagCapacity === 5}>5kg</CustomizedButton>
              <CustomizedButton  onClick={() => setBagCapacity(7)}  selected={bagCapacity === 7}>7kg</CustomizedButton>
              <CustomizedButton  onClick={() => setBagCapacity(10)} selected={bagCapacity === 10}>10kg</CustomizedButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Box sx={{ height: "100vh" }} />
        </Grid>
        <Grid item xs sm md>
          <Box sx={{ height: "80vh" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
