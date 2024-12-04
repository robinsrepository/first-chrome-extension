let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

localStorage.clear();

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })

});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>`;
     }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

// SETTING THE STAGE
let player = "Per"
let opponent = "Nick"
let game = "AmazingFighter"
const points = 0
const hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(player + " got " + points + " points and won the " + game + " game!")
} else {
    console.log("The winner is " + opponent + "! " + player + " lost the game")
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes