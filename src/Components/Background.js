import React, { Component } from 'react'

export class Background extends Component {
    render() {

        const style = {
            display: 'flex',
            justifyContent: 'center',
            widty: 100 + '%',
            height: 100 + 'vh',
            backgroundImage: 'url("https://bi.im-g.pl/im/31/79/14/z21470513Q,Mcdonald-s-przy-ul---Wojska-Polskiego-w-Zielonej-G.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }

        return (
            <div style={style}>{this.props.children}</div >
        )
    }
}

export default Background;
