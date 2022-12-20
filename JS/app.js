const vLinks = document.querySelectorAll("nav ul li a");
const vCards = document.querySelector("#our-work .row");
const vArrow = document.getElementById("arrow");
const vFiltering = document.querySelectorAll("#our-work .container .filter li");
const vParent = document.querySelectorAll("#our-work .container .parent li");
const vImg = document.querySelector(".landing .img img");

vLinks.forEach((el) => {
  el.addEventListener("click", function () {
    vLinks.forEach(function (el) {
      el.classList.remove("text-white");
      el.classList.remove("active");
    });
    this.classList.add("active");
  });
});

vFiltering.forEach((el) => {
  el.addEventListener("click", function () {
    vFiltering.forEach(function (ele) {
      ele.classList.remove(
        "active",
        "btn",
        "btn-primary",
        "rounded-pill",
        "main-btn",
        "pe-3",
        "ps-3"
      );
    });
    el.classList.add(
      "active",
      "btn",
      "btn-primary",
      "rounded-pill",
      "main-btn",
      "pe-3",
      "ps-3"
    );
  });
});

window.addEventListener("scroll", () => {
  if (scrollY < 250) {
    setTimeout(() => {
      vArrow.style.opacity = 0;
    }, 200);
    setTimeout(() => {
      vArrow.style.display = "none";
    }, 400);
  } else {
    setTimeout(() => {
      vArrow.style.display = "flex";
    }, 400);
    setTimeout(() => {
      vArrow.style.opacity = 1;
    }, 1000);
  }
});

vArrow.addEventListener("click", () => {
  window.scrollTo(0, 0);
  vArrow.style.transform = "translateY(-100px)";
  setTimeout(() => {
    vArrow.style.transform = "translateY(0)";
  }, 1000);
});

for (let i = 0; i <= vParent.length; i++) {
  let val = vParent[i].getAttribute("value");
  vFiltering[0].addEventListener("click", () => {
    let valLink = vFiltering[0].getAttribute("value");
    if (val.startsWith("Al") === valLink.startsWith("Al")) {
      setTimeout(() => {
        vParent[i].style.display = "flex";
      }, 100);
      setTimeout(() => {
        vParent[i].style.transform = "translateY(0)";
        vParent[i].style.opacity = "1";
      }, 300);
    } else {
      vParent[i].style.transform = "translateY(80px)";
      vParent[i].style.opacity = "0";
      setTimeout(() => {
        vParent[i].style.display = "none";
      }, 200);
    }
  });
  vFiltering[1].addEventListener("click", () => {
    let valLink = vFiltering[1].getAttribute("value");
    if (val.startsWith("D") === valLink.startsWith("D")) {
      setTimeout(() => {
        vParent[i].style.display = "flex";
      }, 100);
      setTimeout(() => {
        vParent[i].style.transform = "translateY(0)";
        vParent[i].style.opacity = "1";
      }, 300);
    } else {
      vParent[i].style.transform = "translateY(80px)";
      vParent[i].style.opacity = "0";
      setTimeout(() => {
        vParent[i].style.display = "none";
      }, 200);
    }
  });
  vFiltering[2].addEventListener("click", () => {
    let valLink = vFiltering[2].getAttribute("value");
    if (val.startsWith("C") === valLink.startsWith("C")) {
      setTimeout(() => {
        vParent[i].style.display = "flex";
      }, 100);
      setTimeout(() => {
        vParent[i].style.transform = "translateY(0)";
        vParent[i].style.opacity = "1";
      }, 300);
    } else {
      vParent[i].style.transform = "translateY(80px)";
      vParent[i].style.opacity = "0";
      setTimeout(() => {
        vParent[i].style.display = "none";
      }, 200);
    }
  });
  vFiltering[3].addEventListener("click", () => {
    let valLink = vFiltering[3].getAttribute("value");
    if (val.startsWith("P") === valLink.startsWith("P")) {
      setTimeout(() => {
        vParent[i].style.display = "flex";
      }, 100);
      setTimeout(() => {
        vParent[i].style.transform = "translateY(0)";
        vParent[i].style.opacity = "1";
      }, 300);
    } else {
      vParent[i].style.transform = "translateY(80px)";
      vParent[i].style.opacity = "0";
      setTimeout(() => {
        vParent[i].style.display = "none";
      }, 200);
    }
  });
  vFiltering[4].addEventListener("click", () => {
    let valLink = vFiltering[4].getAttribute("value");
    if (val.startsWith("Ap") === valLink.startsWith("Ap")) {
      setTimeout(() => {
        vParent[i].style.display = "flex";
      }, 100);
      setTimeout(() => {
        vParent[i].style.transform = "translateY(0)";
        vParent[i].style.opacity = "1";
      }, 300);
    } else {
      vParent[i].style.transform = "translateY(80px)";
      vParent[i].style.opacity = "0";
      setTimeout(() => {
        vParent[i].style.display = "none";
      }, 200);
    }
  });
}
