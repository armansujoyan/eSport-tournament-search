import React from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText
} from '@material-ui/core';

export default function ConfirmationDialog({
    open,
    title,
    content,
    rejectTxt,
    confirmTxt,
    handleDialogClose
}) {
    return (
        <Dialog
            open={open}
            onClose={handleDialogClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleDialogClose(false)} color='primary'>
                    {rejectTxt}
                </Button>
                <Button onClick={() => handleDialogClose(true)} color='primary' autoFocus>
                    {confirmTxt}
                </Button>
            </DialogActions>
        </Dialog>
    )
};
