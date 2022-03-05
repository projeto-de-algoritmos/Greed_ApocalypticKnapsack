import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import CustomizedButton from "./Button";
import backpack from "../assets/imagens/backpack.png";

export default function BagSelector(props) {
  const handleCapacityClick = (newCapacity) => {
    props.callback(newCapacity);
    props.callbackWeight(false)
    props.callbackItems([])
  };

  return (
    <Box
      sx={{
        height: "100%",
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
      <img src={backpack} alt="b" width={"50%"} height={"50%"} max-width={"260px"}/>
      <Stack spacing={5} direction="row" sx={{ margin: "5%" }}>
        <CustomizedButton
          onClick={() => handleCapacityClick(5)}
          selected={props.capacity === 5}
        >
          5kg
        </CustomizedButton>
        <CustomizedButton
          onClick={() => handleCapacityClick(7)}
          selected={props.capacity === 7}
        >
          7kg
        </CustomizedButton>
        <CustomizedButton
          onClick={() => handleCapacityClick(10)}
          selected={props.capacity === 10}
        >
          10kg
        </CustomizedButton>
      </Stack>
    </Box>
  );
}
