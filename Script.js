document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
  const aumentarFonte = document.getElementById('aumentar-fonte')
  const diminuirFonte = document.getElementById('diminuir-fonte')

  // Abre/fecha menu
  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
  })

  // Função de aumentar/diminuir fonte
  let tamanhoFonte = 16
  aumentarFonte.addEventListener('click', function () {
    tamanhoFonte += 2
    document.body.style.fontSize = tamanhoFonte + 'px'
  })

  diminuirFonte.addEventListener('click', function () {
    if (tamanhoFonte > 10) {
      tamanhoFonte -= 2
      document.body.style.fontSize = tamanhoFonte + 'px'
    }
  })
})
