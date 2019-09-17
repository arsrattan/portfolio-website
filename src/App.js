import React from 'react';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import AboutMe from './Components/pages/aboutMe';

import './Assets/css/default.min.css';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <main>
                    <AboutMe />
                </main>
            </div>
        )
    }
}

export default App;