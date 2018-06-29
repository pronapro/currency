let from= document.getElementById('from');

let to= document.getElementById('to');
const URL_country = ' https://free.currencyconverterapi.com/api/v5/countries';


function load(){

let le;
let ne;
fetch(URL_country)
.then(function(response) {
  console.log(response.ok)
  const bodyType = response.json();
  return bodyType;
})
.then(function(jsonObj) {
  // console.log(jsonObj.results)
  let currencies = jsonObj.results
for(let i in currencies) {
  console.log(i)
   le +=`<option> ${i} <option>`
   ne += `<option> ${i} <option>`
  
}
 to.innerHTM = ne;
 from.innerHTML =le;

})


}

function conver(){

	fetch(URL_country)
.then(function(response) {
  console.log(response.ok)
  const bodyType = response.json();
  return bodyType;
})
.then(function(jsonObj) {
  // console.log(jsonObj.results)
  let currencies = jsonObj.results



})
}
