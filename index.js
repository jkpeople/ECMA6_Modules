// Grab the form values when the user submits the form
//// make, model, year

// Use those values to create a car 
// Add the car to the wishlist 
// Update the DOM

import WishList from "./WishList"

let form = document.querySelector("#submitForm")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let make = document.querySelector("#makeInput");
    let model = document.querySelector("#modelInput");
    let year = document.querySelector("#yearInput"); 

    WishList.add(make.value, model.value, year.value)

    make.value = "";
    model.value = "";
    year.value = "";
}); 