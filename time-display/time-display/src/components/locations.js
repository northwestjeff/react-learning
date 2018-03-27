import React from 'react'
import City from "./cities";

class Location extends React.Component {
    render() {
        return (
            <div>
                <h2>Location</h2>
                <form>
                    <City />
                    <City />
                </form>

            </div>)
    }
}

export default Location