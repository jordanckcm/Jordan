const profileBtn = document.getElementById("profilebuttontolog");
const logoutContainer = document.getElementById("logoutbuttoncontainer");

let isVisible = false;

profileBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    isVisible = !isVisible;
    logoutContainer.style.display = isVisible ? "inline-block" : "none";
});

document.addEventListener("click", function () {
    logoutContainer.style.display = "none";
    isVisible = false;
});