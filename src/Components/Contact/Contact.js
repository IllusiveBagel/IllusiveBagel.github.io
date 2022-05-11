import React from "react";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="Contact-Container">
                <div className="Contact-Left">
                    <img className="Contact-Icon" src="images/envelope.svg" alt="Envelope"/>
                </div>
                <div className="Contact-Block">
                    <h1 className="Contact-Title">Get In Touch</h1>
                    <div className="Contact-Links">
                        <div className="Contact-Link">
                            <p>Phone</p>
                            <a href="tel:07446696964">07446696964</a>
                        </div>
                        <div className="Contact-Link">
                            <p>Email</p>
                            <a href="mailto:logan@neutral.systems">logan@neutral.systems</a>
                        </div>
                        <div className="Contact-Link">
                            <p>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/lky/" target="_blank" rel="noreferrer">linkedin.com/in/lky</a>
                        </div>
                        <div className="Contact-Link">
                            <p>Github</p>
                            <a href="https://github.com/IllusiveBagel" target="_blank" rel="noreferrer">github.com/IllusiveBagel</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}