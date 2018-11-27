
import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base';
import NotificationConfig from '../../@types/NotificationConfig';

function notification(config: NotificationConfig) {
    const div = document.createElement('div');
    document.body.append(div);
    const duration = config.duration || 3000;

    function render(){
        ReactDOM.render(
            <Base
                vertical={config.vertical || 'top'}
                horizontal={config.horizontal || 'right'}
                duration={duration}
                message={config.message}
                type={config.type}
                />,
            div);
    }

    function destroy(){
        const ifUnmount = ReactDOM.unmountComponentAtNode(div);
        if (ifUnmount && div.parentNode){
            div.parentNode.removeChild(div);
        }
    }

    render();
    setTimeout(() => destroy(), duration + 1000);
}

export default {
    notification
}