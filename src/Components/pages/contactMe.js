import React from 'react';
import axios from 'axios';
import DynamicButton from '../button/button';
import credentials from '../../utils/getCredentials';
import LoadingSpinner from '../loading/loading';
import InputField from '../input/input';

class ContactMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            formValid: false
        }
        this.validateForm = this.validateForm.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const emailAddress = document.getElementById('emailAddress').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const message = document.getElementById('message').value;
        const emailOpt = this.refs.emailOpt.state.clicked;
        const phoneOpt = this.refs.phoneOpt.state.clicked;
        const textOpt = this.refs.textOpt.state.clicked;

        await this.setState({loading: true});
        const axiosRes = await axios.post(
            credentials.emailServer + '/email',
            {
                name:name, 
                emailAddress:emailAddress, 
                phoneNumber:phoneNumber, 
                message:message,
                options: {
                    emailOpt: emailOpt, 
                    phoneOpt: phoneOpt, 
                    textOpt:textOpt
                }
            }
        )
        
        await this.setState({loading: false});
        if(axiosRes.status === 200) {
            alert('Your request has been received, thank you!');
        } else {
            alert('Oops! The request could not be received due to a technical error');
        }

    }
    
    async validateForm() {
        await this.setState({formValid: 
        this.refs.nameInput.state.valid &&
        this.refs.emailInput.state.valid &&
        this.refs.phoneInput.state.valid &&
        this.refs.messageInput.state.valid});
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='welcome-content'>
                    <h1 className='intro heading'>Contact Me</h1>
                    <h2 className='intro description'>Please enter your information and message below, and I will get back to you within 24 hours.</h2>
                </div>
                <div className='contact-form'>
                    <form id='contact-form' onSubmit={this.handleSubmit.bind(this)}>
                        <InputField id='name' ref='nameInput' formValidator={this.validateForm}/>
                        <InputField id='emailAddress' ref='emailInput' formValidator={this.validateForm}/>
                        <InputField id='phoneNumber' ref='phoneInput' formValidator={this.validateForm}/>
                        <InputField id='message' ref='messageInput' formValidator={this.validateForm}/>

                        <div className='input-component options'>
                            <p className='input-text'>How should I get back to you?</p>
                            <DynamicButton name='Email' ref='emailOpt'/>
                            <DynamicButton name='Phone' ref='phoneOpt'/>
                            <DynamicButton name='Text' ref='textOpt'/>
                        </div>
                        <button ref='submitBtn' type='submit' className='button-submit' disabled={!this.state.formValid}>{this.state.loading ? <LoadingSpinner /> : 'Submit'}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactMe;