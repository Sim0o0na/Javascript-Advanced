function solve() {
    Array.prototype.last = function () {
        let result = 0;
        result = this[this.length-1];
        return result;
    }
    Array.prototype.skip = function (n) {
        let result = []
        for (let i = Number(n); i<this.length; i++){
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i<Number(n); i++){
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function () {
        let result = 0;
        for (let element of this){
            result+=Number(element);
        }
        return result;
    }
    Array.prototype.average = function () {
        let result = this.reduce(function(p,c,i,a){return p + (c/a.length)},0);
        return result;
    }
}

