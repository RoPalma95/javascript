
export const isArmstrongNumber = (number = 0) => {

	let numberArray = number.toString().split('');
	let power = numberArray.length;
	let result = 0;

	numberArray.forEach(number => {
		result += Number(number) ** power;
	});

	return (result === number);
};