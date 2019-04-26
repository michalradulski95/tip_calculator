function calculateTip () {
	let billAmt = document.getElementById("billamt").value;
	let serviceQual = document.getElementById("serviceQual").value;
	let numOfPeople = document.getElementById("peopleamt").value;
	
	if(billAmt === "" || serviceQual == 0) {
		alert("Please enter value");
		return;
	}
	if(numOfPeople === "" || numOfPeople <= 1) {
		numOfPeople = 1;
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block";
	}
	let total = (billAmt * serviceQual) / numOfPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);
	document.getElementById("totalTip").style.display ="block";
	document.getElementById("tip").innerHtml = total;
};

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = 
function () {
	calculateTip();
};
