document.getElementById("btCalcular").addEventListener("click",function(event){
    event.preventDefault()});
    document.getElementById("btinverter").addEventListener("click",function(event){
        event.preventDefault()});
        
function inverter() {
    let de=document.fichadatrocademoedas.de.value;
    let para=document.fichadatrocademoedas.para.value;
    document.fichadatrocademoedas.para.value=de;
    document.fichadatrocademoedas.de.value=para;
    //Calcular()
}
function Calcular() {
    let de=document.fichadatrocademoedas.de.value;
    let para=document.fichadatrocademoedas.para.value;
    let Quantia=document.fichadatrocademoedas.Quantia.value;
    let taxa=document.fichadatrocademoedas.taxa.value;
    let e=document.fichadatrocademoedas.e.value;


    if(Quantia==""){
     alert("insira uma quantia");
     return false;
    }
    if(de== para || de ==""){
        alert("as moedas devem ser diferentes");
        return false;
    }
     
    if(taxa =="Dolar"){
        if(de == "Real" && para=="Dolar") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Real") resultado = Quantia * e;
            else if(de == "Dolar" && para=="Euro") resultado = Quantia / e;
            else if(de == "Euro" && para=="Dolar") resultado = Quantia * e;
            else if(de == "Dolar" && para=="Iene") resultado = Quantia * e;
            else if(de == "Iene" && para=="Dolar") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Won sul-coreano") resultado = Quantia * e;
            else if(de == "Won sul-coreano" && para=="Dolar") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Dolar") resultado = Quantia / e;
    }
    if(taxa =="Real"){
        if(de == "Real" && para=="Dolar") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Real") resultado = Quantia * e;
            else if(de == "Real" && para=="Euro") resultado = Quantia / e;
            else if(de == "Euro" && para=="real") resultado = Quantia * e ;
            else if(de == "Real" && para=="Iene") resultado = Quantia * e;
            else if(de == "Iene" && para=="Real") resultado = Quantia / e;
            else if(de == "Real" && para=="Won sul-coreano") resultado = Quantia * e;
            else if(de == "Won sul-coreano" && para=="Real") resultado = Quantia / e;
            else if(de == "Real" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Real") resultado = Quantia / e;
    }
    if(taxa =="Euro"){
        if(de == "Euro" && para=="Iene") resultado = Quantia * e;
            else if(de == "Iene" && para=="Euro") resultado = Quantia / e;
            else if(de == "Euro" && para=="Won sul-coreano") resultado = Quantia * e;
            else if(de == "Won sul-coreano" && para=="Euro") resultado = Quantia / e;
            else if(de == "Euro" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Euro") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Euro") resultado = Quantia / e;
            else if(de == "Euro" && para=="Dolar") resultado = Quantia * e;
            else if(de == "Real" && para=="Euro") resultado = Quantia / e;
            else if(de == "Euro" && para=="real") resultado = Quantia * e ;
    }
    if(taxa =="Iene"){
        if(de == "Iene" && para=="Kwanza angolano") resultado = Quantia * e ;
            else if(de == "Kwanza angolano" && para=="Iene") resultado = Quantia / e ;
            else if(de == "Iene" && para=="Won sul-coreano") resultado = Quantia *  e;
            else if(de == "Won sul-coreano" && para=="Iene") resultado = Quantia / e;
            else if(de == "Euro" && para=="Iene") resultado = Quantia * e;
            else if(de == "Iene" && para=="Euro") resultado = Quantia / e;
            else if(de == "Real" && para=="Iene") resultado = Quantia * e;
            else if(de == "Iene" && para=="Real") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Iene") resultado = Quantia * e;
            else if(de == "Iene" && para=="Dolar") resultado = Quantia / e;
    }
    if(taxa =="Kwanza angolano"){
        if(de == "Won sul-coreano" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Won sul-coreano") resultado = Quantia / e;
            else if(de == "Kwanza angolano" && para=="Iene") resultado = Quantia / e ;
            else if(de == "Iene" && para=="Won sul-coreano") resultado = Quantia *  e;
            else if(de == "Kwanza angolano" && para=="Euro") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Euro") resultado = Quantia / e;
            else if(de == "Real" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Real") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Dolar") resultado = Quantia / e;
    }
    if(taxa == "Won sul-coreano"){
        if(de == "Won sul-coreano" && para=="Kwanza angolano") resultado = Quantia * e;
            else if(de == "Kwanza angolano" && para=="Won sul-coreano") resultado = Quantia / e;
            else if(de == "Iene" && para=="Won sul-coreano") resultado = Quantia *  e;
            else if(de == "Won sul-coreano" && para=="Iene") resultado = Quantia / e;
            else if(de == "Euro" && para=="Won sul-coreano") resultado = Quantia * e;
            else if(de == "Won sul-coreano" && para=="Euro") resultado = Quantia / e;
            else if(de == "Real" && para=="Won sul-coreano") resultado = Quantia * e;
            else if(de == "Won sul-coreano" && para=="Real") resultado = Quantia / e;
            else if(de == "Dolar" && para=="Won sul-coreano") resultado = Quantia * e;
            else if(de == "Won sul-coreano" && para=="Dolar") resultado = Quantia / e;
    }
        

    alert(resultado.toFixed(2));
    document.fichadatrocademoedas.Resultado.value = resultado;
    
}