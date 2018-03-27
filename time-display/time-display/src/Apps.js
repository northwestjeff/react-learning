import React from 'react';

import Splash from "./components/header";
import Time from "./components/time";
import Location from "./components/locations";



class App extends React.Component {
    consoleTime = () => {
        console.log('Time')
    }
    render() {
        return (
            <div>
                <Splash/>
                <Time consoleTime={this.consoleTime}/>
                <Location/>
            </div>
        )
    }
}

export default App
