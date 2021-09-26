var jonas = {
  imagem: "https://i.ibb.co/Ht4SPQr/Whats-App-Image-2021-09-24-at-10-18-56.jpg",
  nome: "Jonas",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calcularPontos(nome) {
  var pontos = nome.vitorias * 2 + nome.empates;
  return pontos;
}

jonas.pontos = calcularPontos(jonas);

var dados = [jonas];

function tabelaDosJogadores(dados) {
  var tabela = "";

  for (var i = 0; i < dados.length; i++) {
    tabela += "<tr><td><img src=" + dados[i].imagem + "></td>";
    tabela += "<td>" + dados[i].nome + "</td>";
    tabela += "<td>" + dados[i].vitorias + "</td>";
    tabela += "<td>" + dados[i].empates + "</td>";
    tabela += "<td>" + dados[i].derrotas + "</td>";
    tabela += "<td>" + dados[i].pontos + "</td>";
    tabela +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    tabela +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    tabela +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    tabela +=
      "<td><button onClick='zerarPontos(" + i + ")'>Zerar Pontos</button></td>";
    tabela += "</tr>";
  }
  var naTela = document.getElementById("tabelaJogadores");
  naTela.innerHTML = tabela;
}

function adicionarVitoria(i) {
  var addVitorias = dados[i];
  addVitorias.vitorias++;
  addVitorias.pontos = calcularPontos(addVitorias);
  tabelaDosJogadores(dados);
}
function adicionarEmpate(i) {
  var addEmpate = dados[i];
  addEmpate.empates++;
  addEmpate.pontos = calcularPontos(addEmpate);
  tabelaDosJogadores(dados);
}

function adicionarDerrota(i) {
  var addDerrotas = dados[i];
  addDerrotas.derrotas++;
  addDerrotas.pontos = calcularPontos(addDerrotas);
  tabelaDosJogadores(dados);
}

function adicionarJogador() {
  var imagemDoJogador = document.getElementById("adicionarImagem").value;
  var nomeDoJogador = document.getElementById("adicionarJogador").value;
  if (imagemDoJogador.endsWith(".jpg") || nomeDoJogador != "") {
    dados.push({
      imagem: imagemDoJogador,
      nome: nomeDoJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
    tabelaDosJogadores(dados);
  }
}

function zerarPontos(i) {
  var zerar = dados[i];
  zerar.vitorias = 0;
  zerar.empates = 0;
  zerar.derrotas = 0;
  zerar.pontos = calcularPontos(zerar);
  tabelaDosJogadores(dados);
}

tabelaDosJogadores(dados);