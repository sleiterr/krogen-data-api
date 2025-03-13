import { fetchProducts } from "../../Data/fetch-data.js";
import { featureTemplate } from "../product/feature-product.js";

const products = await fetchProducts();

export const productList = () => {
  console.log(products);

  const productListContainer = document.querySelector(".feature-section");
  const productListContainerItem = document.querySelector(
    ".feature-section-item"
  );

  if (!productListContainer && !productListContainerItem) return;

  const renderProducts = (container, items) => {
    if (!container) return;

    container.innerHTML = `
    <div class="feaure-container container">
      <div class="feature-caption">
        <h2 class="feature-title">Et udpluk af vores</h2>
        <p class="feature-subtitle">Legetøj</p>
        </div>
        <div class="feature-box">
          <!--? FEATURE-LIST -->
          <ul class="features-list"></ul>
        </div>
    </div>
  `;

    const featureList = container.querySelector(".features-list");
    items.forEach((product) => {
      featureList.insertAdjacentHTML("beforeend", featureTemplate(product));
    });
  };

  renderProducts(productListContainer, products);

  renderProducts(productListContainerItem, products.slice(0, 3));
};
