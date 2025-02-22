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
      shortDescription: "Grilled marinated beef steak, a classic Mexican taco filling known for its smoky, savory flavor",
      ingredients: "Grilled marinated beef steak, diced onions, fresh cilantro, lime wedges, corn tortillas, optional salsa",
      calories: "210 kcal",
      carbs: "13",
      protein: "18",
    },
    {
      id: 2,
      name: "Albañilería",
      price: "3.50",
      image: "images/tacos-albinilero.jpg",
      shortDescription: "A hearty 'construction worker' taco featuring eggs, beans, and chorizo",
      ingredients: "Scrambled eggs, refried beans, Mexican chorizo, diced onions, cilantro, corn tortillas",
      calories: "280 kcal",
      carbs: "15",
      protein: "16",
    },
    {
      id: 3,
      name: "Milanesa",
      price: "3.50",
      image: "images/milanesa.jpg",
      shortDescription: "Crispy breaded beef cutlet served with fresh garnishes",
      ingredients: "Breaded beef cutlet, shredded lettuce, diced tomatoes, onions, avocado, corn tortillas",
      calories: "290 kcal",
      carbs: "18",
      protein: "22",
    },
    {
      id: 4,
      name: "Chile Relleno",
      price: "3.50",
      image: "images/tacos-relleno.jpg",
      shortDescription: "Battered and fried poblano pepper stuffed with cheese",
      ingredients: "Poblano chile, Oaxaca cheese, egg batter, tomato sauce, corn tortillas",
      calories: "260 kcal",
      carbs: "16",
      protein: "12",
    },
    {
      id: 5,
      name: "Tripitas",
      price: "3.50",
      image: "images/Tripa_tacos.jpg",
      shortDescription: "Crispy grilled beef tripe, a delicacy known for its unique texture",
      ingredients: "Grilled beef tripe, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "220 kcal",
      carbs: "13",
      protein: "15",
    },
    {
      id: 6,
      name: "Lengua",
      price: "3.50",
      image: "images/tacos-lengua.jpg",
      shortDescription: "Tender braised beef tongue, prized for its rich, mild flavor",
      ingredients: "Braised beef tongue, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "200 kcal",
      carbs: "13",
      protein: "17",
    },
    {
      id: 7,
      name: "Camaron",
      price: "3.50",
      image: "images/Tacos_de_camarón.jpg",
      shortDescription: "Seasoned grilled shrimp with fresh garnishes",
      ingredients: "Grilled shrimp, cabbage slaw, pico de gallo, chipotle crema, corn tortillas",
      calories: "180 kcal",
      carbs: "14",
      protein: "14",
    },
    {
      id: 8,
      name: "Pescado",
      price: "3.50",
      image: "images/Tacos_de_pescado.jpg",
      shortDescription: "Battered fish fillet with tangy slaw and crema",
      ingredients: "Battered white fish, cabbage slaw, pico de gallo, lime crema, corn tortillas",
      calories: "190 kcal",
      carbs: "15",
      protein: "13",
    },
    {
      id: 9,
      name: "Cabeza",
      price: "3.50",
      image: "images/tacos-cabeza.jfif",
      shortDescription: "Tender braised beef head meat, rich in flavor",
      ingredients: "Braised beef head meat, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "210 kcal",
      carbs: "13",
      protein: "16",
    },
    {
      id: 10,
      name: "Pastor",
      price: "3.50",
      image: "images/taco-pastor.jpg",
      shortDescription: "Marinated pork with pineapple, cooked on a vertical spit",
      ingredients: "Adobo-marinated pork, diced pineapple, onions, cilantro, corn tortillas",
      calories: "230 kcal",
      carbs: "14",
      protein: "15",
    },
    {
      id: 11,
      name: "Pollo",
      price: "3.50",
      image: "images/taco-pollo.jpg",
      shortDescription: "Grilled marinated chicken with fresh garnishes",
      ingredients: "Grilled chicken, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "190 kcal",
      carbs: "13",
      protein: "16",
    },
    {
      id: 12,
      name: "Suadero",
      price: "3.50",
      image: "images/tacos-suardero.jpg",
      shortDescription: "Tender beef cut from between the belly and leg",
      ingredients: "Grilled suadero beef, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "220 kcal",
      carbs: "13",
      protein: "17",
    },
    {
      id: 13,
      name: "Barbacoa",
      price: "3.50",
      image: "images/Tacos_de_Barbacoa.jpg",
      shortDescription: "Traditional slow-cooked beef, tender and juicy",
      ingredients: "Slow-cooked beef, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "240 kcal",
      carbs: "13",
      protein: "19",
    },
    {
      id: 14,
      name: "Buche",
      price: "3.50",
      image: "images/tacos-buche.jpg",
      shortDescription: "Tender pork stomach, a traditional Mexican delicacy",
      ingredients: "Braised pork stomach, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "200 kcal",
      carbs: "13",
      protein: "15",
    },
    {
      id: 15,
      name: "Chorizo",
      price: "3.50",
      image: "images/tacos-chorizo.jpg",
      shortDescription: "Spicy Mexican sausage with bold flavors",
      ingredients: "Mexican chorizo, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "270 kcal",
      carbs: "13",
      protein: "14",
    },
    {
      id: 16,
      name: "Lomo",
      price: "3.50",
      image: "images/lomo.jpg",
      shortDescription: "Tender pork loin marinated in Mexican spices",
      ingredients: "Grilled marinated pork loin, diced onions, cilantro, lime wedges, corn tortillas",
      calories: "200 kcal",
      carbs: "13",
      protein: "17",
    },
    {
      id: 17,
      name: "Birria",
      price: "4.00",
      image: "images/taco-birria.jpg",
      shortDescription: "Rich, stewed meat traditionally made with goat or beef",
      ingredients: "Stewed beef or goat, mexican spices, onions, cilantro, corn tortillas, consomé for dipping",
      calories: "250 kcal",
      carbs: "13",
      protein: "18",
    },
    {
      id: 18,
      name: "Vegetariano",
      price: "2.75",
      image: "images/tacos-veg.jfif",
      shortDescription: "Mixed grilled vegetables with Mexican seasonings",
      ingredients: "Grilled peppers, onions, mushrooms, zucchini, corn tortillas, optional cheese",
      calories: "150 kcal",
      carbs: "15",
      protein: "5",
    },
    {
      id: 19,
      name: "Frijoles",
      price: "2.75",
      image: "images/tacos-frijoles.jpg",
      shortDescription: "Creamy refried pinto beans with Mexican seasonings",
      ingredients: "Refried pinto beans, queso fresco, diced onions, corn tortillas",
      calories: "180 kcal",
      carbs: "22",
      protein: "7",
    }
  ];
  const burritosProducts = [
    {
      id: 1,
      name: "Asada",
      price: "9.99",
      image: "images/burrito.jpg",
      shortDescription: "Grilled marinated steak burrito with traditional fixings",
      ingredients: "Large flour tortilla, grilled steak, Mexican rice, refried beans, pico de gallo, guacamole, cheese, sour cream",
      calories: "850 kcal",
      carbs: "72",
      protein: "45",
    },
    {
      id: 2,
      name: "Milanesa de Res",
      price: "10.99",
      image: "images/milanesa-de-res.jfif",
      shortDescription: "Breaded beef cutlet burrito with fresh garnishes",
      ingredients: "Large flour tortilla, breaded beef cutlet, Mexican rice, refried beans, lettuce, tomato, cheese, sour cream",
      calories: "890 kcal",
      carbs: "75",
      protein: "48",
    },
    {
      id: 3,
      name: "Vegetariano",
      price: "8.99",
      image: "images/burrito-veg.jpeg",
      shortDescription: "Grilled vegetable burrito with rice and beans",
      ingredients: "Large flour tortilla, grilled peppers, onions, mushrooms, zucchini, Mexican rice, refried beans, cheese, guacamole",
      calories: "720 kcal",
      carbs: "82",
      protein: "24",
    },
    {
      id: 4,
      name: "Suadero",
      price: "9.99",
      image: "images/suadero.jpg",
      shortDescription: "Tender beef cut burrito with classic toppings",
      ingredients: "Large flour tortilla, suadero beef, Mexican rice, refried beans, onions, cilantro, cheese, salsa",
      calories: "830 kcal",
      carbs: "72",
      protein: "44",
    },
    {
      id: 5,
      name: "Tripa",
      price: "MP$",
      image: "images/tripe.jfif",
      shortDescription: "Crispy beef tripe burrito with traditional garnishes",
      ingredients: "Large flour tortilla, crispy beef tripe, Mexican rice, refried beans, onions, cilantro, cheese, salsa",
      calories: "780 kcal",
      carbs: "71",
      protein: "38",
    },
    {
      id: 6,
      name: "Lomo",
      price: "9.99",
      image: "images/lomo.jpg",
      shortDescription: "Marinated pork loin burrito with fresh toppings",
      ingredients: "Large flour tortilla, grilled pork loin, Mexican rice, refried beans, pico de gallo, guacamole, cheese",
      calories: "820 kcal",
      carbs: "72",
      protein: "42",
    },
    {
      id: 7,
      name: "Lengua",
      price: "MP$",
      image: "images/lengua.jfif",
      shortDescription: "Tender beef tongue burrito with classic garnishes",
      ingredients: "Large flour tortilla, braised beef tongue, Mexican rice, refried beans, onions, cilantro, cheese",
      calories: "810 kcal",
      carbs: "71",
      protein: "43",
    },
    {
      id: 8,
      name: "Cabeza",
      price: "9.99",
      image: "images/cabeza.jpg",
      shortDescription: "Tender beef head meat burrito with traditional fixings",
      ingredients: "Large flour tortilla, beef head meat, Mexican rice, refried beans, onions, cilantro, cheese, salsa",
      calories: "820 kcal",
      carbs: "72",
      protein: "41",
    },
    {
      id: 9,
      name: "Albañileria",
      price: "9.99",
      image: "images/albanero.jpg",
      shortDescription: "Hearty construction worker's burrito with eggs and chorizo",
      ingredients: "Large flour tortilla, scrambled eggs, chorizo, refried beans, Mexican rice, cheese, salsa",
      calories: "890 kcal",
      carbs: "74",
      protein: "39",
    },
    {
      id: 10,
      name: "Pollo",
      price: "9.99",
      image: "images/pollo.jfif",
      shortDescription: "Grilled chicken burrito with fresh garnishes",
      ingredients: "Large flour tortilla, grilled chicken, Mexican rice, refried beans, lettuce, pico de gallo, cheese, sour cream",
      calories: "780 kcal",
      carbs: "72",
      protein: "41",
    },
    {
      id: 11,
      name: "Chile Relleno",
      price: "9.99",
      image: "images/chile-relleno.jpg",
      shortDescription: "Cheese-stuffed poblano pepper burrito with rice and beans",
      ingredients: "Large flour tortilla, battered poblano pepper, cheese, Mexican rice, refried beans, lettuce, sour cream",
      calories: "820 kcal",
      carbs: "78",
      protein: "32",
    },
    {
      id: 12,
      name: "Jamón",
      price: "9.99",
      image: "images/jamon.jfif",
      shortDescription: "Mexican-style ham burrito with melted cheese",
      ingredients: "Large flour tortilla, grilled ham, Mexican rice, refried beans, cheese, lettuce, tomato, sour cream",
      calories: "790 kcal",
      carbs: "73",
      protein: "38",
    },
    {
      id: 13,
      name: "Chorizo",
      price: "9.99",
      image: "images/chorizo.jfif",
      shortDescription: "Spicy Mexican sausage burrito with traditional fixings",
      ingredients: "Large flour tortilla, Mexican chorizo, Mexican rice, refried beans, onions, cilantro, cheese, salsa",
      calories: "860 kcal",
      carbs: "72",
      protein: "37",
    },
    {
      id: 14,
      name: "Camarón",
      price: "14.99",
      image: "images/spicy-shrimp.jpg",
      shortDescription: "Grilled shrimp burrito with fresh vegetables",
      ingredients: "Large flour tortilla, seasoned shrimp, Mexican rice, refried beans, cabbage slaw, pico de gallo, chipotle crema",
      calories: "750 kcal",
      carbs: "73",
      protein: "39",
    },
    {
      id: 15,
      name: "Pollo & Asada",
      price: "9.99",
      image: "images/carne-y-pollo.jpg",
      shortDescription: "Combination of grilled chicken and steak burrito",
      ingredients: "Large flour tortilla, grilled chicken, grilled steak, Mexican rice, refried beans, pico de gallo, cheese, sour cream",
      calories: "880 kcal",
      carbs: "72",
      protein: "52",
    },
    {
      id: 16,
      name: "Pastor",
      price: "9.99",
      image: "images/pastor.jpg",
      shortDescription: "Marinated pork with pineapple burrito",
      ingredients: "Large flour tortilla, adobo-marinated pork, pineapple, Mexican rice, refried beans, onions, cilantro, cheese",
      calories: "840 kcal",
      carbs: "74",
      protein: "41",
    },
    {
      id: 17,
      name: "Combinación",
      price: "9.99",
      image: "images/catering-asada.jpg",
      shortDescription: "Choose any two meat combination burrito",
      ingredients: "Large flour tortilla, choice of two meats, Mexican rice, refried beans, pico de gallo, cheese, sour cream",
      calories: "870 kcal",
      carbs: "72",
      protein: "48",
    }
  // Add more dinner items here
  ];
  const chimichangasProducts = [
    {
      id: 1,
      name: "Asada",
      price: "9.99",
      image: "images/chimichanga-bistec.jpg",
      shortDescription: "Deep-fried burrito filled with grilled steak and traditional fixings",
      ingredients: "Large flour tortilla, grilled steak, Mexican rice, refried beans, cheese, topped with sour cream, guacamole, pico de gallo",
      calories: "980 kcal",
      carbs: "76",
      protein: "45",
    },
    {
      id: 2,
      name: "Milanesa de Res",
      price: "10.99",
      image: "images/milanesa-de-res.jfif",
      shortDescription: "Crispy chimichanga with breaded beef cutlet and fresh garnishes",
      ingredients: "Large flour tortilla, breaded beef cutlet, Mexican rice, refried beans, cheese, topped with lettuce, tomato, sour cream",
      calories: "1020 kcal",
      carbs: "78",
      protein: "48",
    },
    {
      id: 3,
      name: "Vegetariano",
      price: "8.99",
      image: "images/dinner-entree.jpg",
      shortDescription: "Vegetable-filled chimichanga with rice and beans",
      ingredients: "Large flour tortilla, grilled peppers, onions, mushrooms, zucchini, Mexican rice, refried beans, cheese, topped with guacamole",
      calories: "850 kcal",
      carbs: "86",
      protein: "24",
    },
    {
      id: 4,
      name: "Suadero",
      price: "9.99",
      image: "images/suadero.jpg",
      shortDescription: "Deep-fried burrito with tender beef cut and classic toppings",
      ingredients: "Large flour tortilla, suadero beef, Mexican rice, refried beans, cheese, topped with sour cream, guacamole, salsa",
      calories: "960 kcal",
      carbs: "76",
      protein: "44",
    },
    {
      id: 5,
      name: "Tripa",
      price: "MP$",
      image: "images/tripe.jfif",
      shortDescription: "Crispy beef tripe chimichanga with traditional garnishes",
      ingredients: "Large flour tortilla, crispy beef tripe, Mexican rice, refried beans, cheese, topped with onions, cilantro, salsa",
      calories: "910 kcal",
      carbs: "75",
      protein: "38",
    },
    {
      id: 6,
      name: "Lomo",
      price: "9.99",
      image: "images/lomo.jpg",
      shortDescription: "Marinated pork loin chimichanga with fresh toppings",
      ingredients: "Large flour tortilla, grilled pork loin, Mexican rice, refried beans, cheese, topped with sour cream, guacamole, pico de gallo",
      calories: "950 kcal",
      carbs: "76",
      protein: "42",
    },
    {
      id: 7,
      name: "Lengua",
      price: "MP$",
      image: "images/lengua.jfif",
      shortDescription: "Tender beef tongue chimichanga with classic garnishes",
      ingredients: "Large flour tortilla, braised beef tongue, Mexican rice, refried beans, cheese, topped with onions, cilantro, salsa",
      calories: "940 kcal",
      carbs: "75",
      protein: "43",
    },
    {
      id: 8,
      name: "Cabeza",
      price: "9.99",
      image: "images/cabeza.jpg",
      shortDescription: "Beef head meat chimichanga with traditional fixings",
      ingredients: "Large flour tortilla, beef head meat, Mexican rice, refried beans, cheese, topped with onions, cilantro, salsa",
      calories: "950 kcal",
      carbs: "76",
      protein: "41",
    },
    {
      id: 9,
      name: "Albañileria",
      price: "9.99",
      image: "images/albanero.jpg",
      shortDescription: "Hearty construction worker's chimichanga with eggs and chorizo",
      ingredients: "Large flour tortilla, scrambled eggs, chorizo, refried beans, Mexican rice, cheese, topped with salsa roja",
      calories: "1020 kcal",
      carbs: "78",
      protein: "39",
    },
    {
      id: 10,
      name: "Pollo",
      price: "9.99",
      image: "images/pollo.jfif",
      shortDescription: "Grilled chicken chimichanga with fresh garnishes",
      ingredients: "Large flour tortilla, grilled chicken, Mexican rice, refried beans, cheese, topped with lettuce, pico de gallo, sour cream",
      calories: "910 kcal",
      carbs: "76",
      protein: "41",
    },
    {
      id: 11,
      name: "Chile Relleno",
      price: "9.99",
      image: "images/chile-relleno.jpg",
      shortDescription: "Cheese-stuffed poblano pepper chimichanga with rice and beans",
      ingredients: "Large flour tortilla, battered poblano pepper, cheese, Mexican rice, refried beans, topped with ranchero sauce, sour cream",
      calories: "950 kcal",
      carbs: "82",
      protein: "32",
    },
    {
      id: 12,
      name: "Jamón",
      price: "9.99",
      image: "images/jamon.jfif",
      shortDescription: "Mexican-style ham chimichanga with melted cheese",
      ingredients: "Large flour tortilla, grilled ham, Mexican rice, refried beans, cheese, topped with lettuce, tomato, sour cream",
      calories: "920 kcal",
      carbs: "77",
      protein: "38",
    },
    {
      id: 13,
      name: "Chorizo",
      price: "9.99",
      image: "images/chorizo.jfif",
      shortDescription: "Spicy Mexican sausage chimichanga with traditional fixings",
      ingredients: "Large flour tortilla, Mexican chorizo, Mexican rice, refried beans, cheese, topped with onions, cilantro, salsa",
      calories: "990 kcal",
      carbs: "76",
      protein: "37",
    },
    {
      id: 14,
      name: "Camarón",
      price: "14.99",
      image: "images/spicy-shrimp.jpg",
      shortDescription: "Grilled shrimp chimichanga with fresh vegetables",
      ingredients: "Large flour tortilla, seasoned shrimp, Mexican rice, refried beans, cheese, topped with cabbage slaw, chipotle crema",
      calories: "880 kcal",
      carbs: "77",
      protein: "39",
    },
    {
      id: 15,
      name: "Pollo & Asada",
      price: "9.99",
      image: "images/carne-y-pollo.jpg",
      shortDescription: "Combination chicken and steak chimichanga with fresh toppings",
      ingredients: "Large flour tortilla, grilled chicken, grilled steak, Mexican rice, refried beans, cheese, topped with sour cream, guacamole",
      calories: "1010 kcal",
      carbs: "76",
      protein: "52",
    },
    {
      id: 16,
      name: "Pastor",
      price: "9.99",
      image: "images/pastor.jpg",
      shortDescription: "Marinated pork and pineapple chimichanga with classic garnishes",
      ingredients: "Large flour tortilla, adobo-marinated pork, pineapple, Mexican rice, refried beans, cheese, topped with onions, cilantro",
      calories: "970 kcal",
      carbs: "78",
      protein: "41",
    },
    {
      id: 17,
      name: "Combinación",
      price: "9.99",
      image: "images/catering-asada.jpg",
      shortDescription: "Choose any two meat combination chimichanga",
      ingredients: "Large flour tortilla, choice of two meats, Mexican rice, refried beans, cheese, topped with sour cream, guacamole, pico de gallo",
      calories: "1000 kcal",
      carbs: "76",
      protein: "48",
    }
  ];
  const tortasProducts = [
    {
      id: 1,
      name: "Asada",
      price: "8.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Grilled steak sandwich with traditional garnishes",
      ingredients: "Mexican telera roll, grilled steak, refried beans, avocado, tomato, onion, jalapeños, mayo, shredded lettuce",
      calories: "680 kcal",
      carbs: "52",
      protein: "38",
    },
    {
      id: 2,
      name: "Lomo",
      price: "8.99",
      image: "images/lomo.jpg",
      shortDescription: "Marinated pork loin sandwich with fresh toppings",
      ingredients: "Mexican telera roll, grilled pork loin, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "650 kcal",
      carbs: "52",
      protein: "35",
    },
    {
      id: 3,
      name: "Jamón",
      price: "8.99",
      image: "images/jamon.jfif",
      shortDescription: "Mexican-style ham sandwich with melted cheese",
      ingredients: "Mexican telera roll, sliced ham, melted cheese, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "630 kcal",
      carbs: "53",
      protein: "32",
    },
    {
      id: 4,
      name: "Lengua",
      price: "8.00",
      image: "images/lengua.jfif",
      shortDescription: "Tender beef tongue sandwich with classic garnishes",
      ingredients: "Mexican telera roll, braised beef tongue, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "640 kcal",
      carbs: "52",
      protein: "36",
    },
    {
      id: 5,
      name: "Milanesa de Pollo",
      price: "10.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Breaded chicken cutlet sandwich with fresh vegetables",
      ingredients: "Mexican telera roll, breaded chicken cutlet, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "720 kcal",
      carbs: "54",
      protein: "39",
    },
    {
      id: 6,
      name: "Milanesa de Res",
      price: "10.99",
      image: "images/milanesa.jpg",
      shortDescription: "Breaded beef cutlet sandwich with traditional toppings",
      ingredients: "Mexican telera roll, breaded beef cutlet, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "740 kcal",
      carbs: "54",
      protein: "41",
    },
    {
      id: 7,
      name: "Pastor",
      price: "8.99",
      image: "images/pastor.jpg",
      shortDescription: "Marinated pork with pineapple and classic garnishes",
      ingredients: "Mexican telera roll, adobo-marinated pork, pineapple, refried beans, avocado, onion, cilantro, mayo",
      calories: "670 kcal",
      carbs: "54",
      protein: "34",
    },
    {
      id: 8,
      name: "Chorizo",
      price: "8.99",
      image: "images/chorizo.jfif",
      shortDescription: "Spicy Mexican sausage sandwich with traditional fixings",
      ingredients: "Mexican telera roll, Mexican chorizo, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "690 kcal",
      carbs: "52",
      protein: "31",
    },
    {
      id: 9,
      name: "Pollo",
      price: "8.99",
      image: "images/pollo.jfif",
      shortDescription: "Grilled chicken sandwich with fresh vegetables",
      ingredients: "Mexican telera roll, grilled chicken, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "620 kcal",
      carbs: "52",
      protein: "35",
    },
    {
      id: 10,
      name: "Vegetariana",
      price: "7.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Grilled vegetable sandwich with Mexican seasonings",
      ingredients: "Mexican telera roll, grilled peppers, mushrooms, onions, zucchini, refried beans, avocado, lettuce, tomato, mayo",
      calories: "540 kcal",
      carbs: "58",
      protein: "18",
    },
    {
      id: 11,
      name: "Cubana",
      price: "10.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Loaded sandwich with multiple meats and cheese",
      ingredients: "Mexican telera roll, ham, breaded beef, chorizo, cheese, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "890 kcal",
      carbs: "54",
      protein: "48",
    },
    {
      id: 12,
      name: "Hawaiiana",
      price: "10.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Ham and pineapple sandwich with cheese",
      ingredients: "Mexican telera roll, ham, pineapple, cheese, refried beans, avocado, tomato, onion, jalapeños, mayo, lettuce",
      calories: "650 kcal",
      carbs: "56",
      protein: "32",
    },
    {
      id: 13,
      name: "Ahogadas",
      price: "9.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Drowned sandwich in spicy tomato sauce with carnitas",
      ingredients: "Birote roll, pork carnitas, refried beans, tomato sauce, onions, served with lime and spicy sauce",
      calories: "680 kcal",
      carbs: "58",
      protein: "34",
    },
    {
      id: 14,
      name: "Albañileria",
      price: "9.99",
      image: "images/albanero.jpg",
      shortDescription: "Hearty construction worker's sandwich with eggs and chorizo",
      ingredients: "Mexican telera roll, scrambled eggs, chorizo, refried beans, avocado, tomato, onion, jalapeños, mayo",
      calories: "720 kcal",
      carbs: "54",
      protein: "33",
    },
    {
      id: 15,
      name: "Pambazo",
      price: "9.99",
      image: "images/torta-asada.jpg",
      shortDescription: "Traditional sandwich dipped in red guajillo sauce",
      ingredients: "Mexican bread dipped in guajillo sauce, potatoes, chorizo, lettuce, cream, cheese, refried beans",
      calories: "710 kcal",
      carbs: "62",
      protein: "28",
    }
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
      price: "4.25",
      image: "images/sope-asada.jpg",
      shortDescription: "Grilled marinated steak on a thick handmade corn base with traditional toppings",
      ingredients: "Thick corn tortilla base, grilled steak, refried beans, lettuce, crema, queso fresco, salsa, avocado",
      calories: "380 kcal",
      carbs: "28",
      protein: "22",
    },
    {
      id: 2,
      name: "Pastor",
      price: "4.25",
      image: "images/pastor.jpg",
      shortDescription: "Marinated pork with pineapple on a handmade corn base with classic garnishes",
      ingredients: "Thick corn tortilla base, adobo-marinated pork, pineapple, refried beans, lettuce, crema, queso fresco, salsa",
      calories: "360 kcal",
      carbs: "29",
      protein: "19",
    },
    {
      id: 3,
      name: "Pollo",
      price: "4.25",
      image: "images/pollo.jfif",
      shortDescription: "Seasoned grilled chicken on a thick corn base with fresh toppings",
      ingredients: "Thick corn tortilla base, grilled chicken, refried beans, lettuce, crema, queso fresco, salsa, avocado",
      calories: "340 kcal",
      carbs: "28",
      protein: "20",
    },
    {
      id: 4,
      name: "Picadillo",
      price: "4.25",
      image: "images/Mexican_picadillo.jpg",
      shortDescription: "Seasoned ground beef with potatoes on a thick corn base with traditional garnishes",
      ingredients: "Thick corn tortilla base, seasoned ground beef, potatoes, refried beans, lettuce, crema, queso fresco, salsa",
      calories: "370 kcal",
      carbs: "31",
      protein: "21",
    },
    {
      id: 5,
      name: "Lomo",
      price: "4.25",
      image: "images/lomo.jpg",
      shortDescription: "Marinated pork loin on a thick corn base with classic Mexican toppings",
      ingredients: "Thick corn tortilla base, grilled pork loin, refried beans, lettuce, crema, queso fresco, salsa, avocado",
      calories: "350 kcal",
      carbs: "28",
      protein: "21",
    }
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
      price: "2.00",
      image: "images/tamales-pollo.jpg",
      shortDescription: "Shredded chicken in red chile sauce wrapped in traditional corn masa",
      ingredients: "Corn masa, shredded chicken, red chile sauce, garlic, onions, Mexican spices, wrapped in corn husks",
      calories: "290 kcal",
      carbs: "32",
      protein: "14",
    },
    {
      id: 2,
      name: "Puerco",
      price: "2.00",
      image: "images/tamales-pork.jpg",
      shortDescription: "Tender pork in red chile sauce enveloped in soft corn masa",
      ingredients: "Corn masa, shredded pork, red chile sauce, garlic, onions, Mexican spices, wrapped in corn husks",
      calories: "310 kcal",
      carbs: "32",
      protein: "15",
    },
    {
      id: 3,
      name: "Rajas",
      price: "2.00",
      image: "images/tamales-queso.jpg",
      shortDescription: "Poblano pepper strips with cheese in seasoned corn masa",
      ingredients: "Corn masa, poblano peppers, queso fresco, onions, Mexican cream, wrapped in corn husks",
      calories: "280 kcal",
      carbs: "33",
      protein: "8",
    },
    {
      id: 4,
      name: "Elote",
      price: "3.50",
      image: "images/tamale.jpg",
      shortDescription: "Sweet corn filling with cheese in traditional corn masa",
      ingredients: "Corn masa, sweet corn, Mexican cheese, cream, butter, sugar, wrapped in corn husks",
      calories: "295 kcal",
      carbs: "38",
      protein: "7",
    }
  ];
  const quesadillasProducts = [
    {
      id: 1,
      name: "Regular",
      price: "2.50",
      image: "images/Quesadilla-regular.jpg",
      shortDescription: "Traditional cheese quesadilla with melted Oaxaca cheese",
      ingredients: "Large flour tortilla, Oaxaca cheese, optional garnishes: sour cream, guacamole, pico de gallo",
      calories: "320 kcal",
      carbs: "26",
      protein: "14",
    },
    {
      id: 2,
      name: "Con Carne",
      price: "3.75",
      image: "images/Quesadilla-carne.jfif",
      shortDescription: "Grilled steak and melted cheese quesadilla with traditional garnishes",
      ingredients: "Large flour tortilla, grilled steak, Oaxaca cheese, onions, cilantro, optional garnishes: sour cream, guacamole, pico de gallo",
      calories: "440 kcal",
      carbs: "27",
      protein: "28",
    },
    {
      id: 3,
      name: "Con Camarón",
      price: "4.25",
      image: "images/spicy-shrimp.jpg",
      shortDescription: "Seasoned shrimp and cheese quesadilla with fresh garnishes",
      ingredients: "Large flour tortilla, grilled shrimp, Oaxaca cheese, onions, bell peppers, optional garnishes: sour cream, guacamole, pico de gallo",
      calories: "380 kcal",
      carbs: "27",
      protein: "24",
    }
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