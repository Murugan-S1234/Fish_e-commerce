const items = [
  {
    image: "./sea/prawn.jfif",
    name: "Sea Prawn ",
    oldPrice: "₹700",
    newPrice: "  ₹500 /- 1kg",
    cost:500
  },
  {
    image: "./sea/crab.jfif",
    name: "Sea Crab",
    oldPrice: "₹400",
    newPrice: "  ₹100 /- 1kg",
    cost:100
  },
  {
    image: "./sea/thenga para.jfif",
    name: "Theanga Parai",
    oldPrice: "",
    newPrice: "  ₹200 /- 1kg",
    cost:200
  },
  {
    image: "./sea/kanava.jfif",
    name: "Kanava",
    oldPrice: "₹800",
    newPrice: "  ₹600 /- 1kg",
    cost:600
  },
  {
    image: "./sea/ayala.jfif",
    name: "Ayala",
    oldPrice: "",
    newPrice: "  ₹120 /- 1kg",
    cost:120
  },
  {
    image: "./sea/aara.jfif",
    name: "Sea Eel",
    oldPrice: "₹350",
    newPrice: "  ₹250 /- 1kg",
    cost:250
  },
  {
    image: "./sea/kilichai.jfif",
    name: "Kilichai",
    oldPrice: "", 
    newPrice: "  ₹100 /- 1kg",
    cost:100
  },
  {
    image: "./sea/vanjaram.jfif",
    name: "Vanjaram",
    oldPrice: "₹900",
    newPrice: "  ₹750 /- 1kg",
    cost:750
  },
  {
    image: "./sea/poplate.jfif",
    name: "Poplate",
    oldPrice: "₹450",
    newPrice: "  ₹650 /- 1kg",
    cost:650
  },
  {
    image: "./sea/sangara.jfif",
    name: "Sangara",
    oldPrice: "₹300",
    newPrice: "  ₹250 /- 1kg",
    cost:250
  },
  {
    image: "./sea/Kelangan.jfif",
    name: "Kelangan",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
    cost:160
  },
  {
    image: "./sea/kelthi.jfif",
    name: "Cat Fish",
    oldPrice: "",
    newPrice: "  ₹160 /- 1kg",
    cost:160
  },
];
const RiverItems = [
  {
    image: "./village/Rohu.jfif",
    name: "Rohu",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
    cost:160
  },
  {
    image: "./village/Katla.jfif",
    name: "Katla",
    oldPrice: "₹160",
    newPrice: "  ₹150 /- 1kg",
    cost:150
  },
  {
    image: "./village/Knnadi.jfif",
    name: "Kannadi Kenda",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
    cost:160
  },
  {
    image: "./village/botla.jfif",
    name: "Botla Kenda",
    oldPrice: "₹200",
    newPrice: "  ₹170 /- 1kg",
    cost:170
  },
  {
    image: "./village/jalebi.jfif",
    name: "Jalebi",
    oldPrice: "₹150",
    newPrice: "  ₹120 /- 1kg",
    cost:120
  },
  {
    image: "./village/viral.jfif",
    name: "Viral",
    oldPrice: "₹300",
    newPrice: "  ₹250 /- 1kg",
    cost:250
  },
  {
    image: "./village/vawval.png",
    name: "Vawval",
    oldPrice: "₹200",
    newPrice: "  ₹170 /- 1kg",
    cost:170
  },
  {
    image: "./village/mirgala.jfif",
    name: "Mirgala",
    oldPrice: "₹200",
    newPrice: "  ₹160 /- 1kg",
    cost:160
  },
];

const proprice=[500,100,200,600,120,250,100,750,650,250,160,160,160,150,160,170,120,250,170,160];

const result = document.getElementById("result");
const search = document.getElementById("search");
const searchIcon = document.getElementById("search-icon");
const riverItems = document.getElementById("River-items");
const deletetop=document.getElementById("top");
const cartItems = document.getElementById("cartItems");
const staticimg=document.querySelectorAll(".static-images");


items.forEach((item, index) => item.id = index);
RiverItems.forEach((item, index) => item.id = index + items.length);

function itemList(arr, container) {
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

itemList(items, result);
itemList(RiverItems, riverItems);

const eleminate = new Set();
let inp=document.querySelector('.inp');
let price=0;
function handleClick(n) {
  var parentElement = event.target.parentElement;
  var button = parentElement.querySelector(".click");
  if (button.textContent === "ADD CART") {
    button.textContent = "ADDED";
    button.style.backgroundColor = "green";
  } else {
    button.textContent = "ADD CART";
    button.style.backgroundColor = " #ffc401";
    removeFromCart(n);
    eleminate.delete(n);
     return;
  }
  if (!eleminate.has(n)) {
    const indexvalue = n < 12 ? items[n] : RiverItems[n - 12];
    let div = document.createElement("div");
    let quantity = document.createElement("div");
    let img = document.createElement("img");
    let logo = document.createElement("img");
    let input=document.createElement("input");
    let quan = document.createElement("p");
    input.setAttribute("type","number");
    input.setAttribute("min", "1");
    input.setAttribute("max", "10");
    input.setAttribute("step","0.5");
    input.setAttribute("oninput",`addprice(${n})`)
    input.className="weight";
    input.value=1;
    logo.src="logos/delete.png";
    logo.className='delLogo'
    logo.setAttribute("onclick",`removeFromCart(${n})`);
    img.className='addimg'
    div.className = "insertcart";
    div.dataset.itemId = n;
    let title = document.createElement("p");
    img.src = indexvalue.image;
    let pricename="Rs. "+indexvalue.cost;
    title.innerHTML = `<span class="name">${indexvalue.name}</span><span class="price">${pricename}</span>`;
    quan.innerHTML="Quantity :"
    quantity.append(quan,input);
    quantity.className="quandiv";
    div.append(img, title, logo,quantity);
    cartItems.append(div);
    price+=indexvalue.cost
    inp.value=price;
  }
  eleminate.add(n);
}

function addprice(n){
  var parentElement = event.target.parentElement;
  var button = parentElement.querySelector(".weight");
  let getvalue=(n<12 ? items[n].cost : RiverItems[n-items.length].cost)
  let totalproductprice=button.value*getvalue;
  if(totalproductprice>proprice[n]){
    proprice[n]=totalproductprice;
  }else{
    let temp=totalproductprice-proprice[n];
    proprice[n]+=temp;
  }
  price=0;
  eleminate.forEach((index)=>{
  price+=proprice[index];
  })
  inp.value=price;
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
    button1.style.backgroundColor = " #ffc401";
    eleminate.delete(n);
  }
  price-=proprice[n];
  inp.value=price;
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


const nutritionData = [
  {
    name: "Prawn (Shrimp)",
    facts: {
      Calories: "106 kcal",
      Protein: "20.3 g",
      Fat: "1.7 g",
      Calcium: "43 mg",
      "Vitamin D": "153 IU",
      "Vitamin B12": "1.7 µg"
    }
  },
  {
    name: "Crab",
    facts: {
      Calories: "83 kcal",
      Protein: "17.5 g",
      Fat: "1.1 g",
      Calcium: "118 mg",
      "Vitamin D": "200 IU",
      "Vitamin B12": "9.8 µg"
    }
  },
  {
    name: "Poplate (Pomfret)",
    facts: {
      Calories: "83 kcal",
      Protein: "17.5 g",
      Fat: "1.1 g",
      Calcium: "118 mg",
      "Vitamin D": "200 IU",
      "Vitamin B12": "9.8 µg"
    }
  },
  {
    name: "Vanjaram (King Fish)",
    facts: {
      Calories: "105 kcal",
      Protein: "20 g",
      Fat: "2 g",
      Calcium: "5 mg",
      "Vitamin D": "340 IU",
      "Vitamin B12": "6 µg"
    }
  },
  {
    name: "Sangara (Snapper)",
    facts: {
      Calories: "110 kcal",
      Protein: "22 g",
      Fat: "1.6 g",
      Calcium: "5 mg",
      "Vitamin D": "230 IU",
      "Vitamin B12": "1.3 µg"
    }
  },
  {
    name: "Rohu",
    facts: {
      Calories: "97 kcal",
      Protein: "17.6 g",
      Fat: "2.9 g",
      Calcium: "10 mg",
      "Vitamin D": "600 IU",
      "Vitamin B12": "2.8 µg"
    }
  },
  {
    name: "Katla",
    facts: {
      Calories: "97 kcal",
      Protein: "17.4 g",
      Fat: "2.9 g",
      Calcium: "13 mg",
      "Vitamin D": "200 IU",
      "Vitamin B12": "2.7 µg"
    }
  },
  {
    name: "Viral",
    facts: {
      Calories: "113 kcal",
      Protein: "20.9 g",
      Fat: "2.2 g",
      Calcium: "24 mg",
      "Vitamin D": "135 IU",
      "Vitamin B12": "3.4 µg"
    }
  }
];

// Select the container element
const container = document.querySelector(".NutritionFacts");

// Iterate through the nutritionData array
nutritionData.forEach(item => {
  // Create a div element for each item and set its class
  const div = document.createElement("div");
  div.className = "cont";

  // Add the item name as a paragraph
  const p = document.createElement("p");
  p.textContent = item.name; // Set the text content to the item's name
  div.appendChild(p);

  // Create an unordered list for the item's facts
  const ul = document.createElement("ul");
  Object.entries(item.facts).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${key}: ${value}`; // Add key-value pairs as list items
    ul.appendChild(li);
  });

  // Append the list to the div
  div.appendChild(ul);

  // Append the div to the container
  container.appendChild(div);
});




