//basket.js
import { fetchProducts } from "../../Data/fetch-data.js";
import { basketModalTemplate } from "../basket/template-modal.js";

export const addToStorage = async () => {
  const favoriteContainer = document.querySelector(".basket-box");
  const products = await fetchProducts();
  console.log(products);
  let favoritesArray = JSON.parse(localStorage.getItem("favList") || "[]");

  const favoriteList = () => {
    if (favoriteContainer) {
      favoriteContainer.innerHTML = "";

      if (favoritesArray.length > 0) {
        favoritesArray.forEach((fav, index) => {
          favoriteContainer.insertAdjacentHTML(
            "beforeend",
            basketModalTemplate(fav, index)
          );
        });
      } else {
        favoriteContainer.insertAdjacentHTML(
          "beforeend",
          "<p class='basket-msg'>Der er ingen varer i kurven.</p>"
        );
      }
    }
    deleteitem();
  };

  favoriteList();

  const addToFav = (e) => {
    const productID = e.target.id;
    console.log("Product ID:", productID);
    const productToAdd = products.find((product) => product.id == productID);

    const exist = favoritesArray.find((product) => product.id == productID);

    if (!exist) {
      favoritesArray.push(productToAdd);
      localStorage.setItem("favList", JSON.stringify(favoritesArray));
    } else {
      console.log("The product has already been added to favorites.");
    }
    favoriteList();
  };

  // Оновлений код: додаємо обробники подій після рендерингу шаблону
  const renderButtons = () => {
    const favBtn = document.querySelectorAll(".order-btn");
    favBtn.forEach((btn) => {
      btn.addEventListener("click", addToFav);
    });
  };

  renderButtons(); // Додати обробники подій після вставки елементів

  function deleteitem() {
    const bttDelete = document.querySelectorAll(".mark-x");

    bttDelete.forEach((bttn) => {
      bttn.addEventListener("click", () => {
        const index = Number(bttn.getAttribute("data-index"));
        favoritesArray.splice(index, 1);
        localStorage.setItem("favList", JSON.stringify(favoritesArray));
        favoriteList();
      });
    });
  }
};
