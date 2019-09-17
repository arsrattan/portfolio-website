import React from 'react';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import AboutMe from './Components/pages/aboutMe';

import './Assets/css/default.min.css';

class App extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Anmol Rattan</title>
                    <meta charset='utf-8' />
                    <link href="https://fonts.googleapis.com/css?family=Cabin|Catamaran&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <div className='App'>
                        <Header />
                        <main>
                            <AboutMe />
                            </main>
                        <Footer />
                    </div>
                </body>
            </html>
        )
    }
}

export default App;