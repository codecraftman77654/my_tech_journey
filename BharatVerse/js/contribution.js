const contributionForm =
    document.getElementById("contributionForm");

const contributionSuccess =
    document.getElementById("contributionSuccess");

const successMessage =
    document.getElementById("successMessage");


contributionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "contributorName"
            ).value.trim();

        const title =
            document.getElementById(
                "title"
            ).value.trim();


        let currentCredits =
            Number(localStorage.getItem("cultureCredits")) || 0;

        currentCredits += 50;

        localStorage.setItem(
            "cultureCredits",
            currentCredits
        );


        successMessage.textContent =
            `Thank you, ${name}! Your contribution "${title}" has been recorded for community review.`;


        contributionForm.style.display =
            "none";

        contributionSuccess.style.display =
            "flex";


        window.scrollTo({
            top: 250,
            behavior: "smooth"
        });

    }
);