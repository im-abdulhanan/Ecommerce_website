var categoriesList = document.getElementById("categoriesList");
var categoriesListRender = [
    {
        id: 1,
        img: "./pics/1-Headphones/headphone1.jpg",
        name: "Headphones",
    },
    {
        id: 2,
        img: "./pics/protine/ptnOne.jpeg",
        name: "Supplement",
    },
    {
        id: 3,
        img: "./pics/3-sports shirts/shirtOne.webp",
        name: "GYM T-Shirts",
    },
    {
        id: 4,
        img: "./pics/4-watches/watch1.jpg",
        name: "Watches",
    },
    {
        id: 5,
        img: "./pics/5-sports_shoes/one.png",
        name: "Sports Shoes",
    },
    {
        id: 6,
        img: "./pics/7-caps/capOne.webp",
        name: "Caps",
    },
    {
        id: 7,
        img: "./pics/8-slippers/slipperOne.webp",
        name: "Slippers",
    },
    {
        id: 8,
        img: "./pics/9-halfpaint/paintOne.webp",
        name: "Boxing Paints",
    },
    {
        id: 9,
        img: "./pics/10-iphonecase/caseOne.webp",
        name: "Iphone covers",
    },
];
categoriesListRender.forEach(function (item) {
    var categoryBox = document.createElement("div");
    categoryBox.classList.add("categoryBox");
    //img div
    var categoriesImgDiv = document.createElement("div");
    categoriesImgDiv.classList.add("categoriesImgDiv");
    //img create
    var categoriesImg = document.createElement("img");
    categoriesImg.classList.add("categoriesImg");
    categoriesImg.src = item.img;
    categoriesImgDiv.appendChild(categoriesImg);
    // category names
    var categoriesName = document.createElement("h4");
    categoriesName.classList.add("categoriesName");
    categoriesName.innerText = item.name;
    categoryBox.appendChild(categoriesImgDiv);
    categoryBox.appendChild(categoriesName);
    categoriesList.appendChild(categoryBox);
});
var productsRender = document.getElementById("productsRender");
var DisplayProducts = [
    {
        id: 1,
        category: "Sports",
        products: [
            {
                img: "./pics/5-sports_shoes/one.png",
                title: "Nike Sports Shoe",
                price: 199,
                sold: 572,
            },
            {
                img: "./pics/5-sports_shoes/three.png",
                title: "Nike Sports Shoe",
                price: 199,
                sold: 268,
            },
            {
                img: "./pics/5-sports_shoes/two.png",
                title: "Nike Sports Shoe",
                price: 159,
                sold: 720,
            },
        ],
    },
];
DisplayProducts.forEach(function (item) {
    // category name
    var categoryName = document.createElement("h2");
    categoryName.classList.add("categoryName");
    categoryName.innerText = item.category;
    // product Render Div
    var ProductsRender = document.createElement("div");
    ProductsRender.classList.add("ProductsRender");
    item.products.forEach(function (items) {
        //cardBox
        var cardBox = document.createElement("div");
        cardBox.classList.add("cardBox");
        //img
        var img = document.createElement("img");
        img.classList.add("productImg");
        img.src = items.img;
        //title
        var productTile = document.createElement("h3");
        productTile.classList.add("productTile");
        productTile.innerText = items.title;
        //price
        var productPrice = document.createElement("h4");
        productPrice.classList.add("productPrice");
        productPrice.innerText = "Price: $" + items.price.toString();
        //sold
        var productSold = document.createElement("span");
        productSold.classList.add("productSold");
        productSold.innerText = items.sold + " Sold".toString();
        //append
        cardBox.appendChild(img);
        cardBox.appendChild(productTile);
        cardBox.appendChild(productPrice);
        cardBox.appendChild(productSold);
        ProductsRender.appendChild(cardBox);
    });
    productsRender.appendChild(categoryName);
    productsRender.appendChild(ProductsRender);
});
