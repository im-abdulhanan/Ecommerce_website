// hero section
// arrow img change

// let img = document.getElementById("hero_img_1")
// let arrow_right = document.getElementById("arrow_right");
// function changeImgtoRight(){
//     for(let i = 0; i < img.length; i++){
//         img.src = "banner pics/banner_1.jpg" 
//     }
// }
// function changeImgtoLeft(){
//     img.src = "banner pics/banner_2.jpg" 
// }
let img = document.getElementById("hero_img_1");

let images = [
  "banner pics/banner_1.jpg",
  "banner pics/banner_2.jpg",
  "banner pics/banner_3.jpg"
];

let index = 0;

setInterval(() => {
  index++;

  if(index >= images.length){
    index = 0; // go back to first image (infinite loop)
  }

  img.src = images[index];
}, 2000); // change every 2 seconds

