const items = [
  {
    image: "./sea/prawn.jfif",
    name: "Sea Prawn ",
    oldPrice: "₹700",
    newPrice: "  ₹500 /- 1kg",
  },
  {
    image: "./sea/crab.jfif",
    name: "Sea Crab",
    oldPrice: "₹400",
    newPrice: "  ₹100 /- 1kg",
  },
  {
    image: "./sea/thenga para.jfif",
    name: "Theanga Parai",
    oldPrice: "",
    newPrice: "  ₹200 /- 1kg",
  },
  {
    image: "./sea/kanava.jfif",
    name: "Kanava",
    oldPrice: "₹800",
    newPrice: "  ₹600 /- 1kg",
  },
  {
    image: "./sea/ayala.jfif",
    name: "Ayala",
    oldPrice: "",
    newPrice: "  ₹120 /- 1kg",
  },
  {
    image: "./sea/aara.jfif",
    name: "Sea Eel",
    oldPrice: "₹350",
    newPrice: "  ₹250 /- 1kg",
  },
  {
    image: "./sea/kilichai.jfif",
    name: "Kilichai",
    oldPrice: "", 
    newPrice: "  ₹100 /- 1kg",
  },
  {
    image: "./sea/vanjaram.jfif",
    name: "Vanjaram",
    oldPrice: "₹900",
    newPrice: "  ₹750 /- 1kg",
  },
  {
    image: "./sea/poplate.jfif",
    name: "Poplate",
    oldPrice: "₹450",
    newPrice: "  ₹650 /- 1kg",
  },
  {
    image: "./sea/sangara.jfif",
    name: "Sangara",
    oldPrice: "₹300",
    newPrice: "  ₹250 /- 1kg",
  },
  {
    image: "./sea/Kelangan.jfif",
    name: "Kelangan",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
  },
  {
    image: "./sea/kelthi.jfif",
    name: "Cat Fish",
    oldPrice: "",
    newPrice: "  ₹160 /- 1kg",
  },
];
const RiverItems = [
  {
    image: "./village/Rohu.jfif",
    name: "Rohu",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
  },
  {
    image: "./village/Katla.jfif",
    name: "Katla",
    oldPrice: "₹160",
    newPrice: "  ₹150 /- 1kg",
  },
  {
    image: "./village/Knnadi.jfif",
    name: "Kannadi Kenda",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
  },
  {
    image: "./village/botla.jfif",
    name: "Botla Kenda",
    oldPrice: "₹200",
    newPrice: "  ₹170 /- 1kg",
  },
  {
    image: "./village/jalebi.jfif",
    name: "Jalebi",
    oldPrice: "₹150",
    newPrice: "  ₹120 /- 1kg",
  },
  {
    image: "./village/viral.jfif",
    name: "Viral",
    oldPrice: "₹300",
    newPrice: "  ₹250 /- 1kg",
  },
  {
    image: "./village/vawval.png",
    name: "Vawval",
    oldPrice: "₹200",
    newPrice: "  ₹170 /- 1kg",
  },
  {
    image: "./village/mirgala.jfif",
    name: "Mirgala",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
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
    if(del.innerHTML===""){
      del.style.display="none";
    }
    cost.innerHTML = item.newPrice;
    cost.style.color = "green";
    cost.className="costd"
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
    img.src = indexvalue.image;
    title.innerHTML = indexvalue.name;

    div.append(img, title, logo);

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





