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
    const urlParams =
    new URLSearchParams(window.location.search);

const selectedState =
    urlParams.get("state");


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
                const matchesState =
    !selectedState ||
    item.state.toLowerCase() ===
    selectedState.toLowerCase();


          return matchesSearch &&
       matchesCategory &&
       matchesState;

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


// displayHeritage(heritageData);
filterHeritage();



/* =========================
   CULTURE KEEPERS
========================= */

const leaderboardList =
    document.getElementById("leaderboardList");

const yourRank =
    document.getElementById("yourRank");


if (leaderboardList) {

    const currentCredits =
        Number(
            localStorage.getItem("cultureCredits")
        ) || 0;


    const students = [

        {
            name: "Ananya",
            credits: 420,
            avatar: "👩"
        },

        {
            name: "Rahul",
            credits: 360,
            avatar: "👨"
        },

        {
            name: "Priya",
            credits: 310,
            avatar: "👩"
        },

        {
            name: "You",
            credits: currentCredits,
            avatar: "🧑"
        },

        {
            name: "Arjun",
            credits: 180,
            avatar: "👨"
        }

    ];


    students.sort(function (a, b) {

        return b.credits - a.credits;

    });


    students.forEach(function (student, index) {

        const row =
            document.createElement("div");

        row.className =
            "leaderboard-row";


        let rankDisplay =
            index + 1;


        if (index === 0) {
            rankDisplay = "🥇";
        }

        else if (index === 1) {
            rankDisplay = "🥈";
        }

        else if (index === 2) {
            rankDisplay = "🥉";
        }


        row.innerHTML = `

            <div class="rank">
                ${rankDisplay}
            </div>

            <div class="contributor">

                <div class="contributor-avatar">
                    ${student.avatar}
                </div>

                <div>

                    <span class="contributor-name">
                        ${student.name}
                    </span>

                    <span class="contributor-label">
                        Culture Keeper
                    </span>

                </div>

            </div>

            <div class="leaderboard-credits">
                🏆 ${student.credits}
            </div>

        `;


        leaderboardList.appendChild(row);


        if (student.name === "You") {

            yourRank.textContent =
                `🏆 Your current rank: #${index + 1}`;

        }

    });

}