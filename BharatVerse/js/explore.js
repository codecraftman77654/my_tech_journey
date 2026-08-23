const heritageGrid =
    document.getElementById("heritageGrid");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");


let currentCategory = "all";


function displayHeritage(data) {

    heritageGrid.innerHTML = "";

    resultCount.textContent =
        `${data.length} discoveries`;


    if (data.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    data.forEach(function (item) {

        const card =
            document.createElement("article");

        card.className = "explore-card";


        card.innerHTML = `

            <div
                class="explore-card-image"
                style="background: linear-gradient(
                    135deg,
                    #fef3c7,
                    #fed7aa
                );"
            >
                ${item.icon}
            </div>

            <div class="explore-card-content">

                <span class="explore-card-category">
                    ${item.category}
                </span>

                <h3>
                    ${item.name}
                </h3>

                <p class="explore-card-location">
                    📍 ${item.state}
                </p>

                <p class="explore-card-description">
                    ${item.description}
                </p>

                <a
                    href="heritage.html?id=${item.id}"
                    class="explore-card-link"
                >
                    Explore Story →
                </a>

            </div>

        `;


        heritageGrid.appendChild(card);

    });

}


function filterHeritage() {

    const searchValue =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredData =
        heritageData.filter(function (item) {

            const matchesSearch =
                item.name
                    .toLowerCase()
                    .includes(searchValue) ||

                item.state
                    .toLowerCase()
                    .includes(searchValue) ||

                item.category
                    .toLowerCase()
                    .includes(searchValue);


            const matchesCategory =
                currentCategory === "all" ||
                item.category === currentCategory;


            return matchesSearch &&
                   matchesCategory;

        });


    displayHeritage(filteredData);

}


searchInput.addEventListener(
    "input",
    filterHeritage
);


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentCategory =
                button.dataset.category;


            filterHeritage();

        }
    );

});


displayHeritage(heritageData);