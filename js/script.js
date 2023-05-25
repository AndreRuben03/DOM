function divisao () {
 
    let n1 = parseFloat(document.getElementById('nd1').value);
    let n2 = parseFloat(document.getElementById('nd2').value);
    let divisao = (n1 / n2).toFixed(2)
    if (divisao == 0) {
        document.getElementById('resultadod').innerHTML = "Erro : Não existe divisão por 0."
    }
    else {
        document.getElementById('resultadod').innerHTML = divisao;
    }

}

function calculararea_circulo () {

let raio = parseInt(document.getElementById('raio').value);
    let area = (3.14 * raio * raio).toFixed(2);
    document.getElementById('resultadoc').innerHTML = area;
}

function calculararea_triangulo () {
    
    let base = parseInt(document.getElementById('baset').value);
    let altura = parseInt(document.getElementById('alturat').value);
    let area = (base * altura / 2).toFixed(2);
    document.getElementById('resultadot').innerHTML = area;
}

function calculararea_retangulo () {

    let base = parseInt(document.getElementById('baser').value);
    let altura = parseInt(document.getElementById('alturar').value);
    let area = (base * altura).toFixed(2);
    document.getElementById('resultador').innerHTML = area;

}

function calculo_hipotenusa () {

    let cateto1 = parseFloat(document.getElementById('cateto1').value);
    let cateto2 = parseFloat(document.getElementById('cateto2').value);
    let hipotenusa = Math.sqrt (parseFloat(cateto1*cateto1) +parseFloat(cateto2*cateto2));
    document.getElementById('resultadoh').innerHTML = hipotenusa;
}

function calculo_baskhara () {

    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    let delta = parseFloat((b**2)-4*a*c);
    if (delta< 0 || (a === 0 && b === 0)) {
        document.getElementById('resultadob').innerHTML = "Erro : A equação não possui solução real."
        document.getElementById('resultadobs').innerHTML = "Erro : A equação não possui solução real."
    }
    else {
        let raiz1 = parseFloat((-b+(Math.sqrt(delta)))/(2*a))
        let raiz2 = parseFloat((-b-(Math.sqrt(delta)))/(2*a))
        document.getElementById('resultadob').innerHTML = raiz1;
        document.getElementById('resultadobs').innerHTML = raiz2;
    }
}

function conversao () {

    let real = parseFloat(document.getElementById('real').value);
    let cotacao = 4.97
    let conversao = parseFloat (real / cotacao).toFixed(2);
    document.getElementById('resultadoctc').innerHTML = '$' + conversao;  

}

function temperatura () {

    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit = (celsius * 9 / 5 + 32)
    if  (celsius == 0) {
        document.getElementById('resultadocf').innerHTML = `Temperatura ${celsius} celsius invalida.`
    }
    else if (isNaN(celsius)) {
        document.getElementById('resultadocf').innerHTML = `Adicione uma temperatura.`
    }
    else {
        document.getElementById('resultadocf').innerHTML = fahrenheit +'fº';
    } 


}

function velocidade () {

    let kmh = parseFloat(document.getElementById('kmh').value);
    let ms = (kmh / 3.6).toFixed(2)
    if (kmh <= 0 ) {
        document.getElementById('resultadokmh').innerHTML = `Não é possivel converter ${kmh} kms em ms.`
    }
    else if (isNaN(kmh)) { 
        document.getElementById('resultadokmh').innerHTML = `Adicione um valor.`
    }
    else {
        document.getElementById('resultadokmh').innerHTML = ms + "ms";
    }

}

function notas () {

    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = parseFloat(document.getElementById('n3').value);
    let media = ((n1 + n2 + n3) / 3).toFixed(2)
    document.getElementById('resultadonm').innerHTML = media
    
}
