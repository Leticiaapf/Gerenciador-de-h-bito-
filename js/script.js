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


// função para adicionar hábitos


function addHabits()  {


let habitInput = document.getElementById("habit-input");
let text = habitInput.value;

if(text === "") {
    return;
}
console.log(addHabits);
}


const btnPlus = document.getElementById("btnPlus");

btnPlus.addEventListener("click", addHabits);

// mostrando  os habitos adicicionados 

let habits = [];











// PARTE DOS DIAS DO MES 
/*
let habits = [];

const hoje = new Date();
const totalDays = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();


const tbody = document.getElementById("table-body");
const tableMore = document.getElementById("table-more");


let visibleRows = 3; // começa com 3, igual ao seu HTML

function renderTable() {
  tbody.innerHTML = ""; // limpa as linhas manuais do HTML

  for (let d = 1; d <= visibleRows; d++) {
    const tr = document.createElement("tr");

    // dia → "01", "02", "03"...
    const dayTd = document.createElement("td");
    dayTd.textContent = String(d).padStart(2, "0");
    tr.appendChild(dayTd);

    // quadradinho para cada hábito
    habits.forEach(h => {
      const td = document.createElement("td");

      const box = document.createElement("div");
      box.className = "habit-check";
      box.textContent = "x";

      box.onclick = () => box.classList.toggle("checked");

      td.appendChild(box);
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }

  // atualiza ou esconde o texto
  if (visibleRows < totalDays) {
    tableMore.textContent = `... Continuando até ${totalDays} ...`;
    tableMore.style.display = "block";
  } else {
    tableMore.style.display = "none";
  }
}

// clica no texto → mostra mais 3 dias
tableMore.onclick = () => {
  visibleRows = Math.min(visibleRows + 3, totalDays);
  renderTable();
};

renderTable(); // inicia  */