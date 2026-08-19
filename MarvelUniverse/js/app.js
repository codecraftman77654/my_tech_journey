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


// ACTIVE NAVIGATION LINK

const navLinks = document.querySelectorAll(".nav-link");

const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(function(link){

    const linkPage = link.getAttribute("href");

    if(
        linkPage === currentPage ||
        (currentPage === "hero.html" && linkPage === "heroes.html")
    ){
        link.classList.add("active");
    }

});

// HERO  FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const heroCards = document.querySelectorAll(".hero-card");
const heroCount = document.getElementById("heroCount");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedFilter = button.dataset.filter;

        // Change active button
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Keep track of visible heroes
        let visibleHeroes = 0;


        // Filter hero cards
        heroCards.forEach(function(card) {

            const categories = card.dataset.category;

            if (
                selectedFilter === "all" ||
                categories.includes(selectedFilter)
            ) {

                card.style.display = "block";

                visibleHeroes++;

            } else {

                card.style.display = "none";

            }

        });


        // Update hero count
        if (heroCount) {

            heroCount.textContent =
                `Showing ${visibleHeroes} Heroes`;

        }

    });

});