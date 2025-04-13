let radiusPrompt = prompt("Please enter a valid radius");

let radius = Number(radiusPrompt);

if(isNaN(radius) || radius <= 0){
    alert("Please enter a valid radius");
} else {
    let area = Math.PI * Math.pow(radius, 2);

    alert("Your area " + radius + " is " + area.toFixed(2));
}

