const convidados = document.querySelector('ul')//Atribuí as ul em CONVIDADO

const novoConvidado = document.createElement('li')//Atribuí as li em NOVOcONVIDADO

novoConvidado.classList.add('guest')//Adicionei a mesma classe das outras nesse novo elemento

const nomeConvidado = document.createElement('span')//Aribuí um span em NOMEcONVIDADO

nomeConvidado.textContent = ''//Atribuí ao "conteúdo do texto" do NOMEcONVIDADO o texto DIEGO

//novoConvidado.append(nomeConvidado)//Adicionei o NOMEcONVIDADO dentro de NOVOcONVIDADO
//o metodo append adiciona após o ultimo filho ou ultimo adicionado
//novoConvidado.prepend(nomeConvidado)//Adicona antes do primeiro filho

//O metodo mais simples mas só aceita um argumentos de uma só vez

//convidados.append(novoConvidado)//colocar essa formatacao

/*
------------ Desafio pessoal:
1 - Recuperar o que for digitado na caixa de dialogo
2 - acrecentar o que foi digitado abaixo dos outros itens
*/