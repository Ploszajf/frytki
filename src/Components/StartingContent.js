import React, { Component } from 'react'

export class StartingContent extends Component {
    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '320px'
        }
        return (
            <div style={style} >
                <p>Use A/Left arrow & D/Right Arrow to move</p>
                <p>Score 10 points</p>
            </div >
        )
    }
}

export default StartingContent