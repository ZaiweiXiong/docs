// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
// https://www.geeksforgeeks.org/array-data-structure/#rotation

function Node(e){

    this.e    = e;
    this.next = null;
}
function LList(){

    this.head    = new Node('head');
    this.add     = add;
    this.insert  = insert;
    this.find    = find;
    this.findPrevious =findPrevious;
    this.remove = remove;
    this.update = update;
    this.display = display;
    this.size    = 0;
}

function find (item){

    var curr = this.head;
    while (curr.e !=item){
        curr = curr.next;
    }
    return curr;
}
function findPrevious(item){

    var curr = this.head;
    while ((curr.next!=null)&&(curr.next.e!=item)){
            curr = curr.next;
    }
    return curr;
}
function remove(item) {
  
    var pre = this.findPrevious(item);
    if (pre.next!=null){
        pre.next = pre.next.next;
    }
   
}

function insert (e, item){

    var newelement = new Node(e);
    var curr = this.find(item);
    newelement.next = curr.next;
    curr.next = newelement;
    this.size++;
}

function update(e,item){
    var newNode = new Node(e);
    var curr = this.find(item);
    newNode.next = curr.next;
    var pre = this.findPrevious(item);
    pre.next = newNode;
    
}

function add (e){

    var newNode = new Node(e);
    var curr;
    if (this.head.next==null){
        this.head.next = newNode;
    }else{
        curr = this.head.next;
        while(curr.next){
            curr = curr.next;
        }
            curr.next = newNode;
    }
            this.size++;
}
function display () {
    var city = ''
    var curr = this.head;
    while (curr.next){
        city +=curr.next.e+' ';
        curr = curr.next;
    }
       console.log(city)
}

var cities  = new LList();
// cities.add('Beijing');
// cities.add('TianJing');
// cities.add('Shanghai');
// cities.add('Chongqing');
// cities.add('City');

cities.insert('A','head');
cities.insert('B','A');
cities.insert('C','B');
cities.display();
console.log(cities.size)
cities.update('D','A')
cities.display();

