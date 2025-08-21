import img from "../assets/OurProductsImg/ProductImg.png";


const shapes = ["Round", "Oval", "Square", "Hexagonal", "Aviator"];
const brands = [
  "Tommy Hilfiger", "Scott", "French Connection", "Page 4", "Spaco",
  "Scavin", "Wolf Eye", "Ray-Ban", "Boss", "Police",
  "Vogue", "Prada", "Gucci", "Calvin Klein", "Adidas",
  "Fastrack", "Oakley", "Titan", "Versace", "Armani",
];
const genders = ["Men", "Women", "Unisex", "Kids"];
const categories = ["Sunglasses", "Eyeglasses", "Lenses"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const productslist = Array.from({ length: 100 }, (_, index) => {
  const shape = getRandomItem(shapes);
  const category = getRandomItem(categories);
  return {
    id: index + 1,
    name: `${shape} ${category.toLowerCase()} #${index + 1}`,
    price: Math.floor(Math.random() * 1500) + 100, // Price between 100-1600
    shape,
    brand: getRandomItem(brands),
    gender: getRandomItem(genders),
    category,
    image: img,
  };
});

