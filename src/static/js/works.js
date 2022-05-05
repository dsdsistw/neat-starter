const btn = document.querySelectorAll(".img-btn");

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const src = item.getAttribute("src");
    document.querySelector("#big-img").setAttribute("src", src);
  });
});

// init click
document.querySelector(".img-btn").click();
