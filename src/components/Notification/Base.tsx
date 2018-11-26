import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";

interface variantIconType {
    success: React.ComponentType<any>;
    warning: React.ComponentType<any>;
    error: React.ComponentType<any>;
    info: React.ComponentType<any>;
}

interface BaseProps {
    classes?: string;
    className?: string;
    message: string;
    onClose?: (event: React.SyntheticEvent<{}>) => void;
    type: 'success' | 'warning' | 'error' | 'info';
    duration: number;
    vertical: 'top'|'bottom';
    horizontal: 'left' | 'center' | 'right';
}

interface BaseState{
    open: boolean;
}

const variantIcon: variantIconType = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
};

export default class Base extends React.Component<BaseProps, BaseState> {
    constructor(props: BaseProps){
        super(props);
        this.state = {
            open: true
        };
    }
    render(){
        const { classes, className, message, onClose, type, duration, vertical, horizontal, ...other } = this.props;
        const Icon = variantIcon[type];
    
        return (
            <Snackbar
                open={this.state.open}
                autoHideDuration={duration}
                anchorOrigin={{ vertical, horizontal }}
                >
                <SnackbarContent
                    aria-describedby="client-snackbar"
                    className={'notification-'+type}
                    message={
                        <span id="client-snackbar" className="flex flex-cross-center">
                            <Icon style={{marginRight: '0.5rem'}}/>
                            {message}
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={e => {
                                onClose && onClose(e);
                                this.setState({open: false});
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                    {...other}
                />
            </Snackbar>
        );
    }
    
}