const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "data:image/jpeg;base64,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",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

var menuDOM=document.querySelector("#menu");

  menu.forEach(element => {
    var menuItemDom=document.createElement("div");
    menuItemDom.classList.add("menu-items", "col-lg-6", "col-sm-12")
    menuItemDom.innerHTML=`
    <img src="${element.img}"class="photo"/> 
    <div class="menu-info">
        <div class="menu-title">
            <h4>${element.title}</h4>
            <h4 class="price">${element.price}</h4>
        </div>
            <div class="menu-text">${element.desc}</div>
        
    </div>
    `
    menuDOM.append(menuItemDom);  
    
});


const menuButtonDom=document.querySelector("#menuButtons")


const menuButtonAll=document.createElement('button')
menuButtonAll.classList.add("btn", "btn-outline-dark" ,"btn-item", "all")
menuButtonAll.setAttribute("id","All")
menuButtonAll.innerHTML=`All`
menuButtonAll.addEventListener("click" ,displayFunc)
menuButtonDom.append(menuButtonAll)


const menuButtonKorea=document.createElement('button')
menuButtonKorea.classList.add("btn", "btn-outline-dark" ,"btn-item","korea")
menuButtonKorea.setAttribute("id","Korea")
menuButtonKorea.innerHTML=`Korea`
menuButtonKorea.addEventListener("click" ,displayFunc)

menuButtonDom.append(menuButtonKorea)

const menuButtonJapan=document.createElement('button')
menuButtonJapan.classList.add("btn", "btn-outline-dark" ,"btn-item", "japan")
menuButtonJapan.setAttribute("id","Japan")
menuButtonJapan.innerHTML=`Japan`
menuButtonJapan.addEventListener("click" ,displayFunc)

menuButtonDom.append(menuButtonJapan)

const menuButtonChina=document.createElement('button');
menuButtonChina.classList.add("btn", "btn-outline-dark" ,"btn-item", "china");
menuButtonChina.setAttribute("id","China");
menuButtonChina.innerHTML=`China`
menuButtonChina.addEventListener("click" ,displayFunc);

menuButtonDom.append(menuButtonChina)


function displayFunc(e){
  menuDOM.innerHTML="";
 
    menu.forEach(element => {

        if(e.target.id==element.category){
          var menuItemDom=document.createElement("div");
          menuItemDom.classList.add("menu-items", "col-lg-6", "col-sm-12")
          menuItemDom.innerHTML=`
          <img src="${element.img}"class="photo"/> 
          <div class="menu-info">
              <div class="menu-title">
                  <h4>${element.title}</h4>
                  <h4 class="price">${element.price}</h4>
              </div>
                  <div class="menu-text">${element.desc}</div>
              
          </div>
          `
          menuDOM.append(menuItemDom);  
        }
        else if(e.target.id=="All"){
        var menuItemDom=document.createElement("div");
        menuItemDom.classList.add("menu-items", "col-lg-6", "col-sm-12")
        menuItemDom.innerHTML=`
        <img src="${element.img}"class="photo"/> 
        <div class="menu-info">
            <div class="menu-title">
                <h4>${element.title}</h4>
                <h4 class="price">${element.price}</h4>
            </div>
                <div class="menu-text">${element.desc}</div>
            
        </div>
        `
        menuDOM.append(menuItemDom);
       
      }
    });
    







}


/*
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();
*/