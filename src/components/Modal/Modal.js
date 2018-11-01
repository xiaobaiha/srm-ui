import {PropTypes} from '../../util/propTypes';
import React from 'react';
import {unmountComponentAtNode, unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer} from 'react-dom';
import Dialog from '@material-ui/core/Dialog';

class Modal extends React.Component {

    componentDidMount() {
        this._node = document.body.appendChild(document.createElement('div'));
        this._render();

        // Prevent scroll from element inside modal transferring onto body
        document.body.classList.add('clip-when-modal-exists');
    }


    componentDidUpdate() {
        this._render();
    }


    componentWillUnmount() {
        unmountComponentAtNode(this._node);
        this._node.parentNode.removeChild(this._node);

        // Reset body overflow style
        if (document.querySelectorAll('.modal .modal-entity').length === 0) {
            document.body.classList.remove('clip-when-modal-exists');
        }
    }


    onCancel() {
        if (this.props.onCancel) this.props.onCancel();
    }

    onConfirm() {
        if (this.props.onConfirm) this.props.onConfirm();
    }

    _render(): ?React.Element<any> {
        var modal = (
            <div className={`modal ${this.props.className}`}>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true}>
                    <div className={`${this.props.containerClass}`} style={this.props.containerStyle}>
                        {this.props.children}
                        {this.props.onCancel && <a
                            className={this.props.onCloseIconClass}
                            onClick={this.onCancel}/>}
                    </div>
                </Dialog>
            </div>
        );
        renderSubtreeIntoContainer(this, modal, this._node);
    }

    render(): ?React.Element<any> {
        return null;
    }
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    containerClass: PropTypes.string,
    containerStyle: PropTypes.object,
    onCancel: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onConfirm: PropTypes.func,
    className: PropTypes.string,
    onCloseIconClass: PropTypes.string,
    underlayClass: PropTypes.string
};

Modal.defaultProps = {
    underlayClass: 'modal-underlay scroll-v',
    containerClass: 'space-bottom4 width40 fill-white',
    containerStyle: {},
    className: '',
    onCloseIconClass: 'z1 pin-topright pad1 small strong icon close quiet'
};

export {Modal};
