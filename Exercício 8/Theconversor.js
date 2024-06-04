document.getElementById("btCalcular").addEventListener("click",function(event){
    event.preventDefault()
});

function Calcular() {
    let de=document.fichadatrocademoedas.de.value;
    let para=document.fichadatrocademoedas.para.value;
    let Quantia=document.fichadatrocademoedas.Quantia.value;
    
    if(Quantia==""){
     alert("insira uma quantia");
     return false;
    }
    if(de== para || de ==""){
        alert("as moedas devem ser diferentes");
        return false;
    }

    if(de== "Real" && para=="Dolar") resultado = Quantia / 5;
    else if(de == "Dolar" && para=="Real") resultado = Quantia * 5;
    else if(de == "Real" && para=="Euro") resultado = Quantia / 5.5 ;
    else if(de == "Euro" && para=="real") resultado = Quantia * 5.5 ;
    else if(de == "Dolar" && para=="Euro") resultado = Quantia / 0.9;
    else if(de == "Euro" && para=="Dolar") resultado = Quantia * 1.1;

    alert(resultado.toFixed(2));
    document.fichadatrocademoedas.Resultado.value = resultado;
    
}