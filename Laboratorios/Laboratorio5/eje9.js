var radio = window.prompt("Ingrese el radio")
function area(radio){
    if(radio < 0){
        return -1
    }else{
        let area = Math.pow(radio,2)*3.14;
        return area;
    }

}