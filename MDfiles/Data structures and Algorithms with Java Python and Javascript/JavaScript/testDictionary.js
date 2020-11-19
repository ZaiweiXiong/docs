console.log('test Dictionary in node.js')

function Dictionary(){

    this.dataStore = [];
    this.add = add;
    this.find = find;
    this.remove=remove;
    this.showAll = showAll;
}

function add (key,value){
    this.dataStore[key]=value;
}
function find(key){
    return this.dataStore[key];
}
function remove(key){
    delete this.dataStore[key];
}
function showAll(){

    n=0;
    var keys = Object.keys(this.dataStore).sort();
    
    for (var i=0;i<keys.length;i++){
            var k = keys[i];
            console.log('key->'+k+ ' value-> '+this.dataStore[k]);
            n++;
    }
            console.log('Dirtionary size =>'+n);
}

var d = new Dictionary();
d.add('M','123');
d.add('D','345');
d.add('C','567');
d.showAll();
d.remove('C');
d.showAll();
console.log('find '+d.find('D'))