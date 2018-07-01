let from= document.getElementById('from');

let to= document.getElementById('to');
const URL_country = ' https://free.currencyconverterapi.com/api/v5/currencies';


function load(){

let le;

fetch(URL_country)
.then(function(response) {
  console.log(response.ok)
  const bodyType = response.json();
  return bodyType;
})
.then(function(jsonObj) {
 console.log(jsonObj.results)
  let currencies = jsonObj.results
for(let i in currencies) {
 //console.log(i)
   le +=`<option> ${i} <option>`;
  
  
}
to.innerHTML =le;
 from.innerHTML =le;

})


}




function conver()
{
	if (document.getElementById('amount') != null) {
    
     let am = parseInt(document.getElementById('amount')).value;
}
	 let amount = parseInt(document.getElementById('amount').value);
  const fromCurr = from.options[from.selectedIndex].text;

  const toCurr =to.options[to.selectedIndex].text;

 // console.log(fromCurr)
 //  console.log(toCurr)
const query = `${fromCurr}_${toCurr}`;
  const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`;
	fetch(url)
.then(function(response) {
	//console.log(response.json())
  
  return  response.json();
})
.then(function(jsonObj) {

  let rate =jsonObj[query].val;

  result  = rate * amount;
  console.log(result );
 
  document.getElementById('res').innerHTML = `<p> ${result} <p>`;


})
}

