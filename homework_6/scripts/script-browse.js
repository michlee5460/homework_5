// ----------- BUN IMAGE HOVER INTERACTION -----------

var originalBun = document.getElementById("original-bun-card");
var originalBunImg = document.getElementById("original-bun-img");

originalBun.onmouseover = function() {
    originalBunImg.src = 'imgs/hover-bun-original.png';
}

originalBun.onmouseout = function() {
    originalBunImg.src = 'imgs/bun-original.png';
}

var blackberryBun = document.getElementById("blackberry-bun-card");
var blackberryBunImg = document.getElementById("blackberry-bun-img");

blackberryBun.onmouseover = function() {
    blackberryBunImg.src = 'imgs/hover-bun-blackberry.png';
}

blackberryBun.onmouseout = function() {
    blackberryBunImg.src = 'imgs/bun-blackberry.png';
}

var walnutBun = document.getElementById("walnut-bun-card");
var walnutBunImg = document.getElementById("walnut-bun-img");

walnutBun.onmouseover = function() {
    walnutBunImg.src = 'imgs/hover-bun-walnut.png';
}

walnutBun.onmouseout = function() {
    walnutBunImg.src = 'imgs/bun-walnut.png';
}

var gfBun = document.getElementById("gf-bun-card");
var gfBunImg = document.getElementById("gf-bun-img");

gfBun.onmouseover = function() {
    gfBunImg.src = 'imgs/hover-bun-original.png';
}

gfBun.onmouseout = function() {
    gfBunImg.src = 'imgs/bun-original.png';
}

var pumpkinBun = document.getElementById("pumpkin-bun-card");
var pumpkinBunImg = document.getElementById("pumpkin-bun-img");

pumpkinBun.onmouseover = function() {
    pumpkinBunImg.src = 'imgs/hover-bun-pumpkin.png';
}

pumpkinBun.onmouseout = function() {
    pumpkinBunImg.src = 'imgs/bun-pumpkin.png';
}

var pecanBun = document.getElementById("pecan-bun-card");
var pecanBunImg = document.getElementById("pecan-bun-img");

pecanBun.onmouseover = function() {
    pecanBunImg.src = 'imgs/hover-bun-pecan.png';
}

pecanBun.onmouseout = function() {
    pecanBunImg.src = 'imgs/bun-pecan.png';
}



// ----------- MODAL FUNCTIONS -----------

// Original

var ogModal = document.getElementById("og-modal");
var ogSpan = document.getElementById("og-close");

originalBun.onclick = function() {
  ogModal.style.display = "block";
}

ogSpan.onclick = function() {
  ogModal.style.display = "none";
}

function updatePrice3(quant) {
    document.getElementById("priceid").innerText = "$".concat((quant*3).toString());
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

window.onclick = function(event) {
    if (event.target == ogModal) {
        ogModal.style.display = "none";
    }
    else if (event.target == wModal) {
        wModal.style.display = "none";
    }
    else if (event.target == bbModal) {
        bbModal.style.display = "none";
    }
    else if (event.target == gfModal) {
        gfModal.style.display = "none";
    }
    else if (event.target == pkModal) {
        pkModal.style.display = "none";
    }
    else if (event.target == cpModal) {
        cpModal.style.display = "none";
    }
}