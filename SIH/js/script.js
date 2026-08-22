/* REGISTER PASSWORD TOGGLE */

const toggleRegisterPassword =
    document.getElementById("toggleRegisterPassword");

const registerPassword =
    document.getElementById("registerPassword");

if (toggleRegisterPassword && registerPassword) {

    toggleRegisterPassword.addEventListener("click", function () {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";

            toggleRegisterPassword.innerHTML =
                '<i class="bi bi-eye-slash"></i>';

        } else {

            registerPassword.type = "password";

            toggleRegisterPassword.innerHTML =
                '<i class="bi bi-eye"></i>';

        }

    });

}


/* CREATE PROBLEM FORM */

const problemForm = document.getElementById("problemForm");

if (problemForm) {

    problemForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Problem published successfully!\n\n" +
            "The challenge is now available for eligible startups."
        );

    });

}


const saveDraft = document.getElementById("saveDraft");

if (saveDraft) {

    saveDraft.addEventListener("click", function() {

        alert(
            "Problem saved as draft successfully."
        );

    });

}


/* =========================================================
   APPLICATION SEARCH & FILTER
   ========================================================= */

const applicationSearch =
    document.getElementById("applicationSearch");

const statusFilter =
    document.getElementById("statusFilter");

const applicationTable =
    document.getElementById("applicationTable");

const noApplications =
    document.getElementById("noApplications");


function filterApplications() {

    if (!applicationTable) return;

    const searchValue =
        applicationSearch.value.toLowerCase();

    const selectedStatus =
        statusFilter.value;

    const rows =
        applicationTable.querySelectorAll("tr");

    let visibleRows = 0;

    rows.forEach(function(row) {

        const text =
            row.dataset.search.toLowerCase();

        const status =
            row.dataset.status;

        const matchesSearch =
            text.includes(searchValue);

        const matchesStatus =
            selectedStatus === "all" ||
            status === selectedStatus;

        if (matchesSearch && matchesStatus) {

            row.style.display = "";

            visibleRows++;

        } else {

            row.style.display = "none";

        }

    });


    if (visibleRows === 0) {

        noApplications.style.display = "block";

    } else {

        noApplications.style.display = "none";

    }

}


if (applicationSearch && statusFilter) {

    applicationSearch.addEventListener(
        "input",
        filterApplications
    );

    statusFilter.addEventListener(
        "change",
        filterApplications
    );

}

/* =========================================================
   APPLICATION DETAIL ACTIONS
   ========================================================= */

const shortlistApplication =
    document.getElementById("shortlistApplication");

const rejectApplication =
    document.getElementById("rejectApplication");


if (shortlistApplication) {

    shortlistApplication.addEventListener("click", function () {

        const confirmed = confirm(
            "Shortlist TechNova Solutions for the next stage?"
        );

        if (confirmed) {

            alert(
                "Application shortlisted successfully."
            );

            shortlistApplication.innerHTML =
                '<i class="bi bi-check-circle-fill"></i> Shortlisted';

            shortlistApplication.classList.remove("btn-primary");
            shortlistApplication.classList.add("btn-success");

        }

    });

}


if (rejectApplication) {

    rejectApplication.addEventListener("click", function () {

        const confirmed = confirm(
            "Are you sure you want to reject this application?"
        );

        if (confirmed) {

            alert(
                "Application has been rejected."
            );

            rejectApplication.innerHTML =
                '<i class="bi bi-x-circle-fill"></i> Rejected';

            rejectApplication.disabled = true;

        }

    });

}

/* =========================================================
   EVALUATION SCORE CALCULATOR
   ========================================================= */

const evaluationRanges =
    document.querySelectorAll(".evaluation-range");

const overallScore =
    document.getElementById("overallScore");

const scoreBar =
    document.getElementById("scoreBar");


function calculateEvaluationScore() {

    if (!evaluationRanges.length) return;

    let weightedScore = 0;

    evaluationRanges.forEach(function(range) {

        const score = Number(range.value);

        const weight = Number(range.dataset.weight);

        weightedScore += score * weight;

        const scoreId =
            range.dataset.score + "Score";

        const scoreElement =
            document.getElementById(scoreId);

        if (scoreElement) {

            scoreElement.textContent = score;

        }

    });

    /*
       Maximum raw score = 10

       Weighted score:
       score × weight

       Example:
       8 × 25 = 200
       9 × 25 = 225

       Total = 820 / 10 = 82
    */

    const finalScore =
        Math.round(weightedScore / 10);

    if (overallScore) {

        overallScore.textContent = finalScore;

    }

    if (scoreBar) {

        scoreBar.style.width =
            finalScore + "%";

    }


    /* UPDATE BREAKDOWN */

    const values = {};

    evaluationRanges.forEach(function(range) {

        values[range.dataset.score] =
            range.value;

    });


    const breakInnovation =
        document.getElementById("breakInnovation");

    const breakTechnical =
        document.getElementById("breakTechnical");

    const breakScalability =
        document.getElementById("breakScalability");

    const breakCost =
        document.getElementById("breakCost");

    const breakImpact =
        document.getElementById("breakImpact");


    if (breakInnovation)
        breakInnovation.textContent =
            values.innovation + "/10";

    if (breakTechnical)
        breakTechnical.textContent =
            values.technical + "/10";

    if (breakScalability)
        breakScalability.textContent =
            values.scalability + "/10";

    if (breakCost)
        breakCost.textContent =
            values.cost + "/10";

    if (breakImpact)
        breakImpact.textContent =
            values.impact + "/10";

}


evaluationRanges.forEach(function(range) {

    range.addEventListener(
        "input",
        calculateEvaluationScore
    );

});


/* INITIAL CALCULATION */

if (evaluationRanges.length) {

    calculateEvaluationScore();

}


/* =========================================================
   SUBMIT EVALUATION
   ========================================================= */

const submitEvaluation =
    document.getElementById("submitEvaluation");

const saveEvaluation =
    document.getElementById("saveEvaluation");


if (submitEvaluation) {

    submitEvaluation.addEventListener(
        "click",
        function() {

            const confirmed = confirm(
                "Submit this evaluation?\n\n" +
                "Once submitted, the evaluation will be used " +
                "for the pilot selection process."
            );

            if (confirmed) {

                alert(
                    "Evaluation submitted successfully!"
                );

                submitEvaluation.innerHTML =
                    '<i class="bi bi-check-circle-fill"></i> Evaluation Submitted';

                submitEvaluation.classList.remove(
                    "btn-primary"
                );

                submitEvaluation.classList.add(
                    "btn-success"
                );

                submitEvaluation.disabled = true;

            }

        }
    );

}


if (saveEvaluation) {

    saveEvaluation.addEventListener(
        "click",
        function() {

            alert(
                "Evaluation saved as draft."
            );

        }
    );

}


/* =========================================================
   PILOT ACTIONS
   ========================================================= */

const updatePilot =
    document.getElementById("updatePilot");

const addMilestone =
    document.getElementById("addMilestone");

const completePilot =
    document.getElementById("completePilot");


if (updatePilot) {

    updatePilot.addEventListener("click", function () {

        alert(
            "Pilot update form will be connected to the backend."
        );

    });

}


if (addMilestone) {

    addMilestone.addEventListener("click", function () {

        const milestoneName =
            prompt("Enter the milestone name:");

        if (milestoneName) {

            alert(
                "Milestone '" +
                milestoneName +
                "' added successfully."
            );

        }

    });

}


if (completePilot) {

    completePilot.addEventListener("click", function () {

        const confirmed = confirm(
            "Are you sure you want to mark this pilot as complete?"
        );

        if (confirmed) {

            alert(
                "Pilot marked as completed successfully."
            );

            completePilot.innerHTML =
                '<i class="bi bi-check-circle-fill"></i> Pilot Completed';

            completePilot.classList.remove(
                "btn-success"
            );

            completePilot.classList.add(
                "btn-secondary"
            );

            completePilot.disabled = true;

        }

    });

}  

/* =========================================================
   PROCUREMENT PAGE
   ========================================================= */

const procurementFilter =
    document.getElementById("procurementFilter");

const procurementList =
    document.getElementById("procurementList");

const noProcurement =
    document.getElementById("noProcurement");


if (procurementFilter) {

    procurementFilter.addEventListener(
        "change",
        function () {

            const selected =
                procurementFilter.value;

            const items =
                procurementList.querySelectorAll(
                    ".procurement-item"
                );

            let visible = 0;

            items.forEach(function (item) {

                const status =
                    item.dataset.status;

                if (
                    selected === "all" ||
                    selected === status
                ) {

                    item.style.display = "flex";

                    visible++;

                } else {

                    item.style.display = "none";

                }

            });


            if (visible === 0) {

                noProcurement.style.display =
                    "block";

            } else {

                noProcurement.style.display =
                    "none";

            }

        }
    );

}


/* NEW PROCUREMENT */

const createProcurement =
    document.getElementById("createProcurement");


if (createProcurement) {

    createProcurement.addEventListener(
        "click",
        function () {

            alert(
                "New procurement workflow will be connected to the backend."
            );

        }
    );

}


/* REVIEW BUTTONS */

const procurementActions =
    document.querySelectorAll(
        ".procurement-action"
    );


procurementActions.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const name =
                button.dataset.name;

            alert(
                "Opening procurement details for " +
                name
            );

        }
    );

});


/* =========================================================
   STARTUP PROBLEM DISCOVERY
   ========================================================= */

const problemSearch =
    document.getElementById("problemSearch");

const themeFilter =
    document.getElementById("themeFilter");

const departmentFilter =
    document.getElementById("departmentFilter");

const resetFilters =
    document.getElementById("resetFilters");

const emptyReset =
    document.getElementById("emptyReset");

const problemGrid =
    document.getElementById("problemGrid");

const resultCount =
    document.getElementById("resultCount");

const problemEmptyState =
    document.getElementById("problemEmptyState");


function filterProblems() {

    if (!problemGrid) {
        return;
    }

    const searchValue =
        problemSearch.value
            .toLowerCase()
            .trim();

    const selectedTheme =
        themeFilter.value.toLowerCase();

    const selectedDepartment =
        departmentFilter.value.toLowerCase();

    const cards =
        problemGrid.querySelectorAll(
            ".problem-card-wrapper"
        );

    let visibleCount = 0;


    cards.forEach(function (card) {

        const title =
            card.dataset.title.toLowerCase();

        const theme =
            card.dataset.theme.toLowerCase();

        const department =
            card.dataset.department.toLowerCase();


        const matchesSearch =
            title.includes(searchValue);

        const matchesTheme =
            selectedTheme === "all" ||
            theme === selectedTheme;

        const matchesDepartment =
            selectedDepartment === "all" ||
            department === selectedDepartment;


        if (
            matchesSearch &&
            matchesTheme &&
            matchesDepartment
        ) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    resultCount.textContent =
        visibleCount + " Problems";


    if (visibleCount === 0) {

        problemEmptyState.style.display =
            "block";

    } else {

        problemEmptyState.style.display =
            "none";

    }

}


if (problemSearch) {

    problemSearch.addEventListener(
        "input",
        filterProblems
    );

}


if (themeFilter) {

    themeFilter.addEventListener(
        "change",
        filterProblems
    );

}


if (departmentFilter) {

    departmentFilter.addEventListener(
        "change",
        filterProblems
    );

}


function resetProblemFilters() {

    problemSearch.value = "";

    themeFilter.value = "all";

    departmentFilter.value = "all";

    filterProblems();

}


if (resetFilters) {

    resetFilters.addEventListener(
        "click",
        resetProblemFilters
    );

}


if (emptyReset) {

    emptyReset.addEventListener(
        "click",
        resetProblemFilters
    );

}

/* =========================================================
   STARTUP APPLICATION FORM
   ========================================================= */

const applicationForm =
    document.getElementById("applicationForm");

if (applicationForm) {

    const requiredFields =
        applicationForm.querySelectorAll(
            "input[required], textarea[required]"
        );

    const progressBar =
        document.getElementById("applicationProgress");

    const progressPercent =
        document.getElementById("progressPercent");


    function updateApplicationProgress() {

        let completed = 0;

        requiredFields.forEach(function (field) {

            if (field.type === "checkbox") {

                if (field.checked) {
                    completed++;
                }

            } else if (field.value.trim() !== "") {

                completed++;

            }

        });


        const percentage =
            Math.round(
                (completed / requiredFields.length) * 100
            );


        progressBar.style.width =
            percentage + "%";

        progressPercent.textContent =
            percentage + "%";

    }


    requiredFields.forEach(function (field) {

        field.addEventListener(
            "input",
            updateApplicationProgress
        );

        field.addEventListener(
            "change",
            updateApplicationProgress
        );

    });


   applicationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        let valid = true;

        requiredFields.forEach(function (field) {

            if (field.type === "checkbox") {

                if (!field.checked) {
                    valid = false;
                }

            } else if (field.value.trim() === "") {

                valid = false;

                field.classList.add("is-invalid");

            } else {

                field.classList.remove("is-invalid");

            }

        });


        const description =
            document.getElementById("solutionDescription");


        if (
            description &&
            description.value.trim().length < 100
        ) {

            valid = false;

            description.classList.add("is-invalid");

        }


        if (!valid) {

            alert(
                "Please complete all required fields before submitting."
            );

            return;

        }


        /* -----------------------------------------
           SAVE APPLICATION
           ----------------------------------------- */

        const application = {

            id: "APP-" +
                Date.now(),

            problemId: "SIH-26136",

            problem:
                "Startup Friendly Public Procurement",

            department:
                "Government of Maharashtra",

            solution:
                document.getElementById(
                    "solutionTitle"
                ).value,

            status: "submitted",

            submitted:
                new Date().toLocaleDateString(
                    "en-IN"
                )

        };


        let applications =
            JSON.parse(
                localStorage.getItem(
                    "startupApplications"
                )
            ) || [];


        applications.unshift(application);


        localStorage.setItem(
            "startupApplications",
            JSON.stringify(applications)
        );


        alert(
            "Application submitted successfully!"
        );


        window.location.href =
            "applications.html";

    }
);

    const fileInput =
        document.getElementById("solutionFile");

    const fileName =
        document.getElementById("fileName");


    if (fileInput) {

        fileInput.addEventListener(
            "change",
            function () {

                if (fileInput.files.length > 0) {

                    fileName.textContent =
                        "Selected: " +
                        fileInput.files[0].name;

                } else {

                    fileName.textContent = "";

                }

            }
        );

    }

}


/* =========================================================
   APPLICATION SEARCH & FILTER
   ========================================================= */

const applicationSearch =
    document.getElementById("applicationSearch");

const applicationFilter =
    document.getElementById("applicationFilter");

const applicationsList =
    document.getElementById("applicationsList");

const noApplications =
    document.getElementById("noApplications");


if (
    applicationSearch &&
    applicationFilter &&
    applicationsList
) {

    function filterApplications() {

        const searchValue =
            applicationSearch.value
                .toLowerCase()
                .trim();

        const statusValue =
            applicationFilter.value;

        const applications =
            applicationsList.querySelectorAll(
                ".application-row"
            );

        let visibleCount = 0;


        applications.forEach(function (application) {

            const name =
                application.dataset.name
                    .toLowerCase();

            const status =
                application.dataset.status;


            const matchesSearch =
                name.includes(searchValue);

            const matchesStatus =
                statusValue === "all" ||
                status === statusValue;


            if (
                matchesSearch &&
                matchesStatus
            ) {

                application.style.display =
                    "grid";

                visibleCount++;

            } else {

                application.style.display =
                    "none";

            }

        });


        if (visibleCount === 0) {

            noApplications.style.display =
                "block";

        } else {

            noApplications.style.display =
                "none";

        }

    }


    applicationSearch.addEventListener(
        "input",
        filterApplications
    );


    applicationFilter.addEventListener(
        "change",
        filterApplications
    );

}


/* =========================================================
   STARTUP PILOT
   ========================================================= */

const submitMilestone =
    document.getElementById("submitMilestone");

if (submitMilestone) {

    submitMilestone.addEventListener(
        "click",
        function () {

            alert(
                "Milestone report submitted successfully!"
            );

        }
    );

}


const pilotMessageButton =
    document.querySelector(".pilot-message-btn");

if (pilotMessageButton) {

    pilotMessageButton.addEventListener(
        "click",
        function () {

            alert(
                "Messaging feature will be connected to the backend."
            );

        }
    );

}


/* =========================================================
   STARTUP PROFILE
   ========================================================= */

const saveProfile =
    document.getElementById("saveProfile");

if (saveProfile) {

    saveProfile.addEventListener(
        "click",
        function () {

            alert(
                "Profile changes saved successfully!"
            );

        }
    );

}


const capabilityTags =
    document.querySelectorAll(
        ".capability-tag"
    );

capabilityTags.forEach(function (tag) {

    const checkbox =
        tag.querySelector("input");

    checkbox.addEventListener(
        "change",
        function () {

            if (checkbox.checked) {

                tag.classList.add("selected");

            } else {

                tag.classList.remove("selected");

            }

        }
    );

});


const changeLogo =
    document.getElementById("changeLogo");

if (changeLogo) {

    changeLogo.addEventListener(
        "click",
        function () {

            alert(
                "Logo upload will be connected to the backend."
            );

        }
    );

}


const uploadDocument =
    document.getElementById("uploadDocument");

if (uploadDocument) {

    uploadDocument.addEventListener(
        "click",
        function () {

            alert(
                "Document upload will be connected to the backend."
            );

        }
    );

}


/* =========================================================
   LOAD SAVED STARTUP APPLICATIONS
   ========================================================= */

const applicationsList =
    document.getElementById("applicationsList");


if (applicationsList) {

    const savedApplications =
        JSON.parse(
            localStorage.getItem(
                "startupApplications"
            )
        ) || [];


    savedApplications.forEach(
        function (application) {

            const row =
                document.createElement("div");


            row.className =
                "application-row";


            row.dataset.status =
                application.status;


            row.dataset.name =
                application.problem;


            row.innerHTML = `

                <div class="application-row-icon blue">

                    <i class="bi bi-send"></i>

                </div>


                <div class="application-info">

                    <h3>
                        ${application.problem}
                    </h3>

                    <p>

                        ${application.problemId}

                        <span>•</span>

                        ${application.department}

                    </p>

                    <small>

                        Submitted
                        ${application.submitted}

                    </small>

                </div>


                <div class="application-status submitted">

                    Submitted

                </div>


                <a
                    href="problem-detail.html"
                    class="application-view">

                    View

                    <i class="bi bi-arrow-right"></i>

                </a>

            `;


            applicationsList.prepend(row);

        }
    );

}


/* =========================================================
   LOGIN
   ========================================================= */

const loginButton =
    document.getElementById("loginButton");

if (loginButton) {

    loginButton.addEventListener(
        "click",
        function () {

            const email =
                document.getElementById("email")
                    .value
                    .trim()
                    .toLowerCase();

            const password =
                document.getElementById("password")
                    .value;

            const selectedRole =
                document.querySelector(
                    'input[name="role"]:checked'
                ).value;


            /* =========================
               DEMO LOGIN
               ========================= */

            const users = {

                startup: {
                    email: "startup@test.com",
                    password: "123456",
                    page: "startup/dashboard.html"
                },

                government: {
                    email: "gov@test.com",
                    password: "123456",
                    page: "government/dashboard.html"
                },

                admin: {
                    email: "admin@test.com",
                    password: "123456",
                    page: "admin/dashboard.html"
                }

            };


            const user =
                users[selectedRole];


            /* =========================
               VALIDATION
               ========================= */

            if (email === "" || password === "") {

                alert(
                    "Please enter your email and password."
                );

                return;

            }


            if (
                email === user.email &&
                password === user.password
            ) {

                /* Save login information */

                localStorage.setItem(
                    "loggedIn",
                    "true"
                );

                localStorage.setItem(
                    "userRole",
                    selectedRole
                );

                localStorage.setItem(
                    "userEmail",
                    email
                );


                /* Go to dashboard */

                window.location.href =
                    user.page;

            } else {

                alert(
                    "Invalid email or password."
                );

            }

        }
    );

}