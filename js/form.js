// form submit event handler

export function subscription() {
  const form = document.querySelector("#order-data");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.currentTarget;
    const user = form.elements.firstName.value.trim();
    const email = form.elements.email.value.trim();

    const label = document.querySelector(".input-title-email");
    const message = document.querySelector(".mesg");
    // const heading = document.querySelector(".subscription-title");

    message.innerHTML = "";
    message.style.visibility = "hidden";
    label.style.display = "block";
    //   message.style.display = "none";

    if (user === "" || email === "") {
      alert("All form fields must de filled in");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      label.style.display = "none";
      // console.log("not valid email");
      message.innerHTML = "not valid email";
      message.style.color = "violet";
      // message.style.display = "block";
      message.style.visibility = "visible";
      return;
    } else {
      window.location.href = "subscribers.html";
    }

    // form.style.display = "none";
    // label.innerHTML = "We will contact you";
    // label.style.display = "block";

    // object
    const formData = {
      name: user,
      email: email,
    };

    console.log(formData);
    form.reset();
  });
}
