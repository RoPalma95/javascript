const NUCLEOTIDES = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
}

export const toRna = (dna = '') => {
	
	if(dna === '') return '';

	let dnaArray = dna.split('');
	
	let rna = dnaArray.map(nucleotide => NUCLEOTIDES[nucleotide]);
	
	return rna.join('');
};