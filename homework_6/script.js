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

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

originalBun.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction(quant) {
    document.getElementById("priceid").innerText = "$".concat((quant*3).toString());
  }