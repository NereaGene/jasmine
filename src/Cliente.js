class Cliente{
    constructor(nombre="",tlf="", email="",active=false,age=0){
        this.nombre=nombre;
        this.tlf=tlf;
        this.email=email;
        this.active=active;
        this.age=age;
    }
     setNombre(nombre){
        this.nombre=nombre;
     }
    imprimeDatos(){
        this.imprime();
    }
    imprime(){
        console.log(this);
    }
}