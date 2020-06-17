/*Escreva um programa que passe por todos os números de 1 a 50 epara cada um deles imprima na tela se o número
 é par ou ímpar. Caso o númerotambém seja primo, o programa deve dizer que ele é primo. (um número primo é um número
  que só é divisível por ele mesmo e por 1). Dica: Neste exercício você podeprecisar de ajuda do operador MÓDULO (%). 
  Você também pode precisar criar mais deum loop.EX.:1 ÍMPAR PRIMO2 PAR PRIMO3 ÍMPAR PRIMO4 PAR5 ÍMPAR PRIMO6 PAR7 ÍMPAR
   PRIMO8 PAR9 ÍMPAR10 PAR*/

   var cont = 1
   var ePrimo = require("is-prime")
 
   while ( cont <= 50) {
       if ( cont % 2 == 0 && ePrimo(cont)){
           console.log(cont + " - par primo ");
           
           
        
       }else if ( cont % 2 != 0 && ePrimo(cont)){
           console.log(cont + " - impar primo");
           
       }else if (cont % 2 == 0){
           console.log(cont + "- par");
           
       }else if (cont % 2 != 0){
           console.log(cont + "-impar");
           
       } cont++
   }