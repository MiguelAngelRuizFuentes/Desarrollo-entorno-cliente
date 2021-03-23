
var numeroAleatorio =parseInt(Math.random()*10);
var repetir = true;
var numeroUsuario = window.prompt("Escribe un numero del 1 al 10");
var contador = 0;

while(repetir){
    contador++;
    numeroUsuario = parseInt(numeroUsuario);
    if(numeroUsuario>=0 && numeroUsuario<=10){
        if(numeroAleatorio==numeroUsuario){
            prompt("Felicidades has acertado el numero era "+numeroAleatorio);
            var fin = prompt("Quieres volver a jugar");
            if(fin=="si"){
                numeroAleatorio =parseInt(Math.random()*10);
                alert("El numero de intentos ha sido "+contador);
                contador=0;
                numeroUsuario = window.prompt("Escribe un numero del 1 al 10");
            }else{
                repetir=false;
            }
                
        
    
        }else{
            if(numeroUsuario>numeroAleatorio){
                numeroUsuario = window.prompt("El numero es menor");

            }else{
                numeroUsuario = window.prompt("El numero es mayor");
            }
        }
    }else{
        document.write("No has escrito un numero </br>");
        repetir = false;
    }
    
    

}




