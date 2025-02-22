/*=============== LOADER ===============*/
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  
  loader.classList.add('loaderHidden');

  loader.addEventListener('transitioned', () => {
    document.body.removeChild('loader');
  })
})



/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')



/*=============== MENU ===============*/ 
function changeTab(meal) {
    // Remove 'active' class from all tabs and content
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.food-item').forEach(content => content.classList.remove('active'));
  
    // Add 'active' class to clicked tab and its content
    event.target.classList.add('active');
    document.getElementById(meal).classList.add('active');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButtons = document.querySelectorAll(".collapsible");
  
    collapsibleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
  
            // Toggle max-height for smooth collapse/expand effect
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
  });
  
  
  // Separate arrays for each menu category
  const tacosProducts = [
  {
      id: 1,
      name: "Carne Asada",
      price: "5.00",
      image: "images/carne-asada-1-square-1-500x375.jpg",
      shortDescription: "Classic taco that is loved throughout the world",
      ingredients: "Beef, onions, cilantro, lime, tortillas",
      calories: "200 cal",
      carbs: "13g",
      protein: "16g"
  },
  {
    id: 2,
    name: "Alba&ntildeileria",
    price: "3.50",
    image: "images/tacos-albinilero.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 3,
    name: "Milanesa",
    price: "3.50",
    image: "images/milanesa.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 4,
    name: "Chile Relleno",
    price: "3.50",
    image: "images/tacos-relleno.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 5,
    name: "Tripitas",
    price: "3.50",
    image: "images/Tripa_tacos.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 6,
    name: "Lengua",
    price: "3.50",
    image: "images/tacos-lengua.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 7,
    name: "Camaron",
    price: "3.50",
    image: "images/Tacos_de_camarón.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 8,
    name: "Pescado",
    price: "3.50",
    image: "images/Tacos_de_pescado.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 9,
    name: "Cabeza",
    price: "3.50",
    image: "images/tacos-cabeza.jfif",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 10,
    name: "Pastor",
    price: "3.50",
    image: "images/taco-pastor.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 11,
    name: "Pollo",
    price: "3.50",
    image: "images/taco-pollo.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 12,
    name: "Suadero",
    price: "3.50",
    image: "images/tacos-suardero.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 13,
    name: "Barbacoa",
    price: "3.50",
    image: "images/Tacos_de_Barbacoa.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 14,
    name: "Buche",
    price: "3.50",
    image: "images/tacos-buche.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 15,
    name: "Chorizo",
    price: "3.50",
    image: "images/tacos-chorizo.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 16,
    name: "Lomo",
    price: "3.50",
    image: "images/carne-asada-1-square-1-500x375.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 17,
    name: "Birria",
    price: "4.00",
    image: "images/taco-birria.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 18,
    name: "Vegetariano",
    price: "2.75",
    image: "images/tacos-veg.jfif",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 19,
    name: "Frijoles",
    price: "2.75",
    image: "images/tacos-frijoles.jpg",
    shortDescription: "Classic taco that is loved throughout the world",
    ingredients: "Beef, onions, cilantro, lime, tortillas",
    calories: "250 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  
  
  ];
  const burritosProducts = [
  {
    id: 1,
    name: "Asada",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "",
    ingredients: "",
    calories: " kcal",
    carbs: "",
    protein: "",
  },
  {
    id: 2,
    name: "Milenesa de Res",
    price: "10.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "",
    calories: " kcal",
    carbs: "",
    protein: "",
  },
  {
    id: 3,
    name: "Vegetariano",
    price: "8.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 4,
    name: "Suadero",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 5,
    name: "Tripa",
    price: "MP$",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 6,
    name: "Lomo",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 7,
    name: "Lengua",
    price: "MP$",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 8,
    name: "Cabeza",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 9,
    name: "Alba&ntildeileria",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 10,
    name: "Pollo",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 11,
    name: "Chile Relleno",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 12,
    name: "Jam&ograven",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 13,
    name: "Chorizo",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 14,
    name: "Camar&ograven",
    price: "14.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 15,
    name: "Pollo & Asada",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 16,
    name: "Pastor",
    price: "9.99",
    image: "images/pastor.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 17,
    name: "Combinaci&ograven",
    price: "9.99",
    image: "images/dinner-en.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  // Add more dinner items here
  ];
  const chimichangasProducts = [
    {
      id: 1,
      name: "Asada",
      price: "9.99",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 2,
    name: "Milenesa de Res",
    price: "10.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 3,
    name: "Vegetariano",
    price: "8.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 4,
    name: "Suadero",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 5,
    name: "Tripa",
    price: "MP$",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 6,
    name: "Lomo",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 7,
    name: "Lengua",
    price: "MP$",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 8,
    name: "Cabeza",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 9,
    name: "Alba&ntildeileria",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 10,
    name: "Pollo",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 11,
    name: "Chile Relleno",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 12,
    name: "Jam&ograven",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 13,
    name: "Chorizo",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 14,
    name: "Camar&ograven",
    price: "14.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 15,
    name: "Pollo & Asada",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 16,
    name: "Pastor",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 17,
    name: "Combinaci&ograven",
    price: "9.99",
    image: "images/dinner-entree.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  // Add more lunch items here
  ];
  const tortasProducts = [
  {
      id: 1,
      name: "Asada",
      price: "8.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 2,
    name: "Lomo",
    price: "8.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 3,
    name: "Jam&oacuten",
    price: "8.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 4,
    name: "Lengua",
    price: "8.00",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 5,
    name: "Milanesa de Pollo",
    price: "10.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 6,
    name: "Milanesa de Res",
    price: "10.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 7,
    name: "Pastor",
    price: "8.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 8,
    name: "Chorizo",
    price: "8.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 9,
    name: "Pollo",
    price: "8.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 10,
    name: "Vegetariana",
    price: "7.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 11,
    name: "Cubana",
    price: "10.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 12,
    name: "Hawaiiana",
    price: "10.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 13,
    name: "Ahogadas",
    price: "9.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 14,
    name: "Alba&ntildeileria",
    price: "9.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  {
    id: 15,
    name: "Pambazo",
    price: "9.99",
    image: "images/torta-asada.jpg",
    shortDescription: "Perfect dinner choice",
    ingredients: "Steak, potatoes, sauce",
    calories: "450 kcal",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  }
    // Add more dinner items here
  ];
  const dinnersProducts = [
    {
      id: 1,
      name: "Chiles Rellenos",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 2,
      name: "Bistec a la Mexicana",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 3,
      name: "Bistec Ranchero",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 4,
      name: "Carne Asada",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 5,
      name: "Carne a la Tampique&ntildea",
      price: "18.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    
    {
      id: 6,
      name: "Enchiladas (4)",
      price: "15.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 7,
      name: "Pechuga de Pollo Rellena de Jamon y Queso",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 8,
      name: "Pechuga a la Plancha",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 9,
      name: "Lengua a la Mexicana",
      price: "MP$",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 10,
      name: "Alambre de Res",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 11,
      name: "Flautas de Pollo o Carne Desebrada",
      price: "14.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      id: 12,
      name: "Milanesa Entomatada o en Salsa Ranchera",
      price: "16.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
  // Add more dinner items here
  ];
  const mariscosProducts = [
    {
      id: 1,
      name: "Empanadas de Camaron",
      price: "9-17",
      image: "images/mariscos-empanadas.jpg",
      shortDescription: "Shrimp Empanadas: (4): $9 (8): $17",
      ingredients: "Shrimp, cheese, corn masa, chipotle sauce",
      calories: "320 kcal per serving",
      carbs: "28",
      protein: "18",
  },
  {
      id: 2,
      name: "Pescado Fish ceviche",
      price: "8-16-20",
      image: "images/mariscos-cevice.jpg",
      shortDescription: "Small: $8, Medium: $16, Large: $20",
      ingredients: "Fresh white fish, lime juice, tomatoes, onions, cilantro, cucumber",
      calories: "180 kcal per serving",
      carbs: "8",
      protein: "25",
  },
  {
      id: 3,
      name: "Camarón Shrimp ceviche",
      price: "9-17-23",
      image: "images/mariscos-shrip-ceviche.jpg",
      shortDescription: "Small: $10, Medium: $17, Large: $23",
      ingredients: "Fresh shrimp, lime juice, tomatoes, onions, cilantro, cucumber",
      calories: "190 kcal per serving",
      carbs: "10",
      protein: "28",
  },
  {
      id: 4,
      name: "Mixto",
      price: "11-18-22",
      image: "images/mariscos-ceviche-mix.webp",
      shortDescription: "Shrimp, fish & octopus ceviche. Small: $11, Medium: $18, Large: $22",
      ingredients: "Shrimp, fish, octopus, lime juice, tomatoes, onions, cilantro",
      calories: "210 kcal per serving",
      carbs: "12",
      protein: "32",
  },
  {
      id: 5,
      name: "Coctel de Camarón Shrimp cocktail",
      price: "18.95",
      image: "images/mariscos-shrimp-cocktail.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Shrimp, cocktail sauce, avocado, cucumber, onions",
      calories: "280 kcal per serving",
      carbs: "15",
      protein: "35",
  },
  {
      id: 6,
      name: "Coctel Campechano",
      price: "18.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Shrimp and octopus",
      ingredients: "Shrimp, octopus, cocktail sauce, avocado, cucumber, onions",
      calories: "290 kcal per serving",
      carbs: "16",
      protein: "38",
  },
  {
      id: 7,
      name: "Vuelve a la Vida",
      price: "18.99",
      image: "images/dinner-entree.jpg",
      shortDescription: "Shrimp, octopus, oyster and surimi",
      ingredients: "Shrimp, octopus, oyster, surimi, lime juice, cocktail sauce",
      calories: "310 kcal per serving",
      carbs: "18",
      protein: "42",
  },
  {
      id: 8,
      name: "Mendigo (Served warm)",
      price: "18.99",
      image: "images/cocktail.jfif",
      shortDescription: "Chopped shrimp, octopus and serrano pepper on the side",
      ingredients: "Shrimp, octopus, serrano peppers, lime juice, spices",
      calories: "285 kcal per serving",
      carbs: "12",
      protein: "40",
  },
  {
      id: 9,
      name: "Camarones Empanizados",
      price: "18.95",
      image: "images/mariscos-empan.jpg",
      shortDescription: "Breaded shrimp",
      ingredients: "Shrimp, breadcrumbs, eggs, seasoning, dipping sauce",
      calories: "450 kcal per serving",
      carbs: "35",
      protein: "32",
  },
  {
      id: 10,
      name: "Camarones a la Plancha",
      price: "18.95",
      image: "images/shrimp.jpg",
      shortDescription: "Fresh grilled shrimp",
      ingredients: "Shrimp, garlic, butter, lime, seasoning",
      calories: "280 kcal per serving",
      carbs: "8",
      protein: "38",
  },
  {
      id: 11,
      name: "Camarones al Mojo de Ajo",
      price: "18.95",
      image: "images/shrimp-2.jpg",
      shortDescription: "Shrimp sauteed in garlic butter",
      ingredients: "Shrimp, garlic, butter, lime, parsley",
      calories: "320 kcal per serving",
      carbs: "12",
      protein: "36",
  },
  {
      id: 12,
      name: "Camarones a la Diabla",
      price: "18.95",
      image: "images/spicy-shrimp.jpg",
      shortDescription: "Shrimp sauteed in spicy sauce",
      ingredients: "Shrimp, chile sauce, garlic, butter, spices",
      calories: "290 kcal per serving",
      carbs: "10",
      protein: "36",
  },
  {
      id: 13,
      name: "Sopa de Mariscos",
      price: "18.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Fish, shrimp, calamari and vegetables",
      ingredients: "Fish, shrimp, calamari, vegetables, tomato broth",
      calories: "380 kcal per serving",
      carbs: "25",
      protein: "45",
  },
  {
      id: 14,
      name: "Caldo Siete Mares",
      price: "19.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Seafood mix soup: fish, shrimp, crab legs, mussels, octopus and oysters",
      ingredients: "Fish, shrimp, crab, mussels, octopus, oysters, vegetables",
      calories: "420 kcal per serving",
      carbs: "28",
      protein: "52",
  },
  {
      id: 15,
      name: "Filete a la Plancha",
      price: "18.95",
      image: "images/Filete a la Plancha.jpg",
      shortDescription: "Fish fillet on the griddle",
      ingredients: "Fish fillet, butter, lime, seasoning",
      calories: "240 kcal per serving",
      carbs: "4",
      protein: "42",
  },
  {
      id: 16,
      name: "Filete al Mojo de Ajo",
      price: "18.95",
      image: "images/Fish fillet in garlic sauce.jpg",
      shortDescription: "Fish fillet in garlic sauce",
      ingredients: "Fish fillet, garlic, butter, lime, parsley",
      calories: "280 kcal per serving",
      carbs: "8",
      protein: "40",
  },
  {
      id: 17,
      name: "Filete Empanizado",
      price: "18.95",
      image: "images/Filete Empanizado.jpg",
      shortDescription: "Breaded fish fillet",
      ingredients: "Fish fillet, breadcrumbs, eggs, seasoning",
      calories: "380 kcal per serving",
      carbs: "32",
      protein: "38",
  },
  {
      id: 18,
      name: "Filete a la Diabla",
      price: "18.95",
      image: "images/dinner-entree.jpg",
      shortDescription: "Devil red spicy sauce",
      ingredients: "Fish fillet, chile sauce, garlic, butter, spices",
      calories: "260 kcal per serving",
      carbs: "6",
      protein: "40",
  },
  {
      id: 19,
      name: "Piña Rellena",
      price: "18.99",
      image: "images/dinner-entree.jpg",
      shortDescription: "Half pineapple stuffed with seafood mix and cheese. With your choice of creamy sauce or our-house Nayarit sauce",
      ingredients: "Pineapple, mixed seafood, cheese, choice of sauce",
      calories: "520 kcal per serving",
      carbs: "45",
      protein: "38",
  },
  {
      id: 20,
      name: "Langostinos",
      price: "24-49",
      image: "images/Langostinos.jpg",
      shortDescription: "Prawns Nayarit style. Medium: $24, Large: $49",
      ingredients: "Prawns, Nayarit sauce, seasonings",
      calories: "340 kcal per serving",
      carbs: "8",
      protein: "45",
  },
  {
      id: 21,
      name: "Molcajete Cora",
      price: "27.99",
      image: "images/dinner-entree.jpg",
      shortDescription: "Seafood mix in our house Nayarit sauce served in a stone mortar: Mussels, scallops, surimi, crab legs and octopus",
      ingredients: "Mussels, scallops, surimi, crab legs, octopus, Nayarit sauce",
      calories: "580 kcal per serving",
      carbs: "32",
      protein: "65",
  },
  {
      id: 23,
      name: "Chapuzón",
      price: "29-52",
      image: "images/dinner-entree.jpg",
      shortDescription: "Octopus, shrimp and oysters in Nayarit sauce. Small: $29, Large: $52",
      ingredients: "Octopus, shrimp, oysters, Nayarit sauce",
      calories: "420 kcal per serving",
      carbs: "18",
      protein: "58",
  },
  {
      id: 24,
      name: "Levantamuertos",
      price: "30-60",
      image: "images/dinner-entree.jpg",
      shortDescription: "Shrimp, scallops, octopus, mussels, surimi and crab legs in Nayarit sauce. Your choice from mild to hot. Small: $25, Large: $50",
      ingredients: "Shrimp, scallops, octopus, mussels, surimi, crab legs, Nayarit sauce",
      calories: "460 kcal per serving",
      carbs: "22",
      protein: "62",
  },
  {
      id: 25,
      name: "Camarones Cucaracha",
      price: "25-50",
      image: "images/dinner-entree.jpg",
      shortDescription: "Fried shrimp in spicy Huichol sauce Small: $25, Large: $50",
      ingredients: "Shrimp, Huichol sauce, spices",
      calories: "380 kcal per serving",
      carbs: "15",
      protein: "42",
  },
  {
      id: 26,
      name: "Camarones Aguachile",
      price: "16.99",
      image: "images/dinner-entree.jpg",
      shortDescription: "Raw shrimp marinated in lime juice and green serrano pepper sauce",
      ingredients: "Raw shrimp, lime juice, serrano peppers, onions, cucumber",
      calories: "220 kcal per serving",
      carbs: "8",
      protein: "38",
  },
  
  // Add more dinner items here
  ];
  const sopesProducts = [
  {
      id: 1,
      name: "Asada",
      price: "8.00",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  // Add more dinner items here
  ];
  const tostadasProducts = [
    {
      id: 1,
      name: "Asada",
      price: "4.25",
      image: "images/tostada-asada.jpg",
      shortDescription: "Grilled steak tostada",
      ingredients: "Corn tostada, grilled steak, refried beans, lettuce, tomato, cheese, sour cream",
      calories: "320 kcal per serving",
      carbs: "28",
      protein: "22",
  },
  {
      id: 2,
      name: "Lomo",
      price: "4.25",
      image: "images/lomo.jpg",
      shortDescription: "Pork loin tostada",
      ingredients: "Corn tostada, seasoned pork loin, refried beans, lettuce, tomato, cheese, sour cream",
      calories: "340 kcal per serving",
      carbs: "26",
      protein: "24",
  },
  {
      id: 3,
      name: "Pastor",
      price: "4.25",
      image: "images/pastor.jfif",
      shortDescription: "Marinated pork tostada",
      ingredients: "Corn tostada, marinated pork, refried beans, lettuce, tomato, cheese, pineapple, sour cream",
      calories: "350 kcal per serving",
      carbs: "30",
      protein: "23",
  },
  {
      id: 4,
      name: "Cuero o Pata de Puerco",
      price: "4.25",
      image: "images/tostada-pastor.jfif",
      shortDescription: "Pork skin or pork feet",
      ingredients: "Corn tostada, pork skin or feet, refried beans, lettuce, tomato, cheese, sour cream",
      calories: "380 kcal per serving",
      carbs: "25",
      protein: "18",
  },
  // Add more dinner items here
  ];
  const tamalesProducts = [
  {
      id: 1,
      name: "Pollo",
      price: "8.00",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  // Add more dinner items here
  ];
  const quesadillasProducts = [
  {
      id: 1,
      name: "Regular",
      price: "8.00",
      image: "images/dinner-entree.jpg",
      shortDescription: "Perfect dinner choice",
      ingredients: "Steak, potatoes, sauce",
      calories: "450 kcal",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
  },
  // Add more dinner items here
  ];
  
  
  
  // Use event delegation for collapsible buttons
  document.addEventListener('click', function(event) {
    // Check if clicked element is a collapsible button
    if (event.target.classList.contains('collapsible')) {
        event.target.classList.toggle('active');
        const content = event.target.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
  });
  
  // Function to generate HTML for food products
  const renderFoodProducts = (products, tabId) => {
    let tabContent = document.getElementById(tabId);
    
    if (!tabContent) {
        tabContent = document.createElement('div');
        tabContent.className = 'food-item';
        tabContent.id = tabId;
        document.querySelector('.tabs').appendChild(tabContent);
    }
    
    const foodItemsHTML = products.map(food => `
        <div class="food-container animated fade-in">
            <div class="food-image">
                <img src="${food.image}" alt="${food.name}">
            </div>
            <div class="food-info">
                <h3>${food.name}</h3>
                <h4>$${food.price}</h4>
            </div>
            <div class="food-explained">
                <p>${food.shortDescription}</p>
            </div>
            
            <div class="collapsible-wrapper">
                <button class="collapsible" type="button">More</button>
                <div class="collapsible-content">
                    <span>Ingredients: ${food.ingredients}</span>
                    <span>Calories: ${food.calories}</span>
                    <span>Carbs: ${food.carbs}g</span>
                    <span>Protein: ${food.protein}g</span>
                </div>
            </div>
        </div>
    `).join('');
    
    tabContent.innerHTML = foodItemsHTML;
  };
  
  // Handle tab switching
  document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-id');
        
        // Remove active class from all tabs
        document.querySelectorAll('.food-item').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Add active class to selected tab
        document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Initialize menu when page loads
  document.addEventListener('DOMContentLoaded', () => {
    renderFoodProducts(tacosProducts, 'tacos');
    renderFoodProducts(burritosProducts, 'burritos');
    renderFoodProducts(chimichangasProducts, 'chimichangas');
    renderFoodProducts(tortasProducts, 'tortas');
    renderFoodProducts(dinnersProducts, 'dinners');
    renderFoodProducts(mariscosProducts, 'mariscos');
    renderFoodProducts(sopesProducts, 'sopes');
    renderFoodProducts(tostadasProducts, 'tostadas');
    renderFoodProducts(tamalesProducts, 'tamales');
    renderFoodProducts(quesadillasProducts, 'quesadillas');
    
    // Make first tab active by default
    document.getElementById('tacos').classList.add('active');
  });
  
  
  
  /*=============== REPLAYS ANIMATION WHEN IN VIEWPORT ===============*/ 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Remove to re-trigger animation
      }
    });
  }, { threshold: 0.2 });
  
  document.querySelectorAll('.animated').forEach(element => {
    observer.observe(element);
  });
  
  
  
  /*=============== REVIEW CAROUSEL ===============*/
  document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const totalSlides = slides.length;
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicatorsContainer = document.getElementById('indicators');
  
  let currentIndex = 0;
  let autoPlayInterval = null;
  let userInteracted = false;
  let cooldownTimer = null;
  
  const AUTO_PLAY_INTERVAL = 5000; // 5 seconds
  const COOLDOWN_DURATION = 30000; // 30 seconds
  
  // Create indicators
  slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
      handleUserInteraction();
      goToSlide(index);
    });
    indicatorsContainer.appendChild(indicator);
  });
  
  const indicators = Array.from(document.querySelectorAll('.indicator'));
  
  function updateSlides() {
    slides.forEach((slide, index) => {
      // First remove all classes
      slide.classList.remove('active', 'prev', 'next');
      
      // Then assign appropriate class based on index
      if (index === currentIndex) {
        slide.classList.add('active');
      } else if (index === getPrevIndex()) {
        slide.classList.add('prev');
      } else if (index === getNextIndex()) {
        slide.classList.add('next');
      }
    });
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  function getPrevIndex() {
    return (currentIndex - 1 + totalSlides) % totalSlides;
  }
  
  function getNextIndex() {
    return (currentIndex + 1) % totalSlides;
  }
  
  function goToSlide(index) {
    currentIndex = index;
    updateSlides();
  }
  
  function goToPrev() {
    currentIndex = getPrevIndex();
    updateSlides();
  }
  
  function goToNext() {
    currentIndex = getNextIndex();
    updateSlides();
  }
  
  function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      if (!userInteracted) {
        goToNext();
      }
    }, AUTO_PLAY_INTERVAL);
  }
  
  function handleUserInteraction() {
    userInteracted = true;
    if (cooldownTimer) clearTimeout(cooldownTimer);
    
    cooldownTimer = setTimeout(() => {
      userInteracted = false;
    }, COOLDOWN_DURATION);
  }
  
  // Initialize the carousel
  updateSlides();
  startAutoPlay();
  
  // Event listeners for navigation buttons - using explicit function calls
  prevBtn.addEventListener('click', function() {
    handleUserInteraction();
    goToPrev();
  });
  
  nextBtn.addEventListener('click', function() {
    handleUserInteraction();
    goToNext();
  });
  
  // Allow clicking on each slide to navigate
  slides.forEach((slide) => {
    slide.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      
      if (slideIndex === getPrevIndex()) {
        goToPrev();
        handleUserInteraction();
      } else if (slideIndex === getNextIndex()) {
        goToNext();
        handleUserInteraction();
      }
    });
  });
  });