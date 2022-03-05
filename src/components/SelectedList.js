import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function SelectedList(props) {
    const defaultItems = require("../data/items.json");
    var weights = 0

    const handleClick = (e) => {
        const index = props.selectedItems.indexOf(e.target.alt)
        console.log(e)
        let oldSelectedItems = [...props.selectedItems]
        oldSelectedItems.splice(index, 1)
        props.callback(oldSelectedItems)
        props.callbackWeight(false)
    }

    function calculateRemainingWeight(item) {
        const newWeight = defaultItems.find((el) => el.name === item).weight
        let itemDurability = 100;

        if (weights + newWeight > props.bagCapacity) {
            itemDurability = ((props.bagCapacity - weights) / newWeight) * 100;
            weights = props.bagCapacity
        } else
            weights += newWeight

        if (weights === props.bagCapacity)
            props.callbackWeight(true)

        return ${itemDurability}
    }

    const selectedItems = (items) => {
        return items.map(item => (
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={require('../assets/imagens/' + item.toLowerCase() + '.png')} />
                </ListItemAvatar>
                <ListItemText
                    primary={item}
                    secondary={parseFloat(calculateRemainingWeight(item)).toFixed(2) + "%"}
                />
            </ListItem>
        ))
    }

    const noItems = () => {
        return (<Typography align="center" variant="caption" component="div">No items selected</Typography>)
    }


    return <List sx={{ width: "60%" }}>
        <Typography align="center" variant="h6" component="div">
            Selected Items
        </Typography>
        {props.selectedItems.length > 0 ? selectedItems(props.selectedItems) : noItems()}
    </List>
}