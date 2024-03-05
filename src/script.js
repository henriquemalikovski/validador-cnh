let input = document.getElementById('registro')
input.addEventListener('keypress', function () {
    if (event.key === 'Enter') {
        event.preventDefault()
        validatorRegisterCNH()
    }
})

function validatorRegisterCNH() {
    let registroCNH = document.getElementById('registro').value
    let arrCNH = registroCNH.split('')
    let soma = 0
    while (arrCNH.length > 0) {
        soma += parseInt(arrCNH[0])
        arrCNH.shift()
    }

    let digitoUm = soma.toString()[0]
    let digitoDois = soma.toString()[1]

    if ((digitoUm === digitoDois) ||
        (digitoUm === (soma - 1).toString()[1]) ||
        (digitoUm === (soma + 1).toString()[1])) {
        alert('VALIDO!!! \n\nSoma: ' + soma)
        return
    } else {
        alert('INVALIDO!!! \n\nSoma: ' + soma)
    }
}