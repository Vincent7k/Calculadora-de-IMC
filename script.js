let calcular = document.getElementById('calcular')

function imc(){

    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')


if(nome !== '' && altura !== '' && peso !== ''){

    let valorIMC = (peso / (altura * altura))

    /* SE VALOR IMC MENOR QUE 18.4 
    SE VALOR ENTRE 18.5 E 24.9 PESO NORMAL
    SE VALOR IMC ENTRE 25.0 E 29.9 EXCESSO DE PESO
    SE VALOR IMC ENTRE 30.0 E 34.9 OBESIDADE GRAU I
    SE VALOR IMC ENTRE 35.0 E 39.9 OBESIDADE GRAU II
    SE VALOR IMC MAIOR QUE 40 OBESIDADE GRAU III*/

    if(valorIMC < 18.4){
        tipoIMC = 'abaixo do peso'
    }else if(valorIMC > 18.5 && valorIMC < 24.9){
        tipoIMC = 'peso normal'
    }else if(valorIMC > 25.0 && valorIMC < 29.9){
        tipoIMC = 'excesso de peso'
    }else if(valorIMC > 30.0 && valorIMC < 34.9){
        tipoIMC = 'obesidade grau I'
    }else if(valorIMC > 35.0 && valorIMC< 39.9){
        tipoIMC = 'obesidade grau II'
    }else{
        tipoIMC =  'obesidade grau III'
    }

    resultado.textContent = `${nome} o seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`

    
}
}

calcular.addEventListener('click', imc)