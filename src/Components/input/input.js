import React from 'react';

export default class inputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valid: false,
            border: ''
        }
        this.originalState = this.state;
        this.handleChange = this.handleChange.bind(this);
    }

    async reset() {
        await this.setState(this.originalState);
    }

    async handleChange(event) {
        const newVal = event.target.value;
        await this.setState({value: newVal});
        await this.setState({valid: validDict[this.props.id](newVal) ? true : false});
        await this.setState({border: validDict[this.props.id](newVal) ? '' : 'dotted red 1px'});
        await this.props.formValidator();
    }

    render() {
        return (
            <div className='input-component name'>
                <input type='text' className='form-control' placeholder={placeholderDict[this.props.id]} value={this.state.value} id={this.props.id} onChange={this.handleChange} style={{border:this.state.border}} required/> 
            </div>
        )
    }
}

const placeholderDict = {
    'name': 'Your full name',
    'emailAddress': 'Your email address',
    'phoneNumber': 'Your phone number',
    'message': 'Message'
}

const validDict = {
    'name': (value) => {
        return value.match(/[A-Za-z]+/);
    },
    'emailAddress': (value) => {
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    },
    'phoneNumber': (value) => {
        return value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);
    },
    'message': (value) => {
        return value.length >= 1;
    }
}