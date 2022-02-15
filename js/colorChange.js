let colorWell;
const defaultColor = "#EBECF0";
const input = document.querySelectorAll(".input");
const bigButton = document.querySelector(".big-button");
const bottomButton = document.querySelectorAll(".bottom-button");
const colorInput = document.querySelector(".color-input");

window.addEventListener("load", startup, false);

function startup() {
	colorWell = document.querySelector(".color-input");
	colorWell.value = defaultColor;
	colorWell.addEventListener("input", updateFirst, false);
	colorWell.addEventListener("change", updateAll, false);
	colorWell.select();
}

// функция затемнения цвета
function hexToDarkenHSL(H) {
	// Convert hex to RGB first
	let r = 0,
		g = 0,
		b = 0;
	if (H.length == 4) {
		r = "0x" + H[1] + H[1];
		g = "0x" + H[2] + H[2];
		b = "0x" + H[3] + H[3];
	} else if (H.length == 7) {
		r = "0x" + H[1] + H[2];
		g = "0x" + H[3] + H[4];
		b = "0x" + H[5] + H[6];
	}
	// Then to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0)
		h = 0;
	else if (cmax == r)
		h = ((g - b) / delta) % 6;
	else if (cmax == g)
		h = (b - r) / delta + 2;
	else
		h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	if (h < 0)
		h += 360;

	l = (cmax + cmin) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100 - 18).toFixed(1);

	return "hsl(" + h + "," + s + "%," + l + "%)";
}


// функция осветления цвета
function hexToLighterHSL(H) {
	// Convert hex to RGB first
	let r = 0,
		g = 0,
		b = 0;
	if (H.length == 4) {
		r = "0x" + H[1] + H[1];
		g = "0x" + H[2] + H[2];
		b = "0x" + H[3] + H[3];
	} else if (H.length == 7) {
		r = "0x" + H[1] + H[2];
		g = "0x" + H[3] + H[4];
		b = "0x" + H[5] + H[6];
	}
	// Then to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0)
		h = 0;
	else if (cmax == r)
		h = ((g - b) / delta) % 6;
	else if (cmax == g)
		h = (b - r) / delta + 2;
	else
		h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	if (h < 0)
		h += 360;

	l = (cmax + cmin) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100 + 7).toFixed(1);

	return "hsl(" + h + "," + s + "%," + l + "%)";
}



function updateFirst(event) {
	let shadow = hexToDarkenHSL(event.target.value);
	let highlight = hexToLighterHSL(event.target.value);

	getComputedStyle(document.documentElement)
		.getPropertyValue('--bg');

	if (input) {
		//смена содержимого css переменных для смены цвета
		document.documentElement.style
			.setProperty('--bg', event.target.value);
		document.documentElement.style
			.setProperty('--shadow', shadow);
		document.documentElement.style
			.setProperty('--white', highlight);


		//удаление класса transition во время смены цвета в color-input
		for (let i = 0; i < input.length; i++) {
			input[i].classList.remove('transition')
		}
		bigButton.classList.remove("transition");
		colorInput.classList.remove("transition");
		for (let i = 0; i < bottomButton.length; i++) {
			bottomButton[i].classList.remove('transition')
		}
	}
}

//функция добавления класса transition после окончательного выбора цвета в color-input
// function updateAll(event) {
// 	for (let i = 0; i < input.length; i++) {
// 		input[i].classList.add('transition')
// 	}
// 	bigButton.classList.add("transition");
// 	colorInput.classList.add("transition");
// 	for (let i = 0; i < bottomButton.length; i++) {
// 		bottomButton[i].classList.add('transition')
// 	}
// }
//функция добавления класса transition после окончательного выбора цвета в color-input
function updateAll(event) {
	
	setTimeout(
		function updateAll(event){ 
			for (let i = 0; i < input.length; i++) {
			input[i].classList.add('transition')
			}
			bigButton.classList.add("transition");
			colorInput.classList.add("transition");
			for (let i = 0; i < bottomButton.length; i++) {
				bottomButton[i].classList.add('transition')
			}
		},200);
}
// setTimeout(function(){ document.getElementById("mark").innerHTML=i;},2000);