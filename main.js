const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const inputValue = document.querySelector(".input").value

   const dolarToday = 5.2

   const convertedValue = inputValue / dolarToday

   console.log(convertedValue)
}


convertButton.addEventListener("click", convertValues)