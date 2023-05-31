//1)
console.log("1)")
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log(meses);
//2)
console.log("2)")
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
        valor = aux[i + 1];
    }
}