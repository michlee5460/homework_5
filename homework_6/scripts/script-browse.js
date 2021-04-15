var totalBuns = 0;

var hoverImgPaths = ['imgs/hover-bun-original.png', 'imgs/hover-bun-blackberry.png', 'imgs/hover-bun-walnut.png', 'imgs/hover-bun-original.png', 'imgs/hover-bun-pumpkin.png', 'imgs/hover-bun-pecan.png']
var bunImgPaths = ['imgs/bun-original.png', 'imgs/bun-blackberry.png', 'imgs/bun-walnut.png', 'imgs/bun-original.png', 'imgs/bun-pumpkin.png', 'imgs/bun-pecan.png']

// ----------- BUN IMAGE HOVER INTERACTION -----------

var originalBun = document.getElementById("original-bun-card");
var blackberryBun = document.getElementById("blackberry-bun-card");
var walnutBun = document.getElementById("walnut-bun-card");
var gfBun = document.getElementById("gf-bun-card");
var pumpkinBun = document.getElementById("pumpkin-bun-card");
var pecanBun = document.getElementById("pecan-bun-card");

bunHoverOver = function(bunCard, x) {
    bunCard.children[0].src = hoverImgPaths[x];
}

bunHoverOut = function(bunCard, x) {
    bunCard.children[0].src = bunImgPaths[x];
}


// ----------- MODAL FUNCTIONS -----------

// Original
var ogModal = document.getElementById("og-modal");
var ogSpan = document.getElementById("og-close");
var currGlaze;
var currQuant;
var currPricePer;
var bunObj = {
    type: "",
    glaze: "",
    quantity: 0,
    totalPrice: 0
};
var bunsInBasket = [];
localStorage.clear();

function resetCurrs() {
    currGlaze = "";
    currQuant = 0;
    currPricePer = 0;
}

originalBun.onclick = function() {
  ogModal.style.display = "block";
  currGlaze = "No Glaze";
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

function incrementBuns(){
    totalBuns += currQuant;
    document.getElementById("basket_quant").innerText = totalBuns.toString();
    ogModal.style.display = "none";
    bunObj = {
        type: "Original",
        glaze: "No Glaze",
        quantity: currQuant,
        totalPrice: currQuant * currPricePer
    };
    bunsInBasket.push(bunObj);
    localStorage.setItem("bunsInBasket", JSON.stringify(bunsInBasket));
}

// Blackberry

var bbModal = document.getElementById("bb-modal");
var bbSpan = document.getElementById("bb-close");

blackberryBun.onclick = function() {
  bbModal.style.display = "block";
}

bbSpan.onclick = function() {
  bbModal.style.display = "none";
}

function updatePrice4(quant) {
    document.getElementById("bbpriceid").innerText = "$".concat((quant*4).toString());
}

function bbincrementBuns(){
    var newbuns = parseInt((document.getElementById("bbpriceid").innerText).substring(1))/4;
    totalBuns += newbuns;
    document.getElementById("basket_quant").innerText = totalBuns.toString();
    bbModal.style.display = "none";
}

// Walnut

var wModal = document.getElementById("w-modal");
var wSpan = document.getElementById("w-close");

walnutBun.onclick = function() {
  wModal.style.display = "block";
}

wSpan.onclick = function() {
  wModal.style.display = "none";
}

function updatePrice3w(quant) {
    document.getElementById("w-priceid").innerText = "$".concat((quant*3).toString());
}

function wincrementBuns(){
    var newbuns = parseInt((document.getElementById("w-priceid").innerText).substring(1))/3;
    totalBuns += newbuns;
    document.getElementById("basket_quant").innerText = totalBuns.toString();
    wModal.style.display = "none";
}

// Gluten-Free

var gfModal = document.getElementById("gf-modal");
var gfSpan = document.getElementById("gf-close");

gfBun.onclick = function() {
  gfModal.style.display = "block";
}

gfSpan.onclick = function() {
  gfModal.style.display = "none";
}

function updatePrice3gf(quant) {
    document.getElementById("gf-priceid").innerText = "$".concat((quant*3).toString());
}

function gfincrementBuns(){
    var newbuns = parseInt((document.getElementById("gf-priceid").innerText).substring(1))/3;
    totalBuns += newbuns;
    document.getElementById("basket_quant").innerText = totalBuns.toString();
    gfModal.style.display = "none";
}

// Pumpkin

var pkModal = document.getElementById("pk-modal");
var pkSpan = document.getElementById("pk-close");

pumpkinBun.onclick = function() {
  pkModal.style.display = "block";
}

pkSpan.onclick = function() {
  pkModal.style.display = "none";
}

function updatePrice4pk(quant) {
    document.getElementById("pk-priceid").innerText = "$".concat((quant*4).toString());
}

function pkincrementBuns(){
    var newbuns = parseInt((document.getElementById("pk-priceid").innerText).substring(1))/4;
    totalBuns += newbuns;
    document.getElementById("basket_quant").innerText = totalBuns.toString();
    pkModal.style.display = "none";
}

// Caramel Pecan

var cpModal = document.getElementById("cp-modal");
var cpSpan = document.getElementById("cp-close");

pecanBun.onclick = function() {
  cpModal.style.display = "block";
}

cpSpan.onclick = function() {
  cpModal.style.display = "none";
}

function updatePrice4cp(quant) {
    document.getElementById("cp-priceid").innerText = "$".concat((quant*4).toString());
}

function cpincrementBuns(){
    var newbuns = parseInt((document.getElementById("cp-priceid").innerText).substring(1))/4;
    totalBuns += newbuns;
    document.getElementById("basket_quant").innerText = totalBuns.toString();
    cpModal.style.display = "none";
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