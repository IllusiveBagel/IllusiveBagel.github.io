import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return (
            <div className="Card" onClick={this.props.onClick}>
                <img className="Card-Img" src={this.props.img} alt={this.props.title} />
                <div className="Card-Body">
                    <h1 className="Card-Title">{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );   
    }
}