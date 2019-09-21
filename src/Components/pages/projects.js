import React from 'react';
import Card from '../card/card';

class Projects extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='welcome-content'>
                    <h1 className='intro heading'>My Projects</h1>
                    <h2 className='intro description'>From academic projects assigned in school to personal projects that have improved my quality of life, below are some of my favorite builds.</h2>
                </div>
                <div className='cards-container'>
                    <Card imageSource='/italy.jpg' title='Online Bidding RDBMS' description='An online clone of eBay which allows users to bid on specific types of items. Backend storage is provided via Amazon RDS'/>
                    <Card imageSource='/italy2.jpg' title='Socket Enabled Live Chat' description='A python built live chatting module implemented across ISO from scratch. Can be configured for sockets.'/>
                    <Card imageSource='/italy3.jpg' title='Resonsive Email Server' description='An email server deployed on Amazon EC2 to fetch HTTP requests and send out emails with OAUTH2.'/>
                    <Card imageSource='/italy4.jpg' title='Automatic Saver' description='A custom built savings module that can save resources, provisioning time, bandwith and improve latency.'/>
                </div>
            </div>
        )
    }
}

export default Projects;