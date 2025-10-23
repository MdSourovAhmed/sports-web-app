// // sportsData.js
// // Dummy product data for Let'sPlayPro Sports E-commerce App

// const sportsData = [
//   {
//     name: "Pro Cricket Bat 2025",
//     imageCategory: "cricket",
//     description: "High-performance willow cricket bat for serious players.",
//     price: 149.99,
//     imageUrl: "https://images.unsplash.com/photo-1600151385501-5ec6a1d92a7f",
//   },
//   {
//     name: "Cricket Helmet AirFlow",
//     imageCategory: "cricket",
//     description:
//       "Lightweight helmet with full face-guard and superior ventilation.",
//     price: 79.99,
//     imageUrl: "https://images.unsplash.com/photo-1624548186555-2a5b1e94a5c9",
//   },
//   {
//     name: "Cricket Batting Gloves Elite",
//     imageCategory: "cricket",
//     description: "Premium batting gloves with extra palm protection and grip.",
//     price: 39.99,
//     imageUrl: "https://images.unsplash.com/photo-1589983846997-8421bf6ec7e7",
//   },
//   {
//     name: "Cricket Leg Pads Ultra",
//     imageCategory: "cricket",
//     description:
//       "Ultra-light leg pads with reinforced knees and straps for comfort.",
//     price: 59.99,
//     imageUrl: "https://images.unsplash.com/photo-1612359397191-930a445f83a9",
//   },
//   {
//     name: "Cricket Stump Set Deluxe",
//     imageCategory: "cricket",
//     description:
//       "Complete stump set with bails and carrying bag – ready for practice or match.",
//     price: 24.99,
//     imageUrl: "https://images.unsplash.com/photo-1603957113987-0476c5060a3b",
//   },
//   {
//     name: "Cricket Wicket Keeper Gloves Pro",
//     imageCategory: "cricket",
//     description:
//       "High-traction wicket keeper gloves with finger protection and pad backing.",
//     price: 49.99,
//     imageUrl: "https://images.unsplash.com/photo-1600166898245-f23e67c9e9d8",
//   },
//   {
//     name: "Football Match Ball Premium",
//     imageCategory: "football",
//     description:
//       "FIFA-style match ball with thermo-bonded panels for a true flight path.",
//     price: 59.99,
//     imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
//   },
//   {
//     name: "Football Goalkeeper Gloves GripMaster",
//     imageCategory: "football",
//     description:
//       "Goalkeeper gloves with latex palm and adjustable cuff for maximum grip.",
//     price: 34.99,
//     imageUrl: "https://images.unsplash.com/photo-1624543194743-97b01b37d703",
//   },
//   {
//     name: "Football Shin Guards Compact",
//     imageCategory: "football",
//     description: "Compact shin guards with anti-shock foam and elastic straps.",
//     price: 19.99,
//     imageUrl: "https://images.unsplash.com/photo-1599022267804-74eaea93e448",
//   },
//   {
//     name: "Football Boots Firm Ground X1",
//     imageCategory: "football",
//     description:
//       "Firm-ground boots with stud configuration for natural grass fields.",
//     price: 89.99,
//     imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//   },
//   {
//     name: "Football Training Cone Set 20-pcs",
//     imageCategory: "football",
//     description:
//       "Training cones set for drills, agility, and team practice routines.",
//     price: 14.99,
//     imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
//   },
//   {
//     name: "Football Net Portable 12-ft",
//     imageCategory: "football",
//     description:
//       "Portable pop-up football goal net, easy to assemble and carry.",
//     price: 49.99,
//     imageUrl: "https://images.unsplash.com/photo-1612454729749-7e8f7ec5b8fa",
//   },
//   {
//     name: "Badminton Racket CarbonPro 900",
//     imageCategory: "badminton",
//     description:
//       "High-tensile carbon badminton racket with head-heavy balance for power.",
//     price: 69.99,
//     imageUrl: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0641",
//   },
//   {
//     name: "Badminton Shuttlecock Feather Pack (12-pcs)",
//     imageCategory: "badminton",
//     description: "Premium feather shuttlecocks for club and tournament play.",
//     price: 29.99,
//     imageUrl: "https://images.unsplash.com/photo-1621570166558-5c1dd8e98a6a",
//   },
//   {
//     name: "Badminton Grip Tape ProFeel",
//     imageCategory: "badminton",
//     description:
//       "Replacement grip tape with absorbent cushioning for better feel.",
//     price: 9.99,
//     imageUrl: "https://images.unsplash.com/photo-1621570167407-4deefb27c2e1",
//   },
//   {
//     name: "Badminton Shoes Lightweight FlyRun",
//     imageCategory: "badminton",
//     description:
//       "Lightweight indoor court shoes designed for badminton with lateral support.",
//     price: 79.99,
//     imageUrl: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba1",
//   },
//   {
//     name: "Badminton Bag Double Racket Carry",
//     imageCategory: "badminton",
//     description:
//       "Dual-compartment badminton bag for two rackets plus accessories.",
//     price: 39.99,
//     imageUrl: "https://images.unsplash.com/photo-1598387843879-cd1b4c5f9a5d",
//   },
//   {
//     name: "Badminton String Set HighTension (10-m roll)",
//     imageCategory: "badminton",
//     description:
//       "High-tension string roll for restringing rackets with premium feel.",
//     price: 19.99,
//     imageUrl: "https://images.unsplash.com/photo-1598368195834-3b539fb0e4d7",
//   },
//   {
//     name: "Cricket Practice Cone Set (20-pcs)",
//     imageCategory: "cricket",
//     description:
//       "Training cones for cricket drills, fielding and agility work.",
//     price: 18.99,
//     imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
//   },
//   {
//     name: "Football Fan Scarf & Beanie Combo",
//     imageCategory: "football",
//     description: "Team-coloured scarf and beanie set for supporters.",
//     price: 19.99,
//     imageUrl: "https://images.unsplash.com/photo-1542343634-5b464ae2b3b9",
//   },
//   {
//     name: "Basketball Official Game Ball",
//     imageCategory: "basketball",
//     description: "Indoor/outdoor basketball with textured grip and pro bounce.",
//     price: 59.99,
//     imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
//   },
//   {
//     name: "Basketball Jersey ProWear",
//     imageCategory: "basketball",
//     description: "Lightweight, breathable jersey for training or matches.",
//     price: 29.99,
//     imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
//   },
//   {
//     name: "Basketball Shoes JumpMax",
//     imageCategory: "basketball",
//     description:
//       "Performance basketball shoes with ankle support and air cushioning.",
//     price: 99.99,
//     imageUrl: "https://images.unsplash.com/photo-1526403226356-1d1d92d2b42b",
//   },
//   {
//     name: "Basketball Arm Sleeve Compression",
//     imageCategory: "basketball",
//     description: "Compression arm sleeve with sweat-wicking material.",
//     price: 14.99,
//     imageUrl: "https://images.unsplash.com/photo-1621416901540-278fd0e5af7f",
//   },
//   {
//     name: "Basketball Net Chain Outdoor",
//     imageCategory: "basketball",
//     description: "Durable metal chain basketball net for outdoor hoops.",
//     price: 24.99,
//     imageUrl: "https://images.unsplash.com/photo-1580752249089-58d1f6f98975",
//   },
//   {
//     name: "Basketball Backpack SportX",
//     imageCategory: "basketball",
//     description:
//       "Spacious backpack with ball compartment and water bottle pocket.",
//     price: 49.99,
//     imageUrl: "https://images.unsplash.com/photo-1612454729749-7e8f7ec5b8fa",
//   },
//   {
//     name: "Basketball Headband ProGrip",
//     imageCategory: "basketball",
//     description: "Moisture-absorbent headband for intense games and training.",
//     price: 9.99,
//     imageUrl: "https://images.unsplash.com/photo-1526401485004-2c2eab16a54a",
//   },
//   {
//     name: "Basketball Training Cones SpeedSet",
//     imageCategory: "basketball",
//     description:
//       "Agility cone set for basketball footwork and dribbling practice.",
//     price: 17.99,
//     imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
//   },
//   {
//     name: "Basketball Sleeve & Wristband Set",
//     imageCategory: "basketball",
//     description: "Pair of compression sleeves with matching wristbands.",
//     price: 19.99,
//     imageUrl: "https://images.unsplash.com/photo-1580752249089-58d1f6f98975",
//   },
//   {
//     name: "Basketball Towel QuickDry",
//     imageCategory: "basketball",
//     description: "Soft microfiber towel ideal for courtside or gym use.",
//     price: 12.99,
//     imageUrl: "https://images.unsplash.com/photo-1567593810070-7acb2c2ecb52",
//   },
// ];

// export default sportsData;





const productsData = [
  {
    "id": 0,
    "name": "Adidas Sneakers Elite 1",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 58.44,
    "images": [
      "https://via.placeholder.com/300x300?text=Adidas+Sneakers+Elit"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "Puma",
    "specifications": {
      "material": "Synthetic",
      "size": "S",
      "color": "Blue"
    },
    "stock": 85,
    "sku": "GEN-SNE-PUM-000",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489767",
    "updatedAt": "2025-10-23T18:41:54.489767",
    "averageRating": 4.6,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Adidas+Sneakers+Elit",
    "imageCategory": "general"
  },
  {
    "id": 1,
    "name": "Asics Jersey Ultra 2",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 93.65,
    "images": [
      "https://via.placeholder.com/300x300?text=Asics+Jersey+Ultra+2"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "New Balance",
    "specifications": {
      "material": "Polyester",
      "size": "S",
      "color": "Green"
    },
    "stock": 90,
    "sku": "GEN-JER-NEW-001",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489801",
    "updatedAt": "2025-10-23T18:41:54.489801",
    "averageRating": 4.4,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Asics+Jersey+Ultra+2",
    "imageCategory": "general"
  },
  {
    "id": 2,
    "name": "New Balance Jersey Pro 3",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 184.02,
    "images": [
      "https://via.placeholder.com/300x300?text=New+Balance+Jersey+P"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "Nike",
    "specifications": {
      "material": "Cotton",
      "size": "L",
      "color": "Green"
    },
    "stock": 19,
    "sku": "GEN-JER-NIK-002",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489824",
    "updatedAt": "2025-10-23T18:41:54.489824",
    "averageRating": 3.9,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=New+Balance+Jersey+P",
    "imageCategory": "general"
  },
  {
    "id": 3,
    "name": "Asics Jersey Ultra 4",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 181.22,
    "images": [
      "https://via.placeholder.com/300x300?text=Asics+Jersey+Ultra+4"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "Adidas",
    "specifications": {
      "material": "Polyester",
      "size": "S",
      "color": "Green"
    },
    "stock": 95,
    "sku": "GEN-JER-ADI-003",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489837",
    "updatedAt": "2025-10-23T18:41:54.489837",
    "averageRating": 4.6,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=Asics+Jersey+Ultra+4",
    "imageCategory": "general"
  },
  {
    "id": 4,
    "name": "Under Armour Sneakers Classic 5",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 98.28,
    "images": [
      "https://via.placeholder.com/300x300?text=Under+Armour+Sneaker"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "Puma",
    "specifications": {
      "material": "Leather",
      "size": "L",
      "color": "Blue"
    },
    "stock": 14,
    "sku": "GEN-SNE-PUM-004",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489850",
    "updatedAt": "2025-10-23T18:41:54.489850",
    "averageRating": 4.3,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Under+Armour+Sneaker",
    "imageCategory": "general"
  },
  {
    "id": 5,
    "name": "Yonex Jersey Ultra 6",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 101.62,
    "images": [
      "https://via.placeholder.com/300x300?text=Yonex+Jersey+Ultra+6"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "New Balance",
    "specifications": {
      "material": "Leather",
      "size": "Full Size",
      "color": "Green"
    },
    "stock": 90,
    "sku": "GEN-JER-NEW-005",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489862",
    "updatedAt": "2025-10-23T18:41:54.489862",
    "averageRating": 4.9,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Yonex+Jersey+Ultra+6",
    "imageCategory": "general"
  },
  {
    "id": 6,
    "name": "Nike Trousers Classic 7",
    "description": "High-quality trousers for general enthusiasts. Durable and comfortable.",
    "price": 56.29,
    "images": [
      "https://via.placeholder.com/300x300?text=Nike+Trousers+Classi"
    ],
    "sport": "general",
    "type": "trousers",
    "brand": "Wilson",
    "specifications": {
      "material": "Synthetic",
      "size": "XL",
      "color": "Green"
    },
    "stock": 95,
    "sku": "GEN-TRO-WIL-006",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489875",
    "updatedAt": "2025-10-23T18:41:54.489875",
    "averageRating": 4.0,
    "tags": [
      "outdoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Nike+Trousers+Classi",
    "imageCategory": "general"
  },
  {
    "id": 7,
    "name": "Wilson Jersey Ultra 8",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 97.5,
    "images": [
      "https://via.placeholder.com/300x300?text=Wilson+Jersey+Ultra+"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "New Balance",
    "specifications": {
      "material": "Willow",
      "size": "M",
      "color": "Blue"
    },
    "stock": 43,
    "sku": "GEN-JER-NEW-007",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489888",
    "updatedAt": "2025-10-23T18:41:54.489888",
    "averageRating": 4.8,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Wilson+Jersey+Ultra+",
    "imageCategory": "general"
  },
  {
    "id": 8,
    "name": "Under Armour Sneakers Max 9",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 104.07,
    "images": [
      "https://via.placeholder.com/300x300?text=Under+Armour+Sneaker"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "Nike",
    "specifications": {
      "material": "Polyester",
      "size": "L",
      "color": "Red"
    },
    "stock": 51,
    "sku": "GEN-SNE-NIK-008",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489899",
    "updatedAt": "2025-10-23T18:41:54.489899",
    "averageRating": 4.1,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Under+Armour+Sneaker",
    "imageCategory": "general"
  },
  {
    "id": 9,
    "name": "Nike Sneakers Pro 10",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 77.34,
    "images": [
      "https://via.placeholder.com/300x300?text=Nike+Sneakers+Pro+10"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "Nike",
    "specifications": {
      "material": "Leather",
      "size": "Full Size",
      "color": "Black"
    },
    "stock": 42,
    "sku": "GEN-SNE-NIK-009",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489911",
    "updatedAt": "2025-10-23T18:41:54.489911",
    "averageRating": 4.0,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Nike+Sneakers+Pro+10",
    "imageCategory": "general"
  },
  {
    "id": 10,
    "name": "Asics Sneakers Ultra 11",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 81.95,
    "images": [
      "https://via.placeholder.com/300x300?text=Asics+Sneakers+Ultra"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "Under Armour",
    "specifications": {
      "material": "Willow",
      "size": "L",
      "color": "Black"
    },
    "stock": 58,
    "sku": "GEN-SNE-UND-010",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489923",
    "updatedAt": "2025-10-23T18:41:54.489923",
    "averageRating": 4.7,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Asics+Sneakers+Ultra",
    "imageCategory": "general"
  },
  {
    "id": 11,
    "name": "Yonex Sneakers Pro 12",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 39.97,
    "images": [
      "https://via.placeholder.com/300x300?text=Yonex+Sneakers+Pro+1"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "SG",
    "specifications": {
      "material": "Cotton",
      "size": "M",
      "color": "Red"
    },
    "stock": 41,
    "sku": "GEN-SNE-SG-011",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489937",
    "updatedAt": "2025-10-23T18:41:54.489937",
    "averageRating": 4.0,
    "tags": [
      "durable"
    ],
    "image": "https://via.placeholder.com/300x300?text=Yonex+Sneakers+Pro+1",
    "imageCategory": "general"
  },
  {
    "id": 12,
    "name": "Puma Jersey Pro 13",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 92.23,
    "images": [
      "https://via.placeholder.com/300x300?text=Puma+Jersey+Pro+13"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "Adidas",
    "specifications": {
      "material": "Leather",
      "size": "L",
      "color": "White"
    },
    "stock": 68,
    "sku": "GEN-JER-ADI-012",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489949",
    "updatedAt": "2025-10-23T18:41:54.489949",
    "averageRating": 4.4,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=Puma+Jersey+Pro+13",
    "imageCategory": "general"
  },
  {
    "id": 13,
    "name": "Yonex Trousers Classic 14",
    "description": "High-quality trousers for general enthusiasts. Durable and comfortable.",
    "price": 116.73,
    "images": [
      "https://via.placeholder.com/300x300?text=Yonex+Trousers+Class"
    ],
    "sport": "general",
    "type": "trousers",
    "brand": "Under Armour",
    "specifications": {
      "material": "Cotton",
      "size": "XL",
      "color": "Blue"
    },
    "stock": 69,
    "sku": "GEN-TRO-UND-013",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489960",
    "updatedAt": "2025-10-23T18:41:54.489960",
    "averageRating": 4.9,
    "tags": [
      "lightweight"
    ],
    "image": "https://via.placeholder.com/300x300?text=Yonex+Trousers+Class",
    "imageCategory": "general"
  },
  {
    "id": 14,
    "name": "Asics Jersey Classic 15",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 126.6,
    "images": [
      "https://via.placeholder.com/300x300?text=Asics+Jersey+Classic"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "Nike",
    "specifications": {
      "material": "Leather",
      "size": "S",
      "color": "White"
    },
    "stock": 15,
    "sku": "GEN-JER-NIK-014",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489972",
    "updatedAt": "2025-10-23T18:41:54.489972",
    "averageRating": 3.9,
    "tags": [
      "lightweight"
    ],
    "image": "https://via.placeholder.com/300x300?text=Asics+Jersey+Classic",
    "imageCategory": "general"
  },
  {
    "id": 15,
    "name": "Reebok Trousers Classic 16",
    "description": "High-quality trousers for general enthusiasts. Durable and comfortable.",
    "price": 21.18,
    "images": [
      "https://via.placeholder.com/300x300?text=Reebok+Trousers+Clas"
    ],
    "sport": "general",
    "type": "trousers",
    "brand": "Wilson",
    "specifications": {
      "material": "Polyester",
      "size": "XL",
      "color": "Blue"
    },
    "stock": 72,
    "sku": "GEN-TRO-WIL-015",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.489996",
    "updatedAt": "2025-10-23T18:41:54.489996",
    "averageRating": 4.2,
    "tags": [
      "lightweight"
    ],
    "image": "https://via.placeholder.com/300x300?text=Reebok+Trousers+Clas",
    "imageCategory": "general"
  },
  {
    "id": 16,
    "name": "SG Trousers Ultra 17",
    "description": "High-quality trousers for general enthusiasts. Durable and comfortable.",
    "price": 140.24,
    "images": [
      "https://via.placeholder.com/300x300?text=SG+Trousers+Ultra+17"
    ],
    "sport": "general",
    "type": "trousers",
    "brand": "SG",
    "specifications": {
      "material": "Polyester",
      "size": "L",
      "color": "Red"
    },
    "stock": 23,
    "sku": "GEN-TRO-SG-016",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490009",
    "updatedAt": "2025-10-23T18:41:54.490009",
    "averageRating": 5.0,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=SG+Trousers+Ultra+17",
    "imageCategory": "general"
  },
  {
    "id": 17,
    "name": "Yonex Sneakers Elite 18",
    "description": "High-quality sneakers for general enthusiasts. Durable and comfortable.",
    "price": 176.7,
    "images": [
      "https://via.placeholder.com/300x300?text=Yonex+Sneakers+Elite"
    ],
    "sport": "general",
    "type": "sneakers",
    "brand": "Puma",
    "specifications": {
      "material": "Leather",
      "size": "Full Size",
      "color": "Green"
    },
    "stock": 51,
    "sku": "GEN-SNE-PUM-017",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490020",
    "updatedAt": "2025-10-23T18:41:54.490020",
    "averageRating": 4.4,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Yonex+Sneakers+Elite",
    "imageCategory": "general"
  },
  {
    "id": 18,
    "name": "Adidas Jersey Pro 19",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 133.45,
    "images": [
      "https://via.placeholder.com/300x300?text=Adidas+Jersey+Pro+19"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "Wilson",
    "specifications": {
      "material": "Cotton",
      "size": "S",
      "color": "White"
    },
    "stock": 59,
    "sku": "GEN-JER-WIL-018",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490032",
    "updatedAt": "2025-10-23T18:41:54.490032",
    "averageRating": 3.9,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=Adidas+Jersey+Pro+19",
    "imageCategory": "general"
  },
  {
    "id": 19,
    "name": "New Balance Jersey Ultra 20",
    "description": "High-quality jersey for general enthusiasts. Durable and comfortable.",
    "price": 143.95,
    "images": [
      "https://via.placeholder.com/300x300?text=New+Balance+Jersey+U"
    ],
    "sport": "general",
    "type": "jersey",
    "brand": "Wilson",
    "specifications": {
      "material": "Willow",
      "size": "Full Size",
      "color": "Green"
    },
    "stock": 27,
    "sku": "GEN-JER-WIL-019",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490043",
    "updatedAt": "2025-10-23T18:41:54.490043",
    "averageRating": 3.6,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=New+Balance+Jersey+U",
    "imageCategory": "general"
  },
  {
    "id": 20,
    "name": "Under Armour Jersey Pro 21",
    "description": "High-quality jersey for basketball enthusiasts. Durable and comfortable.",
    "price": 80.03,
    "images": [
      "https://via.placeholder.com/300x300?text=Under+Armour+Jersey+"
    ],
    "sport": "basketball",
    "type": "jersey",
    "brand": "New Balance",
    "specifications": {
      "material": "Cotton",
      "size": "M",
      "color": "Green"
    },
    "stock": 61,
    "sku": "BAS-JER-NEW-020",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490056",
    "updatedAt": "2025-10-23T18:41:54.490056",
    "averageRating": 4.0,
    "tags": [
      "outdoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Under+Armour+Jersey+",
    "imageCategory": "basketball"
  },
  {
    "id": 21,
    "name": "Nike Sneakers Classic 22",
    "description": "High-quality sneakers for tennis enthusiasts. Durable and comfortable.",
    "price": 194.33,
    "images": [
      "https://via.placeholder.com/300x300?text=Nike+Sneakers+Classi"
    ],
    "sport": "tennis",
    "type": "sneakers",
    "brand": "Reebok",
    "specifications": {
      "material": "Cotton",
      "size": "L",
      "color": "Red"
    },
    "stock": 70,
    "sku": "TEN-SNE-REE-021",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490070",
    "updatedAt": "2025-10-23T18:41:54.490070",
    "averageRating": 3.6,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=Nike+Sneakers+Classi",
    "imageCategory": "tennis"
  },
  {
    "id": 22,
    "name": "Reebok Sneakers Elite 23",
    "description": "High-quality sneakers for badminton enthusiasts. Durable and comfortable.",
    "price": 145.66,
    "images": [
      "https://via.placeholder.com/300x300?text=Reebok+Sneakers+Elit"
    ],
    "sport": "badminton",
    "type": "sneakers",
    "brand": "Nike",
    "specifications": {
      "material": "Cotton",
      "size": "M",
      "color": "Black"
    },
    "stock": 36,
    "sku": "BAD-SNE-NIK-022",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490083",
    "updatedAt": "2025-10-23T18:41:54.490083",
    "averageRating": 4.4,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Reebok+Sneakers+Elit",
    "imageCategory": "badminton"
  },
  {
    "id": 23,
    "name": "Reebok Helmet Pro 24",
    "description": "High-quality helmet for cricket enthusiasts. Durable and comfortable.",
    "price": 118.08,
    "images": [
      "https://via.placeholder.com/300x300?text=Reebok+Helmet+Pro+24"
    ],
    "sport": "cricket",
    "type": "helmet",
    "brand": "Asics",
    "specifications": {
      "material": "Leather",
      "size": "S",
      "color": "Green"
    },
    "stock": 100,
    "sku": "CRI-HEL-ASI-023",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490095",
    "updatedAt": "2025-10-23T18:41:54.490095",
    "averageRating": 4.3,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Reebok+Helmet+Pro+24",
    "imageCategory": "cricket"
  },
  {
    "id": 24,
    "name": "Asics Bat Elite 25",
    "description": "High-quality bat for tennis enthusiasts. Durable and comfortable.",
    "price": 171.22,
    "images": [
      "https://via.placeholder.com/300x300?text=Asics+Bat+Elite+25"
    ],
    "sport": "tennis",
    "type": "bat",
    "brand": "Under Armour",
    "specifications": {
      "material": "Polyester",
      "size": "Full Size",
      "color": "Red"
    },
    "stock": 37,
    "sku": "TEN-BAT-UND-024",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490107",
    "updatedAt": "2025-10-23T18:41:54.490107",
    "averageRating": 4.2,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Asics+Bat+Elite+25",
    "imageCategory": "tennis"
  },
  {
    "id": 25,
    "name": "Adidas Ball Elite 26",
    "description": "High-quality ball for cricket enthusiasts. Durable and comfortable.",
    "price": 135.21,
    "images": [
      "https://via.placeholder.com/300x300?text=Adidas+Ball+Elite+26"
    ],
    "sport": "cricket",
    "type": "ball",
    "brand": "New Balance",
    "specifications": {
      "material": "Leather",
      "size": "Full Size",
      "color": "Red"
    },
    "stock": 25,
    "sku": "CRI-BAL-NEW-025",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490119",
    "updatedAt": "2025-10-23T18:41:54.490119",
    "averageRating": 4.5,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Adidas+Ball+Elite+26",
    "imageCategory": "cricket"
  },
  {
    "id": 26,
    "name": "Asics Sneakers Pro 27",
    "description": "High-quality sneakers for badminton enthusiasts. Durable and comfortable.",
    "price": 129.68,
    "images": [
      "https://via.placeholder.com/300x300?text=Asics+Sneakers+Pro+2"
    ],
    "sport": "badminton",
    "type": "sneakers",
    "brand": "Puma",
    "specifications": {
      "material": "Willow",
      "size": "L",
      "color": "Red"
    },
    "stock": 26,
    "sku": "BAD-SNE-PUM-026",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490131",
    "updatedAt": "2025-10-23T18:41:54.490131",
    "averageRating": 4.1,
    "tags": [
      "lightweight"
    ],
    "image": "https://via.placeholder.com/300x300?text=Asics+Sneakers+Pro+2",
    "imageCategory": "badminton"
  },
  {
    "id": 27,
    "name": "Puma Jersey Max 28",
    "description": "High-quality jersey for tennis enthusiasts. Durable and comfortable.",
    "price": 175.22,
    "images": [
      "https://via.placeholder.com/300x300?text=Puma+Jersey+Max+28"
    ],
    "sport": "tennis",
    "type": "jersey",
    "brand": "Yonex",
    "specifications": {
      "material": "Polyester",
      "size": "XL",
      "color": "Black"
    },
    "stock": 94,
    "sku": "TEN-JER-YON-027",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490143",
    "updatedAt": "2025-10-23T18:41:54.490143",
    "averageRating": 4.8,
    "tags": [
      "outdoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Puma+Jersey+Max+28",
    "imageCategory": "tennis"
  },
  {
    "id": 28,
    "name": "Nike Ball Ultra 29",
    "description": "High-quality ball for cricket enthusiasts. Durable and comfortable.",
    "price": 79.94,
    "images": [
      "https://via.placeholder.com/300x300?text=Nike+Ball+Ultra+29"
    ],
    "sport": "cricket",
    "type": "ball",
    "brand": "Nike",
    "specifications": {
      "material": "Cotton",
      "size": "L",
      "color": "Green"
    },
    "stock": 43,
    "sku": "CRI-BAL-NIK-028",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490183",
    "updatedAt": "2025-10-23T18:41:54.490183",
    "averageRating": 4.1,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=Nike+Ball+Ultra+29",
    "imageCategory": "cricket"
  },
  {
    "id": 29,
    "name": "SG Racket Pro 30",
    "description": "High-quality racket for football enthusiasts. Durable and comfortable.",
    "price": 148.05,
    "images": [
      "https://via.placeholder.com/300x300?text=SG+Racket+Pro+30"
    ],
    "sport": "football",
    "type": "racket",
    "brand": "Adidas",
    "specifications": {
      "material": "Cotton",
      "size": "L",
      "color": "Red"
    },
    "stock": 40,
    "sku": "FOO-RAC-ADI-029",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490196",
    "updatedAt": "2025-10-23T18:41:54.490196",
    "averageRating": 4.0,
    "tags": [
      "outdoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=SG+Racket+Pro+30",
    "imageCategory": "football"
  },
  {
    "id": 30,
    "name": "Under Armour Shuttlecock Max 31",
    "description": "High-quality shuttlecock for tennis enthusiasts. Durable and comfortable.",
    "price": 37.91,
    "images": [
      "https://via.placeholder.com/300x300?text=Under+Armour+Shuttle"
    ],
    "sport": "tennis",
    "type": "shuttlecock",
    "brand": "Under Armour",
    "specifications": {
      "material": "Synthetic",
      "size": "L",
      "color": "White"
    },
    "stock": 46,
    "sku": "TEN-SHU-UND-030",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490209",
    "updatedAt": "2025-10-23T18:41:54.490209",
    "averageRating": 4.9,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Under+Armour+Shuttle",
    "imageCategory": "tennis"
  },
  {
    "id": 31,
    "name": "New Balance Helmet Ultra 32",
    "description": "High-quality helmet for badminton enthusiasts. Durable and comfortable.",
    "price": 30.31,
    "images": [
      "https://via.placeholder.com/300x300?text=New+Balance+Helmet+U"
    ],
    "sport": "badminton",
    "type": "helmet",
    "brand": "Under Armour",
    "specifications": {
      "material": "Cotton",
      "size": "XL",
      "color": "Black"
    },
    "stock": 37,
    "sku": "BAD-HEL-UND-031",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490224",
    "updatedAt": "2025-10-23T18:41:54.490224",
    "averageRating": 3.8,
    "tags": [
      "outdoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=New+Balance+Helmet+U",
    "imageCategory": "badminton"
  },
  {
    "id": 32,
    "name": "Nike Pads Classic 33",
    "description": "High-quality pads for tennis enthusiasts. Durable and comfortable.",
    "price": 119.66,
    "images": [
      "https://via.placeholder.com/300x300?text=Nike+Pads+Classic+33"
    ],
    "sport": "tennis",
    "type": "pads",
    "brand": "Yonex",
    "specifications": {
      "material": "Polyester",
      "size": "L",
      "color": "White"
    },
    "stock": 13,
    "sku": "TEN-PAD-YON-032",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490235",
    "updatedAt": "2025-10-23T18:41:54.490235",
    "averageRating": 4.9,
    "tags": [
      "durable"
    ],
    "image": "https://via.placeholder.com/300x300?text=Nike+Pads+Classic+33",
    "imageCategory": "tennis"
  },
  {
    "id": 33,
    "name": "Under Armour Jersey Pro 34",
    "description": "High-quality jersey for basketball enthusiasts. Durable and comfortable.",
    "price": 144.93,
    "images": [
      "https://via.placeholder.com/300x300?text=Under+Armour+Jersey+"
    ],
    "sport": "basketball",
    "type": "jersey",
    "brand": "Under Armour",
    "specifications": {
      "material": "Synthetic",
      "size": "XL",
      "color": "Red"
    },
    "stock": 27,
    "sku": "BAS-JER-UND-033",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490250",
    "updatedAt": "2025-10-23T18:41:54.490250",
    "averageRating": 4.3,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Under+Armour+Jersey+",
    "imageCategory": "basketball"
  },
  {
    "id": 34,
    "name": "SG Racket Pro 35",
    "description": "High-quality racket for tennis enthusiasts. Durable and comfortable.",
    "price": 160.65,
    "images": [
      "https://via.placeholder.com/300x300?text=SG+Racket+Pro+35"
    ],
    "sport": "tennis",
    "type": "racket",
    "brand": "Asics",
    "specifications": {
      "material": "Willow",
      "size": "L",
      "color": "Green"
    },
    "stock": 27,
    "sku": "TEN-RAC-ASI-034",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490262",
    "updatedAt": "2025-10-23T18:41:54.490262",
    "averageRating": 3.7,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=SG+Racket+Pro+35",
    "imageCategory": "tennis"
  },
  {
    "id": 35,
    "name": "Adidas Bat Pro 36",
    "description": "High-quality bat for badminton enthusiasts. Durable and comfortable.",
    "price": 20.61,
    "images": [
      "https://via.placeholder.com/300x300?text=Adidas+Bat+Pro+36"
    ],
    "sport": "badminton",
    "type": "bat",
    "brand": "Reebok",
    "specifications": {
      "material": "Synthetic",
      "size": "M",
      "color": "Red"
    },
    "stock": 75,
    "sku": "BAD-BAT-REE-035",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490274",
    "updatedAt": "2025-10-23T18:41:54.490274",
    "averageRating": 4.8,
    "tags": [
      "lightweight"
    ],
    "image": "https://via.placeholder.com/300x300?text=Adidas+Bat+Pro+36",
    "imageCategory": "badminton"
  },
  {
    "id": 36,
    "name": "Wilson Trousers Max 37",
    "description": "High-quality trousers for tennis enthusiasts. Durable and comfortable.",
    "price": 32.85,
    "images": [
      "https://via.placeholder.com/300x300?text=Wilson+Trousers+Max+"
    ],
    "sport": "tennis",
    "type": "trousers",
    "brand": "SG",
    "specifications": {
      "material": "Leather",
      "size": "XL",
      "color": "Blue"
    },
    "stock": 36,
    "sku": "TEN-TRO-SG-036",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490288",
    "updatedAt": "2025-10-23T18:41:54.490288",
    "averageRating": 4.1,
    "tags": [
      "indoor"
    ],
    "image": "https://via.placeholder.com/300x300?text=Wilson+Trousers+Max+",
    "imageCategory": "tennis"
  },
  {
    "id": 37,
    "name": "Reebok Jersey Ultra 38",
    "description": "High-quality jersey for basketball enthusiasts. Durable and comfortable.",
    "price": 159.98,
    "images": [
      "https://via.placeholder.com/300x300?text=Reebok+Jersey+Ultra+"
    ],
    "sport": "basketball",
    "type": "jersey",
    "brand": "Under Armour",
    "specifications": {
      "material": "Willow",
      "size": "Full Size",
      "color": "Blue"
    },
    "stock": 27,
    "sku": "BAS-JER-UND-037",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490303",
    "updatedAt": "2025-10-23T18:41:54.490303",
    "averageRating": 5.0,
    "tags": [
      "professional"
    ],
    "image": "https://via.placeholder.com/300x300?text=Reebok+Jersey+Ultra+",
    "imageCategory": "basketball"
  },
  {
    "id": 38,
    "name": "Adidas Ball Classic 39",
    "description": "High-quality ball for tennis enthusiasts. Durable and comfortable.",
    "price": 75.86,
    "images": [
      "https://via.placeholder.com/300x300?text=Adidas+Ball+Classic+"
    ],
    "sport": "tennis",
    "type": "ball",
    "brand": "Asics",
    "specifications": {
      "material": "Leather",
      "size": "XL",
      "color": "Blue"
    },
    "stock": 26,
    "sku": "TEN-BAL-ASI-038",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490387",
    "updatedAt": "2025-10-23T18:41:54.490387",
    "averageRating": 4.0,
    "tags": [
      "lightweight"
    ],
    "image": "https://via.placeholder.com/300x300?text=Adidas+Ball+Classic+",
    "imageCategory": "tennis"
  },
  {
    "id": 39,
    "name": "Reebok Shuttlecock Classic 40",
    "description": "High-quality shuttlecock for badminton enthusiasts. Durable and comfortable.",
    "price": 72.71,
    "images": [
      "https://via.placeholder.com/300x300?text=Reebok+Shuttlecock+C"
    ],
    "sport": "badminton",
    "type": "shuttlecock",
    "brand": "Asics",
    "specifications": {
      "material": "Willow",
      "size": "XL",
      "color": "Blue"
    },
    "stock": 50,
    "sku": "BAD-SHU-ASI-039",
    "isActive": true,
    "createdAt": "2025-10-23T18:41:54.490400",
    "updatedAt": "2025-10-23T18:41:54.490400",
    "averageRating": 3.6,
    "tags": [
      "beginner"
    ],
    "image": "https://via.placeholder.com/300x300?text=Reebok+Shuttlecock+C",
    "imageCategory": "badminton"
  }
];

export default productsData;