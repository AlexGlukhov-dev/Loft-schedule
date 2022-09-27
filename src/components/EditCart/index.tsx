import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import EditCartBody from './EditCartBody';

export interface editCartProps {
    open: boolean;
    onClose: () => void;
}

const EditCart = (props: editCartProps) => {
    const { onClose, open } = props;

    return (
        <Dialog onClose={onClose} open={open} fullWidth maxWidth="md">
            <DialogTitle>Редактировать карточку</DialogTitle>
            <EditCartBody />
        </Dialog>
    );
}

export default EditCart;
