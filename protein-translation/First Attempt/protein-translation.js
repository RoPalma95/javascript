//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = []) => {
  const CODONS = [
    {codon: 'AUG',  protein: 'Methionine'   },
    {codon: 'UUU',  protein: 'Phenylalanine'},
    {codon: 'UUC',  protein: 'Phenylalanine'},
    {codon: 'UUA',  protein: 'Leucine'      },
    {codon: 'UUG',  protein: 'Leucine'      },
    {codon: 'UCU',  protein: 'Serine'       },
    {codon: 'UCC',  protein: 'Serine'       },
    {codon: 'UCA',  protein: 'Serine'       },
    {codon: 'UCG',  protein: 'Serine'       },
    {codon: 'UAU',  protein: 'Tyrosine'     },
    {codon: 'UAC',  protein: 'Tyrosine'     },
    {codon: 'UGU',  protein: 'Cysteine'     },
    {codon: 'UGC',  protein: 'Cysteine'     },
    {codon: 'UGG',  protein: 'Tryptophan'   },
    {codon: 'UAA',  protein: 'STOP'         },
    {codon: 'UAG',  protein: 'STOP'         },
    {codon: 'UGA',  protein: 'STOP'         }
  ];

  //Variables definition

  let length = rna.length;
  let stopProtein
  let index = 0;
  let acid = [];
 
  //Separate the input into three-characters codones

  for (let i = 0; i < length; i += 3) {
    acid[index] = rna.slice(i, i+3);
    index++;
  }

  //Compare and find the objects that match the acid

  let proteins = [];

  for (let i = 0; i < acid.length; i++) {
    proteins[i] = CODONS.find((item) => item.codon === acid[i]);
  }

  //Error message if invalid rna sequence is passed
  //First condition checks if the value of rna passed is different than 0 AND if no match was found in CODONS
  //Second conditions checks if the number of characters entered in the rna sequence can be divided into codons (groups of 3)
  if ((acid.length != 0 && proteins[0] == undefined) || length % 3 != 0) {
    throw new Error('Invalid codon');
  }

  //Store only the protein property of the matching objects

  let result = proteins.map((item) => item.protein);

  //Eliminate results from the STOP codon onwards

  stopProtein = result.findIndex(item => item == 'STOP'); //returns -1 if element isn't found
  
  if (stopProtein != -1) {
    result = result.slice(0, stopProtein);
  }

  return result;
};

