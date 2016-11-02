class Stringer{
    constructor(str, len){
        this.innerString  = str;
        this.innerLength = len;
    }
    increase(len){
        return this.innerLength+=len;
    }
    decrease(len){
        this.innerLength-=len;
        if(this.innerLength<0) this.innerLength=0;
        return this.innerLength;
    }
    toString(){
        if(this.innerString.length>this.innerLength){
            let leng = this.innerLength-this.innerString.length;
            this.innerString=this.innerString.slice(0,leng);
            this.innerString+="...";
        }
        if(this.innerLength=0){
            return "...";
        }
        return this.innerString;
    }
}

let stringer1 = new Stringer('Simona',3);
stringer1.decrease(1);
console.log(stringer1.innerLength);
console.log(stringer1.toString());