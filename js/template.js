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
            <a href="./linkpoint.html" class="hero-link-point" target="_blank">
              Læs mere
              <i class="icon-cheveron-right arrow"></i>
            </a>
          </div>
        </div>
        `;
  };

  insertTemplate(".section-hero", headerTemplate);

  /* ------------ PRODUCT-SECTION ------------ */
  const productTemplate = () => {
    return `
         <div class="product-container">
          <div class="product-overview">
            <div class="product-context">
              <h4 class="product-title">Månedens</h4>
              <p class="product-subtitle">Favorit</p>
              <div class="product-rating">
                <img src="./icons/star-solid.svg" alt="star-rating" />
                <img src="./icons/star-solid.svg" alt="star-rating" />
                <img src="./icons/star-solid.svg" alt="star-rating" />
                <img src="./icons/star-solid.svg" alt="star-rating" />
                <img src="./icons/star-regular.svg" alt="star-rating" />
              </div>
            </div>
            <img
              src="./img/product-5.jpg"
              alt="product-img"
              class="img-product"
            />
            <div class="product-img-overview">
              <p class="product-text">Kids Concept</p>
              <p class="product-text">Neo gyngedinosaur</p>
              <p class="product-price">749 kr</p>
            </div>
            <a href="./linkpoint.html" class="product-link" target="_blank"
              >KØB GYNGEHESTEN HER</a
            >
          </div>

          <!--? TESTIMONIAL -->
          <div class="product-testimonial">
            <div class="testimonial-context">
              <ul class="testimonials-list">
                <li class="testimonial-items">
                  <h4 class="testimonial-title">
                    “Bedste gyngehest nogenside”
                  </h4>
                  <p class="testimonial-subtitle">
                    - Andreas, far til Michael på 1 år
                  </p>
                </li>
                <li class="testimonial-items">
                  <h4 class="testimonial-title">
                    “Min søn elsker sin nye trægyndehest. Han kalder den
                    Hannibal”
                  </h4>
                  <p class="testimonial-subtitle">
                    - Heidi, mor til Hugo på 3 år
                  </p>
                </li>
                <li class="testimonial-items">
                  <h4 class="testimonial-title">
                    “Virkelig god kvalitet, og pæn at ha stående i stuen”
                  </h4>
                  <p class="testimonial-subtitle">
                    - Camilla, mor til Sophia på 9 måneder
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        `;
  };

  insertTemplate(".product-section", productTemplate);

  /* ------------ FORM-SECTION ------------ */
  const formTemplate = () => {
    return `
            <div class="form-container container">
          <div class="form-subscription">
            <div class="form-context">
              <p class="form-subtitle">
                Kunne du også tænke dig at blive medlem af vores
              </p>
              <h2 class="subscription-title">Kundeklub ?</h2>
            </div>

            <h2 class="input-title-email"></h2>
            <form action="#" method="POST" class="form-data" id="order-data">
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
                placeholder="Hvem køber du legetøj til?"
              ></textarea>
              <input type="submit" value="BLIV MEDLEM NU!" id="form-submit" />
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
