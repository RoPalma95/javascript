export class Triangle {
    constructor(side_1, side_2, side_3) {
        this.side_1 = side_1;
        this.side_2 = side_2;
        this.side_3 = side_3;
    }

    isTriangle() {
        var semiperimeter = (this.side_1 + this.side_2 + this.side_3) / 2;

        return this.side_1 > 0 && this.side_2 > 0 && this.side_3 > 0 &&
               semiperimeter > Math.max(this.side_1, this.side_2, this.side_3);
    }

    isEquilateral() {
        if (this.isTriangle()) {
            return (this.side_1 == this.side_2) && (this.side_2 == this.side_3) ;
        }else return false;

        
    }

    isIsosceles() {
        if (this.isTriangle()) {
            return (this.side_1 == this.side_2) || (this.side_1 == this.side_3) ||
                   (this.side_2 == this.side_3);
        }else return false;
        
    }

    isScalene() {
        if(this.isTriangle()){
            return (this.side_1 != this.side_2) && (this.side_1 != this.side_3) &&
                   (this.side_2 != this.side_3);
        }else return false;
    }
}

/* Removes duplicate elements from an array

      [...new Set(Array)];

It returns the Array without duplicate elements.*/
