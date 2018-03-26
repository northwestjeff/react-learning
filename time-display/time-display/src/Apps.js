import React from 'react';

import Splash from "./components/header";
import Time from "./components/time";
import City from "./components/cities";


class App extends React.Component {
    render() {
        return (
            <div>
                <Splash/>
                <Time/>
                <City/>
            </div>
        )
    }
}

export default App
