const creditCount = document.getElementById("creditCount");

if (creditCount) {

    const credits =
        Number(localStorage.getItem("cultureCredits")) || 0;

    creditCount.textContent = credits;

}