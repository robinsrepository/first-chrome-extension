let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let listItems = "";

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderLeads();
});

// innerHTML method
function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        listItems += "<li>" + myLeads[i] + "</li>";
    }

    ulEl.innerHTML = listItems;
}



// // .textContent method
 // for (let i = 0; i < myLeads.length; i++) {
//     // create element
//     const li = document.createElement("li");
//     // set text content
//     li.textContent = myLeads[i];
//     // append to ul
//     ulEl.append(li)
// }

// let box = document.getElementById("box");

// box.addEventListener("click", function() {
//     console.log("I want to open the box!");
// }); 

// const container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>";
// }