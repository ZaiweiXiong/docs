console.log('test double linked lists')

function Node (e){

    this.e = e;
    this.next= null;
    this.previous=null
}
function dList(){

    this.head = new Node('head');
    this.find = find;
    this.insert =insert;
    this.add = add;
    this.remove=remove;
    this.findLast=findLast;
    this.update = update;
    this.display=display;
    this.size=0;
}

function find(item){

     var curr = this.head;
     while (curr.e!=item){
         curr = curr.next;
     }
        return curr;
}

function insert(e,item){

    var newNode = new Node(e);
    var curr = this.find(item);
    newNode.next= curr.next;
    newNode.previous = curr;
    curr.next = newNode;
}

function add (e){

    var newNode = new Node(e);
    var curr;
    if (this.head.next==null){
        this.head.next = newNode;
    }else {
        curr = this.head.next;
        while (curr.next){
            curr = curr.next;
        }
        newNode.next= curr.next;
        newNode.previous = curr;
        curr.next = newNode;
        
            
    }

}

function update(e,item){
    
    var newNode      = new  Node(e);
    var curr         = this.find(item);
    console.log('it will update '+curr.e);
    newNode.next     = curr.next;
    newNode.previous = curr.previous;
    curr.previous.next = newNode;

}

function remove(item){

    var curr = this.find(item);
    if (curr.next!=null){
        curr.previous.next = curr.next;
        curr.next.previous = curr.previous;
        curr.next =null;
        curr.previous=null;
    }
    if (curr == this.findLast()){
        curr.next =null;
        curr.previous.next=null;
    }

}
function findLast(){
    var curr = this.head;
    while (curr.next!=null){
        curr = curr.next;
    }
    return curr;
}

function display(){
    var city = '';
    var curr = this.head;
    while (curr.next){
        city +=curr.next.e+' ';
        curr= curr.next;
    }
        console.log(city)
}

var l = new dList();
l.add('A');
l.add('B');
l.add('C');
l.display();
l.remove('B');
l.display();
// l.insert('A','head')
// l.insert('B','A');
// l.insert('C','B')
// l.insert('D','C')
// l.display();
// l.update('A1','C');
// l.display();
//l.remove('A')
//l.display();
//console.log(l.findLast())