let livros = []
const endPointApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json"
let sectionLivros = document.querySelector("#livros")
let temDesconto = false
let toggleOrdenaPreco = false
let toggleCategoriaBackEnd = false
let toggleCategoriaFrontEnd = false
let toggleCategoriaDados = false
let toggleCategoriaDisponiveis = false
let iniciou = true

const sectionValorTotalLivrosDisponiveis = document.getElementById(
  "valor_total_livros_disponiveis"
)

if (iniciou) {
  iniciou = false
  init()
}


async function init() {
  livros = await buscarLivrosApi()
  sectionValorTotalLivrosDisponiveis.innerHTML = ""
  exibirLivros(livros)
}

async function buscarLivrosApi() {
  try {
    const res = await fetch(endPointApi)
    livros = await res.json()
    // console.table(livros)
    return livros
  } catch (error) {
    sectionLivros.innerHTML = "Houve algum problema na renderização dos livros"
    console.error("Houve algum problema na requisição http")
  }
}
