import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CustomizedCard from "../components/Card";

export default function Items(props) {
    const items = require("../data/items.json");

    const handleClick = (e) => {
        const index = props.selectedItems.indexOf(e.target.alt)

        if (index === -1 && !props.isFull)
            props.callback([...props.selectedItems, e.target.alt])
        else if(index !== -1){
            console.log(props.selectedItems[index])
            let oldSelectedItems = [...props.selectedItems]
            oldSelectedItems.splice(index, 1)
            props.callback(oldSelectedItems)
            props.callbackWeight(false)
        }
    }

    const cardItems = () => {
        return items.map(item => (
            <Grid
                item
                xs={2}
                md={4}
            >
                <CustomizedCard item={item} onClick={handleClick}  isSelected={props.selectedItems.indexOf(item.name) !== -1 ? true : false} />
            </Grid >
        ))
    }

    return <Box {...props} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <Grid
            container
            spacing={{ xs: 24 }}
            alignItems="center"
            justifyContent="center"
            display="flex"
            sx={{ marginLeft: 0, p: 1, marginBottom: 25 }}
        >
            {cardItems()}

        </Grid>
    </Box>
}