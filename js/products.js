import { fetchProducts } from "../Data/fetch-data.js";
import { featureTemplate } from "./template.js";

const products = await fetchProducts();

export const productList = () => {
  console.log(products);

  const productListContainer = document.querySelector(
    ".product-list-container"
  );

  //Hvis ikke 'product-list-container' eksisterer på html siden, kør ikke resten af koden
  if (!productListContainer) return;

  products.forEach((element) => {
    productListContainer.insertAdjacentHTML(
      "beforeend",
      featureTemplate(element)
    );
  });
};
