import { Destination } from '@/types';

export const zone1DestinationsRest: Destination[] = [
  {
    id: 'majuli-island',
    name: 'Majuli Island',
    state: 'Assam',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'World\'s largest river island, Neo-Vaishnavite satras',
    description: 'A lush green, pollution-free freshwater island in the river Brahmaputra. Famous for its ancient Satras (Hindu Vaishnavite monasteries) and vibrant Mishing tribal culture. It is an ecological and cultural paradise slowly disappearing due to erosion.',
    altitude: 85,
    bestTimeBanner: 'October to March. Raas Mahotsav in November is spectacular.',
    seasonalRoadWarnings: 'Ferry services from Jorhat are suspended during heavy monsoon (July-August) due to Brahmaputra flooding.',
    stays: [
      { tier: 1, propertyName: 'Yggdrasill Bamboo Cottage', bookingUrl: 'https://www.airbnb.co.in/s/Majuli/homes', pricePerNight: 1000, altitude: 85, breakfastIncluded: true, distanceFromAttractions: 'Near Kamalabari Satra', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Dekasang Majuli', bookingUrl: 'https://www.makemytrip.com/hotels/dekasang_majuli-details-majuli.html', pricePerNight: 2500, altitude: 85, breakfastIncluded: true, distanceFromAttractions: 'River bank', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Prashanti Eco Resort', bookingUrl: 'https://www.makemytrip.com/hotels/majuli-hotels.html', pricePerNight: 4000, altitude: 85, breakfastIncluded: true, distanceFromAttractions: 'Central Majuli', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Jorhat (JRH)', airlines: ['IndiGo'], averageFareEstimate: 7500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 8 hours (Flight + 1.5 hr ferry ride from Nimati Ghat)'
    },
    commuteOptions: [
      { type: 'Bicycle Rental', cost: '₹200/day' },
      { type: 'Private Sumo/Scorpio', cost: '₹3000/day', vendorName: 'Kamalabari Taxi Stand' }
    ],
    food: {
      restaurants: [
        { name: 'Ural', mapLink: 'https://goo.gl/maps/search/Ural+Majuli' },
        { name: 'Mishing Kitchens', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Purang Apin (Sticky rice in leaves)', whereToEat: 'Mishing Homestays' },
        { name: 'Fish Tenga', whereToEat: 'Ural' }
      ],
      vegetarianAvailability: 'Excellent. Satras serve strict vegetarian Vaishnavite thalis.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Amber', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'mawlynnong',
    name: 'Mawlynnong',
    state: 'Meghalaya',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Asia\'s cleanest village',
    description: 'Famed as Asia\'s cleanest village, Mawlynnong offers a pristine environment with manicured gardens, bamboo dustbins at every corner, and the nearby living root bridge in Riwai village. It is a model of community-based eco-tourism.',
    altitude: 1000,
    bestTimeBanner: 'September to May. Post-monsoon is incredibly lush.',
    seasonalRoadWarnings: 'Roads are safe, but heavy rain can make root bridges slippery.',
    stays: [
      { tier: 1, propertyName: 'Epiphany Society Guesthouse', bookingUrl: 'Unverified — book locally', pricePerNight: 1200, altitude: 1000, breakfastIncluded: false, distanceFromAttractions: 'Center of village', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Areca Cottages', bookingUrl: 'https://www.airbnb.co.in/s/Mawlynnong/homes', pricePerNight: 2800, altitude: 1000, breakfastIncluded: true, distanceFromAttractions: 'Edge of village', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Polo Orchid Resort (Cherrapunji)', bookingUrl: 'https://www.makemytrip.com/hotels/cherrapunji-hotels.html', pricePerNight: 8500, altitude: 1300, breakfastIncluded: true, distanceFromAttractions: 'Stay in Sohra, day trip to Mawlynnong', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Guwahati (GAU) -> Shillong (SHL)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 9 hours (Flight + 3 hr drive from Shillong)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Shillong Tourist Taxi' }
    ],
    food: {
      restaurants: [
        { name: 'Village Community Kitchen', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Jadoh (Rice and meat)', whereToEat: 'Local eateries' },
        { name: 'Tungrymbai (Fermented soy)', whereToEat: 'Village Kitchen' }
      ],
      vegetarianAvailability: 'Moderate. Basic dal, rice, and local veg available.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'dawki',
    name: 'Dawki',
    state: 'Meghalaya',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Crystal-clear Umngot river',
    description: 'A border town between India and Bangladesh famous for the Umngot River, whose water is so clear that boats appear to float on air. Known for riverside camping and kayaking.',
    altitude: 50,
    bestTimeBanner: 'November to May. The river is clear only during the dry season.',
    seasonalRoadWarnings: 'During monsoon (June-Sept), the river turns muddy and boating is unsafe/suspended.',
    stays: [
      { tier: 1, propertyName: 'Shnongpdeng Riverside Camps', bookingUrl: 'Unverified — book locally at Shnongpdeng', pricePerNight: 800, altitude: 50, breakfastIncluded: false, distanceFromAttractions: 'On the river bank', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Betelnut Resort Shnongpdeng', bookingUrl: 'https://www.makemytrip.com/hotels/dawki-hotels.html', pricePerNight: 2500, altitude: 60, breakfastIncluded: true, distanceFromAttractions: 'Near suspension bridge', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Dawki Syndicate Luxury Camps', bookingUrl: 'https://www.makemytrip.com/hotels/dawki-hotels.html', pricePerNight: 4000, altitude: 50, breakfastIncluded: true, distanceFromAttractions: 'Private beach area', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Guwahati (GAU) -> Shillong (SHL)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 9 hours (Flight to Shillong + 2.5 hr drive to Dawki)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Shillong Tourist Taxi' },
      { type: 'Boat Ride', cost: '₹800 per boat (4 people)' }
    ],
    food: {
      restaurants: [
        { name: 'Riverbed Food Stalls', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Fresh River Fish Fry', whereToEat: 'Shnongpdeng riverside stalls' }
      ],
      vegetarianAvailability: 'Basic. Maggi and simple thalis.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'longwa-village',
    name: 'Longwa Village',
    state: 'Nagaland',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Konyak Naga headhunter tribe, straddles India-Myanmar border',
    description: 'One of the most fascinating villages in India, straddling the border with Myanmar. Home to the legendary tattooed Konyak headhunters. The Angh (chief\'s) house literally sits on the international border.',
    altitude: 1200,
    bestTimeBanner: 'October to April. Aoleang festival in April is the best time.',
    seasonalRoadWarnings: 'Roads from Mon town to Longwa are extremely rugged and almost impassable during monsoon.',
    stays: [
      { tier: 1, propertyName: 'Longwa Homestay', bookingUrl: 'Unverified — check with Mon Tourism', pricePerNight: 1000, altitude: 1200, breakfastIncluded: true, distanceFromAttractions: 'Near Chief\'s House', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Helsing House (Mon Town)', bookingUrl: 'https://www.makemytrip.com/hotels/mon-hotels.html', pricePerNight: 2500, altitude: 897, breakfastIncluded: true, distanceFromAttractions: 'Mon Town (base for Longwa)', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Paramount Guesthouse (Mon)', bookingUrl: 'Unverified — book via local agents', pricePerNight: 4000, altitude: 900, breakfastIncluded: true, distanceFromAttractions: 'Mon Town', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Dibrugarh (DIB)', airlines: ['IndiGo'], averageFareEstimate: 8000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 14 hours (Flight to Dibrugarh + 6 hr drive to Mon + 2 hr drive to Longwa)'
    },
    commuteOptions: [
      { type: '4x4 Bolero/Sumo', cost: '₹5000/day for 10 people', vendorName: 'Dibrugarh/Mon Taxi Stand' }
    ],
    food: {
      restaurants: [
        { name: 'Local Konyak Kitchens', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Smoked Pork', whereToEat: 'Homestays' },
        { name: 'Naga Black Tea', whereToEat: 'Angh\'s house' }
      ],
      vegetarianAvailability: 'Very poor. Strictly meat-heavy culture. Bring your own snacks/noodles if vegetarian.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: true
    },
    permits: [
      {
        type: 'Inner Line Permit (ILP)',
        issuedBy: 'Government of Nagaland',
        applicationPortalLink: 'https://ilp.nagaland.gov.in/',
        processingTime: '1-2 days',
        costPerPerson: 100,
        documentsRequired: ['Aadhaar', 'Passport Photo'],
        onArrivalPossible: true,
        groupSpecialRules: 'Requires designated guide to enter Chief\'s house.'
      }
    ],
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'phawngpui',
    name: 'Phawngpui (Blue Mountain)',
    state: 'Mizoram',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Highest peak in Mizoram, 2,157m, rhododendron forests',
    description: 'The highest mountain peak in Mizoram, known as the Blue Mountain. Famed for its orchids, rhododendrons, and spectacular views of the Myanmar border. A sacred peak for the Mizo people.',
    altitude: 2157,
    bestTimeBanner: 'October to April. Clear views of the sprawling hills.',
    seasonalRoadWarnings: 'Monsoon causes severe landslides across Mizoram highways.',
    stays: [
      { tier: 1, propertyName: 'Sangau Tourist Lodge', bookingUrl: 'Unverified — Mizoram Tourism', pricePerNight: 800, altitude: 1600, breakfastIncluded: false, distanceFromAttractions: 'Base of the mountain', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Saiha Tourist Lodge', bookingUrl: 'Unverified — Mizoram Tourism', pricePerNight: 2000, altitude: 1200, breakfastIncluded: true, distanceFromAttractions: 'Saiha town', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Hotel Floria (Aizawl)', bookingUrl: 'https://www.makemytrip.com/hotels/aizawl-hotels.html', pricePerNight: 4500, altitude: 1132, breakfastIncluded: true, distanceFromAttractions: 'City center (Base before travel)', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    trek: {
      name: 'Phawngpui Summit Trek',
      route: 'Sangau/Vawmbuk to Peak',
      startPoint: 'Sangau',
      startCoordinates: '22.6543° N, 93.0456° E',
      endPoint: 'Phawngpui Peak',
      endCoordinates: '22.6321° N, 93.0333° E',
      totalDistanceKm: 12,
      elevationGainMeters: 550,
      difficulty: 'Moderate',
      bestMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
      guideRequirement: 'Mandatory forest guide (₹1000/day)',
      campingAvailable: true,
      gearChecklist: ['Trekking shoes', 'Windcheater', 'Water'],
      permitRequired: true,
      permitLink: 'Mizoram Forest Dept at Sangau',
      estimatedTime: '4 hours one way',
      allTrailsLink: 'Unverified — check Wikiloc for Phawngpui',
      acclimatizationDaysNeeded: 0
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Kolkata (CCU) -> Aizawl (AJL)', airlines: ['IndiGo'], averageFareEstimate: 8500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 2 days (Flight to Aizawl + 10 hour drive to Sangau/Saiha)'
    },
    commuteOptions: [
      { type: 'Shared Sumo', cost: '₹800/seat from Aizawl to Saiha' },
      { type: 'Private Bolero', cost: '₹5000/day', vendorName: 'Aizawl Taxi Union' }
    ],
    food: {
      restaurants: [
        { name: 'Sangau Local Eateries', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Vawksa Rep (Smoked Pork)', whereToEat: 'Local dhabas' },
        { name: 'Bai (Mixed vegetable stew)', whereToEat: 'Homestays' }
      ],
      vegetarianAvailability: 'Poor in remote areas. Aizawl has good veg options.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Inner Line Permit (Mizoram)',
        issuedBy: 'Government of Mizoram',
        applicationPortalLink: 'https://ilp.mizoram.gov.in/',
        processingTime: '2 days',
        costPerPerson: 150,
        documentsRequired: ['Aadhaar', 'Passport Photo'],
        onArrivalPossible: true,
        groupSpecialRules: 'Can be obtained at Lengpui Airport on arrival.'
      }
    ],
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Amber', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'cherrapunji',
    name: 'Cherrapunji (Sohra)',
    state: 'Meghalaya',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Living root bridges, highest rainfall zone',
    description: 'Historically the wettest place on earth, famous for its dramatic waterfalls (Nohkalikai) and the remarkable Double Decker Living Root Bridge in Nongriat.',
    altitude: 1484,
    bestTimeBanner: 'September to May. Monsoon is spectacular for waterfalls but dangerous for trekking.',
    seasonalRoadWarnings: 'Heavy fog and torrential rain during monsoon (June-August).',
    stays: [
      { tier: 1, propertyName: 'Serene Homestay (Nongriat)', bookingUrl: 'Unverified — book upon trekking down', pricePerNight: 800, altitude: 500, breakfastIncluded: true, distanceFromAttractions: 'Next to Double Decker bridge', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Sohra Plaza', bookingUrl: 'https://www.makemytrip.com/hotels/cherrapunji-hotels.html', pricePerNight: 3000, altitude: 1484, breakfastIncluded: true, distanceFromAttractions: 'Near Seven Sisters falls', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Polo Orchid Resort', bookingUrl: 'https://www.makemytrip.com/hotels/cherrapunji-hotels.html', pricePerNight: 9000, altitude: 1484, breakfastIncluded: true, distanceFromAttractions: 'Overlooking Nohsngithiang Falls', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Guwahati (GAU) -> Shillong (SHL)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 8 hours (Flight to GAU + 4 hr drive)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹5000/day for 10 people', vendorName: 'Shillong Tourist Taxi' }
    ],
    food: {
      restaurants: [
        { name: 'Orange Roots', mapLink: 'https://goo.gl/maps/search/Orange+Roots+Sohra' }
      ],
      localDishes: [
        { name: 'Jadoh', whereToEat: 'Local market stalls' }
      ],
      vegetarianAvailability: 'Excellent. Orange Roots is a dedicated veg restaurant.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'laitlum-canyons',
    name: 'Laitlum Canyons',
    state: 'Meghalaya',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Grand Canyon of the East, sunrise above clouds',
    description: 'Translating to "The End of Hills," Laitlum offers jaw-dropping panoramic views of gorges, winding stairways, and bamboo-filled valleys often blanketed in mist.',
    altitude: 1500,
    bestTimeBanner: 'September to May. Early morning is best before the fog completely obscures the view.',
    seasonalRoadWarnings: 'Safe, but roads can be foggy.',
    stays: [
      { tier: 1, propertyName: 'Shillong Zostel', bookingUrl: 'https://www.zostel.com', pricePerNight: 800, altitude: 1500, breakfastIncluded: false, distanceFromAttractions: 'Shillong (Base for Laitlum)', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Kynjai Homestay', bookingUrl: 'https://www.airbnb.co.in/s/Shillong/homes', pricePerNight: 3000, altitude: 1500, breakfastIncluded: true, distanceFromAttractions: 'Near Shillong', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Ri Kynjai - Serenity By The Lake', bookingUrl: 'https://www.makemytrip.com/hotels/shillong-hotels.html', pricePerNight: 12000, altitude: 1400, breakfastIncluded: true, distanceFromAttractions: 'Umiam Lake (Base for Laitlum)', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Guwahati (GAU)', airlines: ['IndiGo'], averageFareEstimate: 5500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 7 hours (Flight + 3 hr drive to Shillong)'
    },
    commuteOptions: [
      { type: 'Private Cab from Shillong', cost: '₹1500 return trip' }
    ],
    food: {
      restaurants: [
        { name: 'Cafe Shillong', mapLink: 'https://goo.gl/maps/search/Cafe+Shillong' }
      ],
      localDishes: [
        { name: 'Momos and Thukpa', whereToEat: 'Shillong Police Bazaar' }
      ],
      vegetarianAvailability: 'Great in Shillong.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  }
];
