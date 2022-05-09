import { animals } from '../data.js';
import { findById } from '../utils.js';

const animalName = document.getElementById('animalName');
const animalImg = document.getElementById('animalImg');
const animalInfo = document.getElementById('animalInfo');

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);

animalName.textContent = `Ayy, whatup? My name is ${animal.name}.`;
animalImg.src = `../assets/${animal.type}`;
animalInfo.textContent = `I say ${animal.says}`;