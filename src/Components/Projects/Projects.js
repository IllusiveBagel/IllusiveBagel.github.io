import React from 'react';
import Card from '../Common/Card';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="Projects-Container">
                <h1 className="Projects-Title">Projects</h1>
                <div className="Projects-Card-Container">
                    <Card img="images/Synaptic.png" title="Synaptic Implementation" desc="A simple implementation of the Synaptic Neural Network Library" />
                    <Card img="images/Synaptic.png" title="Synaptic Implementation" desc="A simple implementation of the Synaptic Neural Network Library" />
                    <Card img="images/Synaptic.png" title="Synaptic Implementation" desc="A simple implementation of the Synaptic Neural Network Library" />
                    <Card img="images/Synaptic.png" title="Synaptic Implementation" desc="A simple implementation of the Synaptic Neural Network Library" />
                    <Card img="images/Synaptic.png" title="Synaptic Implementation" desc="A simple implementation of the Synaptic Neural Network Library" />
                    <Card img="images/Synaptic.png" title="Synaptic Implementation" desc="A simple implementation of the Synaptic Neural Network Library" />
                </div>
            </div>
        );
    }
}