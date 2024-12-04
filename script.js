let myLeads = [];
let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

console.log(myLeads);

deleteBtn.addEventListener("dblclick", function() {
    console.log("double click works");
    localStorage = JSON.stringify();
    localStorage.clear();
    
    myLeads = "";
    console.log(myLeads);

    
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>`;
     }
    ulEl.innerHTML = listItems;
}