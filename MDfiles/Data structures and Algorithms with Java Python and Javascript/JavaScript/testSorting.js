console.log('this is test sorting!');
// Sorting Algorithm
// bubble sorting bsort
// insert sorting inserSort
// select sorting sSort
// quick sorting  qSort

var arr= tArray();
//console.log('=>'+arr);

function bsort(arr){

    for (var i=0;i<arr.length;i++){

        for (var j=0;j<arr.length-i-1;j++){
              
                 if (arr[j]>arr[j+1]){

                     var temp = arr[j+1];
                     arr[j+1] = arr[j];
                     arr[j] = temp;
                 }
        }
    }
            return arr;
}

function sSort(arr){

    for (var i=0;i<=arr.length-2;i++){
        var min = i;
        for (var j=i+1;j<=arr.length-1;j++){

                 if(arr[min]>arr[j]){
                     var temp = arr[min];
                     arr[min] = arr[j];
                     arr[j] = temp;
                 }
        }
    }
            return arr;
}

function ss(arr){
    
    for (var i=0;i<arr.length-1;i++){
        var min = i;
        for (j=i+1;j<arr.length;j++){
            if (arr[j]<arr[min]){
                var temp = arr[min];
                arr[min] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function inserSort(arr){

    var temp, i;
    for (var j=1;j<arr.length;j++){
        temp = arr[j];
        i = j;
        while(i>=0&&arr[i-1]>=temp){
            arr[i]=arr[i-1];
            --i;
        }
          arr[i]=temp;
    }
          return arr;
}

function qSort(arr){

    if (arr.length==0){ 
        return [];
    }
    var left = [];
    var right= [];
    var p    = arr[0];
    for (var i=1;i<arr.length;i++){

        if (arr[i]<p){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(p,qSort(right));
}


function tArray(){
    var a=[]
    for (var i=0;i<1000;i++){  
        a[i]=Math.floor((Math.random()*100)+1);
    }
     return a;
}

var start = new Date().getTime();
ss(tArray());
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('ss spending time..'+elapsed/1000 +' secs')


var start = new Date().getTime();
inserSort(tArray());
var stop = new Date().getTime();
var elapsed = stop - start;
console.log('inserSort spending time..'+elapsed/1000 +' secs')

start = new Date().getTime();
insertionSort(tArray());
stop = new Date().getTime();
elapsed = stop - start;
console.log('insertionSort spending time..'+elapsed/1000 +' secs')

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