import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Items from "../components/Items";
import SelectedList from "../components/SelectedList";
import DesasterCheckbox from "../components/DesasterCheckBox";
import BagSelector from "../components/BagSelector";
import CustomizedButton from "../components/Button";
import {knapSack} from "../utils/knapsack";
import "./App.css";

function App() {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [bagCapacity, setBagCapacity] = React.useState(5);
  const [choosedDesasters, setChoosedDesasters] = React.useState([])
  const [isFull, setIsFull] = React.useState(false)

  const equals = (a, b) =>
  a.length === b.length &&
  a.every((v) => b.includes(v));

  const answerFormat = (result) => {
    let answer = ""
    answer += result[0]
    for(let i = 1; i < result.length; i++)
      answer +=  ` ► ${result[i]}`
    return answer
  }
  const handleSubmitClick = () => {
    const result = knapSack(choosedDesasters, bagCapacity).map((el) => el.item)
    if(equals(selectedItems, result)) window.alert("Parabéns, vocês Sobreviveu!!")
    else window.alert(`Infelizmente você não fez a melhor escolha. Os melhores equipamentos seriam:\n${answerFormat(result)}`)
  }

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
          <Box sx={{ height: "60vh" }}>
            <BagSelector capacity={bagCapacity} callback={(capacity) => setBagCapacity(capacity)} callbackWeight={(isFull) => { setIsFull(isFull)}} callbackItems={(selectedItems) => { setSelectedItems(selectedItems)}}/>
          </Box>
          <Box sx={{ height: "30vh" }}>
            <DesasterCheckbox callback={(desastersArray) => { setChoosedDesasters(desastersArray)}} />
          </Box>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Box sx={{ height: "100vh" }}>
            <Items selectedItems={selectedItems} isFull={isFull} callbackWeight={(isFull) => { setIsFull(isFull)}} callback={(selectedItems) => { setSelectedItems(selectedItems)}} />
          </Box>
        </Grid>
        <Grid item xs sm md>
          <Box sx={{ height: "60vh", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "space-between" }}>
            <SelectedList selectedItems={selectedItems} isFull={isFull} callbackWeight={(isFull) => { setIsFull(isFull)}} callback={(selectedItems) => { setSelectedItems(selectedItems)}} bagCapacity={bagCapacity} />
            <CustomizedButton onClick={handleSubmitClick}>Resultado da sobrevivência</CustomizedButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;