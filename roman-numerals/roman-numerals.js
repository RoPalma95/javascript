export const toRoman = (number = 0) => {
	let numberArray = number.toString().split('');
	let romanNumeral = '';

	if(number < 10){
		romanNumeral = getUnits(numberArray[0]);
	}else if(number < 100){
		romanNumeral = getTens(numberArray[0]) + getUnits(numberArray[1]);
	}else if(number < 1000){
		romanNumeral = getHundreds(numberArray[0]) + getTens(numberArray[1]) + getUnits(numberArray[2]);
	}else if(number <= 10000){
		romanNumeral = getThousands(numberArray[0]) + getHundreds(numberArray[1]) + getTens(numberArray[2]) + getUnits(numberArray[3]);
	}
	return romanNumeral;
};

function getThousands(number){
	let thousands = Number(number);
	let romanThousands = '';

	for(let i = 0; i < thousands; i++) romanThousands += 'M';
	
	return romanThousands
}
function getHundreds(number){
	let hundreds = Number(number);
	let romanHundreds = '';

	if(hundreds < 4){
		for(let i = 0; i < hundreds; i++){
			romanHundreds += 'C';
		}
	}else if(hundreds === 4) {
		romanHundreds += 'CD';

	}else if(hundreds < 9){
		romanHundreds = 'D'
		for(let i = 0; i < hundreds - 5; i++){
			romanHundreds += 'C';
		}
	}else romanHundreds = 'CM'

	return romanHundreds;
}
function getTens(number){
	let tens = Number(number);
	let romanTens = '';

	if(tens < 4){
		for(let i = 0; i < tens; i++){
			romanTens += 'X';
		}
	}else if(tens === 4) {
		romanTens += 'XL';

	}else if(tens < 9){
		romanTens = 'L'
		for(let i = 0; i < tens - 5; i++){
			romanTens += 'X';
		}
	}else romanTens = 'XC'

	return romanTens;
}
function getUnits(number){
	let units = Number(number);
	let romanUnits = '';

	if(units < 4){
		for(let i = 0; i < units; i++){
			romanUnits += 'I';
		}
	}else if(units === 4) {
		romanUnits += 'IV';

	}else if(units < 9){
		romanUnits = 'V'
		for(let i = 0; i < units - 5; i++){
			romanUnits += 'I';
		}
	}else romanUnits = 'IX'

	return romanUnits;
}

// function romanize (num) {
// 	if (!+num)
// 		return false;
// 	var	digits = String(+num).split(""),
// 		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
// 		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
// 		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
// 		roman = "",
// 		i = 3;
// 	while (i--)
// 		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
// 	return Array(+digits.join("") + 1).join("M") + roman;
// }