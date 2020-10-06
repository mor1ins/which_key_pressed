import React from "react";
import './Block.css'


class Block extends React.Component {
    render() {
        const name = this.props.name;
        const info = this.props.info;

        console.log(`rendering ${name}-block with ${info[name]}`)

        return (
            <div className="block">
                <div className="block-value">{info[name] !== undefined ? info[name].toString() : 'NaN'}</div>
                <div className="block-name">{name}</div>
            </div>
        )
    }
}


export default Block;
