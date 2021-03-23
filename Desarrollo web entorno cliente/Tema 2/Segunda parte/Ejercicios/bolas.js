
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//definimos un generador de numeros aleatorios

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// definimos constructor Bola

function Bola(x, y, velX, velY, color, radio) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.radio = radio;
};

// definimos el metodo pintar bola

Bola.prototype.dibujar = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    ctx.fill();
};
//modificamos los limites
Bola.prototype.modificar = function() {
  if((this.x + this.radio) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.radio) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.radio) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.radio) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};
//creamos el array para añadir las volas
var bolas = [];
//añadimmos las bolas a un array ya creado
while(bolas.length < 84) {
  const tamano = random(10,20);
  var bola = new Bola(
    random(0 + tamano,width - tamano),
    random(0 + tamano,height - tamano),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    tamano
  );
    //Este metodo añade el objeto bola a el array
  bolas.push(bola);
}

//esta funcion mueve las bolas y las saca todas mediante un for
function mover() {
  ctx.fillStyle = 'rgba(0,0,0,0.30)';
  ctx.fillRect(0,0,width,height);
    //sacamos todas las bolas del array
  for(var i = 0; i < bolas.length; i++) {
    bolas[i].dibujar();
    bolas[i].modificar();
  }

  window.requestAnimationFrame(mover);
}

mover();





