import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Valid Audio</span>
                <div className="navItems">
                    <button className="navButton"><Link to="/login">Register</Link></button>
                    <button className="navButton"><Link to="/login">Login</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar