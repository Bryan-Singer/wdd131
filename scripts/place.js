// Current Year
const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");
// Modified date
const date = new Date(document.lastModified);

year.textContent = new Date().getFullYear();
lastmodified.innerHTML = date

//Weather variables
const temp = document.querySelector('#temp');
const cond = document.querySelector('#condition');
const wind = document.querySelector('#wind');
const chil = document.querySelector('#chill');

//Weather code
temp.textContent = '80 F';
cond.textContent = 'Partly Cloudy';
wind.textContent = '5 mph';
chil.textContent = 'NA'