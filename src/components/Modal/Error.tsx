
import React from 'react';
import ReactDOM from 'react-dom';
import Base from './Base';
import HighlightOff from '@material-ui/icons/HighlightOff';
import ModalConfig from '../../@types/ModalConfig';

export default function error(config: ModalConfig) {
    const div = document.createElement('div');
    document.body.append(div);

    function render(){
        ReactDOM.render(
            <Base
                onOk={e => {
                    config.onOk && config.onOk(e);
                    destroy();
                }}
                title={<div className="flex flex-cross-center"><HighlightOff className="font-red" style={{marginRight: '0.5rem'}}/>{config.title?config.title:'错误'}</div>}
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
