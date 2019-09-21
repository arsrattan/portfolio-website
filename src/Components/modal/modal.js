import React from 'react';
import clsx from 'clsx';

import { DialogContentText, DialogActions, Button, Slide, makeStyles, DialogContent, DialogTitle, Dialog } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '700px',
        marginTop: '100px',

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

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <Dialog className={clsx(classes.root, 'root')} onClose={props.onClose} aria-labelledby="simple-dialog-title" aria-describedby="alert-dialog-slide-description" open={props.isVisible} TransitionComponent={Transition}>
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