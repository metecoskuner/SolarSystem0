const input = document.getElementById('mass');
const button = document.getElementById('buttonCalculate');
const resultSpan = document.getElementById('result');
const select = document.getElementById('planets');
const planetName = document.getElementById('planetName');
const img = document.getElementById('img');

// Set default planet on page load
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();  
});

button.addEventListener('click', click);

function click() {
    const objectWeightValue = input.value.trim();

    if (objectWeightValue === "" || isNaN(objectWeightValue)) {
        resultSpan.textContent = "Please enter a valid object weight.";
        return;
    }

    const objectWeight = parseFloat(objectWeightValue);
    const selected = select.value;

    if (selected === 'none') {
        resultSpan.textContent = "Please select a planet.";
        return;
    }

    const gravity = getGravity(selected);
    const weight = calculateWeight(objectWeight, gravity);

    resultSpan.innerHTML = `<span>${weight.toFixed(2)} N</span>`;
    planetName.innerHTML = `<span>${selected.toUpperCase()}</span>`;
    img.src = `./photos/${selected}.png`;
}

function getGravity(selected) {
    const gravityMap = {
        mercury: 3.7,
        venus: 8.87,
        earth: 9.81,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.69,
        neptune: 11.15,
        moon: 1.62,
        pluto: 0.62
    };

    return gravityMap[selected]; 
}

function calculateWeight(objectWeight, gravity) {
    return objectWeight * gravity;
}

function updateDisplay() {
    const selected = select.value;
    if (selected !== 'none') {
        const defaultWeight = 0; 
        const gravity = getGravity(selected);
        const weight = calculateWeight(defaultWeight, gravity);

        resultSpan.innerHTML = `<span>${weight.toFixed(2)} N</span>`;
        planetName.innerHTML = `<span>${selected.toUpperCase()}</span>`;
        img.src = `./photos/${selected}.png`;
    }
}
