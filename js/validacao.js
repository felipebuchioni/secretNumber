function verificaValor(chute) {
  const numero = Number(chute)

  if (verificaTipo(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>'
    return
  }

  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>O número secreto deve estar entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era <span class="mystery">${numeroSecreto}</span>! <br>
      <input type="submit" value="Jogar novamente!" class="jogar-novamente">
    `

    document.querySelector('.jogar-novamente').addEventListener('click', e => {
      window.location.reload()
    })

  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>
    `
    }
}

function verificaTipo(numero) {
  return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor 
}

