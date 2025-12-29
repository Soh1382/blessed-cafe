export const BUSINESS_INFO = {
  name: "Forever Blessed Cafe",
  address: "1 Brooks Yard, Bradley, Huddersfield, HD2 1XE",
  phone: "07513 200565",
  rating: 5,
  hours: {
    mon_fri: "8:00am – 1:00pm",
    sat: "Closed",
    sun: "Closed",
  },
  links: {
    uber_eats: "#", // Placeholder
    just_eat: "#",
    too_good_to_go: "#",
    maps: "https://www.google.com/maps/search/?api=1&query=Forever+Blessed+Cafe+1+Brooks+Yard+Bradley+Huddersfield+HD2+1XE",
  },
};

export const MENU_CATEGORIES = [
  "All Day Breakfast",
  "Build Your Own Breakfast",
  "Hot Sandwiches",
  "Cold Sandwiches",
  "Sides",
  "Extras",
  "Drinks",
  "Fresh Bean Coffee",
  "Sweet Treats",
];

export const MENU_ITEMS = [
  // All Day Breakfast
  {
    id: "small-breakfast",
    name: "Small Breakfast",
    price: 6.60,
    category: "All Day Breakfast",
    description: "Classic start to the day.",
  },
  {
    id: "large-breakfast",
    name: "Large Breakfast",
    price: 8.45,
    category: "All Day Breakfast",
    description: "Hearty portion for big appetites.",
  },
  {
    id: "mega-breakfast",
    name: "Mega Breakfast",
    price: 11.50,
    category: "All Day Breakfast",
    description: "The ultimate breakfast feast.",
  },
  {
    id: "vegetarian-breakfast",
    name: "Vegetarian Breakfast",
    price: 6.60,
    category: "All Day Breakfast",
    description: "Meat-free deliciousness.",
  },

  // Build Your Own (Base Items)
  { id: "beans-toast", name: "Beans on Toast", price: 3.60, category: "Build Your Own Breakfast" },
  { id: "scrambled-egg-toast", name: "Scrambled Egg on Toast", price: 4.50, category: "Build Your Own Breakfast" },
  { id: "omelette", name: "Omelette (4 eggs, plain)", price: 5.20, category: "Build Your Own Breakfast" },
  { id: "toastie", name: "Toastie (1 filling + cheese)", price: 3.75, category: "Build Your Own Breakfast" },

  // Build Your Own (Add-ons)
  { id: "add-bacon", name: "Bacon", price: 1.20, category: "Add-on" },
  { id: "add-sausage", name: "Sausage", price: 1.20, category: "Add-on" },
  { id: "add-spam", name: "Spam", price: 1.20, category: "Add-on" },
  { id: "add-hash-brown", name: "Hash Brown", price: 0.90, category: "Add-on" },
  { id: "add-egg", name: "Eggs", price: 0.90, category: "Add-on" },
  { id: "add-mushroom", name: "Mushroom", price: 0.90, category: "Add-on" },
  { id: "add-tomato", name: "Tomatoes", price: 0.90, category: "Add-on" },
  { id: "add-toast", name: "Toast", price: 0.90, category: "Add-on" },
  { id: "add-beans", name: "Beans", price: 0.90, category: "Add-on" },

  // Hot Sandwiches
  { id: "spam-egg-sandwich", name: "Spam & Egg Sandwich", price: 4.70, category: "Hot Sandwiches" },
  { id: "hot-beef-onion", name: "Hot Beef & Onion Sandwich", price: 5.10, category: "Hot Sandwiches" },
  { id: "bacon-sandwich", name: "Bacon Sandwich", price: 4.25, category: "Hot Sandwiches" },

  // Placeholders
  { id: "cold-sandw-ex", name: "Ham Salad Sandwich", price: 3.80, category: "Cold Sandwiches", description: "Example item" },
  { id: "chips", name: "Portion of Chips", price: 2.50, category: "Sides" },
  { id: "latte", name: "Latte", price: 2.90, category: "Fresh Bean Coffee" },
  { id: "brownie", name: "Chocolate Brownie", price: 2.50, category: "Sweet Treats" },
];
