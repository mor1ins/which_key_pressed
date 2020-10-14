import React from 'react';

import './Logger.css'
import Block from "./Block";

var uniqid = require('uniqid');


class Logger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: []
        };

    }

    add_log(name, description) {
        let logs = this.state.logs.concat({
            id: uniqid(), name: name, description: description
        });
        this.setState({logs: logs});
    }

    // render_logs() {
        // if (this.state.logs.length === 0)
        //     return 'No logs';
        //
        // const logs = this.state.logs.map(log => {
        //     return (
        //         <details>
        //             <summary>{log.name}</summary>
        //             {log.description.toString()}
        //         </details>)
        // });
        // console.log(logs);
        // return logs;
    // }

    render() {
        console.log('logs', this.state.logs);
        return (
            <div className="logger-container">
                {this.state.logs.map(log => {
                    return (
                        <details key={log.id}>
                            <summary>{log.name}</summary>
                            <div>{JSON.stringify(log.description)}</div>
                        </details>
                    )
                })}
            </div>
        )
    }
}


export default Logger;
