import React from 'react';


export default class SupplyPoint extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Content-Title">SupplyPoint</h1>
                <p className="Content-Text">
                    I joined SupplyPoint as a junior full-stack developer and mainly helped
                    with bug fixes in a couple different REST API's when I first started.
                    This was a valuable learning point for me as it gave me the foundation
                    knowledge on how to effectively work in a software team. It also helped
                    me gain the skills needed to work on code that I havent written. 
                    <br /><br />
                    After working with SupplyPoint for a few months I was given the task of
                    redesigning the UI that is used on the machines they produced. This offered
                    a great oppurtunity to use the React knowledge I had been gaining in my
                    personal time. I suggested React to the team and everyone seemed keen to
                    use it so the new UI used React as it's foundation and was built into a
                    windows desktop application using Electron.
                    <br /><br />
                    With SupplyPoint being my first role as a developer I feel like it was a
                    very important step in helping me move my career forward. This is also
                    where I started to use a lot of the technologies that I now specialise in.
                </p>
                <h1 className="Content-SubTitle">Skills Used</h1>
                <div className="Content-Skills">
                    <div className="Content-Skill">
                        <p>C#</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "80%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>Javascript</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "50%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>React</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "80%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>CSS</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "60%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>REST API's</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "70%" }}></div>
                        </div> 
                    </div>
                    <div className="Content-Skill">
                        <p>Documentation</p>
                        <div className="Content-Skill-Container">
                            <div className="Content-Skill-Status" style={{ width: "40%" }}></div>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}