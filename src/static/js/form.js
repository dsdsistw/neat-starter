const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.querySelector("form");
  let formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      myForm.classList.add("hidden");
      document.querySelector(".post-sent").classList.remove("hidden");
    })
    .catch((error) => {
      myForm.classList.add("hidden");
      document.querySelector(".post-error").classList.remove("hidden");
    });
};

document.querySelector("form").addEventListener("submit", handleSubmit);
