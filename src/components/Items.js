import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CustomizedCard from "../components/Card";
import { Typography } from '@mui/material';

export default function Items(props) {
    const items = require("../data/items.json");
    const [errorMessage, setErrorMessage] = React.useState("")
    var weights = calculateTotalWeight()

    React.useEffect(() => {
        if(!props.isFull) setErrorMessage("")
    }, [props.isFull])

    function calculateTotalWeight(){
        let totalWeights = 0

        props.selectedItems.map(selectedEl => {
            totalWeights += items.find(el => el.name === selectedEl.name).weight
        })

        return totalWeights
    }

    function calculateRemainingWeight(arr, item) {
        const newWeight = items.find((el) => el.name === item).weight
        let itemDurability = 100;

        if (weights + newWeight > props.bagCapacity) {
            itemDurability = ((props.bagCapacity - weights) / newWeight) * 100;
            weights = props.bagCapacity
        } else
            weights += newWeight

        if (weights === props.bagCapacity)
            props.callbackWeight(true)

        return [...arr, {name: item, durability: parseFloat(itemDurability).toFixed(2) + "%"}]
    }

    function calculateIsFull(selectedItems){
        let sumWeight = 0

        selectedItems.map(seletedEl => {
            sumWeight += items.find((el) => el.name === seletedEl.name).weight
        })

        return sumWeight >= props.bagCapacity
    }

    const handleClick = (e) => {
        const index = props.selectedItems.indexOf(props.selectedItems.find(el => e.target.alt === el.name))

        if (index === -1 && !props.isFull) {
            props.callback(calculateRemainingWeight(props.selectedItems, e.target.alt))
            setErrorMessage("")
        }
        else if (index !== -1) {
            let newSelectedItems = []
            let oldSelectedItems = [...props.selectedItems]
            oldSelectedItems.splice(index, 1)

            weights = 0;
            oldSelectedItems.map(el => {
                newSelectedItems = calculateRemainingWeight(newSelectedItems, el.name)
            })

            console.log(newSelectedItems)
            props.callback(newSelectedItems)
            props.callbackWeight(calculateIsFull(newSelectedItems))

            setErrorMessage("")
        }
        else{
            setErrorMessage("A mochila está cheia, retire algum item para adicionar outro.")
        }
    }

    const cardItems = () => {
        return items.map(item => (
            <Grid
                item
                xs={2}
                md={4}
            >
                <CustomizedCard item={item} onClick={handleClick} isSelected={props.selectedItems.find(el => item.name === el.name) ? true : false} />
            </Grid >
        ))
    }

    return (
        <Box {...props} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" , alignItems: "center", height: "100%", }}>
            <Grid
                container
                spacing={{ xs: 24 }}
                alignItems="center"
                justifyContent="center"
                display="flex"
                sx={{p: 1, marginBottom: 25 }}
            >
                {cardItems()}

            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center" , alignItems: "center", height: "5%", textAlign: "center"}}>
                <Typography align="center" sx={{color: "red", variant: "caption" }}>{errorMessage}</Typography>
            </Box>
        </Box>
    )
}