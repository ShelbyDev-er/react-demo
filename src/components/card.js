import React, { Component } from 'react'


class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.content}</p>
                    <a href="#" className="btn btn-primary">{this.props.button}</a>
                </div>
            </div>
        )
    }
}

export default Card