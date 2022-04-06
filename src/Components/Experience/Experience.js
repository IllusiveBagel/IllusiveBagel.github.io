import React from 'react';

export default class Info extends React.Component {
    render() {
        return(
            <div className="Experience-Container">
                <div className="Hex">
                    <div className="Hex-Container">
                        <div>
                            <div>
                                <img src="images/ast.svg" alt="AST" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="images/supplypoint.svg" alt="SupplyPoint" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="images/toob.svg" alt="Toob" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="images/northsails.svg" alt="North Sails" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="images/dootrix.svg" alt="Dootrix" />
                            </div>
                        </div>
                        <div>
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
            </div>
        );
    }
}