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
  itemName = itemName.replace(' ', '-');
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
                            + '" onclick="removeItem(' + itemName.toString() + ", " + parseFloat(total.innerText || 0) + ", " + itemName.toString() + ')"> '
                            + (itemName.replace('-', ' '))
                            + '</div>'
  }
  else if (item.style.display === "none") {
    item.style.display = "block";
  }
}

function removeItem(itemName, currentTotal, removedItem) {
  var item = document.getElementById(itemName.id);
  if (item.style.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }

  getNewTotal(currentTotal, removedItem);
}
