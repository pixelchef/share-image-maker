$(document).ready(function() {
  
// Get elements
var row = document.getElementById("row");
var heading = document.getElementById("heading");
var strapline = document.getElementById("strapline");

// Fonts array
var fonts = ['effra_rg-webfont'];

// Randomise styles
var randHeading = fonts[Math.floor(Math.random() * fonts.length)];
var randStrapline = fonts[Math.floor(Math.random() * fonts.length)];
var randImage = "https://unsplash.it/1200/800/?image=" + Math.floor(100 + Math.random() * 900);

// Apply random styles
row.style.color = randomColor({
	luminosity: 'light'
});
row.style.backgroundColor = randomColor({
	luminosity: 'dark'
});
row.style.backgroundImage = "url(" + randImage + ")";

heading.setAttribute("class", randHeading);
strapline.setAttribute("class", randStrapline);

});