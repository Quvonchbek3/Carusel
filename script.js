const slider = document.querySelector(".slider");

function activate(e) {
    const item = document.querySelectorAll(".item");
    e.target.matches(".next") && slider.append(item[0])
    e.target.matches(".prev") && slider.prepend(item[item.length - 1])
}

document.addEventListener("click", activate, false);