import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div>
                projeto<br />
                <Link to="/">Ir para Home</Link>
                <hr />
            </div>
        )
    }
}

export default Header;
