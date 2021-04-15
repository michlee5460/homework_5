var bunImgPaths = ['imgs/bun-original.png', 'imgs/bun-blackberry.png', 'imgs/bun-walnut.png', 'imgs/bun-original.png', 'imgs/bun-pumpkin.png', 'imgs/bun-pecan.png']
var bunNames = ["Original", "Blackberry", "Walnut", "Gluten-Free", "Pumpkin Spice", "Caramel Pecan"]
var glazeNames = ["No Glaze", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];

var subtotal = 0;
var tax = 0;
var delivery = 3;
var total = 0;


// TO DELETE
removeBasketItem = function(basketItemClose) {
    var basketItem = basketItemClose.parentElement.parentElement.parentElement;
    basketItem.remove();
}

if (localStorage.getItem("totalBuns") != null) {
    document.getElementById("basket_quant").innerText = localStorage.getItem("totalBuns");
}

if (localStorage.getItem("bunsInBasket") != null) {
    var buns = JSON.parse(localStorage.getItem("bunsInBasket"));
    var totalNumOfBuns = JSON.parse(localStorage.getItem("totalBuns"));
    var basketNumDisplayed = document.getElementById("basket_quant");
    var n = buns.length;
    console.log(n);
    for (var i = 0; i < n; i ++) {
        var currBun = buns[i];
        subtotal += currBun.totalPrice;
        var newBasketItem = document.createElement("div");
        newBasketItem.classList.add("og-bun-basket");

        var itemGrid = document.createElement("div");
        itemGrid.classList.add("item-grid");

        var firstCol = document.createElement("div");
        firstCol.classList.add("img-col");

        var imgNode = document.createElement("img");
        imgNode.src = bunImgPaths[currBun.type];
        imgNode.alt = bunNames[currBun.type];
        imgNode.classList.add("item-img");
        imgNode.classList.add("basket-img");

        firstCol.appendChild(imgNode);

        var secondCol = document.createElement("div");
        secondCol.id = "desc-col";

        var closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("basket-close");
        closeButton.value = i;
        closeButton.onclick = function() {
            console.log("trying to close");
            var basketItem = closeButton.parentElement.parentElement.parentElement;
            console.log(basketItem);
            basketItem.remove();
            buns.splice(closeButton.value,1);
            localStorage.setItem("bunsInBasket", JSON.stringify(buns));
            localStorage.setItem("totalBuns", JSON.stringify(totalNumOfBuns - currBun.quantity));
            basketNumDisplayed.innerHTML = totalNumOfBuns - currBun.quantity;
            location.reload();
        }

        secondCol.appendChild(closeButton);

        var itemHeader = document.createElement("h1");
        itemHeader.classList.add("basket-item-header");
        itemHeader.innerHTML = bunNames[currBun.type];

        secondCol.appendChild(itemHeader);

        var glazeOption = document.createElement("p");
        glazeOption.innerHTML = glazeNames[currBun.glaze];

        secondCol.appendChild(glazeOption);

        var itemQuantityP = document.createElement("p");
        var itemQuantityDec = document.createElement("span");
        var itemQuantityNum = document.createElement("span");
        var itemQuantityInc = document.createElement("span");
        var itemPrice = document.createElement("span");

        itemQuantityP.appendChild(itemQuantityNum);
        itemQuantityP.appendChild(itemPrice);
        secondCol.appendChild(itemQuantityP);

        itemQuantityDec.classList.add("change-quant");
        itemQuantityDec.onclick = function() {
            var itemQuantity = itemQuantityDec.parentElement.children[1].innerHTML;
            if (itemQuantity == 3) {
                itemQuantityDec.parentElement.children[1].innerHTML = 1;
                currBun.quantity = 1;
                itemPrice.innerHTML = "$".concat(currBun.pricePer * 1);
            } else if (itemQuantity == 6) {
                itemQuantityDec.parentElement.children[1].innerHTML = 3;
                currBun.quantity = 3;
                itemPrice.innerHTML = "$".concat(currBun.pricePer * 3);
            } else if (itemQuantity == 12) {
                itemQuantityDec.parentElement.children[1].innerHTML = 6;
                currBun.quantity = 6;
                itemPrice.innerHTML = "$".concat(currBun.pricePer * 6);
            }
        }
        itemQuantityDec.innerHTML = "- ";

        itemQuantityNum.innerHTML = "Quantity: ".concat(currBun.quantity);

        itemQuantityInc.classList.add("change-quant");
        itemQuantityInc.onclick = function() {
            var itemQuantity = itemQuantityInc.parentElement.children[1].innerHTML;
            if (itemQuantity == 1) {
                itemQuantityInc.parentElement.children[1].innerHTML = 3;
                currBun.quantity = 3;
                itemPrice.innerHTML = "$".concat(currBun.pricePer * 3);
            } else if (itemQuantity == 3) {
                itemQuantityInc.parentElement.children[1].innerHTML = 6;
                currBun.quantity = 6;
                itemPrice.innerHTML = "$".concat(currBun.pricePer * 6);
            } else if (itemQuantity == 6) {
                itemQuantityInc.parentElement.children[1].innerHTML = 12;
                currBun.quantity = 12;
                itemPrice.innerHTML = "$".concat(currBun.pricePer * 12);
            }
        }
        itemQuantityInc.innerHTML = " +";

        itemPrice.classList.add("item-price");
        itemPrice.innerHTML = "$".concat(currBun.totalPrice);

        itemGrid.appendChild(firstCol);
        itemGrid.appendChild(secondCol);
        
        newBasketItem.appendChild(itemGrid);

        var startDiv = document.getElementById("bun-basket-start");
        startDiv.appendChild(newBasketItem);
    }
    tax = subtotal * 0.06
    total = tax + subtotal;
    document.getElementById("subtotal").innerText = "$".concat(subtotal.toFixed(2));
    document.getElementById("tax").innerText = "$".concat(tax.toFixed(2));
    document.getElementById("total").innerText = "$".concat(total.toFixed(2));
}

decrement = function(minusChild) {
    var itemQuantity = minusChild.parentElement.children[1].innerHTML;
    if (itemQuantity == 3) {
        minusChild.parentElement.children[1].innerHTML = 1;
    } else if (itemQuantity == 6) {
        minusChild.parentElement.children[1].innerHTML = 3;
    } else if (itemQuantity == 12) {
        minusChild.parentElement.children[1].innerHTML = 6;
    }
}

increment = function(plusChild) {
    var itemQuantity = plusChild.parentElement.children[1].innerHTML;
    if (itemQuantity == 1) {
        plusChild.parentElement.children[1].innerHTML = 3;
    } else if (itemQuantity == 3) {
        plusChild.parentElement.children[1].innerHTML = 6;
    } else if (itemQuantity == 6) {
        plusChild.parentElement.children[1].innerHTML = 12;
    }
}

hideAddress = function() {
    document.getElementById("bb-address").style.display = "none";
    document.getElementById("delivery-address").style.display = "block";
}

showAddress = function() {
    document.getElementById("bb-address").style.display = "block";   
    document.getElementById("delivery-address").style.display = "none";
}

