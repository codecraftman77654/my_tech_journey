const params =
    new URLSearchParams(window.location.search);

const heritageId =
    Number(params.get("id"));


const heritage =
    heritageData.find(function (item) {

        return item.id === heritageId;

    });


const heritageName =
    document.getElementById("heritageName");

const heritageCategory =
    document.getElementById("heritageCategory");

const heritageLocation =
    document.getElementById("heritageLocation");

const heritageDescription =
    document.getElementById("heritageDescription");

const heritageImage =
    document.getElementById("heritageImage");

const heritageStory =
    document.getElementById("heritageStory");

const heritageOrigin =
    document.getElementById("heritageOrigin");

const heritageType =
    document.getElementById("heritageType");


if (heritage) {

    heritageName.textContent =
        heritage.name;

    heritageCategory.textContent =
        heritage.category;

    heritageLocation.textContent =
        `📍 ${heritage.state}, India`;

    heritageDescription.textContent =
        heritage.description;

    heritageImage.textContent =
        heritage.icon;

    heritageStory.textContent =
        `${heritage.name} represents an important part of the cultural identity of ${heritage.state}. Its traditions, knowledge and artistic expressions have been passed through generations and continue to remain part of India's living heritage.`;

    heritageOrigin.textContent =
        heritage.state;

    heritageType.textContent =
        heritage.category;

}


const saveBtn =
    document.getElementById("saveBtn");

const shareBtn =
    document.getElementById("shareBtn");


if (saveBtn) {

    saveBtn.addEventListener(
        "click",
        function () {

            saveBtn.textContent = "♥ Saved";

            saveBtn.style.background = "#15803d";

        }
    );

}


if (shareBtn) {

    shareBtn.addEventListener(
        "click",
        function () {

            if (navigator.share) {

                navigator.share({
                    title: heritage.name,
                    text:
                        `Discover ${heritage.name} on BharatVerse!`
                });

            } else {

                alert(
                    "BharatVerse heritage can be shared with your community!"
                );

            }

        }
    );

}
