export const basketModalTemplate = (product) => {
  return `
    <div class="basket-card">
     <img src="${product.image}" alt="${product.image}" class="basket-img" />
     <div class="card-info">
        <p class="card-info">${product.title}</p>
        <h4 class="card-title">${product.description}</h4>
     </div>
     <p class="card-price">${product.price}kr</p>
     <div class="close-x">
        <img src="./icons/xmark-solid.svg" alt="x-mark" class="mark-x" />
     </div>
    </div>

    <div class="total-box">
        <p class="total-price">i alt 758 kr</p>
    </div>
    `;
};
