const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DESCRIPTORS = ['teenth', 'first', 'second', 'third', 'fourth', 'fifth', 'last'];
const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const meetup = (year, month, descriptor, dayOfWeek) =>  {
	let firstDayOfMonth = new Date(year, month - 1, 1).getDay();
	let givenDay = DAYS_OF_WEEK.indexOf(dayOfWeek);
	let descriptorIndex = DESCRIPTORS.indexOf(descriptor);
	let daysOfMonth = 0;
	let result = 0;
	
	if(descriptorIndex === 0){
		result = teenthDay(year, month - 1, givenDay);
		return new Date(year, month - 1, result);
	}

	(isLeapYear(year) && month == 2) ? daysOfMonth = 29 : daysOfMonth = DAYS_IN_MONTH[month - 1];

	let day = firstDayOfMonth;
	let counter = 0;

	for(let i = 1; i <= daysOfMonth; i++){
		if(givenDay === day) {
			result = i;
			counter++;
		}
		if(counter === descriptorIndex) break;
		day++
		if(day > 6){
			day = 0;
		}
	}

	return new Date(year, month - 1, result);
}

function isLeapYear(year){
	return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
}

function teenthDay(year, month, day){
	let teenthDay = new Date(year, month, 13).getDay();

	for(let i = 13; i < 20; i++){
		if(teenthDay === day){
			return i;
		}
		teenthDay++
		if(teenthDay > 6){
			teenthDay = 0
		}
	}
}