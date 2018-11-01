/* @flow */

import {PropTypes} from '../../util/propTypes';
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {Modal} from './Modal';

const styles = {
    'space-top1': {
        marginTop: '1rem'
    },
    'space-bottom1': {
        marginBottom: '1rem'
    },
    'space-bottom1-5': {
        marginBottom: '1.5rem'
    },
    pad2x: {
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },
    'pad-5y': {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
    },
    'pad-5': {
        padding: '0.5rem'
    },
    center: {
        textAlign: 'center'
    },
    'text-left': {
        textAlign: 'left'
    },
    small: {
        fontSize: '0.75rem'
    },
    big: {
        fontSize: '1.3rem'
    },
    strong: {
        fontWeight: 500
    },
    quiet: {
        color: '#7f7f7f'
    },
    'fill-light': {
        background: '#f8f8f8'
    },
    round: {
        borderRadius: 3
    },
    'scroll-styled': {
        overflow: 'auto'
    }
};

class Confirm extends React.Component {
    onCancel = () => {
        this.props.onCancel();
        if (!!this.props.message.onCancel) {
            if (typeof this.props.message.arguments !== 'undefined') {
                this.props.message.onCancel(...this.props.message.arguments);
            } else {
                this.props.message.onCancel();
            } 
        }
    };

    onConfirm = () => {
        this.props.onConfirm();
        if(!!this.props.message.func) {
            if (typeof this.props.message.arguments !== 'undefined') {
                this.props.message.func(...this.props.message.arguments);
            } else {
                this.props.message.func();
            }
            
        }
    };

    render(): ?React.Element<any> {
        let {classes} = this.props;

        return (
            <Modal
                className='z1'
                onConfirm={this.props.onConfirm}>
                <div className={`${classes.pad2x} ${classes['pad-5y']} ${classes.center}`} style={{minWidth: '15rem'}}>
                    <h3 className={`${classes.center}  ${classes['space-top1']} ${classes['space-bottom1']} ${classes.big} ${classes.strong}`}>
                        {this.props.message.title ? this.props.message.title : '确认'}</h3>
                    <p className={`${classes.quiet} font-normal space-bottom1`}>{this.props.message.message}</p>
                    <div className={`${classes['space-bottom1-5']}`}>
                        {this.props.message.hideCancel ? null : <Button style={{marginRight: 10}} variant="raised" onClick={this.onCancel}>
                            {this.props.message.cancelMessage || '取消'}
                        </Button> }
                        <Button variant="raised" color="primary" autoFocus={true} onClick={this.onConfirm}>
                            {this.props.message.confirmMessage || '确定'}
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    }
}

Confirm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired
};

Confirm = withStyles(styles)(ConfirmModalInternal);

export {Confirm};
