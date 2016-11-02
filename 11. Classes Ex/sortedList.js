(function () {
    class SortedList{
        constructor(){
            this.storage = [];
            this.size = 0
        }
        correctIndex(index){
            if(index>=0 && index<this.storage.length){
                return true
            }
            return false
        }
        add(element){
            this.storage.push(element);
            this.storage.sort(function (a,b) {
                return a-b;
            });
            this.size++
        }

        remove(index){
            if(this.correctIndex(index)){
                this.size--;
                this.storage.splice(index, 1);
                this.storage.sort(function (a,b) {
                    return a-b;
                });
                return this.storage;
            }
        }
        get(index) {
            if (this.correctIndex(index)) {
                return this.storage[index];
            }
        }

    }
    return SortedList
})();


let listche = new SortedList();
listche.add(5);
listche.add(6);
listche.add(7);
listche.add(8);
listche.add(59);
listche.add(1);
listche.add(4);
console.log(listche.storage);
listche.remove(2);
console.log(listche.storage);
console.log(listche.size);
console.log(listche.get(6));