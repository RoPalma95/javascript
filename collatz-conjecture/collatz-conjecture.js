
export const steps = (n) => {
    
    if(n <= 0) {
        throw new Error("Only positive numbers are allowed");

    }else {

        let counter = 0;
        
        while(n != 1){

            (n % 2 == 0) ? n = n / 2 : n = 3 * n + 1;
           
            counter++;
        }
        return counter;
    }
};
