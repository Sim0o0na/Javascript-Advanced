(function () {
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };
    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K', 'J'];

    function contains(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    class Card {
        constructor(face, suit) {
            if (!contains(Faces, face)) {
                throw new Error("Invalid card suite: " + suit);
            }
            if (!contains(Object.keys(Suits),suit)) {
                throw new Error("Invalid card suite: " + suit);
            }
            this.suit = suit;
            this.face = face;
        }
        toString() {
            return `${this.face}${this.suit}`;
        }
    }
    return {Suits, Faces, Card}
})();