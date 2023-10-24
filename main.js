const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input").value
   const currencyValueToConvert = document.querySelector(".valor-da-moeda-converter") //valor da moeda
   const currencyValueConverted = document.querySelector(".valordamoeda") //outras moedas


   const dolarToday = 5.2

   const convertedValue = inputCurrencyValue / dolarToday

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br",{
      
   })
   currencyValueConverted.innerHTML = convertedValue

   
}


convertButton.addEventListener("click", convertValues)