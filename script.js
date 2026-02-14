var bannerImages = [
    "banner/bannerOne.jpg",
    "banner/bannerTwo.jpg",
    "banner/bannerThree.jpg",
    "banner/bannerFour.jpg",
    "banner/bannerFive.jpg",
];
var bannerIndex = 0;
var bannerDiv = document.getElementById("bannerDiv");
var rightArrow = document.getElementById("rightArrow");
var leftArrow = document.getElementById("lightArrow");
rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener("click", function () {
    bannerIndex++;
    if (bannerIndex >= bannerImages.length) {
        bannerIndex = 0;
    }
    bannerDiv.style.background = "url(".concat(bannerImages[bannerIndex], ")");
    bannerDiv.style.backgroundSize = "cover";
});
leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener("click", function () {
    bannerIndex--;
    if (bannerIndex <= 0) {
        bannerIndex = bannerImages.length - 1;
    }
    bannerDiv.style.background = "url(".concat(bannerImages[bannerIndex], ")");
    bannerDiv.style.backgroundSize = "cover";
});
var cardDiv = document.getElementById("cardDisplay");
var products = [
    {
        id: 1,
        mainImg: "./1Headphones/headphone2.jpg",
        smallImg: [
            "./1Headphones/headphone1.jpg",
            "./1Headphones/headphone2.jpg",
            "./1Headphones/headphone3.jpg",
            "./1Headphones/headphone4.jpg",
            "./1Headphones/headphone5.jpg",
        ],
        title: "Apple Red Headphones",
        price: 199,
    },
    {
        id: 2,
        mainImg: "./2protine /ptnOne.jpeg",
        smallImg: [
            "./2protine /ptnOne.jpeg",
            // "./2protine /ptnTwo.jpeg",
            "./2protine /ptnThree.jpeg",
            "./2protine /ptnFour.jpeg",
            "./2protine /ptnFive.jpeg",
        ],
        title: "Nitro Teach",
        price: 999,
    },
];
products.forEach(function (item) {
    //card Parent create
    var card = document.createElement("div");
    card.classList.add("cardBox");
    //img div create
    var imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    imgDiv.innerHTML = "<img src=\"".concat(item.mainImg, "\" class = \"mainIMG\" alt=\"\">");
    //small img div
    var smallImgDiv = document.createElement("div");
    smallImgDiv.classList.add("smallImgBox");
    // append it into smallImgDiv
    item.smallImg.forEach(function (img) {
        var smallImgBoxes = document.createElement("img");
        smallImgBoxes.classList.add("smallImages");
        smallImgBoxes.src = img;
        smallImgDiv.appendChild(smallImgBoxes);
    });
    //Description
    var DescriptionDiv = document.createElement("div");
    DescriptionDiv.innerHTML = "\n  <h2>".concat(item.title, "</h2>\n  <h3>").concat(item.price, "</h3>\n  ");
    card.appendChild(imgDiv);
    card.appendChild(smallImgDiv);
    card.appendChild(DescriptionDiv);
    cardDiv.appendChild(card);
});
