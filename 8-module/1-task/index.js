class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
  }

  show() {
    return this.getProducts().then(products => {
      let container = document.createElement('div');
      container.classList.add('row');
      container.classList.add('justify-content-end');
      container.innerHTML = `
      <div class="col-lg-9">
          <h3 class="section-title">Top Recommendations for You</h3>
          <div class="row homepage-cards">

          </div>
      </div>`;

      let list = container.querySelector('.homepage-cards');
      list.addEventListener('click', event => {
        if (event.target.dataset.buttonRole = "add-to-cart") {
          if (!confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {return;}

          let id = parseInt(event.target.dataset.productId);
          let product = products.find(p => p.id === id);
          if (product) {
            this.addToCard(product);
          }
        }
      });

      for (let i = 0; i < products.length; i++) {
        list.appendChild(this.renderCard(products[i]));
      }

      this.el.appendChild(container);
    });
  }

  getProducts(params) {
    return fetch(this.productsUrl).then(r => r.json());
  }

  addToCard(product) {
    let cart = this.getCart();
    if (!cart.find(p => p.id === id))
    {
      cart.push(product);
      this.setCart(cart);
    }
  }

  getCart() {
    let items = JSON.parse(localStorage.getItem(this.productsStoreKey));
    return items ? items : [];
  }

  setCart(itmes) {
    let data = JSON.stringify(itmes);
    localStorage.setItem(this.productsStoreKey, data);
  }

  renderCard(card) {
    let product = document.createElement('div');
    product.classList.add("products-list-product", "col-md-6", "col-lg-4", "mb-4")
    product.setAttribute("data-product-id", card.id);

    product.innerHTML = `
    <div class="card">
        <div class="card-img-wrap">
            <img class="card-img-top" src="https://iliakan.github.io/course-project/assets/images/turntable.png" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
        </div>
      </div>
    </div>`;

    let cardBody = product.querySelector('.card-body');
    cardBody.appendChild(this.renderRate(card));
    cardBody.appendChild(this.renderPrice(card));
    cardBody.appendChild(this.renderButton(card));

    return product;
  }

  renderButton(card) {
    let button = document.createElement('button');
    button.classList.add("product-add-to-cart");
    button.setAttribute("data-button-role", "add-to-cart");
    button.setAttribute("data-product-id", card.id);
    button.textContent = "Add to cart";

    return button;
  }

  renderPrice(card) {
    let p = document.createElement('p');
    p.classList.add('card-text', 'price-text', 'discount');

    let price = document.createElement('strong');
    price.textContent = card.price;
    p.appendChild(price);

    if (card.oldPrice) {
      let oldPrice = document.createElement('small');
      oldPrice.classList.add('ml-2');
      oldPrice.textContent = card.oldPrice;
      p.appendChild(oldPrice);
    }

    return p;
  }

  renderRate(card) {
    let rate = document.createElement("div");
    rate.classList.add('rate');

    let stars = card.rating ? card.rating.stars : -1;
    for (let i = 0; i < 5; i++) {
      let starItem = document.createElement('i');
      starItem.classList.add('icon-star');

      if (stars >= 0) {
        starItem.classList.add(i < stars ? "checked" : "active");
      }

      rate.appendChild(starItem);
    }

    if (card.rating) {
      let rateAmount = document.createElement('span');
      rateAmount.classList.add('rate-amount', 'ml-2');
      rateAmount.textContent = card.rating.reviewsAmount;
      rate.appendChild(rateAmount);
    }

    return rate;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
