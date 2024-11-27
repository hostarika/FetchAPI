
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => productsView(json))

const ota = document.getElementById("ota");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");







let total = 0; 
let cart = []; 











function productsView(mahsulotlar) {
    ota.innerHTML = ""; 
    mahsulotlar.forEach(mahsulot => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="${mahsulot.image}" alt="Product Image">
            <h3>${mahsulot.title}</h3>
            <p>${mahsulot.description}</p>
            <span>${mahsulot.price} $</span>
            <button class="btn" data-title="${mahsulot.title}" data-price="${mahsulot.price}">Sotib Olish</button>
        `;
        ota.appendChild(div);
    });









    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const title = e.target.getAttribute("data-title");
            const price = parseFloat(e.target.getAttribute("data-price"));

            addToCart(title, price); 
        });
    });
}









function addToCart(title, price) {

    cart.push({ title, price });
    

    total += price;

   updateCart();
}












































function updateCart() {
    cartItems.innerHTML = ""; 
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.title}</span>
            <span>${item.price} $</span>
        `;
        cartItems.appendChild(li);
    });

    
    totalPriceEl.textContent = total.toFixed(2)
}
