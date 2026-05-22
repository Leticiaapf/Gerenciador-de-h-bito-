//tem que ser criado as consts para os meses
//  array de meses em português 
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
]; 

// ELEMENTOS
const btnPlus = document.getElementById("btnPlus");
const btnLess = document.getElementById("btnLess");
const habitInput = document.getElementById  ("habit-input");                                                                                   
const tbody = document.getElementById("table-body");

const tableHeader = document.getElementById("table-header")


// Inicializa totalHabitos com colunas existentes menos a coluna "Day"
let totalHabitos = Math.max(0, tableHeader.children.length - 1);
const limite = 7;

// ADICIONANDO HÁBITOS :
function addHabito(){
//receber dados:
let habit = habitInput.value;


//VALIDAÇÕES:

// Não pode adicionar se estiver VAZIO:
// Nesse caso, a função trim foi colocada para remove espaços no começo e no final do texto
if (habit.trim() === "") {
alert("Antes de adicionar tem que criar hábito!!");
return;
}

//Validar limite:

if (totalHabitos >= limite){
  
alert("Limite de hábitos atindigo!");
    return;
}
// se passou pela validação
erro.textContent = "";  //limpar ero




const th = document.createElement("th");
  th.textContent = habit;

  tableHeader.appendChild(th);

  habitInput.value = "";


for(let row of tbody.rows){
    const td =document.createElement("td");
    const input = document.createElement("input");
    input.type = "checkbox";

    td.appendChild(input);
    row.appendChild(td);

}


totalHabitos++;
habitInput.value = "";  // vai limpar o input automaticamente



};
// EVENTOS DOS BOTÕES
btnPlus.addEventListener("click", addHabito);



// REMOVER HÁBITO
function removeHabito() {
//pega todas as colunas do cobeçalho 
  let ths = tableHeader.children;

  // não remove se só tiver "Dia"
  if (ths.length <= 1) return;

  // remove último header
  ths[ths.length - 1].remove();

  // remove última coluna de cada linha
  let linhas = tableBody.children;

  for (let linha of linhas) {
    linha.lastElementChild.remove();
  }

  totalHabitos--;
};


btnLess.addEventListener("click", removeHabito);  




/*

const Limite_Maximo = 7; // limitar a criação de hábitos para 7 hábitos

const Limite_MaximoCheck = 10; // limitar a criação de checks para 7 checks
//INPUT


function addHabit() {
 

  // Pega o texto que o usuário digitou no input
    let text = habitInput.value;
    
    if (text === "") {
        habitInput.focus(); // Foca para mostrar que está vazio
        return;
    }  


// Seleciona todos os <th> dentro da linha de cabeçalho (#table-header)
    let ths = tableHeader.querySelectorAll("th");
    let emptyTh = null;

  
if (ths.length - 1 >= Limite_Maximo) {
    alert(`Você atingiu o limite de ${Limite_Maximo} hábitos!`);
    return;
}
   // Percorre os <th> a partir do índice 1 (pula o primeiro, que é o "Day")
    for (let i = 1; i < ths.length; i++) {
        if (ths[i].innerText.trim() === "") {
            emptyTh = ths[i];
            break;
        }
    }
// Verifica se encontramos um <th> vazio 
    if (emptyTh) {
       // Ainda existe um <th> vazio no HTML → coloca o texto digitado pelo usuário dentro dele, raproveitando posição vazia 
        emptyTh.innerText = text;
    } else {
        // Todos os th estão preenchidos, cria um novo
        let newTh = document.createElement("th");
        newTh.innerText = text; // Coloca o texto digitado dentro dele
        tableHeader.appendChild(newTh);   // Adiciona esse novo <th> no final da linha de cabeçalho

     
    
    }

    // Limpa o input e foca nele para o próximo hábito
    habitInput.value = "";
    habitInput.focus();

    // Ajuda a  melhor a experiência do usuário
// (ele já pode digitar o próximo hábito sem clicar de novo)




let rows = tbody.querySelectorAll("tr");   //pega todas as linhas tr


rows.forEach(row => {  //percorre cada linha da tabela

 // Conta quantos checks já existem nessa linha
let checksNaLinha = row.querySelectorAll(".habit-check").length;
 

 if(checksNaLinha  >= Limite_MaximoCheck){
        alert(`Você atingiu o limite de ${Limite_MaximoCheck} checks por linha!`);
        return; // não adiciona mais nessa linha
    }

    let newTd = document.createElement("td");  //cria uma nova célula td, aqui que o check fica

 
// Cria uma "caixinha" (div) que será o check visual
    let check = document.createElement("div");
    //  Adiciona a classe do CSS, fica no mesmo estilo q os outros checks
    check.classList.add("habit-check");
    check.innerText = "X";
    




    //  clique para marcar/desmarcar
    check.addEventListener("click", function () {
        check.classList.toggle("checked");
    });

    newTd.appendChild(check);
    row.appendChild(newTd);


});





}


// Executa o clique no botão "+"

btnPlus.addEventListener("click", addHabit);
// Executa o clique no botão "-"
btnLess.addEventListener("click", RemoveHabit);




// declarando a const para mexer com o check, dessa vez foi usado queryselector, por ser no css
const checks = document.querySelectorAll(".habit-check");


checks.forEach(box => {


  box.addEventListener("click", () => {
    box.classList.toggle("checked");  // marca/desmarca

    if (box.classList.contains("checked")) {
      console.log("Está marcado!");
    }  else{
      console.log("Está desmarcado!");
    }
  })
});


*/

