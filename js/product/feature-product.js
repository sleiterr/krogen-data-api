/* ------------ FEATURE-SECTION ------------ */
export const featureTemplate = (product) => {
  return `
    <li class="feature-item">
      <div class="features-item-block">
        <img
          src="${product.image}"
          alt="${product.title}"
          class="product-cart"
        />
      </div>
        <div class="feature-content">
        <div class="feature-context">
         <p class="feature-item-text">${product.title}</p>
         <h3 class="feature-heading">${product.description}</h3>
         <p class="feature-price">${product.price}kr</p>
        </div>
        <div class="feature-btn">
          <button class="order-btn" type="button" id="${product.id}">køb</button>
        </div>
      </div>
    </li>
  `;
};
