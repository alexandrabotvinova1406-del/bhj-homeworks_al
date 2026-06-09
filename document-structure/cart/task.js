document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');

    function updateCart(productId, delta, imageSrc) {
        const cartItem = cartContainer.querySelector(`.cart__product[data-id="${productId}"]`);
        if (cartItem) {
            const countSpan = cartItem.querySelector('.cart__product-count');
            let currentCount = parseInt(countSpan.textContent, 10);
            currentCount += delta;
            countSpan.textContent = currentCount;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.setAttribute('data-id', productId);
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${imageSrc}">
                <div class="cart__product-count">${delta}</div>
            `;
            cartContainer.appendChild(cartProduct);
        }
    }

    products.forEach(product => {
        const decBtn = product.querySelector('.product__quantity-control_dec');
        const incBtn = product.querySelector('.product__quantity-control_inc');
        const quantityValueSpan = product.querySelector('.product__quantity-value');
        const addBtn = product.querySelector('.product__add');
        const productId = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').src;

        decBtn.addEventListener('click', () => {
            let value = parseInt(quantityValueSpan.textContent, 10);
            if (value > 1) {
                value--;
                quantityValueSpan.textContent = value;
            }
        });

        incBtn.addEventListener('click', () => {
            let value = parseInt(quantityValueSpan.textContent, 10);
            value++;
            quantityValueSpan.textContent = value;
        });

        addBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityValueSpan.textContent, 10);
            updateCart(productId, quantity, productImage);
        });
    });
});
