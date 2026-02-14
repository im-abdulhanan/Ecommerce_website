var bannerImages: string[] = [
  "banner/bannerOne.jpg",
  "banner/bannerTwo.jpg",
  "banner/bannerThree.jpg",
  "banner/bannerFour.jpg",
  "banner/bannerFive.jpg",
];
var bannerIndex: number = 0;
var bannerDiv = document.getElementById("bannerDiv") as HTMLElement;
var rightArrow = document.getElementById("rightArrow");
var leftArrow = document.getElementById("lightArrow");
rightArrow?.addEventListener("click", function () {
  bannerIndex++;
  if (bannerIndex >= bannerImages.length) {
    bannerIndex = 0;
  }
  bannerDiv.style.background = `url(${bannerImages[bannerIndex]})`;
  bannerDiv.style.backgroundSize = "cover";
});
leftArrow?.addEventListener("click", function () {
  bannerIndex--;
  if (bannerIndex <= 0) {
    bannerIndex = bannerImages.length - 1;
  }
  bannerDiv.style.background = `url(${bannerImages[bannerIndex]})`;
  bannerDiv.style.backgroundSize = "cover";
});

var cardDiv = document.getElementById("cardDisplay") as HTMLElement;
interface Product {
  id: number;
  mainImg: string;
  smallImg: string[];
  title: string;
  price: number;
}

var products: Product[] = [
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

products.forEach((item) => {
  //card Parent create
  const card = document.createElement("div");
  card.classList.add("cardBox");

  //img div create
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  imgDiv.innerHTML = `<img src="${item.mainImg}" class = "mainIMG" alt="">`;

  //small img div
  const smallImgDiv = document.createElement("div");
  smallImgDiv.classList.add("smallImgBox");

  // append it into smallImgDiv
  item.smallImg.forEach((img) => {
    const smallImgBoxes = document.createElement("img");
    smallImgBoxes.classList.add("smallImages");
    smallImgBoxes.src = img;
    smallImgDiv.appendChild(smallImgBoxes)
  });

  //Description
  const DescriptionDiv = document.createElement("div");
  DescriptionDiv.innerHTML = `
  <h2>${item.title}</h2>
  <h3>${item.price}</h3>
  `;
  //btn
  card.appendChild(imgDiv);
  card.appendChild(smallImgDiv);
  card.appendChild(DescriptionDiv);

  cardDiv.appendChild(card)
});
