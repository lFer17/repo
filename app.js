let nombreJugador = 0;
let precioEnDolares = 100;
let golesJugador= 0;

function hacerGol (){
    console.log("Goooool!!!");
    golesJugador ++;
    precioEnDolares+=10;
}

function hattrick(loop) {
  
 for(let i = 0 ; i < loop ; i++){
     hacerGol()
 }
}
hattrick(4);
console.log('el precio actual del jugador es de '+ precioEnDolares +' ','Y ha anotado  '+ golesJugador +' '+'goles hasta el momento');


