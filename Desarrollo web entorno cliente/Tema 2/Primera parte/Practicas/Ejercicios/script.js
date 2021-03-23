
        var numeroAleatorio = Math.random()*10;
        var numeroUsuario = window.prompt("Dime un numero aleatorio");
        var correcto = false;
        while(correcto){
            if(numeroAleatorio==numeroUsuario){
                correcto=true;
                document.write("Has acertado felicitaciones el numero es "+numeroAleatorio);
            }
        }



        var nombre = window.prompt("Cual es tu nombre");
        var apellidos = window.prompt("Cual es tu apellido");
        var salario = window.prompt("Cual es tu salario");
        var edad = window.prompt("Cual es tu edad");
        var porcentaje = 0;
        var variacion = 0;

        if(salario>1000 && salario<2000){
            if(edad<45){
                porcentaje = 10;
                variacion = (salario*porcentaje)/100;
            }else if(edad>45){
                porcentaje = 3;
                variacion = (salario*porcentaje)/100;
            }

        }else if(salario<1000){
            if(edad<30){
                salario=1100;

            }else if(edad>=30 && edad<=45){
                porcentaje = 3;
                variacion = (salario*porcentaje)/100;
            }else if(edad>45){
                porcentaje = 15;
                variacion = (salario*porcentaje)/100;
            }
        }

        salario = parseInt(salario)+variacion;

        document.write("El nombre es: "+nombre+"</br>");
        document.write("El apellido es: "+apellidos+"</br>");
        document.write("La edad es: "+edad+" años </br>");
        document.write("El salario es: "+salario+"€ ");

