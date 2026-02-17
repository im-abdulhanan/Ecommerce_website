var bannerImages: string[] = [
  "./pics/banner/bannerOne.jpg",
  "./pics/banner/bannerTwo.jpg",
  "./pics/banner/bannerThree.jpg",
  "./pics/banner/bannerFour.jpg",
  "./pics/banner/bannerFive.jpg",
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

setInterval(() => {
  bannerDiv.style.background = `url(${bannerImages[bannerIndex]})`;
  bannerIndex++;
  bannerDiv.style.backgroundSize = "cover";
  if (bannerIndex === bannerImages.length) {
    bannerIndex = 0;
    bannerDiv.style.backgroundSize = "cover";
  }
}, 1000);

var cardDiv = document.getElementById("cardDisplay") as HTMLElement;
interface Product {
  id: number;
  mainImg: string;
  title: string;
  stars: string[];
  sold: number;
  price: number;
}

var products: Product[] = [
  {
    id: 1,
    mainImg: "./pics/1-Headphones/headphone2.jpg",
    title: "Apple Wireless Headphones",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/empty_star.png",
    ],
    sold: 123,
    price: 199,
  },
  {
    id: 2,
    mainImg: "./pics/2-protine /ptnOne.jpeg",
    title: "Nitro Teach Supplement",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/half_star.png",
    ],
    sold: 370,
    price: 999,
  },
  {
    id: 3,
    mainImg: "./pics/4-watches/watch1.jpg",
    title: "Black Golden Watch",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/half_star.png",
    ],
    sold: 260,
    price: 199,
  },
  {
    id: 4,
    mainImg: "./pics/3-sports shirts/shirtFive.webp",
    title: "GYM Sports T-Shirt",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
    ],
    sold: 890,
    price: 59,
  },
  {
    id: 5,
    mainImg: "./pics/2-protine /ptnTwo.jpeg",
    title: "Rock Nitro Supplement",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/empty_star.png",
    ],
    sold: 573,
    price: 899,
  },
  {
    id: 6,
    mainImg: "./pics/3-sports shirts/shirtThree.webp",
    title: "GYM Sport T-Shirt",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
    ],
    sold: 953,
    price: 49,
  },
  {
    id: 7,
    mainImg: "./pics/5-sports_shoes/one.png",
    title: "Nike Sports Shoes",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/half_star.png",
    ],
    sold: 1153,
    price: 299,
  },
  {
    id: 8,
    mainImg: "./pics/1-Headphones/headphone1.jpg",
    title: "Apple Warless Headphones",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/empty_star.png",
    ],
    sold: 953,
    price: 159,
  },
  {
    id: 9,
    mainImg: "./pics/6-sports shirts 2/shirtOne.webp",
    title: "Black Spider GYM t-shirt",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/empty_star.png",
    ],
    sold: 312,
    price: 159,
  },
  {
    id: 10,
    mainImg: "./pics/4-watches/watch3.jpg",
    title: "Black Watch for Men",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/empty_star.png",
      "./icons/empty_star.png",
    ],
    sold: 112,
    price: 139,
  },
  {
    id: 11,
    mainImg: "./pics/10-iphonecase/caseOne.webp",
    title: "Iphone cover case",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/empty_star.png",
    ],
    sold: 2022,
    price: 59,
  },
  {
    id: 12,
    mainImg: "./pics/9-halfpait/paintTwo.webp",
    title: "Boxing Half paint",
    stars: [
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/fill_star.png",
      "./icons/half_star.png",
    ],
    sold: 206,
    price: 39,
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

  //Description
  const DescriptionDiv = document.createElement("div");
  const starDiv = document.createElement("div");
  starDiv.classList.add("starDiv");
  DescriptionDiv.classList.add("desDiv");
  DescriptionDiv.innerHTML = `
  <h2>${item.title}</h2>
  <h3>Price: $${item.price}</h3>
  `;
  item.stars.forEach((item) => {
    const starsImg = document.createElement("img");
    starsImg.classList.add("starsImg");
    starsImg.src = item;
    starDiv.appendChild(starsImg);
  });
  const soldWrite = document.createElement("span");
  soldWrite.classList.add("sold");
  soldWrite.innerHTML = `<span>${item.sold} SOLD</span>`;
  starDiv.appendChild(soldWrite);
  //btn
  const btn_cart_Div = document.createElement("div");
  btn_cart_Div.classList.add("btnCart");

  const btn = document.createElement("a");
  btn.classList.add("cartBTN");
  btn.innerText = "ADD TO CART";

  const cartIcon = document.createElement("img");
  cartIcon.classList.add("BTNcartIcon");
  cartIcon.src = "./icons/add_shopping_cart.png";

  btn_cart_Div.appendChild(btn);
  btn_cart_Div.appendChild(cartIcon);
  card.appendChild(imgDiv);
  card.appendChild(DescriptionDiv);
  card.appendChild(starDiv);
  card.appendChild(btn_cart_Div);

  cardDiv.appendChild(card);

  var indexCart: number = 0;

  const cartCount = document.getElementById("cartCounts") as HTMLElement;
  card.addEventListener("click", function (e) {
    const target = e.target as HTMLElement;
    if (target.classList.contains("cartBTN")) {
      indexCart++;
      cartCount.innerText = indexCart.toString();
    }
  });
});
