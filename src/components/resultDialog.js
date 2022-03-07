import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResultDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sx'));

    const handleOnClose = () => {
        props.callbackOpenDialog(false)
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={props.openDialog}
            sx={{minWidth: "50%", minHeight:"50%", alignItems: "center", justifyContent: "center" }}>
            <DialogTitle>
                {"Final Result"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleOnClose}>
                    Ok, Got it!
                </Button>
            </DialogActions>
        </Dialog>
    );

}