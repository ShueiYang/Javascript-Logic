//Question 3: Write a function that converts HEX to RGB. 
//Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
//and if you enter RGB color format it returns HEX.

function hexRgbConversion(color) {

	const rgbToHex = (rgbColor) => {
		let rgbStr = rgbColor.slice(4,-1).split(",") ;
		let rgb = rgbStr.map(str => Number(str));
		return "#"+ rgb.map(x => {let hex = x.toString(16)
		return hex.length === 1 ? "0"+hex : hex 
		}).join("");
	}

	const hexToRgb = (hexColor) => {
		let hex = hexColor.slice(1);
		let hexArray = hex.match(/.{2}/g);
		let rgb = hexArray.map(x => parseInt(x, 16))
		return hexColor.length != 7 ? "Only # + six-digit hex colors are allowed." :
		"rgb(" +rgb +")"
	}

	if (color[0] === "#") {
			return hexToRgb(color)
	}
	else if (color.toString().startsWith("rgb(") && color.endsWith(")"))  {
			return rgbToHex(color)
	}
	else {return `Wrong format! Please insert either HEX format in the form '#aabbcc'
or RGB format in the form 'rgb(r,g,b)' to convert to the other format`;
	}
}

 console.log(hexRgbConversion("rgb(86,7,166)"));  //'#5607a6'
 console.log(hexRgbConversion("#5607a6")); //'rgb(86,7,166)'