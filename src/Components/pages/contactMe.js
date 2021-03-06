import React from 'react';
import axios from 'axios';
import DynamicButton from '../button/button';
import credentials from '../../utils/getCredentials';
import LoadingSpinner from '../loading/loading';
import InputField from '../input/input';
import Modal from '../modal/modal.js';

class ContactMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            formValid: false,
            completed: false,
            errorsExist: false,
            responseMessage: ''
        }
        this.originalState = this.state;
        this.validateForm = this.validateForm.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
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
        try {
            alert(credentials.emailServer + '/email');
            await axios.post(
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
            await this.setState({responseMessage: 'Your request has been received and I will get back to you within 24 hours.'});
        } catch (err) {
            await this.setState({responseMessage: 'Unfortunately I was not able to process your contact request at this time.', errorsExist: true});
        }
        this.setState({completed: true});
        this.resetForm();
    }
    
    async closeDialog() {
        await this.setState({completed: false});
        await this.setState(this.originalState);
    }

    async resetForm() {
        this.refs.nameInput.reset();
        this.refs.emailInput.reset();
        this.refs.phoneInput.reset();
        this.refs.messageInput.reset();

        this.refs.emailOpt.reset();
        this.refs.phoneOpt.reset();
        this.refs.textOpt.reset();
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
                <div id= 'contact-form-wrapper' className='contact-form'>
                    <form id='contact-form' onSubmit={this.handleSubmit.bind(this)}>
                        <Modal isVisible={this.state.completed} onClose={this.closeDialog} content={this.state.responseMessage} finishedWithErrors={this.state.errorsExist}/>
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

// <Modal isVisible={this.state.completed} onClose={this.closeDialog} content={this.state.responseMessage} finishedWithErrors={this.state.errorsExist}/>

export default ContactMe;