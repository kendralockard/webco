// Defining prices for different items
var priceList = {
  piano: 700,
  book: 2000,
  bottle: 1,
  'propaganda-poster': 10
};

// TODO: Write a function getNewTotal that takes 2 arguments: currentTotal and itemName and returns the new total cost
/* Change code below this line */
function getNewTotal(currentTotal, itemName) {
  // Have to use square brackets when getting value from object with a variable
  var itemPrice = priceList[itemName];
  var newTotal = currentTotal + itemPrice;
  return newTotal;
}
/* Change code above this line */

function addItem() {
  /* Grab element from html */
  var itemName = document.getElementById('item-input').value;
  itemName = itemName.replace(' ', '-');
  if (!priceList.hasOwnProperty(itemName)) {
    return;
  }
  var total = document.getElementById('total');
  var shoppingList = document.getElementById('shopping-list');
  shoppingList.innerHTML += '<li>' + itemName.replace('-', ' ') + '</li>';
  total.innerText = getNewTotal(parseFloat(total.innerText || 0), itemName);
}
