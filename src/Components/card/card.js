import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <a href='#' className='card'>
                <div className='card-image'>
                    <img src={this.props.imageSource} alt='Temporary' className='image' />
                </div>
                <div className='card-content'>
                    <h4 className='card-title'>{this.props.title}</h4>
                    <hr />
                    <p className='card-description'>
                        {this.props.description}
                    </p>
                </div>
            </a>
        )
    }
}

export default Card;