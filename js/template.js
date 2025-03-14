import { fetchReviews } from "../Data/fetch-data.js";
import { questionsReviews } from "../Data/fetch-data.js";
import { productHeroTemplate } from "../js/product/hero-product.js";
import { faqtHeroTemplate } from "../js/faq/faq-template.js";
import { basketModalTemplate } from "../js/basket/template-modal.js";

export const templates = async () => {
  const insertTemplate = (selector, templateFunction) => {
    const htmlContainer = document.querySelector(selector);

    if (!htmlContainer) return;

    htmlContainer.insertAdjacentHTML("beforeend", templateFunction());
  };

  /* ------------ NAV-BAR ------------ */
  const navTemplate = () => {
    return `
           <div class="info-discont">
        <div class="discount-items">
          <a href="#">
            <img
              src="./icons/truck-solid.svg"
              alt="truck"
              class="items-discount"
            />
          </a>
          <p class="discount-textt">Fri fragt ved køb over 499,-</p>
        </div>
      </div>
       <nav class="nav-bar">
        <div class="logo-nav">
          <a href="#home" class="logo-link">
            <img
              src="./logo/legekrogen_logo.png"
              alt="bolig-logo"
              class="nav-logo"
            />
          </a>
        </div>

        <div class="nav-item basket-mob">
          <a href="./baske.html" class="nav-link">
           <i class="icon-shopping-cart"></i>
          </a>
        </div>

        <div class="burger-btn">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <ul class="nav-menu">
        <li class="nav-item">
        <a href="./products.html" class="nav-link" target="_blank">Producter</a>
        </li>
        <li class="nav-item">
        <a href="./faq.html" class="nav-link" target="_blank">faq</a>
        </li>
        <li class="nav-item">
        <a href="./customer.html" class="nav-link" target="_blank">Kundeklubben</a>
        </li>
        <li class="nav-item basket-bar">
          <a href="baske.html" class="nav-link" id="basket-open">
           <i class="icon-shopping-cart"></i>
          </a>
        </li>
        </ul>
      </nav>
        
        `;
  };

  insertTemplate(".header", navTemplate);

  /* ------------ HERO-SECTION ------------ */
  const headerTemplate = () => {
    return `
    <div class="hero-container">
      <div class="hero-content">
      <div class="hero-subtitle">
       <h1 class="hero-title">At lege er at leve</h1>
       <p class="hero-context">
        Her hos os har vi et stort udvalg af legetøj i høj kvalitet
       </p>
      </div>
      </div>
    </div>
    `;
  };

  insertTemplate(".section-hero", headerTemplate);

  /* ------------ HERO-CUSTOMER ------------ */
  const customerHeroTemplate = () => {
    return `
    <div class="customer-hero">
     <div class="customer-hero-wrapper">
      <div class="hero-customer">
       <p class="customer-caption">Bliv medlem af vores</p>
       <h1 class="customer-title">kundeklub</h1>
       <p class="customer-context">
        og få ekslusive tilbud og nyheder før alle andre
       </p>
      </div>
     </div>
    </div>
    `;
  };

  insertTemplate(".customer-hero", customerHeroTemplate);

  /* ------------ FEATURE-SECTION ------------ */

  // insertTemplate(".feature-section", featureTemplate);

  /* ------------ PRODUCT-SECTION ------------ */
  const productTemplate = (reviews) => {
    return `
     <div class="product-container container">
        <div class="product-testimonial">
          <div class="heading-product">
            <h4 class="product-title">Vores kunder</h4>
            <p class="product-subtitle">UDTALER</p>
          </div>
          <div class="testimonial-context">
            <ul class="testimonials-list">
            ${reviews.map(reviewTemplate).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  const reviewTemplate = (review) => {
    return `
    <li class="testimonial-items">
      <h4 class="testimonial-title">${review.description}</h4>
      <p class="testimonial-subtitle">${review.name}</p>
    </li>
    `;
  };

  const renderProducts = async () => {
    const reviews = await fetchReviews();
    const productHTML = productTemplate(reviews);
    insertTemplate(".product-section", () => productHTML);
  };

  renderProducts();

  /* ------------ CUSTOMER-SECTION ------------ */
  const customerTemplate = () => {
    return `
    <div class="customer-container container">
          <div class="costomer-subject">
            <p class="costomer-subtitle">
              Kunne du også tænke dig at blive medlem af vores
            </p>
            <h4 class="costomer-title">Kundeklub ?</h4>
          </div>
          <div class="link-box">
              <a href="customer.html" class="customer-link" target="_blank">bliv medlem nu !</a>
          </div>
        </div>
        `;
  };

  insertTemplate(".customer-section", customerTemplate);

  /* ------------ FORM-SECTION ------------ */
  const formTemplate = () => {
    return `
           <div class="form-container container">
          <div class="form-subscription">
            <h2 class="input-title-email"></h2>
            <form action="#" method="#" class="form-data" id="order-data">
              <div class="name-form">
                <input
                  type="text"
                  name="firstName"
                  id="name-tx"
                  required
                  minlength="2"
                  maxlength="20"
                  placeholder="Fulde navn"
                />
                <p class="mesg"></p>
                <input
                  type="email"
                  name="email"
                  id="email-txt"
                  class=""
                  placeholder="Email"
                />
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Hvem køber du legetøj til ?"
              ></textarea>
              <input type="submit" value="BLIV MEDLEM NU !" id="form-submit" />
            </form>
          </div>
        </div>
    `;
  };

  insertTemplate(".form-section", formTemplate);

  /* ------------ FOOTER------------ */
  const footerTemplate = () => {
    return `
            <div class="footer-container">
        <div class="contact-container">
          <h4 class="footer-title">Kundeservice</h4>
          <ul class="contact-list">
            <li class="contact-item">
              <a href="mailto:info@info.dk" class="address">
                <i class="icon-mail-envelope-closed"></i>
                info@info.dk
              </a>
            </li>
            <li class="contact-item">
              <a href="tel:+4523547678" class="address">
                <i class="icon-phone"></i>
                +45 23 54 76 78
              </a>
            </li>
          </ul>
        </div>
        <div class="icon-container">
          <h4 class="title-icon">Følg os</h4>

          <ul class="footer-icon-list">
            <li class="icon-items">
              <a href="#" class="social-link">
                <img
                  src="./icons/icons8-facebook-24.svg"
                  alt="facebook"
                  class="icon-social"
                />
              </a>
            </li>
            <li class="icon-items">
              <a href="#" class="social-link">
                <img
                  src="./icons/icons8-instagram-24.svg"
                  alt="instagram"
                  class="icon-social"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-menu">
          <a href="#home">
            <img
              src="./logo/legekrogen_logo.png"
              alt="footer-logo"
              class="footer-logo"
            />
          </a>
        </div>
      </div>
        `;
  };

  insertTemplate(".product-hero", productHeroTemplate);
  insertTemplate(".faq-hero", faqtHeroTemplate);

  const renderBasket = () => {
    const favoritesArray = JSON.parse(localStorage.getItem("favList") || "[]");

    if (favoritesArray.length > 0) {
      favoritesArray.forEach((product) => {
        insertTemplate(".basket-box", () => basketModalTemplate(product));
      });
    } else {
      insertTemplate(".basket-box", () => "<p>Кошик порожній</p>");
    }
  };

  renderBasket(); // Викликаємо функцію для рендеру кошика

  // Всі інші виклики шаблонів залишаються без змін

  insertTemplate(".footer", footerTemplate);

  const accordionHTML = await renderAccordion();
  insertTemplate(".accordion-container", () => accordionHTML);
};

const renderAccordion = async () => {
  const questions = await questionsReviews();
  const accordionContainer = document.querySelector(".accordion-container");

  if (!questions || questions.length === 0) {
    accordionContainer.innerHTML = "<p>No questions available.</p>";
    return;
  }

  let accordionContent = "";

  questions.forEach((item) => {
    let content;

    if (item.answer.includes("<ul>")) {
      content = item.answer.replace("<ul>", '<ul class="acc-list">');
    } else {
      content = `<p class="acc-content">${item.answer}</p>`;
    }

    accordionContent += `
     <div class="accordion">
        <div class="accordion-icon">
            <i class="icon-chevron-right"></i>
        </div>
        <div class="content-container">
            <p class="accord-title">${item.question}</p>
        </div>
        <div class="panel">
            ${content}
        </div>
     </div>
    `;
  });

  return accordionContent;
};
