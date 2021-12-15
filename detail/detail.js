import { fetchPlanetCard } from '../fetch-utils.js';
import { renderPlanetDetail } from '../render-utils.js';

const detailContainer = document.getElementById('detail-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    const planet = await fetchPlanetCard(id);
    console.log(planet);
    const planetDetailEl = renderPlanetDetail(planet);
    console.log(planetDetailEl);
    detailContainer.append(planetDetailEl);
});