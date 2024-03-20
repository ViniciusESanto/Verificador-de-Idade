function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-homem.jpg')
            }  else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-mulher.jpg')
            }  else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

