import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface BaseDialogParams {
    onCancel?: (event: React.SyntheticEvent<{}>) => void;
    onOk?: (event: React.SyntheticEvent<{}>) => void;
    message?: any;
    title?: any;
    closeText?: string;
    okText?: string;
}

const BaseDialog = ({ onCancel, onOk, message, title, closeText, okText }: BaseDialogParams) => {
    return (
        <Dialog
            open={true}
            onClose={onCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="DIALOG_MODAL"
            >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="default">
                {closeText? closeText: '取消'}
                </Button>
                <Button onClick={onOk? onOk: onCancel} color="primary" autoFocus>
                {okText? okText: '确定'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}


export default BaseDialog;
