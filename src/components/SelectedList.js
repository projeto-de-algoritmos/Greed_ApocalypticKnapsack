import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function selectedItems(items) {
    return items.map(item => (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" size='small'>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemAvatar>
                <Avatar src={require('../assets/imagens/' + item.name.toLocaleLowerCase() + '.png')} />
            </ListItemAvatar>
            <ListItemText
                primary={item.name}
                secondary="100%"
            />
        </ListItem>
    ))
}

function noItems(){
    return <Typography align="center" variant="caption" component="div">
    No items selected
  </Typography>
}

export default function SelectedList(props) {
    return <List sx={{ width: "60%", marginLeft: 20 }}>
        <Typography align="center" variant="h6" component="div">
            Selected Items
          </Typography>
        {props.items ? selectedItems(props.items) : noItems()}
    </List>
}