export interface Icon {
  id: string;
  name: string;
  svg: string;
  jsx: string;
  category: string;
}

export const icons: Icon[] = [
  // AC Icons
  {
    id: "ac-duo",
    name: "AC Duo Tone",
    svg: `<i class="icon-ac-duo-tone"></i>`,
    jsx: '<i className="icon-ac-duo-tone"></i>',
    category: "Hotel Amenities",
  },
  {
    id: "ac-fill",
    name: "AC Fill",
    svg: `<i class="icon-ac-fill"></i>`,
    jsx: '<i className="icon-ac-fill"></i>',
    category: "Hotel Amenities",
  },
  {
    id: "ac-line",
    name: "AC Line",
    svg: `<i class="icon-ac-line"></i>`,
    jsx: '<i className="icon-ac-line"></i>',
    category: "Hotel Amenities",
  },
  // Adjoining Room Icons
  {
    id: "adjoining-duo",
    name: "Adjoining Room Duo Tone",
    svg: `<i class="icon-adjoining-room-duo-tone"></i>`,
    jsx: '<i className="icon-adjoining-room-duo-tone"></i>',
    category: "Room Types",
  },
  {
    id: "adjoining-fill",
    name: "Adjoining Room Fill",
    svg: `<i class="icon-adjoining-room-fill"></i>`,
    jsx: '<i className="icon-adjoining-room-fill"></i>',
    category: "Room Types",
  },
  {
    id: "adjoining-line",
    name: "Adjoining Room Line",
    svg: `<i class="icon-adjoining-room-line"></i>`,
    jsx: '<i className="icon-adjoining-room-line"></i>',
    category: "Room Types",
  },
  // ATM Icons
  {
    id: "atm-duo",
    name: "ATM Duo Tone",
    svg: `<i class="icon-atm-duo-tone"></i>`,
    jsx: '<i className="icon-atm-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "atm-fill",
    name: "ATM Fill",
    svg: `<i class="icon-atm-fill"></i>`,
    jsx: '<i className="icon-atm-fill"></i>',
    category: "Facilities",
  },
  {
    id: "atm-line",
    name: "ATM Line",
    svg: `<i class="icon-atm-line"></i>`,
    jsx: '<i className="icon-atm-line"></i>',
    category: "Facilities",
  },
  // Baby Icons
  {
    id: "baby-duo",
    name: "Baby Duo Tone",
    svg: `<i class="icon-baby-duo-tone"></i>`,
    jsx: '<i className="icon-baby-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "baby-fill",
    name: "Baby Fill",
    svg: `<i class="icon-baby-fill"></i>`,
    jsx: '<i className="icon-baby-fill"></i>',
    category: "Services",
  },
  {
    id: "baby-line",
    name: "Baby Line",
    svg: `<i class="icon-baby-line"></i>`,
    jsx: '<i className="icon-baby-line"></i>',
    category: "Services",
  },
  // Basket Icons
  {
    id: "basket-duo",
    name: "Basket Duo Tone",
    svg: `<i class="icon-basket-duo-tone"></i>`,
    jsx: '<i className="icon-basket-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "basket-fill",
    name: "Basket Fill",
    svg: `<i class="icon-basket-fill"></i>`,
    jsx: '<i className="icon-basket-fill"></i>',
    category: "Amenities",
  },
  {
    id: "basket-line",
    name: "Basket Line",
    svg: `<i class="icon-basket-line"></i>`,
    jsx: '<i className="icon-basket-line"></i>',
    category: "Amenities",
  },
  // Books Icons
  {
    id: "books-duo",
    name: "Books Duo Tone",
    svg: `<i class="icon-books-duo-tone"></i>`,
    jsx: '<i className="icon-books-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "books-fill",
    name: "Books Fill",
    svg: `<i class="icon-books-fill"></i>`,
    jsx: '<i className="icon-books-fill"></i>',
    category: "Amenities",
  },
  {
    id: "books-line",
    name: "Books Line",
    svg: `<i class="icon-books-line"></i>`,
    jsx: '<i className="icon-books-line"></i>',
    category: "Amenities",
  },
  // Broom Icons
  {
    id: "broom-duo",
    name: "Broom Duo Tone",
    svg: `<i class="icon-broom-duo-tone"></i>`,
    jsx: '<i className="icon-broom-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "broom-fill",
    name: "Broom Fill",
    svg: `<i class="icon-broom-fill"></i>`,
    jsx: '<i className="icon-broom-fill"></i>',
    category: "Services",
  },
  {
    id: "broom-line",
    name: "Broom Line",
    svg: `<i class="icon-broom-line"></i>`,
    jsx: '<i className="icon-broom-line"></i>',
    category: "Services",
  },
  // Cab Icons
  {
    id: "cab-duo",
    name: "Cab Duo Tone",
    svg: `<i class="icon-cab-duo-tone"></i>`,
    jsx: '<i className="icon-cab-duo-tone"></i>',
    category: "Transportation",
  },
  {
    id: "cab-fill",
    name: "Cab Fill",
    svg: `<i class="icon-cab-fill"></i>`,
    jsx: '<i className="icon-cab-fill"></i>',
    category: "Transportation",
  },
  {
    id: "cab-line",
    name: "Cab Line",
    svg: `<i class="icon-cab-line"></i>`,
    jsx: '<i className="icon-cab-line"></i>',
    category: "Transportation",
  },
  // Call Bell Icons
  {
    id: "call-bell-duo",
    name: "Call Bell Duo Tone",
    svg: `<i class="icon-call-bell-duo-tone"></i>`,
    jsx: '<i className="icon-call-bell-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "call-bell-fill",
    name: "Call Bell Fill",
    svg: `<i class="icon-call-bell-fill"></i>`,
    jsx: '<i className="icon-call-bell-fill"></i>',
    category: "Services",
  },
  // Conference Icons
  {
    id: "conference-duo",
    name: "Conference Duo Tone",
    svg: `<i class="icon-conference-duo-tone"></i>`,
    jsx: '<i className="icon-conference-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "conference-fill",
    name: "Conference Fill",
    svg: `<i class="icon-conference-fill"></i>`,
    jsx: '<i className="icon-conference-fill"></i>',
    category: "Facilities",
  },
  {
    id: "conference-line",
    name: "Conference Line",
    svg: `<i class="icon-conference-line"></i>`,
    jsx: '<i className="icon-conference-line"></i>',
    category: "Facilities",
  },
  // Other icons following the same pattern...
  {
    id: "swimming-pool-duo",
    name: "Swimming Pool Duo Tone",
    svg: `<i class="icon-swimming-pool-duo-tone"></i>`,
    jsx: '<i className="icon-swimming-pool-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "swimming-pool-fill",
    name: "Swimming Pool Fill",
    svg: `<i class="icon-swimming-pool-fill"></i>`,
    jsx: '<i className="icon-swimming-pool-fill"></i>',
    category: "Facilities",
  },
  {
    id: "swimming-pool-line",
    name: "Swimming Pool Line",
    svg: `<i class="icon-swimming-pool-line"></i>`,
    jsx: '<i className="icon-swimming-pool-line"></i>',
    category: "Facilities",
  },
  // Tree Fence Icons
  {
    id: "tree-fence-duo",
    name: "Tree Fence Duo Tone",
    svg: `<i class="icon-tree-fence-duo-tone"></i>`,
    jsx: '<i className="icon-tree-fence-duo-tone"></i>',
    category: "Outdoor",
  },
  {
    id: "tree-fence-fill",
    name: "Tree Fence Fill",
    svg: `<i class="icon-tree-fence-fill"></i>`,
    jsx: '<i className="icon-tree-fence-fill"></i>',
    category: "Outdoor",
  },
  {
    id: "tree-fence-line",
    name: "Tree Fence Line",
    svg: `<i class="icon-tree-fence-line"></i>`,
    jsx: '<i className="icon-tree-fence-line"></i>',
    category: "Outdoor",
  },
  // Cards Icons
  {
    id: "cards-duo",
    name: "Cards Duo Tone",
    svg: `<i class="icon-cards-duo-tone"></i>`,
    jsx: '<i className="icon-cards-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "cards-line",
    name: "Cards Line",
    svg: `<i class="icon-cards-line"></i>`,
    jsx: '<i className="icon-cards-line"></i>',
    category: "Amenities",
  },
  // Check In Icons
  {
    id: "check-in-duo",
    name: "Check In Duo Tone",
    svg: `<i class="icon-check-in-duo-tone"></i>`,
    jsx: '<i className="icon-check-in-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "check-in-fill",
    name: "Check In Fill",
    svg: `<i class="icon-check-in-fill"></i>`,
    jsx: '<i className="icon-check-in-fill"></i>',
    category: "Services",
  },
  {
    id: "check-in-line",
    name: "Check In Line",
    svg: `<i class="icon-check-in-line"></i>`,
    jsx: '<i className="icon-check-in-line"></i>',
    category: "Services",
  },
  // Dish Icons
  {
    id: "dish-duo",
    name: "Dish Duo Tone",
    svg: `<i class="icon-dish-duo-tone"></i>`,
    jsx: '<i className="icon-dish-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "dish-fill",
    name: "Dish Fill",
    svg: `<i class="icon-dish-fill"></i>`,
    jsx: '<i className="icon-dish-fill"></i>',
    category: "Amenities",
  },
  {
    id: "dish-line",
    name: "Dish Line",
    svg: `<i class="icon-dish-line"></i>`,
    jsx: '<i className="icon-dish-line"></i>',
    category: "Amenities",
  },
  // Door Man Icons
  {
    id: "door-man-duo",
    name: "Door Man Duo Tone",
    svg: `<i class="icon-door-man-duo-tone"></i>`,
    jsx: '<i className="icon-door-man-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "door-man-fill",
    name: "Door Man Fill",
    svg: `<i class="icon-door-man-fill"></i>`,
    jsx: '<i className="icon-door-man-fill"></i>',
    category: "Services",
  },
  {
    id: "door-man-line",
    name: "Door Man Line",
    svg: `<i class="icon-door-man-line"></i>`,
    jsx: '<i className="icon-door-man-line"></i>',
    category: "Services",
  },
  // Dry Clean Icons
  {
    id: "dry-clean-duo",
    name: "Dry Clean Duo Tone",
    svg: `<i class="icon-dry-clean-duo-tone"></i>`,
    jsx: '<i className="icon-dry-clean-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "dry-clean-fill",
    name: "Dry Clean Fill",
    svg: `<i class="icon-dry-clean-fill"></i>`,
    jsx: '<i className="icon-dry-clean-fill"></i>',
    category: "Services",
  },
  {
    id: "dry-clean-line",
    name: "Dry Clean Line",
    svg: `<i class="icon-dry-clean-line"></i>`,
    jsx: '<i className="icon-dry-clean-line"></i>',
    category: "Services",
  },
  // Electric Outlet Icons
  {
    id: "electric-outlet-duo",
    name: "Electric Outlet Duo Tone",
    svg: `<i class="icon-electric-outlet-duo-tone"></i>`,
    jsx: '<i className="icon-electric-outlet-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "electric-outlet-fill",
    name: "Electric Outlet Fill",
    svg: `<i class="icon-electric-outlet-fill"></i>`,
    jsx: '<i className="icon-electric-outlet-fill"></i>',
    category: "Amenities",
  },
  {
    id: "electric-outlet-line",
    name: "Electric Outlet Line",
    svg: `<i class="icon-electric-outlet-line"></i>`,
    jsx: '<i className="icon-electric-outlet-line"></i>',
    category: "Amenities",
  },
  // Flower Icons
  {
    id: "flower-duo",
    name: "Flower Duo Tone",
    svg: `<i class="icon-flower-duo-tone"></i>`,
    jsx: '<i className="icon-flower-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "flower-fill",
    name: "Flower Fill",
    svg: `<i class="icon-flower-fill"></i>`,
    jsx: '<i className="icon-flower-fill"></i>',
    category: "Amenities",
  },
  {
    id: "flower-line",
    name: "Flower Line",
    svg: `<i class="icon-flower-line"></i>`,
    jsx: '<i className="icon-flower-line"></i>',
    category: "Amenities",
  },
  // Front Office Icons
  {
    id: "front-office-duo",
    name: "Front Office Duo Tone",
    svg: `<i class="icon-front-office-duo-tone"></i>`,
    jsx: '<i className="icon-front-office-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "front-office-fill",
    name: "Front Office Fill",
    svg: `<i class="icon-front-office-fill"></i>`,
    jsx: '<i className="icon-front-office-fill"></i>',
    category: "Services",
  },
  {
    id: "front-office-line",
    name: "Front Office Line",
    svg: `<i class="icon-front-office-line"></i>`,
    jsx: '<i className="icon-front-office-line"></i>',
    category: "Services",
  },
  // Game Icons
  {
    id: "game-duo",
    name: "Game Duo Tone",
    svg: `<i class="icon-game-duo-tone"></i>`,
    jsx: '<i className="icon-game-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "game-fill",
    name: "Game Fill",
    svg: `<i class="icon-game-fill"></i>`,
    jsx: '<i className="icon-game-fill"></i>',
    category: "Amenities",
  },
  {
    id: "game-line",
    name: "Game Line",
    svg: `<i class="icon-game-line"></i>`,
    jsx: '<i className="icon-game-line"></i>',
    category: "Amenities",
  },
  // Gym Icons
  {
    id: "gym-duo",
    name: "Gym Duo Tone",
    svg: `<i class="icon-gym-duo-tone"></i>`,
    jsx: '<i className="icon-gym-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "gym-fill",
    name: "Gym Fill",
    svg: `<i class="icon-gym-fill"></i>`,
    jsx: '<i className="icon-gym-fill"></i>',
    category: "Facilities",
  },
  {
    id: "gym-line",
    name: "Gym Line",
    svg: `<i class="icon-gym-line"></i>`,
    jsx: '<i className="icon-gym-line"></i>',
    category: "Facilities",
  },
  // Lift Icons
  {
    id: "lift-duo",
    name: "Lift Duo Tone",
    svg: `<i class="icon-lift-duo-tone"></i>`,
    jsx: '<i className="icon-lift-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "lift-fill",
    name: "Lift Fill",
    svg: `<i class="icon-lift-fill"></i>`,
    jsx: '<i className="icon-lift-fill"></i>',
    category: "Facilities",
  },
  {
    id: "lift-line",
    name: "Lift Line",
    svg: `<i class="icon-lift-line"></i>`,
    jsx: '<i className="icon-lift-line"></i>',
    category: "Facilities",
  },
  // Liquor Icons
  {
    id: "liquor-duo",
    name: "Liquor Duo Tone",
    svg: `<i class="icon-liquor-duo-tone"></i>`,
    jsx: '<i className="icon-liquor-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "liquor-fill",
    name: "Liquor Fill",
    svg: `<i class="icon-liquor-fill"></i>`,
    jsx: '<i className="icon-liquor-fill"></i>',
    category: "Amenities",
  },
  {
    id: "liquor-line",
    name: "Liquor Line",
    svg: `<i class="icon-liquor-line"></i>`,
    jsx: '<i className="icon-liquor-line"></i>',
    category: "Amenities",
  },
  // Medical Icons
  {
    id: "medical-duo",
    name: "Medical Duo Tone",
    svg: `<i class="icon-medical-duo-tone"></i>`,
    jsx: '<i className="icon-medical-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "medical-fill",
    name: "Medical Fill",
    svg: `<i class="icon-medical-fill"></i>`,
    jsx: '<i className="icon-medical-fill"></i>',
    category: "Services",
  },
  {
    id: "medical-line",
    name: "Medical Line",
    svg: `<i class="icon-medical-line"></i>`,
    jsx: '<i className="icon-medical-line"></i>',
    category: "Services",
  },
  // Parking Icons
  {
    id: "parking-duo",
    name: "Parking Duo Tone",
    svg: `<i class="icon-parking-duo-tone"></i>`,
    jsx: '<i className="icon-parking-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "parking-fill",
    name: "Parking Fill",
    svg: `<i class="icon-parking-fill"></i>`,
    jsx: '<i className="icon-parking-fill"></i>',
    category: "Facilities",
  },
  {
    id: "parking-line",
    name: "Parking Line",
    svg: `<i class="icon-parking-line"></i>`,
    jsx: '<i className="icon-parking-line"></i>',
    category: "Facilities",
  },
  // Pet Icons
  {
    id: "pet-duo",
    name: "Pet Duo Tone",
    svg: `<i class="icon-pet-duo-tone"></i>`,
    jsx: '<i className="icon-pet-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "pet-fill",
    name: "Pet Fill",
    svg: `<i class="icon-pet-fill"></i>`,
    jsx: '<i className="icon-pet-fill"></i>',
    category: "Services",
  },
  {
    id: "pet-line",
    name: "Pet Line",
    svg: `<i class="icon-pet-line"></i>`,
    jsx: '<i className="icon-pet-line"></i>',
    category: "Services",
  },
  // Scissor Icons
  {
    id: "scissor-duo",
    name: "Scissor Duo Tone",
    svg: `<i class="icon-scissor-duo-tone"></i>`,
    jsx: '<i className="icon-scissor-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "scissor-fill",
    name: "Scissor Fill",
    svg: `<i class="icon-scissor-fill"></i>`,
    jsx: '<i className="icon-scissor-fill"></i>',
    category: "Amenities",
  },
  {
    id: "scissor-line",
    name: "Scissor Line",
    svg: `<i class="icon-scissor-line"></i>`,
    jsx: '<i className="icon-scissor-line"></i>',
    category: "Amenities",
  },
  // Security Icons
  {
    id: "security-duo",
    name: "Security Duo Tone",
    svg: `<i class="icon-security-duo-tone"></i>`,
    jsx: '<i className="icon-security-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "security-fill",
    name: "Security Fill",
    svg: `<i class="icon-security-fill"></i>`,
    jsx: '<i className="icon-security-fill"></i>',
    category: "Services",
  },
  {
    id: "security-line",
    name: "Security Line",
    svg: `<i class="icon-security-line"></i>`,
    jsx: '<i className="icon-security-line"></i>',
    category: "Services",
  },
  // Shield Check Icons
  {
    id: "shield-check-duo",
    name: "Shield Check Duo Tone",
    svg: `<i class="icon-shield-check-duo-tone"></i>`,
    jsx: '<i className="icon-shield-check-duo-tone"></i>',
    category: "Services",
  },
  {
    id: "shield-check-fill",
    name: "Shield Check Fill",
    svg: `<i class="icon-shield-check-fill"></i>`,
    jsx: '<i className="icon-shield-check-fill"></i>',
    category: "Services",
  },
  {
    id: "shield-check-line",
    name: "Shield Check Line",
    svg: `<i class="icon-shield-check-line"></i>`,
    jsx: '<i className="icon-shield-check-line"></i>',
    category: "Services",
  },
  // Shop Icons
  {
    id: "shop-duo",
    name: "Shop Duo Tone",
    svg: `<i class="icon-shop-duo-tone"></i>`,
    jsx: '<i className="icon-shop-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "shop-fill",
    name: "Shop Fill",
    svg: `<i class="icon-shop-fill"></i>`,
    jsx: '<i className="icon-shop-fill"></i>',
    category: "Amenities",
  },
  {
    id: "shop-line",
    name: "Shop Line",
    svg: `<i class="icon-shop-line"></i>`,
    jsx: '<i className="icon-shop-line"></i>',
    category: "Amenities",
  },
  // Snow Flake Icons
  {
    id: "snow-flake-duo",
    name: "Snow Flake Duo Tone",
    svg: `<i class="icon-snow-flake-duo-tone"></i>`,
    jsx: '<i className="icon-snow-flake-duo-tone"></i>',
    category: "Amenities",
  },
  {
    id: "snow-flake-fill",
    name: "Snow Flake Fill",
    svg: `<i class="icon-snow-flake-fill"></i>`,
    jsx: '<i className="icon-snow-flake-fill"></i>',
    category: "Amenities",
  },
  {
    id: "snow-flake-line",
    name: "Snow Flake Line",
    svg: `<i class="icon-snow-flake-line"></i>`,
    jsx: '<i className="icon-snow-flake-line"></i>',
    category: "Amenities",
  },
  // Track Icons
  {
    id: "track-duo",
    name: "Track Duo Tone",
    svg: `<i class="icon-track-duo-tone"></i>`,
    jsx: '<i className="icon-track-duo-tone"></i>',
    category: "Facilities",
  },
  {
    id: "track-fill",
    name: "Track Fill",
    svg: `<i class="icon-track-fill"></i>`,
    jsx: '<i className="icon-track-fill"></i>',
    category: "Facilities",
  },
  {
    id: "track-line",
    name: "Track Line",
    svg: `<i class="icon-track-line"></i>`,
    jsx: '<i className="icon-track-line"></i>',
    category: "Facilities",
  },
];
