import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple, amber } from '@mui/material/colors';

const CustomButtom = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(amber[50]),
  '&:hover': {
    backgroundColor: amber[300],
  },
}));

export default function CustomizedButton(props) {
  console.log(props.selected)
  return <CustomButtom {...props} sx={{backgroundColor: props.selected ? amber[500] : amber[50]}} size="large" variant="contained" />
}