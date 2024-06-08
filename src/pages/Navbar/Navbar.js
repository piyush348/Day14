import React, { useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import PointsContext from '../../context/pointsContext'

const Navbar = (props) => {
    const activeStyle = {
        color: 'red',
        textDecoration: 'underline'
    }
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('authToken')
        ctx.setIsLoggedIn(false)
        navigate('/login')
    }

    // const linksObj = {
    //     home: '/',
    //     image: '/image-generator',
    //     history: '/history',
    //     contact: '/contact',
    //     help: '/help'
    // }

    const links = [
        { key: 'home', url: '/', name: 'Home' },
        { key: 'image', url: '/image-generator', name: 'Image Generator' },
        { key: 'history', url: '/history', name: 'History' },
        { key: 'contact', url: '/contact', name: 'Contact' },
        { key: 'help', url: '/help', name: 'Help' },
        { key: 'signup', url: '/signup', name: 'Sign Up' },
        { key: 'login', url: '/login', name: 'Login' },
    ]

    const ctx = useContext(PointsContext)

    return (
        <div className='header-container'>
            <div className='left'>
                {
                    links.map(link => {
                        return (
                            <Link key={link.key} style={props.page === link.key ? activeStyle : {}} to={link.url}>{link.name}</Link>
                        )
                    })
                }
                {/* OR
                <Link to='/' style={props.page === 'home' ? activeStyle : {}}>Home</Link>
                <Link to='/image-generator' style={props.page === 'image' ? activeStyle : {}}>Image Generator</Link>
                <Link to='/history' style={props.page === 'history' ? activeStyle : {}}>History</Link>
                <Link to='/contact' style={props.page === 'contact' ? activeStyle : {}}>Contact</Link>
                <Link to='/help' style={props.page === 'help' ? activeStyle : {}}>Help</Link>
                
                */}
            </div>
            <div className='right' style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                {ctx.userPoints}
            </div>
            <div>
                {
                    ctx.isLoggedIn ?
                        <button onClick={logout}>Logout</button> :
                        <button onClick={() => navigate('/login')}>Login</button>
                }
            </div>
        </div>
    )
}

export default Navbar