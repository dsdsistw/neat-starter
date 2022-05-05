let options = {
  rootMargin: "0px",
  threshold: 1.0,
};

const callback = (entries, observer) => {
  const inView = entries.filter((e) => e.isIntersecting);
  const shuffledArray = inView.sort((a, b) => 0.5 - Math.random());

  shuffledArray.map((element, index) => {
    if (!element.isIntersecting) return;
    observer.unobserve(element.target);
    setTimeout(() => {
      element.target.setAttribute(
        "src",
        element.target.getAttribute("data-src")
      );
    }, 500 * index + 200);
  });
};

let observer = new IntersectionObserver(callback, options);

document.querySelectorAll(".img-cover").forEach((element) => {
  observer.observe(element);
});
