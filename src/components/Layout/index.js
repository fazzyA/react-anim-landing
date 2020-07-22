import React from 'react'
import NavBar from '../Navbar/index'
import Footer from '../Footer'
import './style.css'
const Layout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
