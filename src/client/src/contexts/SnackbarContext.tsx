import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SnackbarContextProps {
    showSnackbar: (message: string, severity: string) => void;
    hideSnackbar: () => void;
    message: string;
    severity: string;
    isSnackbarOpen: boolean;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
    message: '',
    hideSnackbar: () => { },
    showSnackbar: () => { },
    severity: '',
    isSnackbarOpen: false,
});

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const showSnackbar = (msg: string, severity: string) => {
        setMessage(msg);
        setSeverity(severity);
        setIsSnackbarOpen(true);

        setTimeout(() => {
            hideSnackbar();
        }, 3000);
    };

    const hideSnackbar = () => {
        setIsSnackbarOpen(false);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar, isSnackbarOpen, message, severity }}>
            {children}
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={hideSnackbar}
            >
                <Alert
                    onClose={hideSnackbar}
                    severity={severity as AlertColor}
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};