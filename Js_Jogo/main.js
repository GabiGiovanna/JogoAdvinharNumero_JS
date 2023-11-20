contador = 0
let numeroSecreto =  parseInt(Math.random() * 1001) 


function JogarDenovo(){
    contador = 0
    numeroSecreto =  parseInt(Math.random() * 1001)    
    cont.innerHTML = "Tentativas: " + contador
    result.innerHTML = " "
   

}



function JogoDeNumeros() {

    

    let numDigitado = document.getElementById("numero").value
    let result = document.getElementById("result")
    let cont = document.getElementById("cont")

       
        if (numeroSecreto == numDigitado) {

            result.innerHTML= "Você acertou o número!!"
            cont.innerHTML = "Tentativas: " + contador
            contador = 0
        }

        else if (numeroSecreto > numDigitado) {
            contador++
            result.innerHTML = "O número é maior que " + numDigitado
            
            cont.innerHTML  = "Tentativas: " + contador;
            
            
        }

        else {
            contador++
            result.innerHTML = "O número é menor que " + numDigitado
            
            cont.innerHTML  = "Tentativas: " + contador;
            
        }


    }





