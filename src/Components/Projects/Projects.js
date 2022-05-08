import React from 'react';
import Card from '../Common/Card';
import Modal from '../Common/Modal';
import Synaptic from './SynapticImplementation';
import DBMLDocs from './DBMLDoc';

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            data: {},
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = (title, content) => {
        const body = document.getElementsByTagName("body")[0];
        body.className = "modal-open";
        this.setState({
            show: true,
            data: {
                title: title,
                content: content
            } 
        });
    };

    hideModal = () => {
        const body = document.getElementsByTagName("body")[0];
        body.className = "";
        this.setState({ show: false });
    };

    render() {
        return (
            <div className="Projects-Container">
                <h1 className="Projects-Title">Projects</h1>
                <div className="Projects-Card-Container">
                    <Card
                        img="images/Synaptic.png"
                        title="Synaptic Implementation"
                        desc="A simple implementation of the Synaptic Neural Network Library"
                        onClick={() => this.showModal('Synaptic Implementation', <Synaptic />)}
                    />
                    <Card
                        img="images/DBMLDocs.png"
                        title="DBMLDocs"
                        desc="A React based tool for generating a site based on a DBML file"
                        onClick={() => this.showModal('DBMLDocs', <DBMLDocs />)}
                    />
                </div>
                <Modal show={this.state.show} title={this.state.data.title} handleClose={this.hideModal}>
                    {this.state.data.content}
                </Modal>
            </div>
        );
    }
}