//This only works when there is only one instance of each letter, needs to work for many instances of the same letter

const encode = (string = '') => {
  
    if (string === '') return string;
    
    let asArray = string.split('');
    let characters = [...new Set(asArray)];
    
    if(string.length === characters.length) return string;

    let indexes = characters.map(character => character = asArray.lastIndexOf(character) + 1);

    let code = [indexes[0]+characters[0]];

    for (let i = 1; i < characters.length; i++) {
        code[i] = (indexes[i]-indexes[i-1]) + characters[i];
    }

    return code.join('');
};

const decode = (string) => {
  throw new Error("Remove this statement and implement this function");
};
