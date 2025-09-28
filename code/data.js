const canteenPhones = {
    'Sai Food Court': 'tel:+919000472629',
    'Mani Cafe': 'tel:+919603725811',
};

const messMenu = {
  Sunday: {
    breakfast: ["Aloo Paratha", "Uggani", "Coriander Chutney + Mango pickle", "Curd", "Boiled egg (1)/Apple (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Chapathi", "Moong Dal Tadka", "Bhindi Masala", "Cabbage fry", "Rice", "Rasam", "Tomato Pickle", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + lemon juice", "Priya Papad"],
    snacks: ["Bread Pakoda + Chilli & tomato Sauce", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["Chicken Dum Biryani / Kadai paneer + Jeera rice", "Serva", "Boondi Raita", "Chapathi", "Veg Salads", "Cold Drink (100ml)"]
  },
  Monday: {
    breakfast: ["Rava Idli", "Vada", "Ground nut Chutney", "Sambar", "Omelette/Boiled egg (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Methi Puri", "Paalak Dal", "Rajma Masala", "Aloo Pakoda", "Rice", "Rasam", "Mango Pickle", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + lemon juice", "Priya Papad"],
    snacks: ["Samosa (1 pc Big) + Chutney", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["White rice + Tomato fried rice", "Aloo Gobhi Matar Sabji", "Sambar", "Poori", "Home-made Curd (01 Cup)", "Kalakand / Peda"]
  },
  Tuesday: {
    breakfast: ["Poori", "Semi Upma", "Aloo Sabji", "Coconut Chutney", "Boiled egg (1)/Banana (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Bhatura", "Chola Masala", "Mix Veg Curry", "Onion pakoda", "Rice", "Rasam", "Lemon Pickle", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + lassi", "Priya Papad"],
    snacks: ["Cornflake Chaat + Chilli & tomato Sauce", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["White rice + Tamarind Rice", "Malai Kofta", "Sambar", "Chapathi", "Boondi Raita", "Motichur Ladoo (1)"]
  },
  Wednesday: {
    breakfast: ["Veg Sandwich", "Veg Cutlet (2)", "Ground nut Chutney", "Green Chutney", "Banana (1)/Apple (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Chapathi", "Moong Dal", "Matar (Peas) Curry", "Carrot and Beens Dry", "Rice", "Rasam", "Amla Pickle", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + lemon juice", "Priya Papad"],
    snacks: ["Pav Bhaji (2)", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["White rice + Veg Pulao", "Matar paneer / Chicken Curry", "Sambar", "Roti", "Home-made Curd (01Cup) + Veg Salads", "Amul Ice Cream (2 scoops)"]
  },
  Thursday: {
    breakfast: ["Palak Paratha", "Mysore Bonda", "Aloo Bhujia", "Coconut Chutney", "Boiled egg (1)/Banana (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Roti", "Tomato dal", "Paneer Chilli", "Aloo fry", "Rice", "Rasam", "Chilli Pickle", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + Pineapple juice", "Priya Papad"],
    snacks: ["Punugulu with Chutney", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["White rice + Jeera Rice", "Kala Chana Masala", "Coriander Chutney / Tomato chutney", "Roti", "Home-made Curd (01Cup)", "Jalebi (02)"]
  },
  Friday: {
    breakfast: ["Vada Pav", "Mixed Fruits", "Groundnut Chutney", "Green chutney", "Boiled egg (1)/Banana (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Roti", "Plain Dal", "Veg Manchurian", "Bhindi + Peanut fry", "Rice", "Rasam", "Gongurachutney", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + lemon juice", "Priya Papad"],
    snacks: ["Onion Kachodi with Green Chutney", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["White Rice + Paneer Fried Rice", "Egg Curry & Chilli Paneer Curry", "Sambar", "Poori", "Boondi raita", "Mixed Fruit Salads"]
  },
  Saturday: {
    breakfast: ["Masala Dosa", "Poha", "Coconut Chutney (thick)", "Sambar", "Banana (1)/Boiled Egg (1)", "Bread (4 Slices)", "Amul Butter", "Mixed Fruit Jam (Kisan)", "Tea/Coffee (1 pouch)", "Milk (100ml) with Horlicks Pouch"],
    lunch: ["Roti", "Khichdi", "Aloo Masala", "Drumstick Curry", "Rice", "Rasam", "Mango Pickle", "Homemade Curd (1Cup)", "Sugar", "Veg Salad + Rasna", "Priya papad"],
    snacks: ["Pani puri (6 piece)", "Tea + Coffee (1 pouch)", "Milk (100ml)"],
    dinner: ["White rice + fried rice", "Mushroom curry", "Sambar", "Roti", "Home-made Curd (01 Cup)", "Boondi Sweets"]
  }
};
const menus = {
  'Sai Food Court': [
    { name: '2pcs Parota', price: 30, type: 'veg' },
    { name: '1pc Parota', price: 15, type: 'veg' },
    { name: 'Plain Dosa', price: 30, type: 'veg' },
    { name: 'Masala Dosa', price: 30, type: 'veg' },
    { name: 'Egg Dosa', price: 40, type: 'non-veg' },
    { name: 'Double Egg Dosa', price: 50, type: 'non-veg' },
    { name: 'Paneer Dosa', price: 60, type: 'veg' },
    { name: 'Butter Dosa', price: 50, type: 'veg' },
    { name: 'Ghee Karam Dosa', price: 70, type: 'veg' },
    { name: 'Onion Dosa', price: 40, type: 'veg' },
    { name: 'Veg Fried Rice', price: 50, type: 'veg' },
    { name: 'Jeera Fried Rice', price: 50, type: 'veg' },
    { name: 'Tomato Fried Rice', price: 50, type: 'veg' },
    { name: 'Gobi Fried Rice', price: 50, type: 'veg' },
    { name: 'Kaju Fried Rice', price: 60, type: 'veg' },
    { name: 'Paneer Fried Rice', price: 60, type: 'veg' },
    { name: 'Kaju Paneer Fried Rice', price: 70, type: 'veg' },
    { name: 'Curd Rice', price: 40, type: 'veg' },
    { name: 'Special Curd Rice', price: 70, type: 'veg' },
    { name: 'Gobi Manchuria', price: 50, type: 'veg' },
    { name: 'Veg Manchuria', price: 50, type: 'veg' },
    { name: 'Veg Noodles', price: 50, type: 'veg' },
    { name: 'Paneer Noodles', price: 60, type: 'veg' },
    { name: 'Gobi Noodles', price: 50, type: 'veg' },
    { name: 'Paneer Butter Masala', price: 80, type: 'veg' },
    { name: 'Chilli Paneer', price: 80, type: 'veg' },
    { name: 'Paneer Manchuria', price: 80, type: 'veg' },
    { name: 'French Fries', price: 50, type: 'veg' },
    { name: 'Chicken Dum Biryani (1 pc)', price: 100, type: 'non-veg' },
    { name: 'Egg Fried Rice', price: 50, type: 'non-veg' },
    { name: 'Double Egg Fried Rice', price: 60, type: 'non-veg' },
    { name: 'Egg Noodles', price: 50, type: 'non-veg' },
    { name: 'Double Egg Noodles', price: 60, type: 'non-veg' },
    { name: 'Chicken Fried Rice', price: 60, type: 'non-veg' },
    { name: 'Chicken Lollipop Biryani (1 pc)', price: 120, type: 'non-veg' },
    { name: 'Chicken Lollipop Biryani (2 pcs)', price: 130, type: 'non-veg' },
    { name: 'Chicken Roast Biryani (2 pcs)', price: 130, type: 'non-veg' },
    { name: 'Chicken Noodles', price: 60, type: 'non-veg' },
    { name: 'Chicken Lollipop Juicy (6 pcs)', price: 100, type: 'non-veg' },
    { name: 'Chicken Lollipop Juicy (12 pcs)', price: 200, type: 'non-veg' },
    { name: 'Chicken Lollipop Fry (6 pcs)', price: 100, type: 'non-veg' },
    { name: 'Chicken Lollipop Fry (4 pcs)', price: 70, type: 'non-veg' },
    { name: 'Special Chicken Biryani', price: 130, type: 'non-veg' },
    { name: 'Chicken Curry (100g)', price: 80, type: 'non-veg' },
    { name: 'Chicken Curry (150g)', price: 120, type: 'non-veg' },
    { name: 'Chicken 65', price: 80, type: 'non-veg' },
    { name: 'Chicken Manchuria', price: 80, type: 'non-veg' },
    { name: 'Chilli Chicken', price: 80, type: 'non-veg' },
    { name: 'Omelette (1 Egg)', price: 20, type: 'non-veg' },
    { name: 'Double Egg Omelette (2 Eggs)', price: 30, type: 'non-veg' },
    { name: 'Bread Omelette (2 Eggs, 2 Slices)', price: 30, type: 'non-veg' },
    { name: 'Egg Bhurji (2 Eggs)', price: 40, type: 'non-veg' },
    { name: 'Egg Bhurji (3 Eggs)', price: 50, type: 'non-veg' },
    { name: 'Egg Bhurji (4 Eggs)', price: 60, type: 'non-veg' },
    { name: 'Egg Curry (2 Eggs)', price: 40, type: 'non-veg' },
    { name: 'Egg Curry (3 Eggs)', price: 50, type: 'non-veg' },
    { name: 'Egg Curry (4 Eggs)', price: 60, type: 'non-veg' },
    { name: 'Boiled Egg (1 pc)', price: 10, type: 'non-veg' },
  ],
  'Mani Cafe': [
    // currently empty
  ]
};
const allItems = Object.entries(menus).flatMap(([canteen, items]) =>
  items.map(item => ({ ...item, canteen }))
);
