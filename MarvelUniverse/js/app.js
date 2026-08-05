const searchInput = document.getElementById("searchInput");
if(searchInput){
    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase();
        const heroCards = document.querySelectorAll(".hero-card");
        heroCards.forEach(function(card){
            const heroName = card.querySelector("h2").textContent.toLocaleLowerCase();
            if(heroName.includes(searchValue)) {
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }
        });
    });
}