function Calcular(){
let nota=0
let q1= Quiz.strong.value
let q2= Quiz.Css.value
let q3= Quiz.possivel.value
let q4= Quiz.Div.value
let q5= Quiz.possiveli.value

if(q1=="") 
    alert("a questão 1 deve ser preenchida")
else if(q1=="Negrito")nota++;


if(q2=="") 
    alert("a questão 2 deve ser preenchida")
else if(q2=="aparencia")nota++;

if(q3=="") 
    alert("a questão 3 deve ser preenchida")
else if(q3=="Sim")nota++;

if(q4=="") 
    alert("a questão 4 deve ser preenchida")
else if(q4=="Html")nota++;

if(q5=="") 
    alert("a questão 5 deve ser preenchida")
else if(q5=="Simi")nota++;

alert("voce acertou " +nota,"parabens!!")
}