let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

// let box = document.getElementById("box");

// box.addEventListener("click", function() {
//     console.log("I want to open the box!");
// }); 
