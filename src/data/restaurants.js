const restaurants = [
  {
    id: 1,
    name: "Green Leaf Cafe",
    type: "vegetarian",
    thumbnail: {
      url: "https://chefajaychopra.com/assets/img/recipe/1-1684159897BengaliVegThaliRecipewebp.webp",
    },
    cuisines: ["North Indian", "South Indian", "Italian", "Chinese", "Mexican"],
    rating: {
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRating: 1200,
      totalRatingString: "1.2k",
    },
    address: {
      locality: "Civil Lines",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      pincode: 110001,
    },
  },
  {
    id: 2,
    name: "Veggie Delight",
    type: "vegetarian",
    thumbnail: {
      url: "https://www.verdictfoodservice.com/wp-content/uploads/sites/17/2024/06/Ishtaa-shutterstock_1645139539.jpg",
    },
    cuisines: [
      "North Indian",
      "South Indian",
      "Continental",
      "Thai",
      "Mediterranean",
    ],
    rating: {
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRating: 800,
      totalRatingString: "800",
    },
    address: {
      locality: "Koregaon Park",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: 411001,
    },
  },
  {
    id: 3,
    name: "Organic Greens",
    type: "vegetarian",
    thumbnail: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL42UfjCn1nLu6rayBD9w9ejdSZ-FABgZiMUUI0UWtB8F4aqzuYBwWkY6z9SC3SlKoFC4&usqp=CAU",
    },
    cuisines: ["Organic", "Salads", "Juices", "Smoothies", "Healthy"],
    rating: {
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRating: 1500,
      totalRatingString: "1.5k",
    },
    address: {
      locality: "Indiranagar",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      pincode: 560001,
    },
  },
  {
    id: 4,
    name: "Healthy Bites",
    type: "vegetarian",
    thumbnail: {
      url: "https://img.freepik.com/premium-photo/metal-tray-filled-with-diverse-assortment-various-types-food-items-traditional-indian-thali-filled-with-different-vegetarian-dishes-ai-generated_538213-42215.jpg",
    },
    cuisines: ["North Indian", "Chinese", "Continental", "Mexican", "Japanese"],
    rating: {
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRating: 600,
      totalRatingString: "600",
    },
    address: {
      locality: "Sector 17",
      city: "Chandigarh",
      state: "Chandigarh",
      country: "India",
      pincode: 160017,
    },
  },
  {
    id: 5,
    name: "Veggie Paradise",
    type: "vegetarian",
    thumbnail: {
      url: "https://media.istockphoto.com/id/174973324/photo/non-vegetarian-indian-thali.jpg?s=612x612&w=0&k=20&c=Z9hP8XVJ3KZaBlOutIEiOshPY7rzZdkoEAVabusE15o=",
    },
    cuisines: [
      "North Indian",
      "South Indian",
      "Punjabi",
      "Rajasthani",
      "Gujarati",
    ],
    rating: {
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRating: 1800,
      totalRatingString: "1.8k",
    },
    address: {
      locality: "Anna Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: 600001,
    },
  },
  {
    id: 6,
    name: "Green Garden",
    type: "vegetarian",
    thumbnail: {
      url: "https://easyindiancookbook.com/wp-content/uploads/2023/02/indian-vegetarian-thali-1.jpg",
    },
    cuisines: [
      "North Indian",
      "South Indian",
      "Continental",
      "Thai",
      "Italian",
    ],
    rating: {
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRating: 900,
      totalRatingString: "900",
    },
    address: {
      locality: "C Scheme",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: 302001,
    },
  },
  {
    id: 7,
    name: "Pure Vegan Delights",
    type: "vegan",
    thumbnail: {
      url: "https://www.greenqueen.com.hk/wp-content/uploads/2020/04/vegetarian-thali-julia-gartland-food52.jpg",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Juices", "Salads", "Smoothies"],
    rating: {
      avgRating: 4.8,
      avgRatingString: "4.8",
      totalRating: 2500,
      totalRatingString: "2.5k",
    },
    address: {
      locality: "Bandra",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: 400001,
    },
  },
  {
    id: 8,
    name: "Vegan Vibes",
    type: "vegan",
    thumbnail: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfQOHMdfCnefkDMefErodhlqDsaA7ZjvbnjKXFeA0AhE0Jk1IF52yD4k6fBZKOfZFq-w&usqp=CAU",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Burgers", "Pizzas", "Wraps"],
    rating: {
      avgRating: 4.9,
      avgRatingString: "4.9",
      totalRating: 3500,
      totalRatingString: "3.5k",
    },
    address: {
      locality: "Church Street",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      pincode: 560001,
    },
  },
  {
    id: 9,
    name: "Plant-Based Kitchen",
    type: "vegan",
    thumbnail: {
      url: "https://static.india.com/wp-content/uploads/2016/12/Chetana1.jpg?impolicy=Medium_Resize&w=1200&h=800",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Sushi", "Thai", "Mexican"],
    rating: {
      avgRating: 4.7,
      avgRatingString: "4.7",
      totalRating: 2100,
      totalRatingString: "2.1k",
    },
    address: {
      locality: "Colaba",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: 400001,
    },
  },
  {
    id: 10,
    name: "Green Earth Bistro",
    type: "vegan",
    thumbnail: {
      url: "https://chefajaychopra.com/assets/img/recipe/1-1684159897BengaliVegThaliRecipewebp.webp",
    },
    cuisines: [
      "Raw Vegan",
      "Plant-based",
      "Gluten-free",
      "Desserts",
      "Smoothies",
    ],
    rating: {
      avgRating: 4.6,
      avgRatingString: "4.6",
      totalRating: 1800,
      totalRatingString: "1.8k",
    },
    address: {
      locality: "Khan Market",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      pincode: 110001,
    },
  },
  {
    id: 11,
    name: "Fresh Start Cafe",
    type: "vegan",
    thumbnail: {
      url: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/Masala-Dosa1.jpg?tr=w-400",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Smoothies", "Salads", "Wraps"],
    rating: {
      avgRating: 4.5,
      avgRatingString: "4.5",
      totalRating: 1500,
      totalRatingString: "1.5k",
    },
    address: {
      locality: "Koregaon Park",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pincode: 411001,
    },
  },
  {
    id: 12,
    name: "Herb Garden",
    type: "vegan",
    thumbnail: {
      url: "https://listonic.com/wp-content/uploads/2023/06/imgdietsummary-38.webp",
    },
    thumbnail: {
      url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2023/08/vegan.jpeg.jpg",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Organic", "Juices", "Smoothies"],
    rating: {
      avgRating: 4.4,
      avgRatingString: "4.4",
      totalRating: 1200,
      totalRatingString: "1.2k",
    },
    address: {
      locality: "Indiranagar",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      pincode: 560001,
    },
  },
  {
    id: 13,
    name: "Green Eats",
    type: "vegan",
    thumbnail: {
      url: "https://veganuary.com/wp-content/uploads/2019/08/vegan-food-essentials.jpg",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Wraps", "Burgers", "Pizzas"],
    rating: {
      avgRating: 4.3,
      avgRatingString: "4.3",
      totalRating: 900,
      totalRatingString: "900",
    },
    address: {
      locality: "Sector 17",
      city: "Chandigarh",
      state: "Chandigarh",
      country: "India",
      pincode: 160017,
    },
  },
  {
    id: 14,
    name: "Vegan Delights",
    type: "vegan",
    thumbnail: {
      url: "https://www.health.com/thmb/wdfzNOqLV5R8h9f5CtNuBDHLQiE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vegan-34a61cf47db94bb0878c4de14400ae32.jpg",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Mexican", "Thai", "Italian"],
    rating: {
      avgRating: 4.2,
      avgRatingString: "4.2",
      totalRating: 800,
      totalRatingString: "800",
    },
    address: {
      locality: "Anna Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: 600001,
    },
  },
  {
    id: 15,
    name: "Healthy Vegan Bistro",
    type: "vegan",
    thumbnail: {
      url: "https://images.everydayhealth.com/images/diet-nutrition/what-is-a-vegan-diet-benefits-food-list-beginners-guide-alt-1440x810.jpg?sfvrsn=1d260c85_1",
    },
    cuisines: ["Raw Vegan", "Plant-based", "Gluten-free", "Organic", "Juices"],
    rating: {
      avgRating: 4.1,
      avgRatingString: "4.1",
      totalRating: 700,
      totalRatingString: "700",
    },
    address: {
      locality: "C Scheme",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: 302001,
    },
  },
];

export default restaurants;
