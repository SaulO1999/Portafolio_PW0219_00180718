var numUsuario = window.prompt("Ingrese un numero");
var arrRand = [Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),
               Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),
               Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),
               Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)]

var funcionRand =(numUsuario,arrRand) =>{
    let felicidades = false;
    arrRand.forEach(element => {
        if(element == numUsuario)
            felicidades = true;        
    });
    if(felicidades){
        let congrats = "Felicidades gano";
        console.log(congrats);
    }
    else{
        let fail = "lo sentimos fallo";
        console.log(fail);
    }
        
}