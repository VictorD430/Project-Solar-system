import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((planeta) => {
            const { name, image } = planeta;
            return (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            );
          })}

        </div>
      </div>
    );
  }
}
export default SolarSystem;
