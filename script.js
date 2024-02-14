var a = window.document
let form = a.querySelector('form')
var titulo = a.querySelector('#titulo')
var imagem = a.querySelector('#imagem')
form.addEventListener( 'submit', event=> {
    event.preventDefault()
    let masculino = document.querySelector('#masculino')
    const genero = masculino.checked ? 'M' : 'F'
    let data = a.querySelector("#data").value 
    console.log(data)
    let d1 = new Date(data)
    let d2 = new Date()
    let idade
    imagem.style = 'display: flex;'
    if(d1.getFullYear() == d2.getFullYear() &&  d1.getMonth() > d2.getMonth()||(d1.getFullYear() == d2.getFullYear() &&  d1.getMonth()== d2.getMonth() && d1.getDate() > d2.getDate()-1)) {
        window.alert('data invalida')
        breack;
    }else if(d1.getFullYear() < d2.getFullYear()) {
        idade = d2.getFullYear() - d1.getFullYear()
        if(d2.getMonth() < d1.getMonth() || (d2.getMonth() == d1.getMonth() && d2.getDate() <= d1.getDate())) {
            idade--
        }
    }
    
    if(idade< 13){
        if(genero == "M"){
        titulo.innerText = `Menino de ${idade} anos de idade`
        imagem.src= 'imagens/criancaMasculino.jpg'
        }else{
            titulo.innerText = `Menina de ${idade} anos de idade`
            imagem.src='imagens/criancaFeminino.jpg'
        }
    }else if (idade < 18) {
        if(genero == "M"){
            titulo.innerText = `Garoto de ${idade} anos de idade`
            imagem.src= 'imagens/adolecenteMasculino.jpg'
        }else{
            titulo.innerText = `Garota de ${idade} anos de idade`
            imagem.src='imagens/adolecenteFeminino.jpg'
        }
    } else if(idade < 60){
        if(genero == "M"){
            titulo.innerText = `Homem de ${idade} anos de idade`
            imagem.src= 'imagens/adultoMasculino.jpg'
        }else{
            titulo.innerText = `Mulher de ${idade} anos de idade`
            imagem.src='imagens/adultoFeminino.jpg'

        }
    } else if(idade>=60){
        if(genero == "M"){
            titulo.innerText = `Homem de ${idade} anos de idade`
            imagem.src= 'imagens/idosoMasculino.jpg'
        }else{
            titulo.innerText = `Mulher de ${idade} anos de idade`
            imagem.src='imagens/idosoFeminino.jpg'

        } 
    }else{
        if(genero == "M"){
        titulo.innerText = `Menino recém nascido`
        imagem.src= 'imagens/criancaMasculino.jpg'
        }else{
            titulo.innerText = `Menina recém nascida`
            imagem.src='imagens/criancaFeminino.jpg'
        }
    }
})