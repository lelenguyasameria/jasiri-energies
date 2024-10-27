import react from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return(
        <header className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                <img src ="/images/logo.png" alt="jasiri energies logo"/>

                </Link>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/research">Reaeacrch</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/timeline">Timeline</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        

                    </ul>
                </nav>
            </div>
        </header>
    );
};
export defaut Navbar;