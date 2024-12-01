let myLeads = `[]`;

myLeads = JSON.parse(myLeads);

myLeads.push("www.test.com");

myLeads = JSON.stringify(myLeads);

console.log(myLeads);
console.log(typeof myLeads);

let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// localStorage.setItem("myLeads", "www.example.com");
// console.log(localStorage.getItem("myLeads"));

// localStorage.setItem("myLeads", "https://www.davemaasland.com/");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderLeads();
});

// innerHTML method
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>`;
     }
    ulEl.innerHTML = listItems;
}


// const recipient = "Per";
// const sender = "Robin";

// const email = "Hey " + recipient + "! How is it going? Cheers Robin";
// const email = `
//     Hey ${recipient}! 
//     How is it going? 
//     Cheers ${sender}`;

// console.log(email);


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