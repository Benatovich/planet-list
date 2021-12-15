import { fetchPlanets } from './fetch-utils.js';
import { renderPlanetCard } from './render-utils.js';

const listContainer = document.getElementById('list-container');

window.addEventListener('load', async() => {
    const planets = await fetchPlanets();
    for (let planet of planets) {
        const planetEl = renderPlanetCard(planet);
        listContainer.append(planetEl);
    }
});