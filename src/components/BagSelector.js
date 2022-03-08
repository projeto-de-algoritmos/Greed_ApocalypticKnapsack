import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import CustomizedButton from "./Button";
import backpack5 from "../assets/imagens/mochila5.svg";
import backpack7 from "../assets/imagens/mochila7.svg";
import backpack10 from "../assets/imagens/mochila10.svg";

export default function BagSelector(props) {
  const [selectedBag, setSelectedBag] = React.useState(backpack5)

  const handleCapacityClick = (newCapacity) => {
    setSelectedBag(selectedSvgBag(newCapacity))
    props.callback(newCapacity);
    props.callbackWeight(false)
    props.callbackItems([])
  };

  const selectedSvgBag = (newCapacity) => {
    switch (newCapacity) {
      case 7: 
        return backpack7
      case 10: 
        return backpack10
      default:
        return backpack5
    }
  }

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
      <img src={selectedBag} alt="backpack" width={"50%"} height={"50%"} max-width={"260px"} />
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
