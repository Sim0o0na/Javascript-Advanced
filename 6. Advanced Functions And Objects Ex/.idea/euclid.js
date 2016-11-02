(function () {
    let gcd = function(a, b) {
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
    };
    return gcd;
})();
console.log(gcd(252, 105));
