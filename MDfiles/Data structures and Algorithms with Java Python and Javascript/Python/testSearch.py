import pytest
from random import randint
#pytest testSearch.py::test_search -s


def test_search():
    nums = generatorNumbers()#[1,-1,9,10,100,2]
    print(nums)
    print('max=>',findMin(nums))

def findMax(nums):

    if len(nums)==1:
        return nums[0]
    op1 = nums[0]
    #print('op1=>',op1)
    op2 = findMax(nums[1:])
    #print('op2=>',op2)

    if op1>op2:
        return op1
    else:
        return op2

def findMin(nums):
    min = nums[0]
    for x in range(1,len(nums)):
        if nums[x]<min:
            min = nums[x]
    return min

def search(item,nums):

    for i in range(0,len(nums)):
        if nums[i]==item:
            return nums[i]


def bsort(arr):
    for i in range(len(arr)-1,0,-1):
        for j in range(i):
            if arr[j]<arr[j+1]:
                temp    = arr[j+1]
                arr[j+1]= arr[j]
                arr[j] = temp
    return arr

def binarySearch(item,nums):

    print('binarySearch!')
    n = len(nums)-1
    lowerIdex=0
    upperIdx=n

    while lowerIdex <= upperIdx:
        midPt = (lowerIdex+upperIdx)//2
        if item == nums[midPt]:
            return midPt
        if item >nums[midPt]:
            lowerIdex=midPt+1
        else:
            upperIdx=midPt-1

    if lowerIdex>upperIdx:
        return None

def findSameNums(nums):

    for i in range(0,len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]==nums[j]:
                print('local is',j,'=>',nums[j])

def generatorNumbers():
    nums=[]
    for _ in range(10):
        nums.append(randint(0, 100))
    return nums
