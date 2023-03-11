// Prezzo del biglietto definito in base ai km (0.21 € al km) 
const PriceKm = 0.21


const SubmitBtn = document.getElementById("submit-btn");
SubmitBtn.addEventListener("click", function() {
    // prendere valore dell'input
    const UserNameInput = document.getElementById("user-name");
    const UserName = UserNameInput.value;

    const UserKmInput = document.getElementById("user-km");
    const UserKm = UserKmInput.value;

    const UserAgeInput = document.getElementById("user-age");
    const UserAge = UserAgeInput.value;

    console.log(UserName, UserKm, UserAge);
    
    // Stampa scelte utente
    const Name = document.getElementById("name");
    Name.innerHTML = UserName;

    const Result = document.getElementById("result");
    let FinalPrice = PriceKm * UserKm
        if(document.getElementById("user-age").value==="Minorenne"){
            FinalPrice=FinalPrice-(FinalPrice*20/100)
            offer = "Sconto 20% Under 18"
        }
        else if(document.getElementById("user-age").value==="Over65"){
            FinalPrice=FinalPrice-(FinalPrice*40/100)
            offer = "Sconto 40% Over 65"
        }
        else if(document.getElementById("user-age").value==="Maggiornne"){
            FinalPrice=FinalPrice-(FinalPrice*40/100)
            offer = "Nessun offerta"
        }

        document.getElementById("biglietto").innerHTML = offer

        // Calcolo random da 1 a 8
        const cabin = Math.floor(Math.random() * 8) + 1;
        document.getElementById("carrozza").innerHTML = cabin

        // Calcolo random da 1000 a 9999
        const code = Math.floor(Math.random() * (99999 - 10000 + 1) ) + 10000;
        document.getElementById("code-cp").innerHTML = code
        
    Result.innerHTML = FinalPrice 

        // Ripulire gli input
        UserNameInput.value = "";
        UserKmInput.value = "";
        UserAgeInput.value = "";

});

// Implementazione della funzionalità annulla
const clearBtn = document.getElementById("reset-btn");
clearBtn.addEventListener("click", function () {
  // Ripulire e nascondere il biglietto
  passengerNameElem.innerHTML = "";
  offerElem.innerHTML = "";
  cabinElem.innerHTML = "";
  codeElem.innerHTML = "";
  priceElem.innerHTML = "";
  document.getElementById("background-price").classList.add("hidden");

  // Ripulire gli input
  nameInput.value = "";
  kmInput.value = "";
  ageRangeInput.value = "";
});