class Queue:

    def __init__(self):
        self.items=[]
    def enqueue(self,item):
        self.items.insert(0,item)
    def dequeue(self):
        if self.items:
            return self.items.pop()
        return None
    def size(self):
        return len(self.items)
    def is_empty(self):
        return self.items==[]
    def peek(self):
        return self.items[-1]
    def __str__(self):
        return str(self.items)

    