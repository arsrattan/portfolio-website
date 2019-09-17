import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <header>
                    <nav>
                        <div className='header-nav-content'>
                            <ul className='header-icon-list'>

                            </ul>
                            <ul className='header-word-list'>
                                <li className='header-component about-me'>
                                    <NavLink className='header-link about-me-link' to='/'>
                                        About Me
                                    </NavLink>
                                </li>
                                <li className='header-component projects'>
                                    <NavLink className='header-link projects-link' to='/projects'>
                                        Projects
                                    </NavLink>
                                </li>
                                <li className='header-component contact-me'>
                                    <NavLink className='header-link contact-me-link' to='/contact'>
                                        Contact Me
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;