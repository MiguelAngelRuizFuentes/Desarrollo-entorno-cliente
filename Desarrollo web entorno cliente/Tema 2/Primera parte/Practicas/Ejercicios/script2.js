var numero = window.prompt("Dime un numero entero");
numero = parseInt(numero);

for (let i = 0; i < numero; i++) {
        let piso = '';
        for (let j = 1; j < numero - i; j++) {
          piso = piso + ' ';
        }
    
        for (let j = 0; j < i + 1; j++) {
          piso = piso + '*';
        }
        console.log(piso);
      }



