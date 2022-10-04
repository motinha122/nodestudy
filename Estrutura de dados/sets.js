function mySet(){
    let collection = [];
    
    this.has = function(element){
        return(collection.indexOf(element) !== -1);
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }

    this.size = function(){
        return collection.length;
    }

    this.union = function(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);    
        })
        secondSet.forEach(function(e){
            unionSet.add(e);    
        })
        return unionSet.values();
    }

    this.intersection = function(otherSet){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        })
        return intersectionSet.values();
    }

    this.difference = function(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet.values();
    }

    this.subset = function(otherSet){
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setA.add("b");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.values());
console.log(setB.values());
console.log(setA.intersection(setB));
console.log(setA.subset(setB));
console.log(setA.union(setB));
console.log(setB.difference(setA));