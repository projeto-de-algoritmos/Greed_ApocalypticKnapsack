import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import CustomizedCard from "../components/Card";

const items = require("../data/items.json");

function cardItems() {
    return items.map(item => (
        <Grid
            item
            xs={6}
        >
            <CustomizedCard item={item} isSelected={true} />
        </Grid >
    ))
}

export default function Items(props) {

    return <Box {...props} sx={{display:"flex", justifyContent:"space-around"}}>
        <Grid
            container
            spacing={{ xs: 24}}
            alignItems="center"
            justify="center"
            display="flex"
            sx={{ marginLeft: 0 }}
        >
            {cardItems()}

        </Grid>
    </Box>
}