function aplicaFiltro(categoriaFiltro) {
  let resultado =
    categoriaFiltro == "disponiveis"
      ? filtrarDisponibilidade()
      : filtrarCategoria(categoriaFiltro)

  if (categoriaFiltro == "disponiveis") {
    const valorTotal = calcularValorTotalPrecoLivros(resultado)
    exibirValorTotalLivrosDisponiveis(valorTotal)
  }
  return resultado
  // exibirLivros(resultado)
}

function filtrarCategoria(categoriaFiltro) {
  if (toggleCategoriaBackEnd || toggleCategoriaFrontEnd || toggleCategoriaDados)
    return livros.filter((livro) => livro.categoria == categoriaFiltro)
}

function filtrarDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0)
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
  sectionValorTotalLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span></p>
      </div>`
}
