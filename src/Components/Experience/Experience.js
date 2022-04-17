import React from 'react';
import Modal from '../Common/Modal';
import AST from './AST';
import SupplyPoint from "./SupplyPoint";
import Toob from "./Toob";
import NorthSails from "./NorthSails";
import Dootrix from "./Dootrix";
import MiVoice from "./MiVoice";

export default class Info extends React.Component {
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
        return(
            <div className="Experience-Container">
                <div className="Hex">
                    <div className="Hex-Container">
                        <div onClick={() => this.showModal("AST Group", <AST />)}>
                            <div >
                                <img src="images/ast.svg" alt="AST" />
                            </div>
                        </div>
                        <div onClick={() => this.showModal("SupplyPoint", <SupplyPoint />)}>
                            <div>
                                <img src="images/supplypoint.svg" alt="SupplyPoint" />
                            </div>
                        </div>
                        <div onClick={() => this.showModal("Toob", <Toob />)}>
                            <div>
                                <img src="images/toob.svg" alt="Toob" />
                            </div>
                        </div>
                        <div onClick={() => this.showModal("North Sails", <NorthSails />)}>
                            <div>
                                <img src="images/northsails.svg" alt="North Sails" />
                            </div>
                        </div>
                        <div onClick={() => this.showModal("Dootrix", <Dootrix />)}>
                            <div>
                                <img src="images/dootrix.svg" alt="Dootrix" />
                            </div>
                        </div>
                        <div onClick={() => this.showModal("Mi-Voice", <MiVoice />)}>
                            <div>
                                <img src="images/mivoice.svg" alt="Mi-Voice" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Experience-Block">
                    <h1 className="Experience-Title">Experience</h1>
                    <p className="Experience-Text">
                        Through my 6 years experience in the field I have worked for a variety of different
                        companies each offering unique services across many different sectors. Each role has
                        offered a multitude of different problems to solve which I belive has helped me develop
                        my skills to tackle any problem thrown at me.
                        <br /><br />
                        Feel free to click through the different roles to see what I did in each role and how
                        it's benefited me and my abilities as a developer.
                    </p>
                </div>
                <Modal show={this.state.show} title={this.state.data.title} handleClose={this.hideModal}>
                    {this.state.data.content}
                </Modal>
            </div>
        );
    }
}