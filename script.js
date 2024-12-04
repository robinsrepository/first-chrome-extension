let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

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

// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name}${emoji}`
// }

// greetUser("Goeie morgen", "Robin", "👋");

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(3, 4));
// console.log(add(9, 102));


function getFirst(arr) {
    return arr[0];
}

firstName = getFirst(["Bonnie", "Theo", "Robin", "Roland"])

console.log(firstName);