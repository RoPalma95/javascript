//exception handlign and parsing

export const encode = (string = '') => {
    if (string === '') return string; 
 
    let asArray = string.split('');
    let testCharacter = asArray[0];
    let counter = 0;
    let code = '';

    for (let letter of asArray){
        
        if (letter === testCharacter) counter++;
        else {

            if (counter == 1) code += testCharacter;
            else code += counter + testCharacter;

            testCharacter = letter;
            counter = 1;
        }
    }
    if (counter != 1) return code + counter + asArray[string.length - 1];
    else return code + asArray[string.length - 1];
};

export const decode = (string = '') => {
    if (string == '') return string;
    
    let asArray = string.split('');
    let times = '';
    let code = '';

    for(let letter of asArray){
        if (Number(letter)) times += letter;
        else {
            if (times == '') code += letter;
            else {
                times = Number(times);
                for (let i = 0; i < times; i++){
                    code += letter;
                }
            }
            times = '';
        }
    }
    return code;
};

