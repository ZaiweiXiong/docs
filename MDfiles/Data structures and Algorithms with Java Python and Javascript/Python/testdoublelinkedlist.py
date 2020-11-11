print('test_double_linked_list')

def test_doublelinkedlist():
    print('\n')
    print('double linked list!')

    dl = dList()
    # dl.insertNode('A','head')
    # dl.insertNode('B','A')
    # dl.insertNode('C','B')
    dl.add('A')
    dl.add('B')
    dl.add('C')
    dl.add('D')
    dl.display()
    print(dl.size)
    dl.remove('A')
    print(dl.size)
    dl.display()
    # dl.update('D','B1')
    # dl.display()
    # print(dl.size)


class Node():
    def __init__(self, e):
        self.e = e
        self.next = None
        self.pre  = None

class dList():

      def __init__(self):
        self.head = Node('head')
        self.size= 0

      def find(self,item):
          curr = self.head
          while curr.e !=item:
              curr = curr.next
          return curr
        
      def insertNode(self,e,item):

          node = Node(e)
          curr = self.find(item)
          node.next = curr.next
          node.pre  = curr
          curr.next = node
          self.size+=1

      def add(self,e):

          node = Node(e)
          if self.head.next==None:
              self.head.next = node
              node.pre = self.head
          else:
              curr = self.head.next
              while curr.next:
                  curr = curr.next
              node.next = curr.next
              node.pre = curr
              curr.next = node
            
          self.size+=1

      def remove (self,item):

          curr = self.find(item)
         
          if curr.next == None:
             
              curr.next =None
              curr.pre.next=None
              curr.pre = None             
          else:
              
              curr.pre.next = curr.next
              curr.next.pre = curr.pre
              curr.next = None
              curr.pre = None
          self.size-=1


      def update(self,item,e):

          node = Node(e)
          curr = self.find(item)
          node.next = curr.next
          node.pre  = curr.pre
          curr.pre.next = node


      def display(self):
          s=''
          curr = self.head
          while curr.next:
              s+=curr.next.e+' '
              curr = curr.next
          print(s)





