class Data{
    constructor(m, url, v, msg, r = undefined, f = false){
        this.method = m;
        this.uri = url;
        this.version = v;
        this.message = msg;
        this.response = r;
        this.fulfilled = f;
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);