import React, { Component } from 'react'

export class Background extends Component {
    render() {

        const style = {
            display: 'flex',
            justifyContent: 'center',
            widty: 100 + '%',
            height: 100 + 'vh',
            backgroundImage: 'url("https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/239561328_4913147785367213_7461726983045316360_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=xad5O0APcZ0AX_iLpGE&_nc_ht=scontent-waw1-1.xx&oh=00_AfBjxyrkHwoaaSrTjOWNFdZjEwyCq_PzFy8m4rVkXeSA-Q&oe=63782C56")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }

        return (
            <div style={style}>{this.props.children}</div >
        )
    }
}

export default Background;
