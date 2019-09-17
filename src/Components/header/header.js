import React from 'react';

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
                                    <a className='header-link about-me-link' href='#'>
                                        About Me
                                    </a>
                                </li>
                                <li className='header-component projects'>
                                    <a className='header-link projects-link' href='#'>
                                        Projects
                                    </a>
                                </li>
                                <li className='header-component contact-me'>
                                    <a className='header-link contact-me-link' href='#'>
                                        Contact Me
                                    </a>
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