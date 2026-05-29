import { Destination } from '@/types';

export const zone3DestinationsRest: Destination[] = [
  {
    id: 'vattakanal',
    name: 'Vattakanal',
    state: 'Tamil Nadu',
    zone: 'Zone 3 — South India',
    keyFeature: 'Kodai\'s quieter cloudier twin, hippie hamlet, fog-heavy',
    description: 'Often called "Little Israel", this tiny hamlet near Kodaikanal is perched on a cliff edge. It is known for its intense fog, hippie culture, Israeli cafes, and stunning drops like Dolphin\'s Nose.',
    altitude: 2011,
    bestTimeBanner: 'September to February. The fog is magical during these months.',
    seasonalRoadWarnings: 'The narrow road from Kodaikanal to Vattakanal gets jammed during summer weekends.',
    stays: [
      { tier: 1, propertyName: 'Altaf\'s Cafe Homestay', bookingUrl: 'https://www.airbnb.co.in/s/Vattakanal/homes', pricePerNight: 800, altitude: 2011, breakfastIncluded: false, distanceFromAttractions: 'Near Dolphin\'s Nose', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Vattakanal Homestay', bookingUrl: 'https://www.makemytrip.com/hotels/kodaikanal-hotels.html', pricePerNight: 2000, altitude: 2011, breakfastIncluded: true, distanceFromAttractions: 'Edge of the cliff', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Shola Crown Resort', bookingUrl: 'https://www.makemytrip.com/hotels/kodaikanal-hotels.html', pricePerNight: 5000, altitude: 2100, breakfastIncluded: true, distanceFromAttractions: 'Near Vattakanal entrance', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Madurai (IXM)', airlines: ['IndiGo'], averageFareEstimate: 5000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3.5 hr drive from Madurai via Kodai)'
    },
    commuteOptions: [{ type: 'Walk/Hike', cost: 'Free' }, { type: 'Local Taxi from Kodai', cost: '₹500 per drop' }],
    food: {
      restaurants: [{ name: 'Altaf\'s Cafe', mapLink: 'https://goo.gl/maps/search/Altafs+Cafe+Vattakanal' }],
      localDishes: [{ name: 'Shakshuka', whereToEat: 'Altaf\'s Cafe' }],
      vegetarianAvailability: 'Excellent. Many vegan and vegetarian Mediterranean options.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: true
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Amber', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    state: 'Kerala',
    zone: 'Zone 3 — South India',
    keyFeature: 'Chembra Peak, Edakkal Caves, tribal stays',
    description: 'A lush green district in Kerala known for its spice plantations, wildlife sanctuaries, and historical caves with ancient petroglyphs. Home to Chembra Peak and the heart-shaped lake.',
    altitude: 2100,
    bestTimeBanner: 'September to March.',
    seasonalRoadWarnings: 'Thamarassery Churam (ghat road) can experience heavy traffic jams and landslides in monsoon.',
    stays: [
      { tier: 1, propertyName: 'Zostel Wayanad', bookingUrl: 'https://www.zostel.com/zostel/wayanad/', pricePerNight: 800, altitude: 800, breakfastIncluded: false, distanceFromAttractions: 'Amidst tea estates', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Vythiri Village Resort', bookingUrl: 'https://www.makemytrip.com/hotels/wayanad-hotels.html', pricePerNight: 4000, altitude: 1000, breakfastIncluded: true, distanceFromAttractions: 'Vythiri', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Pepper Trail', bookingUrl: 'https://www.makemytrip.com/hotels/wayanad-hotels.html', pricePerNight: 12000, altitude: 900, breakfastIncluded: true, distanceFromAttractions: 'Sultan Bathery', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    trek: {
      name: 'Chembra Peak Trek',
      route: 'Meppadi -> Chembra Base -> Heart Shaped Lake',
      startPoint: 'Chembra Base',
      startCoordinates: '11.5126° N, 76.0827° E',
      endPoint: 'Heart Shaped Lake',
      endCoordinates: '11.5100° N, 76.0850° E',
      totalDistanceKm: 9,
      elevationGainMeters: 600,
      difficulty: 'Moderate',
      bestMonths: ['September', 'October', 'November', 'December', 'January', 'February'],
      guideRequirement: 'Mandatory Forest Guide provided at ticket counter',
      campingAvailable: false,
      gearChecklist: ['Trekking shoes', 'Water', 'Leech socks in monsoon'],
      permitRequired: true,
      permitLink: 'Forest Checkpost at Meppadi',
      estimatedTime: '3-4 hours round trip',
      allTrailsLink: 'https://www.alltrails.com/trail/india/kerala/chembra-peak',
      acclimatizationDaysNeeded: 0
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Calicut (CCJ)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3 hr drive up the ghats)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5000/day for 10 people', vendorName: 'Calicut Taxi Union' }],
    food: {
      restaurants: [{ name: 'Jubilee Restaurant', mapLink: 'https://goo.gl/maps/search/Jubilee+Restaurant+Wayanad' }],
      localDishes: [{ name: 'Malabar Biryani', whereToEat: 'Local town restaurants' }],
      vegetarianAvailability: 'Good. Lots of Kerala veg meals (Sadhya style) available.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Amber', apr: 'Amber', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    state: 'Tamil Nadu',
    zone: 'Zone 3 — South India',
    keyFeature: 'Nilgiri Hills, botanical garden, toy train',
    description: 'The Queen of Hill Stations in the Nilgiris. Famous for its tea gardens, the UNESCO World Heritage Nilgiri Mountain Railway (Toy Train), and colonial architecture.',
    altitude: 2240,
    bestTimeBanner: 'October to June.',
    seasonalRoadWarnings: 'Kalhatti ghat has 36 hairpin bends and is restricted to upward traffic during peak seasons.',
    stays: [
      { tier: 1, propertyName: 'Zostel Ooty', bookingUrl: 'https://www.zostel.com/zostel/ooty/', pricePerNight: 800, altitude: 2200, breakfastIncluded: false, distanceFromAttractions: 'Near Lake', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Destiny The Farm Resort', bookingUrl: 'https://www.makemytrip.com/hotels/ooty-hotels.html', pricePerNight: 4000, altitude: 2200, breakfastIncluded: true, distanceFromAttractions: 'Avalanche area', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Savoy - IHCL SeleQtions', bookingUrl: 'https://www.makemytrip.com/hotels/savoy_ihcl_seleqtions-details-ooty.html', pricePerNight: 12000, altitude: 2240, breakfastIncluded: true, distanceFromAttractions: 'Heritage property near center', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Coimbatore (CJB)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      trains: { name: 'Nilgiri Mountain Railway', number: '56136', route: 'Mettupalayam to UAM', journeyHours: 5, bookingUrl: 'https://www.irctc.co.in/' },
      totalTravelTime: 'Approx 7 hours (Flight + 3 hr drive from Coimbatore)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹4500/day for 10 people', vendorName: 'Ooty Taxi Stand' }],
    food: {
      restaurants: [{ name: 'Earl\'s Secret', mapLink: 'https://goo.gl/maps/search/Earls+Secret+Ooty' }, { name: 'Sidewalk Cafe', mapLink: '#' }],
      localDishes: [{ name: 'Ooty Homemade Chocolates', whereToEat: 'Charing Cross Bakeries' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'kotagiri',
    name: 'Kotagiri',
    state: 'Tamil Nadu',
    zone: 'Zone 3 — South India',
    keyFeature: 'Quietest Nilgiri hill station, Catherine Falls',
    description: 'The oldest and quietest of the three major Nilgiri hill stations. Surrounded by endless tea estates and famous for Catherine Falls and Kodanad View Point.',
    altitude: 1793,
    bestTimeBanner: 'September to May.',
    seasonalRoadWarnings: 'Less traffic than Ooty, roads are generally clear year-round.',
    stays: [
      { tier: 1, propertyName: 'Aananda Resort', bookingUrl: 'https://www.makemytrip.com/hotels/kotagiri-hotels.html', pricePerNight: 1200, altitude: 1700, breakfastIncluded: false, distanceFromAttractions: 'Near town', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Teanest Nightingale', bookingUrl: 'https://www.makemytrip.com/hotels/kotagiri-hotels.html', pricePerNight: 3500, altitude: 1800, breakfastIncluded: true, distanceFromAttractions: 'Amidst tea gardens', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'The Den by Treebo', bookingUrl: 'https://www.makemytrip.com/hotels/kotagiri-hotels.html', pricePerNight: 5500, altitude: 1793, breakfastIncluded: true, distanceFromAttractions: 'Outskirts', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Coimbatore (CJB)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 2 hr drive)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹4500/day for 10 people', vendorName: 'Coimbatore Taxis' }],
    food: {
      restaurants: [{ name: 'Silver Tuntees', mapLink: '#' }],
      localDishes: [{ name: 'Nilgiri Tea', whereToEat: 'Everywhere' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'valparai',
    name: 'Valparai',
    state: 'Tamil Nadu',
    zone: 'Zone 3 — South India',
    keyFeature: 'Tea estates, shola forests, leopard sightings, hairpin roads',
    description: 'A heavily forested hill station in the Anamalai Hills. Known for its 40 hairpin bends, pristine tea estates, and frequent wildlife sightings including leopards and elephants on the roads.',
    altitude: 1193,
    bestTimeBanner: 'September to March.',
    seasonalRoadWarnings: 'Avoid driving at night due to wild elephant and leopard movement on the ghat roads.',
    stays: [
      { tier: 1, propertyName: 'Valparai Backpackers Hostel', bookingUrl: 'Unverified — book locally', pricePerNight: 800, altitude: 1193, breakfastIncluded: false, distanceFromAttractions: 'Town Center', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Stanmore Garden Bungalow', bookingUrl: 'https://www.makemytrip.com/hotels/valparai-hotels.html', pricePerNight: 3500, altitude: 1200, breakfastIncluded: true, distanceFromAttractions: 'Inside tea estate', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Sinnadorai\'s Bungalow', bookingUrl: 'Unverified — check direct website', pricePerNight: 8000, altitude: 1250, breakfastIncluded: true, distanceFromAttractions: 'Heritage tea bungalow', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Coimbatore (CJB)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3.5 hr drive from Coimbatore)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5000/day for 10 people', vendorName: 'Coimbatore Taxis' }],
    food: {
      restaurants: [{ name: 'Green Hill Hotel Restaurant', mapLink: '#' }],
      localDishes: [{ name: 'South Indian Thali', whereToEat: 'Green Hill Hotel' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'coorg',
    name: 'Coorg (Madikeri)',
    state: 'Karnataka',
    zone: 'Zone 3 — South India',
    keyFeature: 'Coffee estates, Abbey Falls, Raja\'s Seat',
    description: 'The "Scotland of India," famous for its lush coffee plantations, spicy pork curries, and the misty hills of Madikeri. A classic South Indian getaway.',
    altitude: 1150,
    bestTimeBanner: 'October to April. Monsoons are beautiful but restrict trekking.',
    seasonalRoadWarnings: 'Heavy monsoon rains can cause minor roadblocks.',
    stays: [
      { tier: 1, propertyName: 'Zostel Coorg', bookingUrl: 'https://www.zostel.com/zostel/coorg/', pricePerNight: 800, altitude: 1150, breakfastIncluded: false, distanceFromAttractions: 'Madikeri town', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Heritage Resort Coorg', bookingUrl: 'https://www.makemytrip.com/hotels/coorg-hotels.html', pricePerNight: 4000, altitude: 1150, breakfastIncluded: true, distanceFromAttractions: 'Near Madikeri', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Taj Madikeri Resort & Spa', bookingUrl: 'https://www.makemytrip.com/hotels/taj_madikeri_resort_spa_coorg-details-coorg.html', pricePerNight: 15000, altitude: 1200, breakfastIncluded: true, distanceFromAttractions: 'Rainforest property', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Kannur (CNN) or Bangalore (BLR)', airlines: ['IndiGo'], averageFareEstimate: 4000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 8 hours (Flight to BLR + 5.5 hr drive)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Bangalore Taxis' }],
    food: {
      restaurants: [{ name: 'Coorg Cuisine', mapLink: 'https://goo.gl/maps/search/Coorg+Cuisine' }, { name: 'Taste of Coorg', mapLink: '#' }],
      localDishes: [{ name: 'Pandi Curry (Pork)', whereToEat: 'Taste of Coorg' }, { name: 'Akki Roti', whereToEat: 'Coorg Cuisine' }],
      vegetarianAvailability: 'Excellent. Plenty of pure veg Udupi hotels in Madikeri.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'brahmagiri',
    name: 'Brahmagiri Peak',
    state: 'Karnataka',
    zone: 'Zone 3 — South India',
    keyFeature: 'Forest permit trek, Iruppu Falls base',
    description: 'A towering peak on the border of Kodagu (Coorg) and Wayanad districts. The trek starts near the magnificent Iruppu Falls and takes you through dense shola forests and grasslands.',
    altitude: 1608,
    bestTimeBanner: 'October to February. Leech infested during monsoons.',
    seasonalRoadWarnings: 'Trek is often closed by forest department during dry summer (fire hazard) and peak monsoon.',
    stays: [
      { tier: 1, propertyName: 'Forest Rest House (Narimalai)', bookingUrl: 'Unverified — book via forest dept', pricePerNight: 500, altitude: 1300, breakfastIncluded: false, distanceFromAttractions: 'Midway on trek', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Iruppu Falls Homestay', bookingUrl: 'https://www.airbnb.co.in/s/Iruppu/homes', pricePerNight: 2000, altitude: 900, breakfastIncluded: true, distanceFromAttractions: 'Near Falls', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Coorg Wilderness Resort', bookingUrl: 'https://www.makemytrip.com/hotels/coorg-hotels.html', pricePerNight: 10000, altitude: 1100, breakfastIncluded: true, distanceFromAttractions: 'Drive to base', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    trek: {
      name: 'Brahmagiri Peak Trek',
      route: 'Iruppu Falls -> Narimalai Camp -> Peak',
      startPoint: 'Iruppu Falls',
      startCoordinates: '11.9500° N, 75.9900° E',
      endPoint: 'Brahmagiri Peak',
      endCoordinates: '11.9400° N, 75.9500° E',
      totalDistanceKm: 18,
      elevationGainMeters: 708,
      difficulty: 'Moderate',
      bestMonths: ['October', 'November', 'December', 'January', 'February'],
      guideRequirement: 'Mandatory Forest Dept Guide',
      campingAvailable: true,
      gearChecklist: ['Trekking poles', 'Leech socks', 'Water (2L)'],
      permitRequired: true,
      permitLink: 'Srimangala Forest Range Office',
      estimatedTime: '7-8 hours round trip',
      allTrailsLink: 'https://www.alltrails.com/trail/india/karnataka/brahmagiri',
      acclimatizationDaysNeeded: 0
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Kannur (CNN)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3 hr drive)'
    },
    commuteOptions: [{ type: 'Private Bolero', cost: '₹4000/day' }],
    food: {
      restaurants: [{ name: 'Homestay Kitchens', mapLink: '#' }],
      localDishes: [{ name: 'Filter Coffee', whereToEat: 'Base of Iruppu falls' }],
      vegetarianAvailability: 'Moderate. Must request at homestays.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Forest Entry Trekking Permit',
        issuedBy: 'Karnataka Forest Dept',
        applicationPortalLink: 'https://aranyavihaara.karnataka.gov.in/',
        processingTime: 'Instant online',
        costPerPerson: 500,
        documentsRequired: ['ID Proof'],
        onArrivalPossible: false,
        groupSpecialRules: 'Limited to 50 trekkers per day.'
      }
    ],
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Amber', apr: 'Red', may: 'Red', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'agumbe',
    name: 'Agumbe',
    state: 'Karnataka',
    zone: 'Zone 3 — South India',
    keyFeature: 'Rainforest capital, King Cobra habitat, sunset point',
    description: 'Known as the "Cherrapunji of the South," this high-altitude village in the Malgudi Days setting is famous for its dense rainforests, spectacular sunsets over the Arabian Sea, and high density of King Cobras.',
    altitude: 823,
    bestTimeBanner: 'October to February. Monsoon is incredibly wet and leech-infested.',
    seasonalRoadWarnings: 'Agumbe Ghat is extremely steep with 14 hairpin bends. Fog severely restricts visibility.',
    stays: [
      { tier: 1, propertyName: 'Doddamane Homestay (Malgudi Days House)', bookingUrl: 'Unverified — book via phone directly', pricePerNight: 800, altitude: 823, breakfastIncluded: true, distanceFromAttractions: 'Center of Agumbe', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Seethanadi Nature Camp (JLR)', bookingUrl: 'https://www.junglelodges.com/', pricePerNight: 3500, altitude: 600, breakfastIncluded: true, distanceFromAttractions: 'Near river', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Taj Welcomhotel (Manipal - Base)', bookingUrl: 'https://www.makemytrip.com/hotels/manipal-hotels.html', pricePerNight: 7000, altitude: 50, breakfastIncluded: true, distanceFromAttractions: '1 hr drive from Agumbe', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Mangalore (IXE)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 2.5 hr drive from Mangalore)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5000/day for 10 people', vendorName: 'Mangalore Taxis' }],
    food: {
      restaurants: [{ name: 'Doddamane Kitchen', mapLink: '#' }],
      localDishes: [{ name: 'Kashaya (Herbal drink)', whereToEat: 'Agumbe main circle stalls' }],
      vegetarianAvailability: 'Excellent. Doddamane serves pure traditional Brahmin veg food.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Amber', apr: 'Amber', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'chikmagalur',
    name: 'Chikmagalur',
    state: 'Karnataka',
    zone: 'Zone 3 — South India',
    keyFeature: 'Mullayanagiri (highest peak in Karnataka), coffee trail',
    description: 'The birthplace of coffee in India. Chikmagalur is nestled in the Baba Budangiri hills and is a haven for trekkers, coffee lovers, and nature enthusiasts.',
    altitude: 1090,
    bestTimeBanner: 'September to March.',
    seasonalRoadWarnings: 'Road to Mullayanagiri peak can get jammed with tourists on weekends.',
    stays: [
      { tier: 1, propertyName: 'Zostel Chikmagalur', bookingUrl: 'https://www.zostel.com/zostel/chikmagalur/', pricePerNight: 800, altitude: 1090, breakfastIncluded: false, distanceFromAttractions: 'Near town', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Trippr Chikmagalur', bookingUrl: 'https://www.makemytrip.com/hotels/chikmagalur-hotels.html', pricePerNight: 2500, altitude: 1100, breakfastIncluded: true, distanceFromAttractions: 'Outskirts', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'The Serai Chikmagalur', bookingUrl: 'https://www.makemytrip.com/hotels/the_serai-details-chikmagalur.html', pricePerNight: 18000, altitude: 1090, breakfastIncluded: true, distanceFromAttractions: 'Luxury resort with private pools', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Bangalore (BLR)', airlines: ['IndiGo'], averageFareEstimate: 3500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 7 hours (Flight + 4.5 hr drive from Bangalore)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Bangalore Taxis' }],
    food: {
      restaurants: [{ name: 'Town Canteen', mapLink: 'https://goo.gl/maps/search/Town+Canteen+Chikmagalur' }],
      localDishes: [{ name: 'Benne Dosa', whereToEat: 'Town Canteen' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'horsley-hills',
    name: 'Horsley Hills',
    state: 'Andhra Pradesh',
    zone: 'Zone 3 — South India',
    keyFeature: 'AP\'s own hill station, 1,265m, gum tree forests',
    description: 'A charming, tiny hill station in Andhra Pradesh. Known for its eucalyptus (gum tree) forests, cool breeze, and the Viewpoint offering stunning sunsets over the valleys.',
    altitude: 1265,
    bestTimeBanner: 'November to February.',
    seasonalRoadWarnings: 'Safe year-round.',
    stays: [
      { tier: 1, propertyName: 'Haritha Hill Resort (AP Tourism)', bookingUrl: 'https://tourism.ap.gov.in/hotels', pricePerNight: 1500, altitude: 1265, breakfastIncluded: false, distanceFromAttractions: 'Top of the hill', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Horsley Hills Holiday Homes', bookingUrl: 'https://www.makemytrip.com/hotels/horsley_hills-hotels.html', pricePerNight: 3000, altitude: 1260, breakfastIncluded: true, distanceFromAttractions: 'Near Viewpoint', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Windfall Resort', bookingUrl: 'https://www.makemytrip.com/hotels/horsley_hills-hotels.html', pricePerNight: 5000, altitude: 1250, breakfastIncluded: true, distanceFromAttractions: 'Valley facing', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Tirupati (TIR)', airlines: ['IndiGo'], averageFareEstimate: 4000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3 hr drive)'
    },
    commuteOptions: [{ type: 'Private Cab from Tirupati', cost: '₹3500 drop' }],
    food: {
      restaurants: [{ name: 'Haritha Restaurant', mapLink: '#' }],
      localDishes: [{ name: 'Andhra Thali', whereToEat: 'Haritha Restaurant' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Amber', apr: 'Amber', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'lambasingi',
    name: 'Lambasingi',
    state: 'Andhra Pradesh',
    zone: 'Zone 3 — South India',
    keyFeature: 'AP\'s "Kashmir" — frost in winter, 1,000m, misty',
    description: 'A small tribal village often referred to as the Kashmir of Andhra. It is the only place in Southern India where you can occasionally witness frost forming in the mornings during peak winter.',
    altitude: 1000,
    bestTimeBanner: 'December and January strictly for the fog/frost.',
    seasonalRoadWarnings: 'Very foggy driving conditions early in the morning.',
    stays: [
      { tier: 1, propertyName: 'Local Tents', bookingUrl: 'Unverified — book on arrival', pricePerNight: 500, altitude: 1000, breakfastIncluded: false, distanceFromAttractions: 'Strawberry farms', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'APTDC Haritha Resort', bookingUrl: 'https://tourism.ap.gov.in/hotels', pricePerNight: 2000, altitude: 1000, breakfastIncluded: false, distanceFromAttractions: 'Near village center', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Lambasingi Fog Resorts', bookingUrl: 'https://www.makemytrip.com/hotels/visakhapatnam-hotels.html', pricePerNight: 4000, altitude: 1000, breakfastIncluded: true, distanceFromAttractions: 'Valley view', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Visakhapatnam (VTZ)', airlines: ['IndiGo'], averageFareEstimate: 4000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3 hr drive)'
    },
    commuteOptions: [{ type: 'Private Bolero from Vizag', cost: '₹4000/day' }],
    food: {
      restaurants: [{ name: 'Roadside Maggi points', mapLink: '#' }],
      localDishes: [{ name: 'Pepper Milk', whereToEat: 'Morning stalls' }, { name: 'Bamboo Chicken', whereToEat: 'Local vendors' }],
      vegetarianAvailability: 'Basic.',
      approxMealCostPerDay: 400,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Green', feb: 'Amber', mar: 'Amber', apr: 'Amber', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Amber', oct: 'Amber', nov: 'Green', dec: 'Green' }
  },
  {
    id: 'nethravathi-peak',
    name: 'Nethravathi Peak',
    state: 'Karnataka',
    zone: 'Zone 3 — South India',
    keyFeature: 'Forest dept permit, 1,567m, shola grasslands',
    description: 'A stunning trek in the Kudremukh National Park range. Offers sweeping views of the rolling shola grasslands and the source of the Nethravathi river.',
    altitude: 1567,
    bestTimeBanner: 'September to February.',
    seasonalRoadWarnings: 'Leeches are rampant during monsoon.',
    stays: [
      { tier: 1, propertyName: 'Samse Homestays', bookingUrl: 'Unverified — book locally', pricePerNight: 800, altitude: 900, breakfastIncluded: true, distanceFromAttractions: 'Samse base', cloudMountainViews: false, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Kudremukh Homestay', bookingUrl: 'https://www.makemytrip.com/hotels/kudremukh-hotels.html', pricePerNight: 2000, altitude: 1000, breakfastIncluded: true, distanceFromAttractions: 'Kudremukh town', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Bhagavathi Nature Camp (JLR)', bookingUrl: 'https://www.junglelodges.com/', pricePerNight: 4000, altitude: 950, breakfastIncluded: true, distanceFromAttractions: 'Inside National Park', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    trek: {
      name: 'Nethravathi Peak Trek',
      route: 'Samse Base -> Nethravathi Peak',
      startPoint: 'Samse',
      startCoordinates: '13.2000° N, 75.3000° E',
      endPoint: 'Nethravathi Peak',
      endCoordinates: '13.2100° N, 75.2800° E',
      totalDistanceKm: 12,
      elevationGainMeters: 667,
      difficulty: 'Moderate',
      bestMonths: ['September', 'October', 'November', 'December', 'January'],
      guideRequirement: 'Mandatory Forest Dept Guide',
      campingAvailable: false,
      gearChecklist: ['Trekking poles', 'Leech socks', 'Water'],
      permitRequired: true,
      permitLink: 'https://aranyavihaara.karnataka.gov.in/',
      estimatedTime: '5-6 hours round trip',
      allTrailsLink: 'Unverified — check Wikiloc for Nethravathi',
      acclimatizationDaysNeeded: 0
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Mangalore (IXE)', airlines: ['IndiGo'], averageFareEstimate: 4500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 6 hours (Flight + 3 hr drive)'
    },
    commuteOptions: [{ type: 'Private Jeep to Trailhead', cost: '₹1500 drop' }],
    food: {
      restaurants: [{ name: 'Homestay Kitchens Only', mapLink: '#' }],
      localDishes: [{ name: 'Neer Dosa', whereToEat: 'Homestays' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Forest Entry Trekking Permit',
        issuedBy: 'Karnataka Forest Dept',
        applicationPortalLink: 'https://aranyavihaara.karnataka.gov.in/',
        processingTime: 'Instant online',
        costPerPerson: 500,
        documentsRequired: ['ID Proof'],
        onArrivalPossible: false,
        groupSpecialRules: 'Limited to 50 trekkers per day.'
      }
    ],
    seasonalCalendar: { jan: 'Green', feb: 'Green', mar: 'Amber', apr: 'Red', may: 'Red', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green' }
  }
];
