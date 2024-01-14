function calcular(){

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let qtd_passos = document.getElementById('qtd_passos')
    let resultado = document.getElementById('resultado')
    resultado.innerHTML=''

    if(inicio.value == "" || qtd_passos.value == "" || fim.value == "" )
    {
       return window.alert("Campo obrigatório em branco!")
    } 

        for(let i = Number(inicio.value); i <=Number(fim.value);i+=Number(qtd_passos.value))
        {
            if(i==Number(fim.value)){
                resultado.innerHTML+=` 👉🏁`
            }else{
           resultado.innerHTML+=` 👉${i}`}
         }

   

    
}