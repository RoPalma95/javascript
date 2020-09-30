const oldSystem = new Map([
	[1, ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]],
	[2, ["D", "G"]],
	[3, ["B", "C", "M", "P"]],
	[4, ["F", "H", "V", "W", "Y"]],
	[5, ["K"]],
	[8, ["J", "X"]],
	[10, ["Q", "Z"]]
]);

export const transform = (old) => {

	let newSystem = new Object();

	for (const points of oldSystem){  //points = [key, value]
		if(old[points[0]]){
			for(let i = 0; i < old[points[0]].length; i++){
				newSystem[old[points[0]][i].toLowerCase()] = points[0];
			}
		}
	}
	return newSystem;
};