function Set(){

    this.dataStore=[];
    this.add = add;
    this.remove=remove;
    this.size=size;
    this.show = show;
    this.contains=contains;
    this.union = union;
    this.intersect= intersect;
    this.difference=difference;
    this.subset = subset;
}

function union (set){
    var tempset = new Set();
    for (var i=0;i<this.dataStore.length;i++){
        tempset.add(this.dataStore[i]);
    }
    for (var j=0;j<set.dataStore.length;j++){
        if (!tempset.contains(set.dataStore[j])){
            tempset.dataStore.push(set.dataStore[j]);
        }
    }
    return tempset;
}

function subset(set){

    if (this.size>set.size){
        return false;
    }else{
        for (var i=0;i<this.dataStore.length;i++){
            if (!set.contains(this.dataStore[i])){
                    return false;
            }
        }
    }
    return true;

}

function difference(set){
    var tempSet = new Set();
    for (var i=0;i<this.dataStore.length;i++){
        if (!set.contains(this.dataStore[i])){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set){
    var tempset = new Set();
    for (var i=0;i<this.dataStore.length;i++){
        if (set.contains(this.dataStore[i])){
            tempset.add(this.dataStore[i]);
        }
    }
    return tempset;
}

function size (){
    return this.dataStore.length;
}

function contains(item){
    if (this.dataStore.indexOf(item)>-1){
        return true;
    }else{
        return false;
    }
}

function add(item){

    if (this.dataStore.indexOf(item)<0){
        this.dataStore.push(item);
        return true;
    }else{
        return false;
    }
    
}
function remove(item){

    var pos = this.dataStore.indexOf(item);
    if (pos>-1){
        this.dataStore.splice(pos,1);
        return true;
    }else{
        return false;
    }
}

function show(){
    return this.dataStore;
}

var s = new Set();
s.add('A');
s.add('B');
s.add('C');
console.log(s.size())
console.log(s.show());
var dmp = new Set();
dmp.add('A');
dmp.add('E');
dmp.add('F');
console.log(dmp.show());

var it = new Set();
it = s.union(dmp);
console.log('it=>'+it.show());

var inter = s.intersect(dmp);
console.log('inter=>'+inter.show());

var diff = new Set();
diff = s.difference(dmp)
console.log('diff=>'+diff.show());

console.log('subset=>'+s.subset(dmp))