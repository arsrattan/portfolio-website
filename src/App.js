import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import AboutMe from './Components/pages/aboutMe';
import Projects from './Components/pages/projects';
import ContactMe from './Components/pages/contactMe';

import './Assets/css/default.min.css';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className='App'>
                    <Header />
                    <main>
                        <Route path='/' exact strict component={AboutMe} />
                        <Route path='/projects' exact strict component={Projects} />
                        <Route path='/contact' exact strict component={ContactMe} />
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}

export default App;