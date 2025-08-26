// --- Simple Cart System ---
let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalEl = document.getElementById("total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">❌</button>`;
        cartList.appendChild(li);
        total += parseFloat(item.price);
    });

    totalEl.innerText = "Total: $" + total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// --- Form Validation Example ---
function validateReservationForm() {
    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;

    if (name.trim() === "" || guests <= 0) {
        alert("Please enter a valid name and number of guests.");
        return false;
    }
    alert("Reservation submitted successfully!");
    return true;
}