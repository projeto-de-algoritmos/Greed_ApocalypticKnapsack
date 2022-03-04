import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { blueGrey } from '@mui/material/colors';

const CustomCard = styled(Card)(() => ({
    'img:hover': {
        opacity: 0,
        transition: "0.3s",
        cursor: "pointer"
      },
}));

export default function CustomizedCard(props) {
    return <CustomCard {...props} sx={{ width: "fit-content" }}>
        <Box sx={{ position: 'absolute', display: 'flex', flexDirection: 'column', minWidth: 175, backgroundColor: blueGrey[100] }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h6">
                    {props.item.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div">
                    Weight: {props.item.weight}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div">
                    Armor: {props.item.armor}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div">
                    Attack: {props.item.attack}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div">
                    UV Protection: {props.item.uv_protection}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div">
                    Freshness: {props.item.freshness}
                </Typography>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            sx={{ position: 'absolute', width: 175 }}
            image={require('../assets/imagens/' + props.item.name.toLowerCase() + '.png')}
            alt={props.item.name}
        />
    </CustomCard>

}