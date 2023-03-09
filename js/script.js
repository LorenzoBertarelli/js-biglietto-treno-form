// Chiedo all'utente il numero di km che vuole percorrere
// const UserKm = parseInt(prompt("Quanti km vuole percorrere?"));
// console.log(UserKm);
// // Chiedo all'utente la sua età
// const UserAge = parseInt(prompt("Quanti anni hai?"));
// console.log(UserAge);

// // Prezzo del biglietto definito in base ai km (0.21 € al km)
// const PriceKm = 0.21
// let BasePrice = UserKm*PriceKm
// FinalPrice = BasePrice
// console.log(FinalPrice);

// // Applicazione sconto del 20% per i minorenni
// // Applicazione sconto del 40% per gli over 65
// if(UserAge<18){
//     FinalPrice=FinalPrice*(1-0.20)
// }
// else if(UserAge>=65){
//     FinalPrice=FinalPrice*(1-0.40)
// }
// console.log(FinalPrice);

// Risultato a schermo

// const message = `Il prezzo del biglietto è € ${BasePrice.toFixed(2)} con lo sconto il prezzo finale è di € ${FinalPrice.toFixed(2)}`;

// document.getElementById("result").innerHTML = message;

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
    Name.innerHTML = `il tuo nome è ${UserName}`;

    const Result = document.getElementById("result");
    Result.innerHTML = PriceKm * UserKm
        if(document.getElementById(under18)){
            FinalPrice=Result-(Result*20/100)
        }
        else if(document.getElementById(over65)){
            FinalPrice=Result-(Result*40/100)
        }

    FinalPrice = Result
});