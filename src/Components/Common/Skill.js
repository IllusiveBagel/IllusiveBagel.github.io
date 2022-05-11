import React from "react";

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return (
            <div className="Skill">
                <p>{this.props.title}</p>
                <div className="Skill-Container">
                    <div className="Skill-Status" style={{ width: this.props.progress }}></div>
                </div> 
            </div>
        );
    }
}