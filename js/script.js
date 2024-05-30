// Array para armazenar as tarefas
let tarefas = [];

const listaTarefas = document.getElementById('listaTarefas');
const formAdicionarTarefa = document.getElementById('formAdicionarTarefa');
const entradaTarefa = document.getElementById('entradaTarefa');

// Função para renderizar a lista de tarefas
function renderizarTarefas() {
    // Limpar a lista atual
    listaTarefas.innerHTML = '';

    // Adicionar cada tarefa à lista
    tarefas.forEach((tarefa, index) => {
        const itemTarefa = document.createElement('li');
        itemTarefa.classList.add('item-tarefa');
        itemTarefa.innerHTML = `
            <span>${tarefa}</span>
            <button onclick="editarTarefa(${index})"><i class="bi bi-pencil"></i></button>
            <button onclick="excluirTarefa(${index})"><i class="bi bi-trash"></i></button>
        `;
        listaTarefas.appendChild(itemTarefa);
    });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa(evento) {
    evento.preventDefault(); // Evitar o comportamento padrão do formulário

    const novaTarefa = entradaTarefa.value.trim();
    if (novaTarefa !== '') {
        tarefas.push(novaTarefa);
        entradaTarefa.value = ''; // Limpar o input

        renderizarTarefas();
    }
}

// Função para excluir uma tarefa
function excluirTarefa(indice) {
    tarefas.splice(indice, 1);
    renderizarTarefas();
}

// Função para editar uma tarefa
function editarTarefa(index) {
    // Obter a referência à tarefa na lista
    const tarefaParaEditar = tarefas[index];
    
    // Pedir ao usuário para editar a tarefa
    const novaTarefa = prompt("Editar tarefa:", tarefaParaEditar);
    
    // Verificar se o usuário pressionou cancelar ou deixou em branco
    if (novaTarefa === null || novaTarefa.trim() === "") {
        return; // Não faz nada se o usuário cancelou ou deixou em branco
    }
    
    // Atualizar a tarefa no array
    tarefas[index] = novaTarefa.trim();
    
    // Re-renderizar a lista de tarefas atualizada
    renderizarTarefas();
}


// Evento de envio do formulário para adicionar uma nova tarefa
formAdicionarTarefa.addEventListener('submit', adicionarTarefa);

// Inicializar a lista de tarefas
renderizarTarefas();
