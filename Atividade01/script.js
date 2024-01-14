function carregar(){
    var resultado = document.getElementById('horario')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    

    if ((hora>=6) && (hora<13)){
     foto.src = 'manha.jpg'
     document.body.style.backgroundColor= 'ligth blue'
     resultado.innerHTML=(`Bom dia! <br> Agora são ${hora} horas e ${minutos} minutos.`)
    }
    else
    if ((hora>=13) && (hora<19)){
        foto.src = 'tarde.jpg'
        document.body.style.backgroundColor= 'yellow'
        resultado.innerHTML=(`Boa tarde! <br> Agora são ${hora} horas e ${minutos} minutos.`)
       }
       else{
        foto.src = 'noite.jpg'
        document.body.style.backgroundColor= 'black'
        resultado.innerHTML=(`Boa noite! <br> Agora são ${hora} horas e ${minutos} minutos.`)
       }
}