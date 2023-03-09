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
        }
        else if(document.getElementById("user-age").value==="Over65"){
            FinalPrice=FinalPrice-(FinalPrice*40/100)
        }
        
    Result.innerHTML = FinalPrice
});
