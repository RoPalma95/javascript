
export class NucleotideCounts {
	static parse(dnaString) {
		if (dnaString === '') return '0 0 0 0'
		
		if (dnaString.match(/[BD-FH-SU-Z\d]/g)) throw new Error('Invalid nucleotide in strand')

		let nucleotides = [/A/g, /C/g, /G/g, /T/g];
		let count = ''
		let matches; 

		for(let i = 0; i <= 3; i++){
			matches = dnaString.match(nucleotides[i]);
			matches === null ? count += '0' : count += matches.length;
			if (i !== 3) count += ' ';
		}

		return count	
	}
}