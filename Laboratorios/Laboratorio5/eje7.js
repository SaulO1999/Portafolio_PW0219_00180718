var num = 12;


var fibonacci = num => {
    let arr = [0,1];
    let first = 0;
    let second = 1;
    for(let i = 0;i <= num;i++){
        let third = first + second;
        first = second;
        second = third;
        arr.push(third);
    }
    return arr;
}

fibonacci(num);