"use strict"
// task1
// let searchInput = document.querySelector(`#searchitem`);
// let selectInput = document.querySelector(`#selectitem`);



// (function(){
//     const recipeList = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin","red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini","radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili","garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano","cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple","apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry","boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit","lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange","papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate","quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta","popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake","sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala","paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup","hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna","poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts","rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb","turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];
//     let selectOptions = ''
//     for (const option of recipeList){
//         selectOptions += `<option value="${option}">${option}</option>`
//     }
//     selectInput.innerHTML = selectOptions;
// })();

// function display(recipes){
//     let container="";
//     for (const recipe of recipes){
//         let {publisher, title, image_url}=recipe;
//         container += ` 
//             <div class="card " style="width: 18rem;
//             background-color: transparent;
//             border: none;">
//                 <img class="card-img-top" src="${image_url}" alt="${title}" />
//                 <div class="card-body">
//                     <h4 class="card-title">${title}</h4>
//                     <p class="card-text">Publisher: ${publisher}</p>
//                 </div>
//             </div>
//         `
//     }
//     document.querySelector(`#itemlist`).innerHTML = container;
// }

// async function getPosts(searchTerm = "pizza"){
//     try{
//         let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}` , {method: "GET"});
//         let responseData = await response.json();
//         display(responseData.data.recipes);
//     } catch (error) {
//         console.log(`An Error: ${error}`);
//     }
// };
// getPosts();
// searchInput.addEventListener(`input`, function(e){
//     getPosts(e.target.value.toLowerCase());
// });
// searchInput.addEventListener(`blur`, function(e){
//     if (e.target.value == ``){
//         getPosts("pizza");
//     }
// });
// selectInput.addEventListener(`change`, function(e){
//     getPosts(e.target.value.toLowerCase());
// });
// task2

// let taskInput = document.querySelector("#taskInput");
// let addBtn = document.querySelector("#addBtn");
// let taskList = document.querySelector("#taskList");
// addBtn.addEventListener("click", function () {
//     let taskText = taskInput.value;
//     if (taskText === "") {
//         return;
//     }
//     addTask(taskText);
//     taskInput.value = "";
// });
// function addTask(taskText) {
    
//     let task=document.createElement("div");
//     task.innerHTML = `
//         <div class="task-buttons" style="display: flex; gap: 10px;">
//             <span>${taskText}</span>
//             <button class="edit">✏️</button>
//             <button class="delete">🗑️</button>
//         </div>
//         <hr>
//     `;
//     localStorage.setItem(`task`, taskText);
//     taskList.append(task);
// }
// taskList.addEventListener("click", function (e) {
//     if (e.target.classList.contains("delete")) {
//         e.target.parentElement.parentElement.remove();
//         localStorage.removeItem(`task`);
//     }
//     if (e.target.classList.contains("edit")) {
//         let task = e.target.parentElement.parentElement;
//         let text = task.querySelector("span");
//         let newText = prompt(
//             "Edit Task:",
//             text.textContent
//         );
//         if (newText !== "") {
//             text.textContent = newText;
//             localStorage.setItem(`task`, newText);
//         }
//     }
// });
task3
let productName = document.querySelector("#productName");
let productPrice = document.querySelector("#productPrice");
let productCategory = document.querySelector("#productCategory");
let productDescription = document.querySelector("#productDescription");
let productImage = document.querySelector("#productImage");
let addProduct = document.querySelector(".productBtn");
let productSearch = document.querySelector("#productSearch");
let products = JSON.parse(localStorage.getItem("products")) || [];
let editIndex = -1;
addProduct.addEventListener("click", function () {
    let product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value,
        image: productImage.value
    };
    if (editIndex == -1) {
        products.push(product);
    } else {
        products[editIndex] = product;
        editIndex = -1;
        addProduct.innerHTML = "Add Product";
    }
    localStorage.setItem(productName.value, JSON.stringify(products));
    displayProducts();
    clearInputs();
});
function displayProducts() {
    let container = "";
    for (let i = 0; i < products.length; i++) {
        container += `
        
        <div class="card">
            <img src="${products[i].image}" class="card-img-top">
            <div class="card-body">
                <h5>${products[i].name}</h5>
                <p>Price: ${products[i].price}</p>
                <p>Category: ${products[i].category}</p>
                <p>${products[i].description}</p>
                <button onclick="editProduct(${i})">
                    Edit
                </button>
                <button onclick="deleteProduct(${i})">
                    Delete
                </button>
            </div>
        </div>
        `;
    }
    document.querySelector("#productOutput").innerHTML = container;
}
function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem(
        productName.value,
        JSON.stringify(products)
    );
    displayProducts();
}
function editProduct(index) {
    productName.value = products[index].name;
    productPrice.value = products[index].price;
    productCategory.value = products[index].category;
    productDescription.value = products[index].description;
    productImage.value = products[index].image;
    editIndex = index;
    addProduct.innerHTML = "Update Product";
}
function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
    productImage.value = "";
    localStorage.removeItem(productName.value);
}
displayProducts();