import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
                <section className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.props.handleClose}>&times;</span>
                        <h2 className="modal-title">{this.props.title}</h2>
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>   
                </section>
            </div>
        );   
    }
}