import pytest
# https://www.w3schools.com/python/python_lists_methods.asp
# pytest testDictionary.py::test_dic -s

def test_dic():
    print('\n')
    print('test dictionary')

    d = dic()
    d.add('M','123')
    d.add('B','456')
    d.add('C','678')
    print(' ->',d.showAll())

    print('find value =>',d.findValue('B'))

    print('find->',d.find('M'))

    d.remove('M')
    print(' ->',d.showAll())

    d.remove('B')
    print(' ->',d.showAll())

   

class dic ():

    def __init__(self):
        self.dataStore=[]
        

    def add(self,key,data):
        v = []
        try:
            if self.dataStore.index(key)>-1:
                return False
        except ValueError:
            self.dataStore.append(key)
            v.append(data)
            self.dataStore.append(v)

    def remove(self,key):
        
        print('rm->',key)
        i = self.find(key)
        self.dataStore.remove(self.dataStore[i])
        self.dataStore.remove(self.dataStore[i])

    def find(self,key):

        for i in range(0,len(self.dataStore)):
            if key == self.dataStore[i]:
                return i
       
    def findValue(self,key):
        for i in range(0,len(self.dataStore)):
             if key == self.dataStore[i]:
                 return self.dataStore[i+1]

    def showAll(self):
        return self.dataStore
       