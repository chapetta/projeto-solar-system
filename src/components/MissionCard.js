import React, { Component } from "react";

class MissionCard extends Component {
  render() {
    const {name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <span data-testid="mission-name">{name}</span>
        <span data-testid="mission-year">{year}</span>
        <span data-testid="mission-country">{country}</span>
        <span data-testid="mission-destination">{destination}</span>
      </div>
    );
  }
}

export default MissionCard;