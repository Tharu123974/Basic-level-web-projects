function calculateTip(){
    var amt = document.getElementById("bill");
    var tip = document.getElementById("tip");
    var res = parseFloat(amt.value) + parseFloat(amt.value)*parseFloat(tip.value)/100;
    var place = document.getElementById("result");
    place.innerText = res.toFixed(2);
}