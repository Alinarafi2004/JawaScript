function Tip() {
    let BilA = document.getElementById("BilA").value;
    let TipP = document.getElementById("TipA").value;
    let tip11 = BilA*TipP/100;
    document.getElementById("tip1").innerHTML=("Your Tip is" + tip11);
    alert("Your Tip is" + tip11);
    console.log("Your Tip is" + tip11);
}
