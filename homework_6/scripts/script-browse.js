// ----------- BUN IMAGE HOVER INTERACTION -----------

var hoverImgPaths = ['imgs/hover-bun-original.png', 'imgs/hover-bun-blackberry.png', 'imgs/hover-bun-walnut.png', 'imgs/hover-bun-original.png', 'imgs/hover-bun-pumpkin.png', 'imgs/hover-bun-pecan.png']
var bunImgPaths = ['imgs/bun-original.png', 'imgs/bun-blackberry.png', 'imgs/bun-walnut.png', 'imgs/bun-original.png', 'imgs/bun-pumpkin.png', 'imgs/bun-pecan.png']

bunHoverOver = function(bunCard, x) {
    bunCard.children[0].src = hoverImgPaths[x];
}

bunHoverOut = function(bunCard, x) {
    bunCard.children[0].src = bunImgPaths[x];
}


// ----------------- MODAL FUNCTIONS -----------------

var currGlaze;
var currQuant;
var currPricePer;
var bunObj = {
    type: 0,
    glaze: 0,
    quantity: 0,
    pricePer: 0,
    totalPrice: 0
};
var bunsInBasket;
var totalBuns;

if (localStorage.getItem("bunsInBasket") != null) {
    bunsInBasket = JSON.parse(localStorage.getItem("bunsInBasket"));
} else {
    bunsInBasket = [];
}

// Check if there are buns in the basket, update number next to basket
if (localStorage.getItem("totalBuns") != null) {
    document.getElementById("basket_quant").innerText = localStorage.getItem("totalBuns");
    totalBuns = parseInt(localStorage.getItem("totalBuns"));
} else {
    totalBuns = 0;
}

function resetCurrs() {
    currGlaze = 0;
    currQuant = 0;
    currPricePer = 0;
}

var originalBun = document.getElementById("original-bun-card");
var blackberryBun = document.getElementById("blackberry-bun-card");
var walnutBun = document.getElementById("walnut-bun-card");
var gfBun = document.getElementById("gf-bun-card");
var pumpkinBun = document.getElementById("pumpkin-bun-card");
var pecanBun = document.getElementById("pecan-bun-card");

var ogModal = document.getElementById("og-modal");
var ogSpan = document.getElementById("og-close");

originalBun.onclick = function() {
  document.getElementById("og-glaze-selection").reset();
  document.getElementById("og-quant-selection").reset();
  ogModal.style.display = "block";
  currGlaze = 0;
  currQuant = 1;
  currPricePer = 3;
}

ogSpan.onclick = function() {
  ogModal.style.display = "none";
  resetCurrs();
}

function updatePrice3(quant) {
    currQuant = parseInt(quant);
    document.getElementById("priceid").innerText = "$".concat((quant*3).toString());
}

function updateGlaze(glaze) {
    currGlaze = glaze;
}

function incrementBuns(){
    totalBuns += currQuant;
    document.getElementById("basket_quant").innerText = totalBuns;
    localStorage.setItem("totalBuns", totalBuns);
    ogModal.style.display = "none";
    bunObj = {
        type: 0,
        glaze: currGlaze,
        quantity: currQuant,
        pricePer: 3,
        totalPrice: currQuant * currPricePer
    };
    bunsInBasket.push(bunObj);
    localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

// Blackberry

var bbModal = document.getElementById("bb-modal");
var bbSpan = document.getElementById("bb-close");

blackberryBun.onclick = function() {
  document.getElementById("bb-glaze-selection").reset();
  document.getElementById("bb-quantity-selection").reset();
  bbModal.style.display = "block";
  currGlaze = 0;
  currQuant = 1;
  currPricePer = 4;
}

bbSpan.onclick = function() {
  bbModal.style.display = "none";
  resetCurrs();
}

function updatePrice4(quant) {
  currQuant = parseInt(quant);
  document.getElementById("bbpriceid").innerText = "$".concat((quant*4).toString());
}

function bbincrementBuns(){
  totalBuns += currQuant;
  document.getElementById("basket_quant").innerText = totalBuns;
  localStorage.setItem("totalBuns", totalBuns);
  bbModal.style.display = "none";
  bunObj = {
      type: 1,
      glaze: currGlaze,
      quantity: currQuant,
      pricePer: 4,
      totalPrice: currQuant * currPricePer
  };
  bunsInBasket.push(bunObj);
  localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

// Walnut

var wModal = document.getElementById("w-modal");
var wSpan = document.getElementById("w-close");

walnutBun.onclick = function() {
  document.getElementById("w-glaze-selection").reset();
  document.getElementById("w-quantity-selection").reset();
  wModal.style.display = "block";
  currGlaze = 0;
  currQuant = 1;
  currPricePer = 3;
}

wSpan.onclick = function() {
  wModal.style.display = "none";
  resetCurrs();
}

function updatePrice3w(quant) {
  currQuant = parseInt(quant);
  document.getElementById("w-priceid").innerText = "$".concat((quant*3).toString());
}

function wincrementBuns(){
  totalBuns += currQuant;
  document.getElementById("basket_quant").innerText = totalBuns;
  localStorage.setItem("totalBuns", totalBuns);
  wModal.style.display = "none";
  bunObj = {
      type: 2,
      glaze: currGlaze,
      quantity: currQuant,
      pricePer: 3,
      totalPrice: currQuant * currPricePer
  };
  bunsInBasket.push(bunObj);
  localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

// Gluten-Free

var gfModal = document.getElementById("gf-modal");
var gfSpan = document.getElementById("gf-close");

gfBun.onclick = function() {
  document.getElementById("gf-glaze-selection").reset();
  document.getElementById("gf-quantity-selection").reset();
  gfModal.style.display = "block";
  currGlaze = 0;
  currQuant = 1;
  currPricePer = 3;
}

gfSpan.onclick = function() {
  gfModal.style.display = "none";
  resetCurrs();
}

function updatePrice3gf(quant) {
  currQuant = parseInt(quant);
  document.getElementById("gf-priceid").innerText = "$".concat((quant*3).toString());
}

function gfincrementBuns(){
  totalBuns += currQuant;
  document.getElementById("basket_quant").innerText = totalBuns;
  localStorage.setItem("totalBuns", totalBuns);
  gfModal.style.display = "none";
  bunObj = {
      type: 3,
      glaze: currGlaze,
      quantity: currQuant,
      pricePer: 3,
      totalPrice: currQuant * currPricePer
  };
  bunsInBasket.push(bunObj);
  localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

// Pumpkin

var pkModal = document.getElementById("pk-modal");
var pkSpan = document.getElementById("pk-close");

pumpkinBun.onclick = function() {
  document.getElementById("p-glaze-selection").reset();
  document.getElementById("p-quantity-selection").reset();
  pkModal.style.display = "block";
  currGlaze = 0;
  currQuant = 1;
  currPricePer = 4;
}

pkSpan.onclick = function() {
  pkModal.style.display = "none";
  resetCurrs();
}

function updatePrice4pk(quant) {
  currQuant = parseInt(quant);
  document.getElementById("pk-priceid").innerText = "$".concat((quant*4).toString());
}

function pkincrementBuns(){
  totalBuns += currQuant;
  document.getElementById("basket_quant").innerText = totalBuns;
  localStorage.setItem("totalBuns", totalBuns);
  pkModal.style.display = "none";
  bunObj = {
      type: 4,
      glaze: currGlaze,
      quantity: currQuant,
      pricePer: 4,
      totalPrice: currQuant * currPricePer
  };
  bunsInBasket.push(bunObj);
  localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

// Caramel Pecan

var cpModal = document.getElementById("cp-modal");
var cpSpan = document.getElementById("cp-close");

pecanBun.onclick = function() {
  document.getElementById("cp-glaze-selection").reset();
  document.getElementById("cp-quantity-selection").reset();
  cpModal.style.display = "block";
  currGlaze = 0;
  currQuant = 1;
  currPricePer = 4;
}

cpSpan.onclick = function() {
  cpModal.style.display = "none";
  resetCurrs();
}

function updatePrice4cp(quant) {
  currQuant = parseInt(quant);
  document.getElementById("cp-priceid").innerText = "$".concat((quant*4).toString());
}

function cpincrementBuns(){
  totalBuns += currQuant;
  document.getElementById("basket_quant").innerText = totalBuns;
  localStorage.setItem("totalBuns", totalBuns);
  cpModal.style.display = "none";
  bunObj = {
      type: 0,
      glaze: currGlaze,
      quantity: currQuant,
      pricePer: 4,
      totalPrice: currQuant * currPricePer
  };
  bunsInBasket.push(bunObj);
  localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

window.onclick = function(event) {
    if (event.target == ogModal) {
        ogModal.style.display = "none";
        resetCurrs();
    }
    else if (event.target == wModal) {
        wModal.style.display = "none";
        resetCurrs();
    }
    else if (event.target == bbModal) {
        bbModal.style.display = "none";
        resetCurrs();
    }
    else if (event.target == gfModal) {
        gfModal.style.display = "none";
        resetCurrs();
    }
    else if (event.target == pkModal) {
        pkModal.style.display = "none";
        resetCurrs();
    }
    else if (event.target == cpModal) {
        cpModal.style.display = "none";
        resetCurrs();
    }
}