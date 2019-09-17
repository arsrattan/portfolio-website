import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className ='headerContainer'>
            <div className='headerBackground'></div>
            <div className='headerContent'>
            <header>
                <nav>
                    <div className='linksContainer'>
                        <a href='#' id='aboutMeLink'>About Me</a>
                        <a href='#' id='projectsLink'>Projects</a>
                        <a href='#' id='contactMeLink'>Contact Me</a>
                    </div>
                </nav>
            </header>
            </div>
            </div>
        )
    }
}

export default Header;