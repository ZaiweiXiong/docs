import pytest

def test_set():

    print('\n')
    print('test set in python')
    s = Set()
    s.add('A')
    s.add('B')
    s.add('C')
    print(s.show())
    # s.remove('B')
    # print(s.show())

    dim = Set()
    dim.add('A')
    dim.add('B')
    dim.add('C')
    dim.add('D')
    print('dim',dim.show())
    print('dim size',dim.size())

    u = Set()
    u = s.union(dim)
    print('union=>',u.show())

    inter = Set()
    inter = s.intersect(dim)
    print('inter=>',inter.show())

    diff = Set()
    diff = s.difference(dim)
    print('diff=>',diff.show())

    print('subset',s.subset(dim))


class Set:

    def __init__(self):
        self.dataStore=[]

    def add(self,data):
        try:
            if self.dataStore.index(data)>-1:
                return False
        except ValueError:
            self.dataStore.append(data)
            return True

    def remove(self,data):

        pos = self.dataStore.index(data)
        try:
            if pos >-1:
                self.dataStore.remove(self.dataStore[pos])
                return True
        except ValueError:
            return False

    def show(self):
        return self.dataStore

    def size(self):
        return len(self.dataStore)
    
    def contains(self,data):
        try:
            if self.dataStore.index(data)>-1:
                return True
        except ValueError:
            return False

    def union(self,arr):

        tempset = Set()

        for i in range(0,len(self.dataStore)):
            tempset.add(self.dataStore[i])
        for j in range(0,len(arr.dataStore)):
            if tempset.contains(arr.dataStore[j])!=True:
                tempset.dataStore.append(arr.dataStore[j])
        return tempset

    def intersect (self,arr):

        tempset = Set()
        for i in range(0,len(self.dataStore)):
            if arr.contains(self.dataStore[i]):
                tempset.add(self.dataStore[i])
        return tempset

    def difference(self,arr):

        tempset = Set()
        for i in range(0,len(self.dataStore)):
            if arr.contains(self.dataStore[i])!=True:
                tempset.add(self.dataStore[i])
        return tempset

    def subset(self,arr):

        if len(self.dataStore)>len(arr.dataStore):
            return False
        else:
            for i in range(0,len(self.dataStore)):
                if arr.contains(self.dataStore[i])!=True:
                    return False
        return True







        

