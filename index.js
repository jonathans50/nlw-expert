const perguntas = [
    {
       pergunta: "O que significa a sigla DOM em JavaScript?",
       respostas: [
         "Document Object Model",
         "Data Object Model",
         "Dynamic Object Management"
       ],
       correta: 0
     },
   
   
   
     {
       pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
       respostas: [
         "console.print()",
         "print()",
         "console.log()"
       ],
       correta: 2
     },
     {
       pergunta: "Qual destes é um tipo de dado válido em JavaScript?",
       respostas: [
         "boolean",
         "string[]",
         "function()"
       ],
       correta: 0
     },
     {
       pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
       respostas: [
         "// Este é um comentário de uma linha",
         "<!-- Este é um comentário de uma linha -->",
         "/* Este é um comentário de uma linha */"
       ],
       correta: 0
     },
     {
       pergunta: "Qual operador é usado para atribuição em JavaScript?",
       respostas: [
         "=",
         "==",
         ":="
       ],
       correta: 0
     },
     {
       pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
       respostas: [
         "32",
         "5",
         "Erro"
       ],
       correta: 0
     },
     {
       pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
       respostas: [
         "parseInt()",
         "convertToNumber()",
         "toNumber()"
       ],
       correta: 0
     },
   
       {
       pergunta: "Qual função é usada para obter o comprimento de uma string em JavaScript?",
       respostas: [
         "length()",
         "size()",
         "length"
       ],
       correta: 2
     },
     {
       pergunta: "Como se declara uma função em JavaScript?",
       respostas: [
         "function myFunction() {}",
         "myFunction = function() {}",
         "declare function myFunction() {}"
       ],
       correta: 0
     },
     {
       pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
       respostas: [
         "Retorna o tipo de uma variável",
         "Verifica se duas variáveis são do mesmo tipo",
         "Converte o tipo de uma variável"
       ],
       correta: 0
     }
   
    
   ];
   
   const quiz = document.querySelector('#quiz')
   const template = document.querySelector('template')
   
   const corretas = new Set()
   const TotalPerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   
   
   //Loop ou laço de repetição
   for(const item of perguntas){
     //CLONE NODE FUNCIONA PARA CLONAR O TEMPLATE
     const quizItem = template.content.cloneNode(true)
       quizItem.querySelector('h3').textContent = item.pergunta
   
       for(let resposta of item.respostas){
         const dt = quizItem.querySelector('dl dt').cloneNode(true)
         dt.querySelector('span').textContent = resposta
         dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
         dt.querySelector('input').value = item.respostas.indexOf(resposta)
         dt.querySelector('input').onchange = (event) => {
           const estaCorreta = event.target.value == item.correta
           corretas.delete(item)
           if(estaCorreta){
             corretas.add(item)
           }
           mostrarTotal.textContent = corretas.size + ' de ' + TotalPerguntas
   
         }
   
         quizItem.querySelector('dl').appendChild(dt)
       }
   
       quizItem.querySelector('dl dt').remove()
   
   
   
     quiz.appendChild(quizItem)
   
   }