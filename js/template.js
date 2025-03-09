import { fetchReviews } from "../Data/fetch-data.js";

export const templates = () => {
  // hjælpefunktion - indesætter dynamisk template-functions i html'en
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

        <div class="burger-btn">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#toy" class="nav-link">Legetøj</a>
          </li>
          <li class="nav-item">
            <a href="#favorit" class="nav-link">Månedens favorit</a>
          </li>
          <li class="nav-item">
            <a href="#customerclub" class="nav-link">Kundeklub</a>
          </li>
        </ul>
      </nav>
        
        `;
  };

  insertTemplate(".header", navTemplate);

  /* ------------ HERO-SECTION ------------ */
  const headerTemplate = () => {
    return `
    <img class="image-in-slide" src="" alt="" />
    
    <div class="hero-container">
    <div class="hero-content">
    <h1 class="hero-title">At lege er at leve</h1>
    <p class="hero-context">
    Her hos os har vi et stort udvalg af legetøj i høj kvalitet
    </p>
    </div>
    </div>
    `;
  };

  insertTemplate(".section-hero", headerTemplate);

  /* ------------ CUSTOMER-HERO ------------ */
  // const customerHeroTemplate = () => {
  //   return `
  //     <img class="image-in-slide" src="" alt="" />

  //       <div class="hero-container">
  //         <div class="hero-content">
  //           <h1 class="hero-title">At lege er at leve</h1>
  //           <p class="hero-context">
  //             Her hos os har vi et stort udvalg af legetøj i høj kvalitet
  //           </p>
  //         </div>
  //       </div>
  //       `;
  // };

  // insertTemplate(".customer-hero", customerHeroTemplate);

  /* ------------ FEATURE-SECTION ------------ */

  // insertTemplate(".feature-section", featureTemplate);

  /* ------------ PRODUCT-SECTION ------------ */
  const productTemplate = (reviews) => {
    return `
     <div class="product-container container">
        <!--? TESTIMONIAL -->
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
            <a href="../customer.html" class="customer-link" target="_blank">bliv medlem  nu !</a>
          </div>
        </div>
        `;
  };

  insertTemplate(".customer-section", customerTemplate);

  /* ------------ FORM-SECTION ------------ */
  // const formTemplate = () => {
  //   return `

  //       `;
  // };

  // insertTemplate(".form-section", formTemplate);

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

  insertTemplate(".footer", footerTemplate);
};

/* ------------ FEATURE-SECTION ------------ */
export const featureTemplate = (product) => {
  return `
         <div class="feaure-container container">
          <div class="feature-caption">
            <h2 class="feature-title">Et udpluk af vores</h2>
            <p class="feature-subtitle">Legetøj</p>
          </div>
          <div class="feature-box">
            <!--? FEATURE-LIST -->
            <ul class="features-list">
              <li class="feature-item">
                <div class="features-item-block">
                  <img
                    src="${product.image}"
                    alt="product-cart"
                    class="product-cart"
                  />
                </div>

                <div class="feature-content">
                  <p class="feature-item-text">${product.title}</p>
                  <h3 class="feature-heading">Tandlægesæt i træ</h3>
                  <p class="feature-price">849 kr</p>
                </div>
              </li>

            </ul>
            <a href="./linkpoint.html" class="feature-link" target="_blank">
              GÅ TIL LEGETØJ
              <i class="icon-cheveron-right arrow-feature"></i>
            </a>
          </div>
        </div>
        `;
};
