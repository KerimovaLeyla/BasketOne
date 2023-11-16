const customers = document.getElementById("customers");
const cartButton = document.querySelector('.cartButton')

axios.get('https://dummyjson.com/users')
.then(res => {
    db = res.data.users;
    console.log(db);
    db.map((item) => {
        let card = document.createElement('div');
        card.className = "cardBox";
        card.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="cardTextBox">
            <span>${item.firstName} <span>
            <span>${item.lastName}</span>
            <p>${item.email}</p>                
            </div>
            <button onclick="addToCart(${item.id})">Add to cart</button>
        `;
        customers.appendChild(card);
    });
});

function addToCart(productIndex) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id === productIndex));
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartCount()
}

function displayCartCount () {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping" style="font-size: 20px;"></i><p class="cartCount">${cart.length}</p>`
}

window.onload = () => {
    displayCartCount()
}