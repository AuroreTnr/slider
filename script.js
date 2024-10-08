// SELECTION
const btnPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");
const img = document.querySelectorAll(".img")
const dots = document.querySelectorAll(".dots");


// ADD EVENT
btnNext.addEventListener("click", handleClickBtn);
btnPrevious.addEventListener("click", handleClickBtn);



let index = 0;

function handleClickBtn(e) {
    img[index].classList.remove("active")
    dots[index].classList.remove("active")


    index = index + Number(e.target.getAttribute("data-action"));

    if (index < 0) {
        index = img.length - 1;
    }
    else if (index > img.length - 1){
        index = 0;
    }


    img[index].classList.add("active");
    dots[index].classList.add("active");

}


// https://developer.mozilla.org/fr/docs/Web/API/Element/classList





