const restaurants = [
  {
    id: "12345",
    name: "Big cheese burger",
    image:
      "https://i.postimg.cc/brt1tJGP/big-mac-burger-closeup-png-ycwp4i11clmqtjde-ycwp4i11clmqtjde.png",
    description:
      "Our simple, classic cheeseburger begins with a 100% pure beef burger ",
    rating: "4+",
    burn: "300",
    time: "5-10min",
    price: 55,
    type: "Hamburguer",
  },
  {
    id: 2341,
    name: "Medium cheese burger",
    image:
      "https://i.postimg.cc/3R6gNpx9/cefec1b68d9e5dc15e390be7108bab06-removebg-preview.png",
    description:
      "A delicious Medium Cheeseburger with juicy patty, melted cheese, fresh lettuce",
    rating: "2+",
    burn: "250",
    time: "4-15min",
    price: 75,
    type: "Hamburguer",
  },
  {
    id: 9876,
    name: "Pizza cheese",
    image:
      "https://i.postimg.cc/NM37jTNY/pizza-with-ai-generated-free-png.webp",
    description:
      "A classic Cheese Pizza with a rich tomato sauce, melted mozzarella.",
    rating: "5+",
    burn: "500",
    time: "2-5min",
    price: 15,
    type: "Pizza",
  },
  {
    id: 43212,
    name: "Tacos Supreme",
    image:
      "https://i.postimg.cc/xTrtfr7H/pngtree-mexican-taco-crepes-with-lemon-sauce-psd-transparent-png-image-9121918-removebg-preview.png",
    description:
      "Tacos Supreme loaded with seasoned beef, sour cream, shredded cheese.",
    rating: "5+",
    burn: "654",
    time: "30-45min",
    price: 25,
    type: "Mexican",
  },
  {
    id: 421546,
    name: "Takikomi gohan",
    image:
      "https://i.postimg.cc/NjD4kK07/png-transparent-japanese-cuisine-takikomi-gohan-tempura-asian-cuisine-fried-chicken-rice-bowl-food-r.png",
    description:
      "Takikomi Gohan, a Japanese mixed rice with mushrooms, carrots.",
    rating: "3+",
    burn: "120",
    time: "35-40min",
    price: 25,
    type: "Japonesa",
  },
  {
    id: 765421,
    name: "Suhi",
    image: "https://i.postimg.cc/44HWR48s/12456223-removebg-preview.png",
    description:
      "Fresh Sushi with a variety of fish, rice, seaweed, and a touch of wasabi.",
    rating: "4+",
    burn: "100",
    time: "22-42min",
    price: 68,
    type: "Japonesa",
  },
  {
    id: 4123455,
    name: "Redvelvet Cake",
    image:
      "https://i.postimg.cc/bY11RZCD/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA4-L2-Zy-ZWVpb-WFn-ZXNjb21w-YW55-X3-Jl-ZF92-ZWx2-ZXRf-Y2-Fr-ZV9pc29s-YXRl.png",
    description:
      "A moist Red Velvet Cake with creamy cheese frosting and a hint of cocoa.",
    rating: "5+",
    burn: "1200",
    time: "120-160min",
    price: 109,
    type: "Doce",
  },
  {
    id: 21212,
    name: "Comida paulista",
    image: "https://i.postimg.cc/NfDHqhhg/Imagens-VISITE-SP-Texto-1-1.png",
    description: "Delicious traditional food from São Paulo.",
    rating: "4+",
    burn: "300",
    time: "5-10min",
    price: 55,
    type: "Paulista",
  },
  {
    id: 3432423423,
    name: "Comida mineira",
    image:
      "https://i.postimg.cc/63KWp3RF/360-F-462953217-F8a3pd8-Jsu-YH8j-Kk-ZK6-CWc0l-GPo-LLlh-N.jpg",
    description:
      "Authentic cuisine from Minas Gerais, known for its hearty and traditional recipes.",
    rating: "5+",
    burn: "250",
    time: "10-20min",
    price: 75,
    type: "Mineira",
  },
  {
    id: 45524324234,
    name: "Comida mexicana",
    image: "https://i.postimg.cc/d1JFKfcY/images.jpg",
    description: "Spicy and vibrant Mexican dishes filled with flavor.",
    rating: "4+",
    burn: "500",
    time: "15-30min",
    price: 50,
    type: "Mexicana",
  },
  {
    id: 432412312,
    name: "Comida chinesa",
    image: "https://i.postimg.cc/kGpPKX6J/istockphoto-472188222-612x612.jpg",
    description:
      "Traditional Chinese dishes with a balance of sweet, sour, salty, bitter, and umami flavors.",
    rating: "5+",
    burn: "654",
    time: "20-45min",
    price: 40,
    type: "Chinesa",
  },
  {
    id: 5423123,
    name: "Comida grega",
    image: "https://i.postimg.cc/L5qbdk5S/istockphoto-1325025799-612x612.jpg",
    description:
      "Authentic Greek meals, known for their fresh ingredients and vibrant flavors.",
    rating: "3+",
    burn: "120",
    time: "35-40min",
    price: 25,
    type: "Grega",
  },
  {
    id: 1231231,
    name: "Comida japonesa",
    image: "https://i.postimg.cc/Sxqb95jz/12456223-removebg-preview.png",
    description:
      "Fresh sushi with a variety of fish, rice, seaweed, and a touch of wasabi.",
    rating: "4+",
    burn: "100",
    time: "22-42min",
    price: 68,
    type: "Japonesa",
  },
  {
    id: 4535342,
    name: "Comida indiana",
    image:
      "https://i.postimg.cc/q7TV8FR3/pngtree-indian-food-menu-bhujan-png-image-12293819.png",
    description:
      "Rich and aromatic Indian dishes, featuring bold spices and complex flavors.",
    rating: "5+",
    burn: "1200",
    time: "120-160min",
    price: 109,
    type: "Indiana",
  },
  {
    id: 678576575,
    name: "Pizza",
    image: "https://i.postimg.cc/sfQzC7t1/nossa-historia-2.png",
    description:
      "Classic pizza with a thin crust, tomato sauce, and a variety of toppings.",
    rating: "5+",
    burn: "300",
    time: "30-45min",
    price: 20,
    type: "Pizza",
  },
  {
    id: 3543574434,
    name: "Hamburguer",
    image: "https://i.postimg.cc/43J24RyB/64f69c28-hamburguer.png",
    description:
      "Juicy hamburger with cheese, lettuce, tomato, and special sauce.",
    rating: "5+",
    burn: "500",
    time: "15-25min",
    price: 45,
    type: "Hamburguer",
  },
  {
    id: 674365436536,
    name: "Comida Baiana",
    image: "https://i.postimg.cc/65FNQqxz/istockphoto-1252480851-612x612.jpg",
    description: "Delicious Vatapa and Acarajé food",
    burn: "300",
    raiting: "5+",
    time: "35-45min",
    price: 78,
    type: "Baiana",
  },
];



export default restaurants;
