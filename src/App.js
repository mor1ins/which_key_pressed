import React from 'react';
import Block from './Block'
import Logger from './Logger'


import './App.css';


class EventPrinter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "???", key: "press any key", keyCode: 0,
            altKey: false, shiftKey: false,
            ctrlKey: false, metaKey: false,
            printable: false
        };

        this._input = React.createRef();
        this._logger = React.createRef();
    }

    returnFocus() {
        console.log('return focus')
        this._input.current.focus();
    }

    handleKeyEvent(event) {
        this._input.current.value = "";
        // event = event.persist().nativeEvent
        console.log(event.nativeEvent);
        const {code, keyCode, key, altKey, shiftKey, ctrlKey, metaKey} = event.nativeEvent;
        this.setState({
            code: code, keyCode: keyCode, key: key,
            altKey: altKey, shiftKey: shiftKey,
            ctrlKey: ctrlKey, metaKey: metaKey,
            printable: key.length === 1
        });

        this._logger.current.add_log('KeyUp', event);
        event.preventDefault();
    }


    render() {
        return (
            <div className='app-container'>
                <input
                    autoFocus
                    ref={this._input}
                    onBlur={event => this.returnFocus(event)}
                    onKeyUp={event => this.handleKeyEvent(event)}
                    className="hidden-input"
                    type="text" />
                <div className="event-container">
                    {Object.keys(this.state).map(name => {
                        return (<Block name={name} info={this.state} />);
                    })}
                </div>

                <Logger ref={this._logger}/>
            </div>
        );
    }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventPrinter />
      </header>
    </div>
  );
}

export default App;
