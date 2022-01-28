import React from 'react';
import { Alert } from '@mui/material';

const AlertWindow = ({errText}) => {
    return (
        <Alert severity="error">{errText}</Alert>
    )
};

export default AlertWindow;
