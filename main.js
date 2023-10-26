const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input").value
   const currencyValueToConvert = document.querySelector(".valor-da-moeda-converter") //valor da moeda
   const currencyValueConverted = document.querySelector(".valordamoeda") //outras moedas

   console.log(currencySelect.value)

   const dolarToday = 4.99
   const euroToday = 5.29


   if (currencySelect.value == "Dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputCurrencyValue / dolarToday)
   }


   if (currencySelect.value == "Euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputCurrencyValue / euroToday)
   }


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)

}


function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   if (currencySelect.value == "Dolar") {
      currencyName.innerHTML = "Dólar Americano"
      currencyImage.src = "./assets/usa.png"
   }

   if (currencySelect.value == "Euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/eur.png"
   }

   convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)