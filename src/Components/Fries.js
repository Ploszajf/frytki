import React, { Component } from 'react'

export class Fries extends Component {
    render() {
        const style = {
            position: 'absolute',
            top: this.props.top + 'vh',
            width: this.props.width + '%',
            height: this.props.height + 'vw',
            left: this.props.left + '%',
            zIndex: '11'
        }
        const imgStyle = {
            width: "100%",
            height: "100%"
        }
        return (
            <div style={style} >
                <img src={require("../images/fries1.png")} alt="" style={imgStyle}></img>
            </div>
        )
    }
}

export default Fries;
