// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
// https://www.geeksforgeeks.org/array-data-structure/#rotation

function Node(e) {
    this.e = e;
    this.next = null;
}
function LList() {

    this.head = new Node('head');
    this.find = find;
    this.insert= insert;
    this.display= display;
    this.add = add;
    this.remove = remove;
    this.findPrevious=findPrevious;
    this.size = 0
}

function remove(item){
    var pre = this.findPrevious(item);
    pre.next = pre.next.next;
    this.size--;
}

function add(element) {
   var newNode = new Node(element)
   var curr;
   if (this.head.next==null){
        this.head.next  = newNode;
   }else {
         curr = this.head.next;
         while (curr.next){
             curr = curr.next
         }
            curr.next = newNode;
   }
            this.size++;
  
}

function find(item){
    var curr = this.head;
    while (curr.e!=item){
        curr = curr.next;
    }
        return curr;
}
function findPrevious(item){
    var curr = this.head;
    while ((curr.next !=null)&& (curr.next.e!=item)){
        curr = curr.next
    }
    return curr

}

function display () {

    var cities ='';
    var curr = this.head;
    while (curr.next!=null){
        if (curr.next.e!='head'){
            cities+= curr.next.e + " ";
            curr = curr.next;
        }
       
    }
        console.log(cities);
}

function insert(newNode, item) {

    var newelement = new Node(newNode);
    var curr = this.find(item);
    newelement.next = curr.next;
    curr.next = newelement;
    this.size++

}

   var l = new LList();
//    l.insert("Beijing","head");
//    l.insert("Tianjing","Beijing");
//    l.insert("Shanghai","Tianjing");
//    l.insert("Chongqing","Shanghai");
//    l.insert("Chengdu","Chongqing");

   l.add('A')
   l.add('B')
   l.add('C')
   l.display();
   console.log(l.size);
   l.remove('B');
   l.display();
   console.log(l.size);
  







