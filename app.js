const items = [
  {
    image: "./sea/prawn.jfif",
    name: "Sea Prawn - 1kg",
    oldPrice: "₹700",
    newPrice: "  ₹500 / pack",
  },
  {
    image: "./sea/crab.jfif",
    name: "Sea Crab - 1kg",
    oldPrice: "₹400",
    newPrice: "  ₹100 / pack",
  },
  {
    image: "./sea/thenga para.jfif",
    name: "Theanga Parai - 1Kg",
    oldPrice: "",
    newPrice: "  ₹200 / pack",
  },
  {
    image: "./sea/kanava.jfif",
    name: "Kanava - 1Kg",
    oldPrice: "₹800",
    newPrice: "  ₹600 / pack",
  },
  {
    image: "./sea/ayala.jfif",
    name: "Ayala - 1Kg",
    oldPrice: "",
    newPrice: "  ₹120 / pack",
  },
  {
    image: "./sea/aara.jfif",
    name: "Sea Eel - 1Kg",
    oldPrice: "₹350",
    newPrice: "  ₹250 / pack",
  },
  {
    image: "./sea/kilichai.jfif",
    name: "Kilichai - 1Kg",
    oldPrice: "",
    newPrice: "  ₹100 / pack",
  },
  {
    image: "./sea/vanjaram.jfif",
    name: "Vanjaram - 1Kg",
    oldPrice: "₹900",
    newPrice: "  ₹750 / pack",
  },
  {
    image: "./sea/poplate.jfif",
    name: "Poplate - 1Kg",
    oldPrice: "₹450",
    newPrice: "  ₹650 / pack",
  },
  {
    image: "./sea/sangara.jfif",
    name: "Sangara - 1Kg",
    oldPrice: "₹300",
    newPrice: "  ₹250 / pack",
  },
  {
    image: "./sea/Kelangan.jfif",
    name: "Kelangan - 1Kg",
    oldPrice: "₹200",
    newPrice: "  ₹160 / pack",
  },
  {
    image: "./sea/kelthi.jfif",
    name: "Cat Fish - 1Kg",
    oldPrice: "",
    newPrice: "  ₹160 / pack",
  },
];
const RiverItems = [
  {
    image: "./village/Rohu.jfif",
    name: "Rohu - 1Kg",
    oldPrice: "₹200",
    newPrice: "  ₹160 / pack",
  },
  {
    image: "./village/Katla.jfif",
    name: "Katla - 1Kg",
    oldPrice: "₹160",
    newPrice: "  ₹150 / pack",
  },
  {
    image: "./village/Knnadi.jfif",
    name: "Kannadi Kenda - 1Kg",
    oldPrice: "₹200",
    newPrice: "  ₹160 / pack",
  },
  {
    image: "./village/botla.jfif",
    name: "Botla Kenda - 1Kg",
    oldPrice: "₹200",
    newPrice: "  ₹170 / pack",
  },
  {
    image: "./village/jalebi.jfif",
    name: "Jalebi - 1Kg",
    oldPrice: "₹150",
    newPrice: "  ₹120 / pack",
  },
  {
    image: "./village/viral.jfif",
    name: "Viral  - 1Kg",
    oldPrice: "₹300",
    newPrice: "  ₹250 / pack",
  },
  {
    image: "./village/vawval.png",
    name: "Vawval - 1Kg",
    oldPrice: "₹200",
    newPrice: "  ₹170 / pack",
  },
  {
    image: "./village/mirgala.jfif",
    name: "Mirgala  - 1Kg",
    oldPrice: "₹200",
    newPrice: "  ₹160 / pack",
  },
];

const result = document.getElementById("result");
const search = document.getElementById("search");
const searchIcon = document.getElementById("search-icon");
const riverItems = document.getElementById("River-items");
const deletetop=document.getElementById("top");
const cartItems = document.getElementById("cartItems");
const staticimg=document.querySelectorAll(".static-images");

items.forEach((item, index) => item.id = index);
RiverItems.forEach((item, index) => item.id = index + items.length);

function itemList(arr, container, i) {
  container.innerHTML = "";
    container.style.display = "flex";           // Set display to flex
    container.style.justifyContent = "center";  // Center content horizontally
    container.style.alignItems = "center";      // Center content vertically
    container.style.flexWrap = "wrap";  
  arr.map((item) => {
    let div = document.createElement("div");
    div.className = "item";
    let img = document.createElement("img");
    let title = document.createElement("p");
    let costDiv = document.createElement("div");
    let cost = document.createElement("p");
    let del = document.createElement("del");
    let button = document.createElement("button");

    img.src = item.image;
    title.innerHTML = item.name;
    del.innerHTML = item.oldPrice;
    del.style.color = "red";
    cost.innerHTML = item.newPrice;
    cost.style.color = "green";
    costDiv.append(del, cost);
    costDiv.className = "cost-div";
    button.innerHTML = "ADD CART";
    button.setAttribute("onclick", `handleClick(${item.id})`);
    button.setAttribute("data-item-id",item.id);
    button.className = "click";

    div.append(img, title, costDiv, button);
    container.append(div);
  });
}

itemList(items, result, 0);
itemList(RiverItems, riverItems, 12);

const eleminate = new Set();

function handleClick(n) {
  var parentElement = event.target.parentElement;
  var button = parentElement.querySelector(".click");
  if (button.textContent === "ADD CART") {
    button.textContent = "ADDED";
    button.style.backgroundColor = "rgb(144, 238, 144)";
  } else {
    button.textContent = "ADD CART";
    button.style.backgroundColor = "rgb(0, 255, 234)";

    removeFromCart(n);
    eleminate.delete(n);
     return;
  }
  if (!eleminate.has(n)) {
    const indexvalue = n < 12 ? items[n] : RiverItems[n - 12];
    let div = document.createElement("div");
    let img = document.createElement("img");
    let logo = document.createElement("img");
    logo.src="logos/delete.png";
    logo.className='delLogo'
    logo.setAttribute("onclick",`removeFromCart(${n})`);
    img.className='addimg'
    div.className = "insertcart";
    div.dataset.itemId = n;
    let title = document.createElement("p");
    let price = document.createElement("p");
    img.src = indexvalue.image;
    title.innerHTML = indexvalue.name;
    price.innerHTML = indexvalue.newPrice;

    div.append(img, title, price,logo);

    cartItems.append(div);
  }
  eleminate.add(n);
}
function removeFromCart(n) {
  const cartItemDivs = cartItems.querySelectorAll(".insertcart");
  cartItemDivs.forEach((div) => {
    if (div.dataset.itemId == n) {
      div.remove();
    }
  });
  let button1 = document.querySelector(`.click[data-item-id='${n}']`);
  if (button1.textContent === "ADDED") {
    button1.textContent = "ADD CART";
    button1.style.backgroundColor = "rgb(0, 255, 234)";
    eleminate.delete(n);
  }
}

function opencart() {
  var cart = document.querySelector("#cartItems");
  cart.style.display = "block";
}

function closecart() {
  var cart = document.querySelector("#cartItems");
  cart.style.display = "none";
}

function handleSearch() {
  let value = search.value;
  let searchedArray1 = items.filter((item) =>item.name.toLowerCase().includes(value.toLocaleLowerCase()));
  let searchedArray2 = RiverItems.filter((item) => item.name.toLowerCase().includes(value.toLocaleLowerCase()));
  let searchedArray=[...searchedArray1, ...searchedArray2];
  if(value==""){
  deletetop.style.display="none";
  }else{
    deletetop.style.display="block";
    itemList(searchedArray,deletetop);
  }
}

search.addEventListener("input", () => {
  handleSearch();
});





