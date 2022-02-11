import React, { Component, Fragment } from 'react'

class IniComponent extends Component {
    state = {
        count: 0
    }

    handleOnClick = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
    }
    render() {
        return (
            <Fragment>
                <p>Total klik {this.state.count} kali</p>
                <button onClick={this.handleOnClick}>Klik</button>
            </Fragment>
        )
    }
}

export default IniComponent