import pytest
from random import randint
import time
#https://www.geeksforgeeks.org/insertion-sort/
#pytest testSort.py::test_sort -s

def test_sort():
    nums = generatorNumbers()

    start = int(round(time.time() * 1000))

    print('test sort nums!=>',nums)
    print('quickSort sort=>', quickSort(nums,0,len(nums)-1))

    end = int(round(time.time() * 1000))
    elapsed  = end-start
    print('elapsed time=>', elapsed/1000,' sec')


def bsort(nums):

    for i in range(len(nums)-1,0,-1):
        for j in range(i):
            if nums[j]>nums[j+1]:
                temp = nums[j+1]
                nums[j+1]=nums[j]
                nums[j]=temp
    return nums

def sSort(nums):
    print('sSort!')
    for i in range(0,len(nums)-2):
        min = i
        for j in range(i+1,len(nums)-1):
            if nums[j]<nums[min]:
                temp = nums[j]
                nums[j] = nums[min]
                nums[min]=temp
    return nums

def insertSort(nums):
    
    for j in range(1,len(nums)):
        temp = nums[j]
        i=j-1
        while i>=0 and nums[i]>=temp:
            nums[i+1]=nums[i]
            i-=1
        nums[i+1] = temp
    return nums

def quickSort(nums, start, end):

    if start >= end:
        return 
    pivotIdx = partition(nums, start,end)
    quickSort(nums, start,pivotIdx-1)
    quickSort(nums, pivotIdx+1,end)
    return nums


def partition(nums, start, end):

    pivot = nums[start]
    low = start + 1
    high = end
    done = False

    while not done:

        while low <=high and nums[low]<=pivot:
            low+=1
        while high >= low and nums[high]>=pivot:
            high-=1

        # if the two indexes cross, we have found the split point
        if high < low:
            done = True
        else:
        # exchange the two values
            temp = nums[low]
            nums[low]=nums[high]
            nums[high]=temp

    #when the split point is found then exchange the pivot value
    temp = nums[start]
    nums[start]=nums[high]
    nums[high]= temp

    return high

def generatorNumbers():
    nums=[]
    for _ in range(10000):
        nums.append(randint(0, 1000))
    return nums
