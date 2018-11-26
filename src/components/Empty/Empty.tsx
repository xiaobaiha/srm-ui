/* @flow */
import React from "react";

interface EmptyStateProps {
    className: string,
    addClassName: string,
    messageClassName: string,
    message?: string,
    illustration?: string,
    title?: string,
    action?: {
        message: string,
        func: Function
    },
}

class EmptyState extends React.PureComponent<EmptyStateProps> {
    static defaultProps = {
        addClassName: '',
        className: 'flex flex-center flex-verticle quiet round keyline-all keyline-dash row10 space-5 line-space',
        messageClassName: 'center'
    }
    onClick = () => {
        if (this.props.action && this.props.action.func) {
            this.props.action.func();
        }
    };

    render() {
        return (
            <div className={`${this.props.className} ${this.props.addClassName}`}>
                {this.props.illustration && (<div className={`iconfont ${this.props.illustration}`} />)}
                {this.props.title && (<h3 className={`${((this.props.message || this.props.action)) ? 'space-bottom0' : ''}`}>{this.props.title}</h3>)}
                {this.props.message && (<div className={this.props.messageClassName}>{this.props.message}</div>)}
                {this.props.action && (
                    <a onClick={this.onClick}
                       className='strong rcon quiet caret-right'>{this.props.action.message}<i className="iconfont icon-right"/></a>
                )}
            </div>);
    }
}

export default EmptyState;