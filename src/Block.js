import React from "react";
import './Block.css'


class Block extends React.Component {
    render() {
        const name = this.props.name;
        const info = this.props.info;

        if (name === undefined || info[name] === undefined) {
            return <h1>Что-то пошло не так.</h1>;
        }

        const isUndefined = (name && info[name]) === undefined

        console.log(`rendering ${name}-block with ${info[name]}`)

        return (
            <div className="block">
                <div className="block-value">{ info[name].toString() }</div>
                <div className="block-name">{name}</div>
            </div>
        )
    }
}


export default Block;
