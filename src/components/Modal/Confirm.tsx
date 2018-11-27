
import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base';
import Help from '@material-ui/icons/Help';
import ModalConfig from '../../@types/ModalConfig';

export default function confirm(config: ModalConfig) {
    const div = document.createElement('div');
    document.body.append(div);

    function render(){
        ReactDOM.render(
            <Base
                onCancel={e => {
                    config.onCancel && config.onCancel(e);
                    destroy();
                }}
                onOk={e => {
                    config.onOk && config.onOk(e);
                    destroy();
                }}
                showCancel={true}
                title={<div className="flex flex-cross-center"><Help className="font-help" style={{marginRight: '0.5rem'}}/>{config.title?config.title:'提示'}</div>}
                message={<div>{config.message}</div>}
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
}
