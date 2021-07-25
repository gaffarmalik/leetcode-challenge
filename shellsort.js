var data =[-20,4567,-50,1, 2, 3,4,10,20,2,5,8,30,22,0,99,45678 ];

function shellSort(arr){
    let len = arr.length;
    let gap = Math.floor(len/2)-1;
    if(arr[1] == null) return arr;
    while(gap >= 0){
        for(let i=0, end= i+gap+1 ; i< len && end< len-1; i++){
            end = i+gap+1;
            let temp = arr[i];
            let arr_end = arr[end];
    
            if(temp > arr_end){
                arr[end] = temp;
                arr[i] = arr_end;
            }
        }
        gap--;
    }
  
    return arr;
}


console.log(shellSort(data));
