// Defining prices for different items
var priceList = {
    piano: 700,
    book: 2000,
    bottle: 1,
    propaganda: 10,
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
  itemName = itemName.replace(' poster', '');
  if (!priceList.hasOwnProperty(itemName)) {
    return;
  }
  var total = document.getElementById('total');
  total.innerText = getNewTotal(parseFloat(total.innerText || 0), itemName);

  var item = document.getElementById(itemName);

  var shoppingList = document.getElementById('shopping-list');
  if (!item) {
    shoppingList.innerHTML += '<div id="' + itemName + '">'
                            + '<img class="remove-button" src="./remove-item.png" id="remove-' + itemName
                            + '" onclick="removeItem(' + itemName.toString() + ", " + parseFloat(total.innerText || 0) + ')"> '
                            + (itemName.replace('propaganda', 'propaganda poster'))
                            + '</div>'
  }
  else if (item.style.display === "none") {
    item.style.display = "block";
  }
}

function removeItem(itemName, currentTotal) {
  var item = document.getElementById(itemName.id);
  if (item.style.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }

  var total = document.getElementById('total');
  total.innerText = getReducedTotal(parseFloat(total.innerText || 0), itemName.id);
}

// We need to implement a function getReducedTotal 
// that takes in 2 arguments: 1. currentTotal 
// and 2. name of the item. Then, the function 
// will return the new correct total

function getReducedTotal(currentTotal, itemName) {
  var price = priceList[itemName]; 
  // Can't write priceList.itemName
  return currentTotal - price;
}