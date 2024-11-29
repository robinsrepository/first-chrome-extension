let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}

// let box = document.getElementById("box");

// box.addEventListener("click", function() {
//     console.log("I want to open the box!");
// }); 

const container = document.getElementById("container");

let button = container.innerHTML = "<button onclick='buy()'></button>";

function buy() {
    container.innerHTML = button + "<p>Thank you for buying!</p>";
}