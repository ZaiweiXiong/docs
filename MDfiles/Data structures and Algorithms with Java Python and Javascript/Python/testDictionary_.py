import pytest
# https://www.w3schools.com/python/python_lists_methods.asp
# pytest testDictionary.py::test_dic -s

def test_dic():

    print('\n')
    print('test dictionary')

    p1 = person('A','123')
    p2 = person('B','423')
    p3 = person('C','523')
    p4 = person('A','123')

    d = dic()
    d.add(p1)
    d.add(p2)
    d.add(p3)
    d.add(p4)
    d.showAll()

    d.remove(p1)
    d.showAll()

    print('find ',d.findValue(p2))

    # nums=['A','A','B','C','D','D']
    # b={}
    # for x in range(0,len(nums)):
    #     print(nums[x])
    #     if nums[x] not in b:
    #         b[nums[x]]=1
    #     else:
    #         b[nums[x]]+=1
    # print('b{}=>',b)

    
class person():

    def __init__(self,key,value):
        self.key   = key
        self.value = value

class dic ():

    def __init__(self):
        self.dataStore=[]
        self.s = set()
        self.size=0
        
    def add(self,person):

        if person.key not in self.s:
            self.dataStore.append(person)
            self.size+=1
        self.s.add(person.key)

    def remove(self,key):

        print('rm->',key.key)
        i = self.find(key)
        self.dataStore.remove(self.dataStore[i])
        self.size-=1

    def find(self,key):

        for i in range(0,len(self.dataStore)):
            if key == self.dataStore[i]:
                return i
       
    def findValue(self,p):
        return p.value

    def showAll(self):
       
        for i in range(0,len(self.dataStore)):
            o =  self.dataStore[i]
            print(o.key,"=>",o.value)
        print(' dictionary size=>',self.size)
       