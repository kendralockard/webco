// Defining prices for different items
var priceList = {
    piano: 700,
    book: 2000,
    bottle: 1,
    'propaganda-poster': 10,
}

/* Change code below this line */
function getNewTotal(currentTotal, newItem) {
  var price = priceList[newItem];
  return currentTotal + price;
}

/* Change code above this line */

function addItem() {
  /* Grab element from html */
  var itemName = document.getElementById('item-input').value;
  itemName.trim();
  itemName.replace(' ', '-');
  if (!priceList.hasOwnProperty(itemName)) {
    return;
  }
  var total = document.getElementById('total');
  total.innerText = getNewTotal(parseFloat(total.innerText || 0), itemName);
}


