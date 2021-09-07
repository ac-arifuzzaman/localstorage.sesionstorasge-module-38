const displayLocalStorage = () => {
    const talika = getCart();
    for (const list in talika) {
        displayProductName(list);
    }
}

const addItem = () => {
    const productName = document.getElementById('product-name');
    const naam = productName.value;
    if (!naam) {
        return;
    }
    // display product
    displayProductName(naam)
    // add to cart
    addProudctToCart(naam);
    // clear input
    productName.value = '';
}

const displayProductName = podobi => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = podobi;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
};
const addProudctToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    document.removeItem('cart');
}

displayLocalStorage();