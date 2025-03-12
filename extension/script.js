const pet = document.getElementById('pet');
const hungerDisplay = document.getElementById('hunger');
const happinessDisplay = document.getElementById('happiness');
const feedButton = document.getElementById('feed');
const playButton = document.getElementById('play');

let hunger = 100;
let happiness = 100;

function updateStatus() {
  hungerDisplay.textContent = hunger;
  happinessDisplay.textContent = happiness;
}

function decreaseStats() {
  hunger = Math.max(0, hunger - 1);
  happiness = Math.max(0, happiness - 1);
  updateStatus();

  if (hunger === 0 || happiness === 0) {
    pet.src = 'images/pet_sad.png';
  } else {
    pet.src = 'images/pet_idle.png';
  }
}

setInterval(decreaseStats, 1000); // Decrease stats every second

feedButton.addEventListener('click', () => {
  hunger = Math.min(100, hunger + 20);
  updateStatus();
  pet.src = 'images/pet_eating.png';
  setTimeout(()=> pet.src = 'images/pet_idle.png', 1000);
});

playButton.addEventListener('click', () => {
  happiness = Math.min(100, happiness + 20);
  updateStatus();
  pet.src = 'images/pet_happy.png';
  setTimeout(()=> pet.src = 'images/pet_idle.png', 1000);
});

updateStatus();
