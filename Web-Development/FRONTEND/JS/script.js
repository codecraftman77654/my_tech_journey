// function showData() {

//     // Selecting elements
//     let heading = document.getElementById("heading");
//     let para = document.getElementById("para");
//     let box = document.getElementById("box");

//     // Reading values
//     console.log("----- BEFORE CHANGES -----");

//     console.log("innerHTML:");
//     console.log(box.innerHTML);

//     console.log("innerText:");
//     console.log(para.innerText);

//     console.log("textContent:");
//     console.log(para.textContent);

//     // Changing using innerText
//     heading.innerText = "Learning DOM Manipulation";

//     // Changing using textContent
//     para.textContent = "This text was changed using textContent.";

//     // Changing using innerHTML
//     box.innerHTML = "<h2 style='color:blue;'>HTML Added Successfully!</h2>";

// }

// let name = prompt("Enter your name :");
// console.log(name); // returning name

// let a = Number(prompt("Enter first number."));
// let b = Number(prompt("Enter second number."));
// console.log(a+b);

function checkAge() {
    let age = Number(document.getElementById("age").value);
    document.getElementById("result").innerHTML =
        age >= 18 ? "Eligible" : "Not Eligible";
}
