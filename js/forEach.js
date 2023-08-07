const botoes = document.querySelectorAll(".btn")
let livrosFiltrados

function limpaFiltrosCSS() {
  sectionValorTotalLivrosDisponiveis.innerHTML = ""

  botoes.forEach((botao) => {
    !["preco", "desconto"].includes(botao.value)
      ? (botao.style.backgroundColor = `var(--button-color)`)
      : ""
  })
}

botoes.forEach((botao) =>
  botao.addEventListener("click", async (botao) => {
    const tipoFiltro = botao.target.value

    if (!["preco", "desconto"].includes(tipoFiltro)) {
      livros = await buscarLivrosApi()
    }

    if (tipoFiltro === "back-end") {
      limpaFiltrosCSS()

      toggleCategoriaDados = false
      toggleCategoriaFrontEnd = false
      toggleCategoriaDisponiveis = false
      toggleCategoriaBackEnd = !toggleCategoriaBackEnd
      if (toggleCategoriaBackEnd) {
        botao.target.style.backgroundColor = `var(--text-title-color)`

        // livrosFiltrados = aplicaFiltro(tipoFiltro)
        livros = aplicaFiltro(tipoFiltro)
        // if (livrosFiltrados) livros = livrosFiltrados
      }
    }

    if (tipoFiltro === "front-end") {
      limpaFiltrosCSS()

      toggleCategoriaBackEnd = false
      toggleCategoriaDados = false
      toggleCategoriaDisponiveis = false
      toggleCategoriaFrontEnd = !toggleCategoriaFrontEnd
      if (toggleCategoriaFrontEnd) {
        botao.target.style.backgroundColor = `var(--text-title-color)`

        // livrosFiltrados = aplicaFiltro(tipoFiltro)
        livros = aplicaFiltro(tipoFiltro)
        // if (livrosFiltrados) livros = livrosFiltrados
      }
    }

    if (tipoFiltro === "dados") {
      limpaFiltrosCSS()

      toggleCategoriaBackEnd = false
      toggleCategoriaFrontEnd = false
      toggleCategoriaDisponiveis = false
      toggleCategoriaDados = !toggleCategoriaDados
      if (toggleCategoriaDados) {
        botao.target.style.backgroundColor = `var(--text-title-color)`

        // livrosFiltrados = aplicaFiltro(tipoFiltro)
        livros = aplicaFiltro(tipoFiltro)
        // if (livrosFiltrados) livros = livrosFiltrados
      }
    }

    if (tipoFiltro === "disponiveis") {
      limpaFiltrosCSS()

      toggleCategoriaBackEnd = false
      toggleCategoriaFrontEnd = false
      toggleCategoriaDados = false
      toggleCategoriaDisponiveis = !toggleCategoriaDisponiveis
      if (toggleCategoriaDisponiveis) {
        botao.target.style.backgroundColor = `var(--text-title-color)`

        livros = aplicaFiltro(tipoFiltro)
      }
    }

    if (tipoFiltro === "preco") {
      botao.target.style.backgroundColor = `var(--button-color)`
      toggleOrdenaPreco = !toggleOrdenaPreco
      if (toggleOrdenaPreco) {
        botao.target.style.backgroundColor = `var(--text-title-color)`
      }
    }

    if (tipoFiltro === "desconto") {
      botao.target.style.backgroundColor = `var(--button-color)`

      temDesconto = !temDesconto
      if (temDesconto) {
        botao.target.style.backgroundColor = `var(--text-title-color)`
      }
    }

    livros = ordenaPorPreco(livros)

    if (temDesconto) {
      livros = aplicaDesconto(livros)
    }
    exibirLivros(livros)
    renderDesconto()
  })
)

function exibirLivros(listaDeLivros) {
  sectionLivros.innerHTML = ""
  listaDeLivros.forEach((livro) => (sectionLivros.innerHTML += render(livro)))
}

function render(livro) {
  let livroHtml

  if (!livro.preco_desconto) livro.preco_desconto = 0
  if (livro) {
    livroHtml = `<div class="livro">
        <img
          class="livro__imagens ${livro.quantidade < 1 ? "indisponivel" : ""}"
          src="${livro.imagem}"
          alt="${livro.alt}"
        />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <p class="livro__preco desconto" id="preco_desconto">R$ ${livro.preco_desconto.toFixed(
          2
        )}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
  }
  return livroHtml
}
