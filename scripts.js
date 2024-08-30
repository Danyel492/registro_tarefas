const tarefas = document.querySelector('ul')//Atribuí as ul em tarefa

const novaTimeline = document.createElement('li')//Atribuí as li em novaTimeline

novaTimeline.classList.add('timeline')//Adicionei a mesma classe das outras nesse novo elemento

const tarefa = document.createElement('span')//Aribuí um span em tarefa

tarefa.textContent = ''//Atribuí ao "conteúdo do texto" do tarefa o texto TAREFA

//novaTimeline.append(tarefa)//Adicionei o tarefa dentro de novaTimeline
//o metodo append adiciona após o ultimo filho ou ultimo adicionado
//novaTimeline.prepend(tarefa)//Adicona antes do primeiro filho

//O metodo mais simples mas só aceita um argumentos de uma só vez

//tarefas.append(novaTimeline)//colocar essa formatacao

/*
------------ Desafio pessoal:
1 - Recuperar o que for digitado na caixa de dialogo
2 - acrecentar o que foi digitado abaixo dos outros itens
*/