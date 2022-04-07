import React from 'react';


export default class AST extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Content-Title">AST Group</h1>
                <p className="Content-Text">
                    My first role was at AST and was part of an appreticeship. I was hired at
                    AST primarily as a software tester but while working at AST I undertook 2
                    roles, As mentioned the main role was testing the software but the secondary
                    role was as a network engineer. I was responsible for maintaining all of the
                    in house servers that were used for the software such as dev and test servers.
                    <br /><br />
                    While working at AST I worked very closely with the developers who helped 
                    me get started with software development. An extra task I took on was creating
                    unit tests in C# to help speed up the process. Alongside the unit tests I
                    was also developing automated UI tests using the Selenium framework and Python
                    which offered a unique and helpful system for end-to-end testing that didn't
                    require too many man hours each time a release was ready.
                    <br /><br />
                    IRIS is a solution AST offer that I spent most of my time working with, IRIS
                    is an asset tracking software that allows to accurately track and communicate
                    with satellite tracking device. The requirement to test if different devices
                    worked with the system meant that I gained a strong understanding of how these
                    devices worked. The knowledge gained on these devices and how they communicate
                    has given me unique knowledge on how different network types function and how
                    data is transfered using them.
                    <br /><br />
                </p>
                <h1 className="Content-SubTitle">Skills Used</h1>
                <div className="Content-Skills">
                    <div className="Content-Skill">
                        <p>Testing</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "90%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>Network Engineering</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "70%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>Python</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "60%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>C#</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "50%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>Javascript</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "60%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>Documentation</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "90%" }}></div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}