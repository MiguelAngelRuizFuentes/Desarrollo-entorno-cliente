function coche(){
    this.marca="seat";
    this.color="rojo";
    this.año=2015;
    this.matricula="kjbhfds45";
    this.combustible="diesel";
    
    this.codigo = function(){
        return this.matricula+""+this.año;
    }
    
}