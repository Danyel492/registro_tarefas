function adicionar() {

    if (document.querySelector('#registro').value === '') {
        alert('Você precisa digitar uma tarefa antes de adiciona-la')
    } else {
        const tarefas = document.querySelector('ul')
        const registro = document.querySelector('#registro')

        const novaTimeline = document.createElement('li')
        novaTimeline.classList.add('timeline')

        const tarefa = document.createElement('span')
        tarefa.textContent = registro.value

        const dataHora = document.createElement('span')
        const dataAtual = new Date()
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
        dataHora.textContent = dataAtual.toLocaleDateString('pt-BR', options)

        novaTimeline.appendChild(tarefa)
        novaTimeline.appendChild(dataHora)
        tarefas.appendChild(novaTimeline)

        registro.value = ''
    }
}
document.querySelector('#registro').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        adicionar()
    }
})