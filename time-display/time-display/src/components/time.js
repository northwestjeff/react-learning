import React from 'react'

class Time extends React.Component {

    render() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        return (
            <div>
                <h2>Time Component</h2>
                <p>{h}:{m}</p>
            </div>
        )
    }

}

export default Time;