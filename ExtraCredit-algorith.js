
//This is the solution for the greatest multiplication between two adjacent elements inside an array

//This algorithm has a time complexity of O(n)

let greaterMultiplication = (array)=>{
    if(array.length==1){
        return array[0];
    }
    else{
        var greater = array[0]*array[1];
        for(var i=1; i<array.length-2; i++){
            if(array[i]*array[i+1]>greater){
                greater = array[i]*array[i+2]
            }
        }
        return greater;
    }
}