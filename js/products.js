import { fetchProducts } from "../Data/fetch-data.js";
import { featureTemplate } from "./template.js";

const products = await fetchProducts();

export const productList = () => {
  console.log(products);

  const productListContainer = document.querySelector(".feature-section");

  if (!productListContainer) return;

  productListContainer.innerHTML = `
    <div class="feaure-container container">
      <div class="feature-caption">
        <h2 class="feature-title">Et udpluk af vores</h2>
        <p class="feature-subtitle">Legetøj</p>
      </div>
        <div class="feature-box">
          <!--? FEATURE-LIST -->
          <ul class="features-list"></ul>
          <a href="./linkpoint.html" class="feature-link" target="_blank">
            GÅ TIL LEGETØJ
            <i class="icon-cheveron-right arrow-feature"></i>
          </a>
        </div>
    </div>
  `;

  const featureList = productListContainer.querySelector(".features-list"

  );
  products.forEach((product) => {
   featureList.insertAdjacentHTML('beforeend', featureTemplate(product))
  });
};
