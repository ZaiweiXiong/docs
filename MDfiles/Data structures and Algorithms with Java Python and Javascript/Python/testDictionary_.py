import pytest
# https://www.w3schools.com/python/python_lists_methods.asp
# pytest testDictionary.py::test_dic -s
 # nums=['A','A','B','C','D','D']
    # b={}
    # for x in range(0,len(nums)):
    #     print(nums[x])
    #     if nums[x] not in b:
    #         b[nums[x]]=1
    #     else:
    #         b[nums[x]]+=1
    # print('b{}=>',b)


def test_dic():

    print('\n')
    print('test dictionary')
    
    d = dic()
    d.add('A','123')
    d.add('B','456')
    d.add('C','789')
    d.add('A','123')
    d.showAll()

    d.remove('B')
    d.showAll()

    print('find value=>',d.findValue('A'))

    
class person():

    def __init__(self,key,value):
        self.key   = key
        self.value = value

class dic ():

    def __init__(self):
        self.dataStore=[]
        self.s = set()
        self.size=0
        
    def add(self,key,value):

        p = person(key,value)
        if p.key not in self.s:
            self.dataStore.append(p)
            self.size+=1
        self.s.add(p.key)

    def remove(self,key):

        print('rm->',key)
        i = self.find(key)
        self.dataStore.remove(self.dataStore[i])
        self.size-=1

    def find(self,key):

        for i in range(0,len(self.dataStore)):
            if key == self.dataStore[i].key:
                return i
       
    def findValue(self,key):
        
        for i in range(0,len(self.dataStore)):
            if key == self.dataStore[i].key:
                return self.dataStore[i].value, self.dataStore[i].key
       
    def showAll(self):
       
        for i in range(0,len(self.dataStore)):
            o =  self.dataStore[i]
            print(o.key,"=>",o.value)
        print(' dictionary size=>',self.size)
       