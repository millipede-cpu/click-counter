let btnDown = document.querySelector("#btn-down");
let btnUp = document.querySelector("#btn-up");
let counter = document.querySelector("#counter");
let count = 0;

btnDown.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
    counterStyle();
})

btnUp.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
    counterStyle();
})

function counterStyle() {
    if(count < 0){
        counter.classList.add("negative");

    } else if (count > 0) {
        counter.classList.add("positive");
    } else {
        counter.classList.remove("negative");
        counter.classList.remove("positive");
    }
}