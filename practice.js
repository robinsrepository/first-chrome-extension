// turn myLeads into string with backticks
let myLeads = `[]`;

// turn myLeads into array again with JSON.parse
myLeads = JSON.parse(myLeads);

// push new value into the myLeads array
myLeads.push("www.test.com");

// turn myLeads array back into string again
myLeads = JSON.stringify(myLeads);

// check if the myLeads array is indeed a string
console.log(typeof myLeads);

let inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

localStorage.setItem("myLeads", "www.example.com");
console.log(localStorage.getItem("myLeads"));

localStorage.setItem("myLeads", "https://www.davemaasland.com/");
console.log(localStorage.getItem("myLeads"));
localStorage.clear();

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

const recipient = "Per";
const sender = "Robin";

// const email = "Hey " + recipient + "! How is it going? Cheers Robin";
const email = `
    Hey ${recipient}! 
    How is it going? 
    Cheers ${sender}`;

console.log(email);


// .textContent method
 for (let i = 0; i < myLeads.length; i++) {
    // create element
    const li = document.createElement("li");
    // set text content
    li.textContent = myLeads[i];
    // append to ul
    ulEl.append(li)
}

let box = document.getElementById("box");

box.addEventListener("click", function() {
    console.log("I want to open the box!");
}); 

const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>";
}

const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name}${emoji}`
}

greetUser("Goeie morgen", "Robin", "👋");

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(3, 4));
console.log(add(9, 102));


function getFirst(arr) {
    return arr[0];
}

firstName = getFirst(["Bonnie", "Theo", "Robin", "Roland"])

console.log(firstName);

// SETTING THE STAGE
const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logCourses(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

logCourses(myCourses)

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("myCredits", "100");
let myCredits = localStorage.getItem("myCredits");
console.log(myCredits);

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let scoreBtn = document.getElementById("score-btn");

scoreBtn.addEventListener("click", function() {
    console.log(data[0].score);
});

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge


function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `;
    const lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i];
        } else {
            baseString += arr[i] + ", ";
        }
    }
    return baseString;
}

let sentence = generateSentence("largest countries", ["China", "India", "USA"]);
console.log(sentence);
sentence = generateSentence("best fruits", ["Apples", "Bananas"]);
console.log(sentence);

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const container = document.getElementById("container");

function renderImages() {
    let imgsDOM = "";
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Butterfly" class="team-img" src="${imgs[i]}">`;
    }
    container.innerHTML = imgsDOM;
}

renderImages()

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`