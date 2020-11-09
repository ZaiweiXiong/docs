console.log('test search!');
//var arr= tArray();

function tArray(){
    var a=[]
    for (var i=0;i<10;i++){  
        a[i]=Math.floor((Math.random()*100)+1);
    }
     return a;
}
var arr = [41, 19, 35, 22, 84,39, 35, 64, 87, 76];
console.log(arr)

function seqSearch_(arr,data){

    for (var i=0;i<arr.length;i++){
        if (arr[i]==data){
            return true;
        }
    }
    return false;
}

function seqSearch(arr,data){
    for (var i=0;i<arr.length;i++){
        if (arr[i]==data){
            return i;
        }
    }
    return -1;
}
console.log(seqSearch(arr,41))

function findMin(arr){
    var min = arr[0];
    for (var i=1;i<arr.length;i++){
        if (arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log("min =>"+findMin(arr));

function findMax(arr){
    var max = arr[0];
    for (var i=0;i<arr.length;i++){
         if (arr[i]>max){
             max = arr[i];
         }
    }
       return max;

}
console.log("max =>"+findMax(arr));

function binSearch(arr,data){
    var u = arr.length-1;
    var low =0;
    while (low<=u){
        var mid = Math.floor((u+low)/2);
        if (arr[mid]<data){
            low=mid+1;
        }else if (arr[mid]>data){
            u = mid-1;
        }else{
            return mid;
        }
    }
    return -1;
}

function insertSort(arr){
    var temp, i;
    for (var j=1;j<arr.length;j++){
        temp = arr[j];
        i = j;
        while (i>=0&&arr[i-1]>=temp){
            arr[i]=arr[i-1];
            --i;
        }
           arr[i] =temp;
    }
    return arr;
}

// search the matched data with last positon
function seqSearchM(arr,data){
    var max =0;
    for (var i=0;i<arr.length;i++){

        if (arr[i]==data&&i>(arr.length*0.2)){
            return i;
        }
    }
    return -1;
}
function seqSearchM__(arr,data){
    var p =[];
    for (var i=0;i<arr.length;i++){
        if (arr[i]==data){
            p.push(i);
        }
    }

    if (p.length==0){
        return -1;
    }else{
        var max =p[0];
        for (var i=0;i<p.length;i++){
            if (p[i]>max){
               max = p[i];
            }
        }
        return max;
    }
}

console.log('m=>'+seqSearchM__(arr,35));
