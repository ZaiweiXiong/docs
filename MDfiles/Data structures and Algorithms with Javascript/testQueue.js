function Queue(){
    this.dataStore=[];
    this.enqueue = enqueue;
    this.enqueue_= enqueue_
    this.dequeue = dequeue;
    this.toString = toString;
    this.empty = empty;
}
function enqueue (e) {
    this.dataStore.push(e);
}
function enqueue_(e){
    
    this.dataStore.splice(0,0,e)
}
function dequeue(){
      return  this.dataStore.shift();
}
function empty(){
    if (this.dataStore.length!=0){
        return false
    }
    return true
}
function toString(){
    var retstr = ""
    for (var i=0;i<this.dataStore.length;i++){
        retstr+=this.dataStore[i]+' ';
    }
    return retstr;
}

var q = new Queue();
q.enqueue('A');
q.enqueue('B');
q.enqueue('C');
console.log("enqueue str=> "+q.toString())
console.log("empty str=> "+q.empty())