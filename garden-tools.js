function analyzeWords() {
  var words = document.getElementById("wordInput").value.split(" ");
  var shortest = words[0], longest = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) shortest = words[i];
    if (words[i].length > longest.length) longest = words[i];
  }
  document.getElementById("shortest").innerHTML = shortest;
  document.getElementById("longest").innerHTML = longest;
}

function calculate() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var bmi = weight / (height * height);
  var type = bmi < 18 ? "Underfed" : bmi < 25 ? "Thriving" : bmi < 30 ? "Overgrown" : "Bolting";
  document.getElementById("score").innerHTML = bmi.toFixed(1);
  document.getElementById("type").innerHTML = type;
}

function grow() {
  var rows = parseInt(document.getElementById("rows").value);
  var cols = parseInt(document.getElementById("cols").value);
  var veg = ["🍅", "🥕"];
  var garden = document.getElementById("garden");
  garden.innerHTML = "";
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      garden.innerHTML += veg[Math.floor(Math.random() * 2)] + " ";
    }
    garden.innerHTML += "<br>";
  }
}

function convert() {
  var amount = parseFloat(document.getElementById("amount").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var result = amount;
  if (from === "INR" && to === "USD") result = amount * 0.015;
  if (from === "USD" && to === "INR") result = amount * 67.12;
  document.getElementById("answer").innerHTML = amount + " " + from + " = " + result.toFixed(2) + " " + to;
}

var heads = 0, tails = 0;
function flipFunction() {
  var isHeads = Math.random() < 0.5;
  document.getElementById("coin").innerHTML = isHeads ? "☀️" : "🌧️";
  if (isHeads) heads++; else tails++;
  document.getElementById("num_heads").innerHTML = heads;
  document.getElementById("num_tails").innerHTML = tails;
}

function orderTotal() {
  var kit = parseFloat(document.querySelector('input[name="kit"]:checked').value);
  var tip = parseFloat(document.querySelector('input[name="tip"]:checked').value);
  var total = kit * 1.09 * (1 + tip / 100);
  document.getElementById("price").innerHTML = total.toFixed(2);
}

document.getElementById("analyzeBtn").addEventListener("click", analyzeWords);
document.getElementById("calcBtn").addEventListener("click", calculate);
document.getElementById("plantBtn").addEventListener("click", grow);
document.getElementById("convertBtn").addEventListener("click", convert);
document.getElementById("flip").addEventListener("click", flipFunction);
document.getElementById("orderBtn").addEventListener("click", orderTotal);
