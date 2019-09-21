import React from 'react';
import clsx from 'clsx';

import { DialogContentText, DialogActions, Button, makeStyles, DialogContent, DialogTitle, Dialog } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        paddingBottom: '200px',
        background: 'rgba(0,0,0,0.5)',

        '& .dialog-title': {
            textAlign: 'center',
            fontFamily: "'Oxygen', sans-serif",
        },
        '& .dialog-content-text': {
            textAlign: 'center',
            fontFamily: "'Oxygen', sans-serif",
        },
        '& .dialog-action': {
            fontFamily: "'Oxygen', sans-serif",
            color: 'black',
        }
    }

})

export default function Modal(props) {

    const classes = useStyles();

    return (
        <Dialog className={clsx(classes.root, 'root')} onClose={props.onClose} aria-labelledby="simple-dialog-title" aria-describedby="alert-dialog-slide-description" open={props.isVisible}>
            <div>
            <DialogTitle className='test' id="simple-dialog-title">
                <div className='dialog-title'>Contact Request</div>
            </DialogTitle>
            </div>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <div className='dialog-content-text'>
                        {props.content}
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions className='child'>
                <Button onClick={props.onClose} color='primary'>
                    <div className='dialog-action'>
                        {props.finishedWithErrors ? "Try again" : "Sounds good!"}
                    </div>
                </Button>
            </DialogActions>
        </Dialog>
    );
}