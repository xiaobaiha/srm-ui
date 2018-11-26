
import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base';
import CheckCircle from '@material-ui/icons/CheckCircle';
import ModalConfig from '../../@types/ModalConfig';

export default function success(config: ModalConfig) {
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
                title={<div className="flex flex-cross-center"><CheckCircle className="font-light-green" style={{marginRight: '0.5rem'}}/>{config.title?config.title:'成功'}</div>}
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
