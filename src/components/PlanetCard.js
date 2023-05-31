import React, { Component } from "react";

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <h1>{planetName}</h1>
        <img src={planetImage} alt={`Planeta ${planetName}`}/>
    
      </div>
    );
  }
}

export default PlanetCard;