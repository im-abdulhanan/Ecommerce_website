// Dark & Light mode changer
let body = document.body
function changeMode(){
    let light = body.classList.contains("light_mode")
    if(light){
        body.classList.add("dark_mode")
        body.classList.remove("light_mode")
    }else{
        body.classList.add("light_mode")
        body.classList.remove("black_mode")
    }
}

// Hero section banner changer
let bannerDiv = document.getElementById("banner_div");
let images = ["banner_pics/banner_1.jpg", "banner_pics/banner_2.jpg"];
let index = 0;

function bannerChange(){
    bannerDiv.style.backgroundImage = `url('${images[index]}')`
    index = (index +1) % images.length
}
