//seleciona os elementos do DOM
const entradaTarefa = document.getElementById("novaTarefa");
const btnAddTarefa = document.getElementById("btnNovaTarefa");
const listaTarefa = document.getElementById("listaTarefa");

//função para adicionar nova tarefa

function addTarefa(){
    const tarefaTexto = entradaTarefa.value;
    if(tarefaTexto ==="") return; //evita adicionar tarefa vazia

//cria um novo item de lista(li)
const li = document.createElement("li");
li.textContent = tarefaTexto;
// função para marcar ou desmarcar a tarefa concluida
li.addEventListener("click",()=>{
    li.classList.toggle("completed");
});

// botão de remover
const btnRemover = document.createElement("button");
btnRemover.textContent = "Remover";
btnRemover.onclick=()=> li.remove();

//adiciona o botão ao item da lista
li.appendChild(btnRemover);

//adiciona o item da tarefa a lista
listaTarefa.appendChild(li);

// limpa o campo de entrada
entradaTarefa.value = "";
}

// adiciona evento de clique ao botão de adicionar
btnAddTarefa.addEventListener("click", addTarefa);

// permite adicionar a tarefa pressionando a tecla "Enter"

entradaTarefa.addEventListener("keypress", (e)=>{
    if (e.key === "Enter"){
        addTarefa();
    }
});





