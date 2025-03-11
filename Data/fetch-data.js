export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://mcd-web-legekrogen-server.vercel.app/products"
    );
    const products = await response.json();
      return products.data;
      
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export const fetchReviews = async () => {
  try {
    const response = await fetch(
      "https://mcd-web-legekrogen-server.vercel.app/reviews"
    );
    const reviews = await response.json();
    return reviews.data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export const questionsReviews = async () => {
  try {
    const questions = await fetch(
      "https://mcd-web-legekrogen-server.vercel.app/questions"
    );
    const userinfo = await questions.json();
    return userinfo.data;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};
