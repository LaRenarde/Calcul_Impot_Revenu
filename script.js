
                        ////////////////////////////////////////////////////////////
                        /////////  Calcul de l'impot sur le revenu   //////////////
                        //////////////////////////////////////////////////////////



function irrp(salaire){
    let impot = null
    console.log(salaire)
    if(salaire <= 10064){
        impot = 0
    }
    if(salaire >=10065 && salaire<= 25659){
        impot = ((salaire-10065)*11)/100
    }
    if(salaire >= 25660 && salaire <= 73369){
        impot = ((25659 - 10065)*11/100)
        impot += ((salaire - 25660)*30)/100
    }
    if(salaire >=73370 && salaire <= 157806){
        impot = ((25659 - 10065)*11/100)
        impot += ((73369 - 25660)*30)/100
        impot += ((salaire - 73369)*41)/100
    }
    if(salaire >= 157807){
        impot = ((25659 - 10065)*11/100)
        impot += ((73369 - 25660)*30)/100
        impot += ((157806 - 73369)*41)/100
        impot += ((salaire - 157506)*45)/100
    }
    impot= Math.floor(impot)
    return impot
}


document.addEventListener("DOMContentLoaded", function () {

    let salaire = ""
    let formulaire = document.querySelector("form")
    let liste = document.querySelector("ul")
    let puce = null


    formulaire.addEventListener("submit", function(e){
        e.preventDefault();
        salaire = document.getElementById("salaire").value

        if(isNaN(salaire) || salaire < 0){
            alert("Salaire invalide")
            document.getElementById("salaire").value = ""
            return
        }
        if(salaire == "" ){
            alert("salaire manquant")
            document.getElementById("salaire").value = ""
            return
        }

        puce = document.createElement("li")
        puce.textContent = " Pour un salaire annuel imposable de " +salaire+ "euros, vous devrez payer " +irrp(salaire)+ "euro(s) d'impot sur le revenu";
        liste.appendChild(puce)
        document.getElementById("salaire").value = ""

    })
   
})
    