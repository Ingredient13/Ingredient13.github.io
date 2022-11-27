const mainContent = document.querySelector(".rating");
const thankYou = document.querySelector(".result");
const submitButton = document.querySelector(".btn");
const rating = document.getElementById("rating-score")
const rates = document.querySelectorAll(".scorePoint")

submitButton.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    mainContent.style.display = "none";

})


rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})

