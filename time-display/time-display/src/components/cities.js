import React from 'react'

class City extends React.Component {
    render() {
        return (
            <div>
                <h2>City</h2>
                <form>
                    <input type="radio" value='Portland' >Portland
                    <input type="radio" value='Miami'>Miami
                    <input type="radio" value='Chicago'>Chicago
                </form>
            </div>)
    }
}

export default City