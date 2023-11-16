const customers = document.getElementById("customers");

function getCart () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    customers.innerHTML = ''
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "cardBox";
        card.innerHTML = `
                  <img src="${item.image}" alt="">
                  <div class="cardTextBox">
                  <span>${item.maidenName} <span>
                  <span>${item.age}</span>
                  <p>${item.email}</p>     
                  </div>
                  <button onclick="removeItem(${index})">SebetdenSil</button>
              `;
        customers.appendChild(card);
      });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

window.onload = () => {
    getCart()
}