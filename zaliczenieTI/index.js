var cart=[];
var cartDisplay;
function addDish(dish){
  cart.push(dish);
  cartDisplay.append("<li>"+dish+"</li>")
}
$(document).ready(function(){

cartDisplay=$("#cart ul");

})
function placeOrder(){
  if(cart.length===0)
  {
    alert("Przed złożeniem zamówienia dodaj dania do koszyka.");
    return;
  }
  var nameForm= $("#name");
  var adressForm= $("#adress");
  console.log(nameForm.val());
  console.log(adressForm.val());
  if(nameForm.val().length===0)
  {
    alert("Przed złożeniem zamówienia podaj swoje imie i nazwisko.");
    return;
  }
  if(adressForm.val().length===0)
  {
    alert("Przed złożeniem zamówienia podaj adres dostawy.");
    return;
  }
  cart.length=0;
  cartDisplay.empty();
  alert("Zamówiono!")
}
