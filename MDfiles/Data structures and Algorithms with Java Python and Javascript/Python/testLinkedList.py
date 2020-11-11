#https://www.tutorialspoint.com/python_data_structure/python_linked_lists.htm

def test_linkedList():

    print('test linkedlist!')
    ll = LList()
    ll.add('A')
    ll.add('B')
    ll.add('C')
    # ll.insertNode('A','head')
    # ll.insertNode('B','A')
    # ll.insertNode('C','B')
    ll.listprint()
    #print('find =>',ll.find('B'))
    #print('findprevious =>',ll.findPrevious('B'))
    #ll.remove('C')
    ll.update('B1','C')
    ll.listprint()

class Node():
    def __init__(self, e):
        self.e = e
        self.next = None

class LList():
    def __init__(self):
        self.head = Node('head')

    def find(self,item):

        curr = self.head
        while curr.e != item:
            curr = curr.next
        return curr

    def findPrevious(self,item):

         curr = self.head
         while curr.next.e!=item and curr.next!=None:
             curr = curr.next
         return curr

    def insertNode(self,e,item):

        node = Node(e)
        curr = self.find(item)
        node.next = curr.next
        curr.next = node

    def remove (self,item):
        previous = self.findPrevious(item)
        if previous.next !=None:
            previous.next = previous.next.next

    def update(self,e,item):

        curr = self.find(item)
        pre  = self.findPrevious(item)
        node = Node(e)
        node.next = curr.next
        #curr = node
        pre.next = node


    def add(self,item):

        node = Node(item)
        if self.head.next == None:
            self.head.next = node
        else:
            curr = self.head.next
            while curr.next:
                curr = curr.next
            curr.next = node

    def listprint(self):
        s =''
        curr = self.head
        while curr.next:
            s+=curr.next.e+' '
            curr = curr.next
        print(s)
