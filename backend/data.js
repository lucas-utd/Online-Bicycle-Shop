import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Huffy Men's Alpine Mountain Bike",
      category: "Mountain Bike",
      image: "/images/mountain-bike.jpg",
      price: 120,
      countInStock: 10,
      brand: "Huffy",
      rating: 4.5,
      numReviews: 10,
      description:
        "No matter how rough the path gets, you can rely on the Huffy Men's Alpine 26 in 18-Speed Mountain Bike. In addition to its rugged 26-inch wheels, it also features a durable steel frame and 18 gears. And thanks to the responsive Kolo 1200 suspension fork crown, you'll be able to power along with comfort and confidence.",
    },
    {
      name: "Vilano R2 Aluminum Road Bike",
      category: "Road Bike",
      image: "/images/road-bike.jpg",
      price: 220,
      countInStock: 20,
      brand: "Vilano",
      rating: 4.0,
      numReviews: 10,
      description:
        "This economical road bike is built on a lightweight 6061 Aluminum frame. It features Shimano A050 thumb shifters for convenience. This bike is an excellent commuter.",
    },
    {
      name: 'Getaway BMX Bike - 24"',
      category: "BMX Bike",
      image: "/images/bmx-bike.jpg",
      price: 400,
      countInStock: 0,
      brand: "Getaway",
      rating: 4.8,
      numReviews: 17,
      description:
        "An ideal bike for cruising around town in style or laying down flow lines at the dirt park, you're going to love how this bike rolls.",
    },
    {
      name: 'TOKYO Citizen Bike 16"',
      category: "Folding Bike",
      image: "/images/folding-bike.jpg",
      price: 290,
      countInStock: 15,
      brand: "Citizen",
      rating: 4.5,
      numReviews: 14,
      description:
        "This uniquely stylish, joyful folding bike will get you anywhere you need to go with the added possibilities of folding convenience – for travel, storage or simplicity. A Citizen Bike will fit your lifestyle. It's a folding bike for going and being human.",
    },
    {
      name: "Kulana Lua Tandem Bike",
      category: "Tandem Bike",
      image: "/images/tandem-bike.jpg",
      price: 300,
      countInStock: 5,
      brand: "Kulana",
      rating: 4.5,
      numReviews: 10,
      description:
        "Take the fun of cycling to a new level with the Kulana Lua Tandem Bike! This stylish bicycle for two features a Hi-Ten steel cruiser frame in a cheerful yellow with beachy palm tree graphics.",
    },
    {
      name: "Cube Touring Hybrid ONE 500",
      category: "Touring Bike",
      image: "/images/touring-bike.jpg",
      price: 3000,
      countInStock: 12,
      brand: "Cube",
      rating: 4.5,
      numReviews: 15,
      description:
        "Cube engineers have carefully crafted the frame to ensure seamless integration of the Bosch drive unit and battery, placing them in the optimum position for safe handling and sleek good looks that you'll be proud of.",
    },
    {
      name: "2021 Polygon Siskiu D5",
      category: "Mountain Bike",
      image: "/images/polygon_siskiu_d5.jpg",
      price: 999,
      brand: "Polygon",
      countInStock: 20,
      rating: 4.8,
      numReviews: 5,
      description:
        "In a world where bike prices seem to continue to go one direction, the Polygon Siskiu D5 is a breath of fresh air offering a properly capable full suspension mountain bike at a price that won't break the bank. Utilizing the same platform technology as the higher end Siskiu bikes, the new D5 delivers outstanding performance and reliability and will have you grinning from ear to ear on your next adventure.",
    },
    {
      name: "Polygon Path Urban City Bike",
      category: "Road Bike",
      image: "/images/polygon_path_2.jpg",
      price: 649,
      brand: "Polygon",
      countInStock: 15,
      rating: 4.9,
      numReviews: 10,
      description:
        "The Polygon Path 2 combines speed, agility, and style in an urban bike. Designed by combining the efficiency of a road bike with a specific commuter geometry. The Path 2 is the perfect bike for social rides with friends or for dodging traffic to make it to a meeting on time.",
    },
    {
      name: "Diamondback Sync'r - 2020",
      category: "Mountain Bike",
      image: "/images/diamondback_syncr.png",
      price: 1450,
      brand: "Diamondback",
      countInStock: 25,
      rating: 4.7,
      numReviews: 3,
      description:
        "Versatile — that's what's always made our progressive trail bikes popular. These are bikes that are as at home blasting down trails alongside long-travel, full-suspension bikes as they are surfing mellow sections of singletrack. The Sync'r is our top of the line, do-it-all aluminum hardtail. The heart of the bike is a low-slung frame that's both playful and confident. We've hung the Sync'r chassis with equally stellar components that include a RockShox Recon RL suspension fork with 140mm of travel and a SRAM SX Eagle 1x12, single-ring drivetrain with a wide, 11-50 gear range. Powerful Shimano hydraulic disc brakes modulate speed precisely, and our own Diamondback AL35 tubeless-compatible wheelset delivers knife-sharp handling with durability at its core.",
    },
    {
      name: "Schwinn Loop Adult Folding Bike",
      category: "Folding Bike",
      image: "/images/schwinn_loop_folding.jpg",
      price: 265,
      brand: "Schwinn",
      countInStock: 7,
      rating: 4.3,
      numReviews: 5,
      description:
        "Enjoy a bike that makes urban cycling easy with the Loop by Schwinn. The Loop features a folding steel frame that’s both durable and exceptionally convenient for those with limited storage space. The 7-speed twist shifter provides smooth gear changes, while the front and rear linear pull brakes deliver secure stops. The 20-inch alloy wheel with smooth rolling street tires are perfect for your weekday commute or weekend ride around town. The rear carrier with included heavy-gauge nylon bag makes is super easy to haul your backpack, groceries, or whatever else you need to carry on your ride. Then, when you’re all done, just fold the bike right up into its ultra-compact storage configuration, and you can tuck it away until it’s time to go again. Like all Schwinn bikes, the Loop comes with a limited lifetime warranty for as long as you own the bike. Convenience is the name of the game with the Loop. Enjoy the freedom of riding a Schwinn.",
    },
    {
      name: "Schwinn Twinn Classic Cruiser Bike",
      category: "Tandem Bike",
      image: "/images/schwinn_twinn_classic_tandem.jpg",
      price: 580,
      brand: "Schwinn",
      countInStock: 10,
      rating: 4.4,
      numReviews: 10,
      description:
        "Hit the road with a friend with the Schwinn Twinn Tandem Bicycle. This Schwinn aluminum tandem frame features an extra low step-thru rear bar to comfortably fit smaller riders. A 21-speed Shimano EZ-Fire trigger shifters and a Shimano rear derailleur provide an extended gear range and smooth shifting on every ride. Mechanical disc brakes offer superior all-condition stopping power on the road and on the trail. The main set of handlebars and a Schwinn suspension fork put you in complete control when you ride. Ergonomic grips and plush fitness saddles create a comfortable and enjoyable riding experience. This tandem bike ships ready to be assembled. The Schwinn Twinn Tandem Large Bicycle's wheels measure 26 inches.",
    },
  ],
};
export default data;
