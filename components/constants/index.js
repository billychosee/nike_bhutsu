import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "@/assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "@/assets/images";
import {
  ProductShoe1,
  ProductShoe1s,
  ProductShoe2,
  ProductShoe2s,
  ProductShoe3,
  ProductShoe3s,
  ProductShoe4,
  ProductShoe4s,
  ProductShoe5,
  ProductShoe5s,
  ProductShoe6,
  ProductShoe6s,
  ProductShoe7,
  ProductShoe7s,
  ProductShoe8,
  ProductShoe8s,
  ProductShoe9,
  ProductShoe9s,
  ProductShoe10,
  ProductShoe10s,
  ProductShoe11,
  ProductShoe11s,
  ProductShoe12,
  ProductShoe12s,
} from "@/assets/images/products";

export const navLinks = [
  { href: "", label: "Home", isRoute: true },
  { href: "about-us", label: "About Us", isRoute: false },
  { href: "products", label: "Products", isRoute: true },
  { href: "contact-us", label: "Contact Us", isRoute: false },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Stores Worldwide" },
  { value: "250M+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$100.20",
    rating: "4.7",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$110.20",
    rating: "4.7",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$120.20",
    rating: "4.6",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$130.20",
    rating: "4.5",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "24/7 Support",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.6,
    feedback:
      "As an athlete, I demand a lot from my shoes. Nike never disappoints. The support and cushioning is exceptional, and they've definitely improved my performance on the track.",
  },
  {
    imgURL: customer2,
    customerName: "Allison Byers",
    rating: 4.6,
    feedback:
      "These sneakers have become my daily companions. Whether I'm running errands or going for a quick jog, they're incredibly comfortable and hold up well to regular use.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+042345632", link: "tel:+042345632" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const shipVal = 120;
export const shipMsg = `Free shipping on all orders over $${shipVal}`;

export const shoeProducts = [
  {
    id: 1,
    rating: 4.7,
    imgURL1: ProductShoe1,
    imgURL2: ProductShoe1s,
    name: "Nike SB Zoom Blazer Mid",
    colour: "Yellow",
    gender: "Unisex",
    type: "Sneakers",
    price: "$ 120.00",
    size: [7, 7.5, 8, 8.5, 9, 12],
    special: "New",
    description:
      "Experience style and comfort with the Nike SB Zoom Blazer Mid. These yellow sneakers are perfect for both men and women, featuring a fresh design and available in various sizes. Don't miss out on the latest addition to our collection.",
  },
  {
    id: 2,
    rating: 4.6,
    imgURL1: ProductShoe2,
    imgURL2: ProductShoe2s,
    name: "Nike Calm",
    colour: "Black",
    gender: "Men",
    type: "Slides",
    price: "$ 99.00",
    size: [7, 7.5, 8, 8.5, 9],
    special: "",
    description:
      "Slide into relaxation with Nike Calm. These black slides for men offer ultimate comfort and style. Whether you're heading to the pool or just lounging around, these slides are a perfect choice.",
  },
  {
    id: 3,
    rating: 4.6,
    imgURL1: ProductShoe3,
    imgURL2: ProductShoe3s,
    name: "Air Jordan I High G",
    colour: "Green",
    gender: "Men",
    type: "Sneakers",
    price: "$ 140.00",
    size: [7, 9, 11, 12],
    special: "",
    description:
      "Elevate your sneaker game with the Air Jordan I High G. These green sneakers for men are a timeless classic. With multiple size options available, step into style and make a statement.",
  },
  {
    id: 4,
    rating: 4.7,
    imgURL1: ProductShoe4,
    imgURL2: ProductShoe4s,
    name: "Nike Pegasus 39",
    colour: "Black",
    gender: "Women",
    type: "Athletic",
    price: "$ 120.00",
    size: [6, 7, 7.5, 8, 8.5, 12],
    special: "Best Seller",
    description:
      "Discover the best-selling Nike Pegasus 39 for women. These black athletic shoes provide unbeatable comfort and style. Available in a range of sizes, they are a must-have for active women.",
  },
  {
    id: 5,
    rating: 4.6,
    imgURL1: ProductShoe5,
    imgURL2: ProductShoe5s,
    name: "Nike React Vision",
    colour: "White",
    gender: "Unisex",
    type: "Sneakers",
    price: "$ 125.00",
    size: [7, 8, 9, 10, 11, 12],
    special: "New",
    description:
      "Step into the future with Nike React Vision. These white sneakers are a perfect blend of style and comfort for both men and women. Get a fresh look with these new arrivals.",
  },
  {
    id: 6,
    rating: 4.6,
    imgURL1: ProductShoe6,
    imgURL2: ProductShoe6s,
    name: "LeBron XX Premium",
    colour: "Red",
    gender: "Men",
    type: "Basketball",
    price: "$ 256.00",
    size: [7, 7.5, 8, 8.5, 12],
    special: "",
    description:
      "Dominate the court with LeBron XX Premium basketball shoes. These red kicks are engineered for peak performance and style. Elevate your game with the LeBron collection.",
  },
  {
    id: 7,
    rating: 4.6,
    imgURL1: ProductShoe7,
    imgURL2: ProductShoe7s,
    name: "Jordan Why Not .6",
    colour: "Multi-Color",
    gender: "Unisex",
    type: "Basketball",
    price: "$ 140.00",
    size: [9, 10, 11.5, 12, 13],
    special: "New",
    description:
      "Get ready to rock the court with the Jordan Why Not .6. These multi-color basketball shoes are a versatile choice for both men and women. Make a statement on and off the court.",
  },
  {
    id: 8,
    rating: 4.6,
    imgURL1: ProductShoe8,
    imgURL2: ProductShoe8s,
    name: "Nike Air Max Terrascape Plus",
    colour: "Multi-Color",
    gender: "Women",
    type: "Sneakers",
    price: "$ 220.00",
    size: [6, 7.5, 8, 8.5],
    special: "",
    description:
      "Experience the ultimate in style and comfort with Nike Air Max Terrascape Plus. These multi-color sneakers are designed for women who demand the best. Elevate your look.",
  },
  {
    id: 9,
    rating: 4.6,
    imgURL1: ProductShoe9,
    imgURL2: ProductShoe9s,
    name: "Tatum 1 'Denim'",
    colour: "Blue",
    gender: "Men",
    type: "Basketball",
    price: "$ 245.00",
    size: [10, 11.5, 12, 13],
    special: "",
    description:
      "Unleash your inner baller with Tatum 1 Denim basketball shoes. These blue kicks for men are a symbol of style and performance. Make your mark on the court.",
  },
  {
    id: 10,
    rating: 4.6,
    imgURL1: ProductShoe10,
    imgURL2: ProductShoe10s,
    name: "Nike Zoom Fly 5 Premium",
    colour: "Pink",
    gender: "Women",
    type: "Athletic",
    price: "$ 180.00",
    size: [7, 7.5, 8, 8.5],
    special: "",
    description:
      "Experience top-tier athletic performance with the Nike Zoom Fly 5 Premium. These pink athletic shoes for women are designed for speed and endurance. Step up your game.",
  },
  {
    id: 11,
    rating: 4.6,
    imgURL1: ProductShoe11,
    imgURL2: ProductShoe11s,
    name: "Nike Air Huarache",
    colour: "Peach",
    gender: "Women",
    type: "Sneakers",
    price: "$ 89.00",
    size: [6, 6.5, 7, 7.5],
    special: "New",
    description:
      "Step into style and comfort with the Nike Air Huarache. These peach sneakers for women are a fresh addition to your collection. Don't miss out on the latest trend.",
  },
  {
    id: 12,
    rating: 4.6,
    imgURL1: ProductShoe12,
    imgURL2: ProductShoe12s,
    name: "Nike Tiempo Legend 9 Academy TF",
    colour: "Black",
    gender: "Men",
    type: "Football",
    price: "$ 109.00",
    size: [7, 8.5, 10, 11],
    special: "",
    description:
      "Dominate the pitch with Nike Tiempo Legend 9 Academy TF. These black football shoes for men are engineered for precision and control. Elevate your game.",
  },
];
