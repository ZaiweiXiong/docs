console.log('this is test sorting!');
// Sorting Algorithm
// bubble sort

var arr=[1,0,9,2,7,6,2,5]
function bsort(arr){

    for (var i=0;i<arr.length;i++){

        for (var j=0;j<arr.length-i-1;j++){

              if (arr[j]>arr[j+1]){
                   var temp = arr[j];
                   arr[j]=arr[j+1];
                   arr[j+1]=temp;
              }
        }
    }
            return arr;
}

arr = bsort(arr);
console.log('bubble sorting=>',arr);

function findSameNumbers(arr){

    for (var i=0;i<arr.length;i++){
        for (var j=i+1;j<arr.length;j++){
            if (arr[i]==arr[j]){
                    console.log('local is '+j+' number '+arr[j]);
            }
        }
    }
}
arr = bsort(arr);
findSameNumbers(arr);

//selctionSort
var arr=[1,0,9,2,7,6,2,5]

function sSort(arr){
    for (var i=0;i<=arr.length-2;i++){
        var min = i;
        for (var j=i+1;j<=arr.length-1;j++){
            if (arr[min]>arr[j]){
                var temp = arr[min];
                arr[min] = arr[j];
                arr[j] = temp;
             }     
        }
    }
                return arr
}
console.log("selectSort=> "+sSort(arr));

function inserSort(arr){
    var n = arr.length;
    
    for (var i=1;i<n;i++){
        var key = arr[i];
        var j=i-1;
        while (j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
        return arr;
}

// quick sorting

function qSort(arr){
    
    if (arr.length==0){
        return [];
    }
    var left=[]
    var right=[]
    var pivot = arr[0]
    for (var i=1;i<arr.length;i++){
        if (arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return qSort(left).concat(pivot,qSort(right));
}


function tArray(){
    var a=[]
    for (var i=0;i<10000;i++){  
        a[i]=Math.floor((Math.random()*100)+1);
    }
     return a;
}


var start = new Date().getTime();
inserSort(tArray());
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('inserSort spending time..'+elapsed/1000 +' secs')


start = new Date().getTime();
qSort(tArray());
stop = new Date().getTime();
elapsed = stop - start;
console.log('qSort spending time..'+elapsed/1000 +' secs')

start = new Date().getTime();
sSort(tArray());
stop = new Date().getTime();
elapsed = stop - start;
console.log('selectSorting spending time..'+elapsed/1000 +' secs')

start = new Date().getTime();
bsort(tArray());
stop = new Date().getTime();
elapsed = stop - start;
console.log('bubble spending time..'+elapsed/1000 +' secs')