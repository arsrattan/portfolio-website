import React from 'react';

export default class DynamicButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgba(36, 36, 36, 0.99)'
        }
        this.originalState = this.state;
    }

    reset() {
        this.setState(this.originalState);
    }

    handleClick() {
        const newColor = this.state.clicked ? 'rgb(255, 255, 255)' : '#63707e';
        const newTextColor = this.state.clicked ? 'rgba(36, 36, 36, 0.99)' : 'white';
        const newClicked = !this.state.clicked;
        this.setState({
            clicked: newClicked,
            backgroundColor: newColor,
            color: newTextColor
        })
    }

    render() {
        return (
            <button type='button' className='button-react' onClick={this.handleClick.bind(this)} style={{backgroundColor:this.state.backgroundColor, color:this.state.color}}>{this.props.name}</button>
        )
    }
}