function aplicaDesconto(listaDeLivros) {
  const desconto = 0.3
  const resultado = listaDeLivros.map((livro) => ({
    ...livro,
    desconto: desconto * 100,
    preco: livro.preco * 1,
    preco_desconto: livro.preco * (1 - desconto),
  }))
  return resultado
  // exibirLivros(resultado)
}

function renderDesconto() {
  const labelsPrecoOriginal = document.querySelectorAll("#preco")
  const labelsPrecoDesconto = document.querySelectorAll("#preco_desconto")
  
  if (temDesconto) {
    labelsPrecoOriginal.forEach((item) => {
      item.classList.add("desconto")
      item.style.display = "block"
    })
    labelsPrecoDesconto.forEach((item) => {
      item.classList.remove("desconto")
    })
  } else {
    labelsPrecoOriginal.forEach((item) => {
      item.classList.remove("desconto")
    })
    labelsPrecoDesconto.forEach((item) => {
      item.classList.add("desconto")
      item.style.display = "none"
    })
  }
}
