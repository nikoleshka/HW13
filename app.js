const menu = [
  {
    id: 1,
    title: "chocolate pancake",
    category: "breakfast",
    price: 15.99,
    img: "./assets/1.png",
    desc: `A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter`,
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 14.99,
    img: "assets/2.jpg",
    desc: `Chicken Biryani is a layered dish of chicken & rice, cooked with yogurt, spices and herbs. ...`,
  },
  {
    id: 3,
    title: "chocolate milkshake",
    category: "shakes",
    price: 6.99,
    img: "assets/3.jpg",
    desc: `a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, or fruit syrup into a thick, sweet, cold mixture.`,
  },
  {
    id: 4,
    title: "Vegan salad",
    category: "lunch",
    price: 13.99,
    img: "assets/4.jpg",
    desc: `green salads (tossed or composed), bound, vegetable, fruit, and combination.`,
  },
  {
    id: 5,
    title: "4 season pizza",
    category: "dinner",
    price: 16.99,
    img: "assets/5.webp",
    desc: ` made by adding artichokes, tomatoes or basil, mushrooms, and ham, prosciutto or olives to four separate sections of the pizza.`,
  },
  {
    id: 6,
    title: "Lebanese breakfast",
    category: "breakfast",
    price: 10.99,
    img: "assets/6.jpg",
    desc: `Fatteh Hummus.  combination of boiled chickpeas mixed with garlic, and served on toasted bread,Kallaj,Shakshuka,Labneh.`,
  },
  {
    id: 7,
    title: "Knafeh",
    category: "desert",
    price: 5.99,
    img: "assets/7.jpg",
    desc: `traditional Middle Eastern dessert, made with spun pastry called kataifi, soaked in a sweet, sugar-based syrup called attar`,
  },
  {
    id: 8,
    title: "chocolate cake",
    category: "desert",
    price: 6.99,
    img: "assets/8.jpg",
    desc: `a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent`,
  },
  {
    id: 9,
    title: "pistachio milkshake",
    category: "shakes",
    price: 8.5,
    img: "assets/9.jpeg",
    desc: ` a creamy beverage made by blending pistachios with milk and ice cream`,
  },
  {
    id: 10,
    title: "Pasta alfredo",
    category: "dinner",
    price: 11.0,
    img: "assets/10.webp",
    desc: `a smooth sauce made from butter, cheese and sometimes cream and other ingredients, which is  eaten with pasta`,
  },
];
addMenuList = (list = []) => {
  document.getElementById("menu-list").innerHTML = list
    .map(
      (food) => `<div class="food-item">
    <img src="${food.img}" alt="${food.title}">
    <div class="food-desc">
        <div class="food-detail">
            <h3>${food.title}</h3>
            <p class="price">$${food.price}</p>
        </div>
        <p class="food-more">${food.desc}</p>
    </div>
</div>`
    )
    .join(" ");
};
setActiveClass =(button) =>{
    if(button){
         document.querySelectorAll('.btn-category').forEach((b)=>{
        b.classList.remove("active-btn");
    })
    button.classList.add("active-btn");
    }
   
}

const addCategoryButton = () => {
  

  const categoryList = menu.reduce(
    (categories, item) => {
      if (item && item.category && !categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["All"]
  );
  const buttons = categoryList.map(
    (cat) =>
      `<button class="btn btn-category ${cat === 'All' ? 'active-btn':''}" category-id ="${cat}" >${cat}</button>`
  );
  if (buttons.length > 0) {
    document.getElementById("menu-categories").innerHTML = buttons.join(" ");
  }

  document.querySelectorAll(".btn-category").forEach((item) => {
    const categoryType = item.getAttribute("category-id");


    item.addEventListener("click", function () {
        setActiveClass(item)
        item.classList.add("active-btn");
        if(categoryType ==='All'){
            addMenuList(menu)
            return
        }
      const filteredList = menu.filter(
        (item) => item.category === categoryType
      );
      addMenuList(filteredList);
    });
  });
};



document.addEventListener("DOMContentLoaded", function () {
  addCategoryButton();
  addMenuList(menu);
});

