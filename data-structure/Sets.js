/**
 * -  Sets Don't allow Duplicate Values
 * -  They aren't arranged in specific Order
 * -  Methods: has(element), add(element), remove(element), size(), values(). 
 * -  Others(Special): Union(otherSet), intersection(otherSet), difference(otherSet), subset(otherSet)
 */

var mySet = function(){
    var values = [];

    this.has = function(element){
        return (this.values().indexOf(element) !== -1);
    }

    this.add = function(element){
        if(!this.has(element) && element){
            values.push(element);
            return true
        }
        return false;
    }

    this.remove = function(element){
        if(this.has(element)){
            let index = values.indexOf(element);
            values.splice(index, 1);
        }
        
        return false;
    }

    this.size = function(){
        return values.length;
    }

    this.values = function(){
        return values;
    }

    this.union = function(otherSet){
        var newSet = new mySet();
        var otherValues = otherSet.values();
        var currentValues = this.values();

        currentValues.forEach(v => newSet.add(v) )
        otherValues.forEach(v => newSet.add(v))

        return newSet.values();
    }

    this.intersection = function(otherSet){
        var otherValues = otherSet.values();
        var newSet = new mySet();

        otherValues.forEach(v =>{
            if(this.has(v)){
                newSet.add(v);
            }
        })

        return newSet.values();
    }

    this.difference = function(otherSet){
        var newSet = new mySet();
        var otherSet = otherSet.values();

        otherSet.forEach(v =>{
            if(!this.has(v)){
                newSet.add(v)
            }
        })
        return newSet.values()
    }


    this.subset = function(otherSet){
        return this.values().every(v=>{
            return otherSet.has(v)
        })
    }

}


var newSet = new mySet();
var oneSet = new mySet();
newSet.add(5);
newSet.add(3);

oneSet.add(3);
oneSet.add(5);
oneSet.add(20)


console.log(newSet.has(), "REDUTL")