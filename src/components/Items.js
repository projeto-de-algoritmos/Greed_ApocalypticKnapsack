import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CustomizedCard from "../components/Card";
import { Typography } from '@mui/material';

export default function Items(props) {
    const items = require("../data/items.json");
    const [errorMessage, setErrorMessage] = React.useState("")

    React.useEffect(() => {
        if(!props.isFull) setErrorMessage("")
    }, [props.isFull])

    const handleClick = (e) => {
        const index = props.selectedItems.indexOf(e.target.alt)

        if (index === -1 && !props.isFull) {
            props.callback([...props.selectedItems, e.target.alt])
            setErrorMessage("")
        }
        else if (index !== -1) {
            console.log(props.selectedItems[index])
            let oldSelectedItems = [...props.selectedItems]
            oldSelectedItems.splice(index, 1)
            props.callback(oldSelectedItems)
            props.callbackWeight(false)
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
                <CustomizedCard item={item} onClick={handleClick} isSelected={props.selectedItems.indexOf(item.name) !== -1 ? true : false} />
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