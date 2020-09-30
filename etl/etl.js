export const transform = (old) => {

	let newSystem = new Object();

	for (const [points, letters] of Object.entries(old)){  
		for(const letter of letters){
			newSystem[letter.toLowerCase()] = Number(points);
		}
		
	}
	return newSystem;
};