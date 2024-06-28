const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues  () {
   const inputCurrencyValue = document.querySelector(".input").value
   const currencyValueToConvert = document.querySelector(".valor-da-moeda-converter") //valor da moeda
   const currencyValueConverted = document.querySelector(".valordamoeda")//outras moedas

   //console.log(currencySelect.value)

 const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())

const dolar = data.USDBRL.high
const euro = data.EURBRL.high
const BitCoin = data.BTCBRL.high

 console.log(data)


   if (currencySelect.value == "Dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputCurrencyValue / dolar)
   }


   if (currencySelect.value == "Euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputCurrencyValue / euro)
   }

   if (currencySelect.value == "BitCoin") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
         style: "currency",
         currency: "BTC",
      }).format(inputCurrencyValue / BitCoin)
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

   if (currencySelect.value == "BitCoin") {
      currencyName.innerHTML = "BitCoin"
      currencyImage.src = "./assets/btc.png"
   }

   convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)