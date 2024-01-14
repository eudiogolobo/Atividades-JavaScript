function verificar(){
    

    let now = new Date()
    let year = now.getFullYear()
    let nascimento = document.getElementById('nascimento')
    let resul = document.getElementById('resultado')
    let img = document.getElementById('imagem')
    let sexo = document.getElementsByName('sexo')
    img.src = ''
    if ((Number(nascimento.value) > year) || (Number(nascimento.value)=='')){
        
        window.alert('Digite uma data de nascimento válda!')
        
     }else{
     if ((sexo[0].checked) || (sexo[1].checked)){
            year = year - Number(nascimento.value)
            resul.innerHTML =  year


            if (year<18 && (sexo[0].checked)){
                img.src='img/homem10anos.jpg'
            } else
            if (year>=18 && year<40 && (sexo[0].checked)){
                img.src='img/homem20anos.jpg'
            } else
            if (year>=40 && year<60 && (sexo[0].checked)){
                img.src='img/homem40anos.jpg'
            } else
            if (year>=60 && (sexo[0].checked)){
                img.src='img/homem60anos.jpg'
            } else
            if (year<18 && (sexo[1].checked)){
                img.src='img/mulher10anos.jpg'
            } else
            if (year>=18 && year<40 && (sexo[1].checked)){
                img.src='img/mulher20anos.jpg'
            } else
            if (year>=40 && year<60 && (sexo[1].checked)){
                img.src='img/mulher40anos.jpg'
            } else
            if (year>=60 && (sexo[1].checked)){
                img.src='img/mulher60anos.jpg'
            } 
        }else {window.alert('Escolha um sexo')}
    }

} 