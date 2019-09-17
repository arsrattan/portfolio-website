import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <div className='aboutContainer'>
                <div className='aboutDesc'>
                    <h1 className='heading'>Hi! I'm Anmol.</h1>
                    <h2 className='subHeading'>I'm a software engineer, home cook, student, traveler, basketball fan, gamer, environmentalist, Iron Man aficionado from New Jersey.</h2>
                </div>
                <figure className = 'profilePicture' src='/tempProfile.jpeg' alt='The author, Anmol Rattan.' />
            </div>
        )
    }
}

export default AboutMe;