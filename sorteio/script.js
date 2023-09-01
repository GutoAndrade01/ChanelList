let numerosSorteados = [];
let numeroAtual;
let contador = 0;

function sortearNumero() {
  const minValue = parseInt(document.getElementById("minValue").value);
  const maxValue = parseInt(document.getElementById("maxValue").value);

  if (minValue >= maxValue) {
    alert("O valor mínimo deve ser menor que o valor máximo!");
    return;
  }

  numeroAtual = gerarNumeroUnico(minValue, maxValue);
  numerosSorteados.push(numeroAtual);
  contador++;
  exibirNumeroAtual();
  exibirNumerosSorteados();
  exibirContador();
}

function gerarNumeroUnico(min, max) {
  let novoNumero;

  do {
    novoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numerosSorteados.includes(novoNumero));

  return novoNumero;
}

function exibirNumeroAtual() {
  const currentNumberElement = document.getElementById("currentNumber");
  currentNumberElement.textContent = numeroAtual;
}

function exibirNumerosSorteados() {
  const historyGrid = document.getElementById("historyGrid");
  historyGrid.innerHTML = "";

  numerosSorteados.forEach(numero => {
    const div = document.createElement("div");
    div.textContent = numero;
    historyGrid.appendChild(div);
  });
}

function exibirContador() {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = contador;
}

function limparTudo() {
  numerosSorteados = [];
  numeroAtual = null;
  contador = 0;
  exibirNumeroAtual();
  exibirNumerosSorteados();
  exibirContador();
}
function callPage() {
  // Redirecionar para a página desejada
  window.location.href = "pagina-alvo.html";
}
