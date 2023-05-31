//1)
function ej1(){
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log(meses);
console.log(" ");
}
//2)
function ej2(){
var valores = [true, 5, false, "hola", "adios", 2];
var aux = [];
for (let i = 0; i < valores.length; i++) {
    if(typeof valores[i] == "string"){
        aux.push(valores[i]);
    }   
}
for (let i = 0; i < aux.length -1; i++) {
    if(aux[i] > aux[i + 1] && i + 1 < aux.length){
        posicion = i;
        valores = aux[i + 1];
    }
}
console.log(" ");
}
//3)
function ej3(){
var numero1 = 5;
var numero2 = 8;
if(numero1<numero2){
    console.log("numero1 no es mayor que numero2");
}
if(numero2 >= 0){
    console.log("numero2 es positivo");
}
if(numero1 <= -1){
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2){
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
console.log(" ");
}
//4)
function ej4(){
var DNI = document.getElementById("DNI").value;
var prediccion = document.getElementById("letra").value; 
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
if ( DNI > 0 && DNI <= 99999999){
    var asignar = DNI % 23;
    console.log("Su letra asignada es: " + letras[asignar]);
//    if(prediccion = letras[asignar].valueOf){
//        console.log(prediccion + asignar)
//        console.log("Ha predecido su letra correctamente!")
//    }
//    else{
//        console.log("Lo siento! Usted ha fallado.")
//    }
}
else{
    console.log("El número proporcionado no es válido.");
}
console.log(" ");
}
//5)
