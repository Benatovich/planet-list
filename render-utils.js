export function renderPlanetCard(planet) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('planet-card');

    p.textContent = planet.name;
    img.src = `./assets/${planet.name}.jpg`;
    a.href = `./detail/?id=${planet.id}`;
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPlanetDetail(planet) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const residentsEl = document.createElement('p');
    const environmentEl = document.createElement('p');
    const starEl = document.createElement('p');

    div.classList.add('planet-detail');

    nameEl.textContent = planet.name;
    nameEl.classList.add('name');
    
    residentsEl.textContent = planet.residents;
    residentsEl.classList.add('residents');

    environmentEl.textContent = planet.environment;
    environmentEl.classList.add('environment');

    starEl.textContent = planet.star;
    starEl.classList.add('star');

    img.src = `../assets/${planet.name}.jpg`;

    div.append(nameEl, img, residentsEl, environmentEl, starEl);

    return div;
}