import React from "react";
import ProgressRing from "../Common/ProgressRing";
import Skill from "../Common/Skill";

export default class Skills extends React.Component {
    render() {
        return (
            <div className="Skills-Container">
                <div className="Skills-Overview">
                    <ProgressRing
                        radius={ 120 }
                        stroke={ 14 }
                        progress={ 60 }
                        color="#e31b6d"
                    />
                </div>
                <div className="Skills-Block">
                    <h1 className="Skills-Title">Key Skills</h1>
                    <div className="Skills-Status-Container">
                        <Skill title="React" progress="80%" />
                        <Skill title="C#" progress="50%" />
                        <Skill title="MaterialUI" progress="70%" />
                        <Skill title="CSS" progress="70%" />
                        <Skill title="React" progress="80%" />
                        <Skill title="React" progress="80%" />
                    </div>
                </div>
            </div>
        );
    }
}