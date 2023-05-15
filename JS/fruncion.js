function fruncion(params){
    let input = document.querySelector("#entrada");
    let p = document.querySelector("#salida");
    let divIMG = document.querySelector ("#img");
    divIMG.innerHTML = "<img src='../IMG/isac.png' alt='llorin'>"
    let valor = input.value;
    p.innerText = valor;
    console.log(input);
    console.dir(input);
    console.log(p.value);
    console.log(valor);
}