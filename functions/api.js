const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());

// Serve favicon
app.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../public/favicon/favicon.ico"))
);

let cafe = {
  "made with love": {
    name: "Made With Love Bakery",
    address: "West Central area, Spokane, WA",
    specialties: ["Coffee", "Baked goods", "Snickerdoodle cookie cake"],
    features: ["$1 drip coffee", "Indoor seating"],
    description:
      "A recent addition to the West Central area, started by local Gonzaga grad Callie. Offers delicious coffee and baked goods in a welcoming atmosphere.",
  },
  indaba: {
    name: "Indaba Coffee Roasters",
    address: "518 W Riverside Ave, Spokane, WA 99201",
    phone: "(509) 822-7182",
    specialties: [
      "Signature roast blends",
      "Single-origin roasts",
      "Unique lattes",
    ],
    features: ["Multiple locations", "Indoor seating", "Artisanal toasts"],
    description:
      "Known for signature blends like High-Drive and Bowl & Pitcher. Offers unique latte options and artisanal toasts in a modern, eclectic space.",
  },
  "rocket bakery": {
    name: "Rocket Bakery",
    specialties: ["Coffee", "Baked goods"],
    features: ["Multiple locations"],
    description: "A local favorite with multiple locations throughout Spokane.",
  },
  chaps: {
    name: "Chaps Diner and Bakery",
    address: "4237 S Cheney Spokane Rd, Spokane, WA 99224",
    phone: "(509) 624-4182",
    specialties: ["Coffee", "Diner food", "Baked goods"],
    features: ["Dine-in", "Bakery"],
    description:
      "A combination diner and bakery offering coffee and a variety of food options.",
  },
  atticus: {
    name: "Atticus Coffee & Gifts",
    specialties: ["Coffee", "Gifts"],
    features: ["Gift shop"],
    description: "A unique coffee shop that also offers a selection of gifts.",
  },
  "first avenue coffee": {
    name: "First Avenue Coffee",
    address: "1011 W 1st Ave, Unit A, Spokane, WA 99201",
    phone: "(509) 868-0425",
    specialties: ["Specialty coffee"],
    features: ["Modern space", "Ethical sourcing"],
    description:
      "A modern, sleek coffee shop known for its ethical sourcing and quality beans.",
  },
  "maple street bistro": {
    name: "Maple Street Bistro",
    specialties: ["Coffee", "Breakfast sandwiches", "Bagels"],
    features: ["Indoor seating", "Outdoor patio", "Weekly coffee flavors"],
    description:
      "Known for delicious coffee, breakfast sandwiches, and bagels. Offers a new coffee flavor each week.",
  },
  unknown: {
    name: "somewhere in spokane",
    specialties: [
      "Coffee place I am guessing",
      "Good food I can imagine",
      "A new place others can hope to find",
    ],
    features: ["Indoor seating"],
    description:
      "Known for delicious coffee, breakfast sandwiches, and bagels. Offers a new coffee flavor each week.",
  },
};

app.get("/", (request, response) => {
  response.json({ message: "Welcome to the Spokane Cafe API" });
});

app.get("/api/:name", (request, response) => {
  const cafeName = request.params.name.toLowerCase();
  if (cafe[cafeName]) {
    response.json(cafe[cafeName]);
  } else {
    response.json(cafe["unknown"]);
  }
});

// catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Export the serverless function
module.exports.handler = serverless(app);
