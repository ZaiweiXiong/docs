console.log('test stack is first in last out');


function Stack (){

    this.data  = [];
    this.insert = insert;
    this.pop_ = pop_;
    this.display= display;
    this.peek=peek;
    this.size=0;

}
function insert (e){
    this.data.push(e);
    //this.data[this.size++]=e;
}
function pop_(){
    return this.data.pop();
    //return this.data[--this.size];
}
function peek(){
    var size = this.data.length;
    return this.data[size-1];
}
function display(){
    var city='';
    for (var i =0;i<this.data.length;i++){
        city += this.data[i] +' ';
    }
    console.log(city)
}

var s = new Stack();
s.insert('A');
s.insert('B');
s.insert('C');
//console.log('peek='+s.peek())
s.display();
console.log('pop=>'+s.pop_())
//s.display();
