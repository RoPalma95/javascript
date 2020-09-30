export const transform = (old) => {

	let newSystem = new Object();

	for (const [points, letters] of Object.entries(old)){  
		for(let i = 0; i < letters.length; i++){
			newSystem[letters[i].toLowerCase()] = Number(points);
		}
		
	}
	return newSystem;
};