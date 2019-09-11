var group= [1,3,4,5,8]; 

function binarySearch(list,item) {//前提是已经排序了
    var start = 0;
    var end = list.length-1;
    while(start <= end){
        var mid = Math.floor((start+end)/2);
        console.log('mid: ', mid)
        if(list[mid] < item){
            start = mid+1;
        }else if (list[mid] > item){
            end = mid-1;
        }else{
            return mid;
        }
    }
    return -1;
};

console.log(binarySearch(group,3));