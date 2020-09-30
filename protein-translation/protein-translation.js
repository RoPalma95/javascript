const PAIRS = {
	AUG: "Methionine",
	UUU: "Phenylalanine",
	UUC: "Phenylalanine",
	UUA: "Leucine",
	UUG: "Leucine",
	UCU: "Serine",
	UCC: "Serine",
	UCA: "Serine",
	UCG: "Serine",
	UAU: "Tyrosine",
	UAC: "Tyrosine",
	UGU: "Cysteine",
	UGC: "Cysteine",
	UGG: "Tryptophan",
	UAA: "STOP",
	UAG: "STOP",
	UGA: "STOP"
};

export const translate = (rna = "") => {
	
	if (rna === "") return [];

	let codons = getCodons(rna);
	let result = [];

	codons.forEach(codon => {
		if (!PAIRS.hasOwnProperty(codon)) {
			throw new Error("Invalid codon");
		}
		result.push(PAIRS[codon])
	});

	for (let i = 0; i < result.length; i++) {
		if (result[i] === "STOP") {
			result = result.slice(0, i);
			break;
		}
	}
	return result;
};

function getCodons(rna){
	let codons = [];
	for (let i = 0; i < rna.length; i += 3) {
		codons.push(rna.slice(i, i+3));
	}
	return codons;
}