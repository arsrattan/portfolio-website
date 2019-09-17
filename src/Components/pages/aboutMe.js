import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='welcome-content'>
                    <h1 className='intro heading'>Hi! I'm Anmol.</h1>
                    <h2 className='intro description'>I'm a software engineer, home cook, student, traveler, basketball fan, gamer, environmentalist, Iron Man aficionado from New Jersey.</h2>
                </div>
                <div className='profilePicContainer'>
                        <figure className='profilePicture' />
                </div>
            </div>
        )
    }
}

export default AboutMe;