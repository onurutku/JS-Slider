//Araçlar
const arac = [
  {
    resim: "1.jpg",
    yazi: "Kırmızı BMW",
    buton: "btn btn-danger",
  },
  {
    resim: "2.jpg",
    yazi: "Yeşil BMW",
    buton: "btn btn-success",
  },
  {
    resim: "3.jpg",
    yazi: "Yan Kırmızı BMW",
    buton: "btn btn-danger opacity-50",
  },
  {
    resim: "4.jpg",
    yazi: "Açık Mavi BMW",
    buton: "btn btn-primary opacity-50",
  },
  {
    resim: "5.jpg",
    yazi: "Koyu Mavi BMW",
    buton: "btn btn-primary",
  },
];
//Araçlar

//BUTTON ARRANGEMENT
const arrow_right = document.querySelector(".arrow-right");
arrow_right.addEventListener("click", ileri);
arrow_right.addEventListener("mouseenter", girdi);
arrow_right.addEventListener("mouseleave", cikti);
const arrow_left = document.querySelector(".arrow-left");
arrow_left.addEventListener("click", geri);
arrow_left.addEventListener("mouseenter", girdi);
arrow_left.addEventListener("mouseleave", cikti);

function girdi() {
  clearInterval(myVar);
  console.log("girdi");
}
function cikti() {
  myVar = setInterval(myTimer, 1000);
  console.log("çıktı");
}

let rastgele = Math.floor(Math.random() * arac.length);
var img = document.querySelector(".card-img-top");
let buton = document.getElementById("buton");
let h5 = document.querySelector(".card-title");

//PHOTO SHOW
let item = 0;
function slide(arac, item) {
  img.setAttribute("src", "photos/" + arac[item].resim);
  buton.setAttribute("class", arac[item].buton);
  h5.textContent = arac[item].yazi;
}
//PHOTO SHOW
//FORWARD SLIDE
function ileri() {
  if (item < 4) {
    item = item + 1;
  } else if (item >= 4) {
    item = 0;
  }
  slide(arac, item);
}
//FORWARD SLİDE
//REWERSE SLİDE
function geri() {
  if (item > 0) {
    item = item - 1;
  } else if (item == 0) {
    item = 4;
  }
  slide(arac, item);
}
//REWERSE SLİDE

//RANDOM VEYA SIRALI GETİR MOUSE GİRERSE DUR

let random = true;
let sirali = false;
var myVar;
if (random == true && sirali == false) {
  myVar = setInterval(myTimer, 1000);
  function myTimer() {
    let rastgele = Math.floor(Math.random() * arac.length);
    img.setAttribute("src", "photos/" + arac[rastgele].resim);
    buton.setAttribute("class", arac[rastgele].buton);
    h5.textContent = arac[rastgele].yazi;
  }
} else if (random == false && sirali == true) {
  let i = 0;
  myVar = setInterval(myTimer, 1000);
  function myTimer() {
    img.setAttribute("src", "photos/" + arac[i].resim);
    buton.setAttribute("class", arac[i].buton);
    h5.textContent = arac[i].yazi;
    i++;
    if (i == 5) {
      i = 0;
    }
  }
}
