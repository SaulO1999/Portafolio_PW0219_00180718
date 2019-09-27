var arr = [5,6,9,8,7,4,5,6,6,6,6];
var num = 6;

var funcionRep = (arr , num) => {
    let repetir = 0;
    arr.forEach(element => {
        if(element == num)
            repetir+=1;        
    });
    console.log(repetir);
}

funcionRep(arr,num);