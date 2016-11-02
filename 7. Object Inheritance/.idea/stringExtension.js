(function () {
    String.prototype.ensureStart = function (str) {
        let result = '';
        if(!this.startsWith(str)){
            result = str+this;
        }
        return result;
    }
    String.prototype.ensureEnd = function (str) {
        let result = '';
        if(!this.endsWith(str)){
            result = this+str;
        }
        return result;
    }
    String.prototype.isEmpty = function () {
        let result = false;
        if(this.lenght=0){
            result = true;
        }
        return result;
    }
    String.prototype.isEmpty = function () {
        let result = false;
        if(this.lenght=0){
            console.log(this.length)
            result = true;
        }
        return result;
    }
    String.prototype.truncate = function (n) {
        let result = '';
        if(this.length>n){
            for (let i = 0; i < n; i++) {
                result += this[i];
            }
            result = result+"...";
        }
        else{
            return this.toString();
        }
        return result;

    }
    String.format = function (string, ...params) {
        for (let i = 1; i < arguments.length; i++) {
            string = string.replace('{' + (i - 1) + '}', arguments[i]);
        }

        return string;
    };
})();



let name = 'Simonka e basi qkata';
console.log(name.ensureStart('Moni'));
console.log(name.ensureEnd('Moni'));
console.log(name.isEmpty());
console.log(name.truncate(10));