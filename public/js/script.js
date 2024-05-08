// show & hide popup
function showPop() {
  let div = document.querySelector(".delete-pop");
  let body = document.querySelector("body");
  document.querySelector("#editId").classList.add("disabled");
  let del = document.querySelector("#deleteId");
  document.querySelector("#submitId").disabled = true;
  document.querySelector("#afterPop").disabled = true;
  // document.querySelector(".afterPopRange").disabled = true;
  // let container = document.querySelector(".container");

  body.classList.add("blur");
  del.setAttribute("disabled", true);
  // container.classList.add("blur");
  div.classList.remove("hidden");
}

function hidePop() {
  let div = document.querySelector(".delete-pop");
  let body = document.querySelector("body");
  document.querySelector("#deleteId").disabled = false;
  document.querySelector("#submitId").disabled = false;
  document.querySelector("#afterPop").disabled = false;
  // document.querySelector(".afterPopRange").disabled = false;
  document.querySelector("#editId").classList.remove("disabled");
  // let container = document.querySelector(".container");

  div.classList.add("hidden");
  body.classList.remove("blur");
}

// profile delete pop

function showBox() {
  let div = document.querySelector(".delete-pop");
  let body = document.querySelector("body");
  document.querySelector("#editId").classList.add("disabled");
  let del = document.querySelector("#deleteId");

  body.classList.add("blur");
  del.setAttribute("disabled", true);
  // container.classList.add("blur");
  div.classList.remove("hidden");
}

function hideBox() {
  let div = document.querySelector(".delete-pop");
  let body = document.querySelector("body");
  document.querySelector("#deleteId").disabled = false;
  document.querySelector("#editId").classList.remove("disabled");

  div.classList.add("hidden");
  body.classList.remove("blur");
}

// filter options
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelector(".categories");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const categoryWidth = document.querySelector(".category").offsetWidth;
  const scrollAmount = 250; // Adjust this value to increase or decrease the sliding amount

  leftBtn.addEventListener("click", function () {
    const newPosition = Math.max(categories.scrollLeft - scrollAmount, 0);
    smoothScroll(categories, categories.scrollLeft, newPosition, 500);
  });

  rightBtn.addEventListener("click", function () {
    const newPosition = Math.min(
      categories.scrollLeft + scrollAmount,
      categories.scrollWidth - categories.clientWidth
    );
    smoothScroll(categories, categories.scrollLeft, newPosition, 500);
  });
});

function smoothScroll(element, from, to, duration) {
  const startTime = Date.now();
  const distance = to - from;
  const easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  function scroll(timestamp) {
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime;
    const easing = easeInOutQuad(Math.min(1, timeElapsed / duration));
    element.scrollLeft = from + distance * easing;

    if (timeElapsed < duration) {
      requestAnimationFrame(scroll);
    } else {
      element.scrollLeft = to;
    }
  }

  requestAnimationFrame(scroll);
}

// form related bootstarp validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// loading effect placeholder
let divs = document.querySelectorAll(".show-content");
for (let div of divs) {
  div.style.display = "none";
}
setTimeout(() => {
  for (let div of divs) {
    div.style.display = "block";
  }
}, 2000);
setTimeout(() => {
  let divs = document.querySelectorAll(".load-content");
  for (let div of divs) {
    div.remove();
  }
}, 2000);

// resposive design
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelector(".head-div");

  const navOptions = document.querySelector(".navbar-options");
  const navBtn = document.querySelector(".navbar-btn");

  // Function to check screen width and add/remove row class
  function toggleRowClass() {
    if (window.innerWidth < 770) {
      categories.classList.add("row");
    } else {
      categories.classList.remove("row");
    }
  }

  function toggleNavOptions() {
    if (window.innerWidth < 1000) {
      // categories.classList.add("row");
      navOptions.classList.add("hide-options");
      navBtn.classList.remove("hide-options");
    } else {
      // categories.classList.remove("row");
      navOptions.classList.remove("hide-options");
      navBtn.classList.add("hide-options");
    }
  }

  // Initial call to set the row class based on screen width
  toggleRowClass();
  toggleNavOptions();

  // Listen for window resize event to dynamically update row class
  window.addEventListener("resize", toggleRowClass);
  window.addEventListener("resize", toggleNavOptions);
});

// tax functionality
let btn = document.querySelector(".form-check-input");
let listings = document.querySelectorAll(".show-content");

btn.addEventListener("click", () => {
  for (let listing of listings) {
    let ogPrice = listing.querySelector(".original-price");
    let taxPrice = listing.querySelector(".tax-price");

    if (ogPrice.style.display === "none") {
      ogPrice.style.display = "block";
      taxPrice.style.display = "none";
    } else {
      ogPrice.style.display = "none";
      taxPrice.style.display = "block";
    }
  }
});
