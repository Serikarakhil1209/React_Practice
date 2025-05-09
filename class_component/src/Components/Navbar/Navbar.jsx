import React, { Component } from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div id='navbar'>
                <div><h1>AKHIL Tech..</h1></div>
                <div id='Sec_div'>
                    <Link to='/Home'>
                    <span>Home</span>
                    </Link>
                    <Link to="/About">
                    <span>About</span>
                    </Link>
                    <Link to="/Products">
                    <span>Products</span>
                    </Link>
                    </div>
            </div>
        )
    }
}
