import { Destination } from '@/types';

export const zone2DestinationsRest: Destination[] = [
  {
    id: 'kalpa',
    name: 'Kalpa',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Apple orchards at 9,000 ft, Kinner Kailash backdrop',
    description: 'A beautiful village set above Recong Peo in the Kinnaur district. Famous for its apple orchards, the ancient Narayan-Nagini temple, and the breathtaking, unobstructed views of the Kinner Kailash mountain range.',
    altitude: 2960,
    bestTimeBanner: 'April to June and September to October.',
    seasonalRoadWarnings: 'Roads can be treacherous during the monsoon and heavily snowed in during peak winter.',
    stays: [
      { tier: 1, propertyName: 'Fort View Homestay', bookingUrl: 'https://www.airbnb.co.in/s/Kalpa/homes', pricePerNight: 1200, altitude: 2960, breakfastIncluded: false, distanceFromAttractions: 'Near Kalpa Fort', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: true },
      { tier: 2, propertyName: 'The Grand Shamba La', bookingUrl: 'https://www.makemytrip.com/hotels/kalpa-hotels.html', pricePerNight: 3500, altitude: 2960, breakfastIncluded: true, distanceFromAttractions: 'Roghi Road', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Echor - The Alpine Crest', bookingUrl: 'https://www.makemytrip.com/hotels/kalpa-hotels.html', pricePerNight: 6500, altitude: 2960, breakfastIncluded: true, distanceFromAttractions: 'Main Kalpa', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo', 'Vistara'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 15 hours (Flight + 10 hour drive from Chandigarh via Narkanda)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹6000/day for 10 people', vendorName: 'Chandigarh Taxi Union' }],
    food: {
      restaurants: [{ name: 'Kalpa Market Dhabas', mapLink: '#' }],
      localDishes: [{ name: 'Chilka (Buckwheat pancake)', whereToEat: 'Local homestays' }],
      vegetarianAvailability: 'Excellent. Plenty of North Indian veg options.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Red', feb: 'Red', mar: 'Amber', apr: 'Green', may: 'Green', jun: 'Green', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Amber', dec: 'Red' }
  },
  {
    id: 'kinnaur-valley-loop',
    name: 'Kinnaur Valley (Sangla, Chitkul, Nako)',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Sangla, Chitkul (last village), Nako',
    description: 'A spectacular journey through the Baspa Valley (Sangla), the last inhabited village near the Indo-Tibet border (Chitkul), and the high-altitude desert oasis of Nako Lake.',
    altitude: 3450,
    bestTimeBanner: 'May to October. Roads to Chitkul close in winter.',
    seasonalRoadWarnings: 'Highly prone to landslides and shooting stones during monsoon.',
    stays: [
      { tier: 1, propertyName: 'Zostel Chitkul', bookingUrl: 'https://www.zostel.com/zostel/chitkul/', pricePerNight: 800, altitude: 3450, breakfastIncluded: false, distanceFromAttractions: 'Chitkul Village', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Banjara Camps & Retreat (Sangla)', bookingUrl: 'https://www.makemytrip.com/hotels/sangla-hotels.html', pricePerNight: 4000, altitude: 2696, breakfastIncluded: true, distanceFromAttractions: 'Riverside in Sangla', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Rakpa Regency (Kalpa/Sangla)', bookingUrl: 'https://www.makemytrip.com/hotels/sangla-hotels.html', pricePerNight: 6000, altitude: 2700, breakfastIncluded: true, distanceFromAttractions: 'Sangla Valley', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 14 hours (Flight to Chandigarh + drive to Sangla)'
    },
    commuteOptions: [{ type: 'Innova/Xylo', cost: '₹5000/day for 6 people', vendorName: 'Shimla Taxis' }],
    food: {
      restaurants: [{ name: 'Hindustan Ka Akhri Dhaba (Chitkul)', mapLink: '#' }],
      localDishes: [{ name: 'Rajma Chawal', whereToEat: 'Akhri Dhaba' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Red', feb: 'Red', mar: 'Red', apr: 'Amber', may: 'Green', jun: 'Green', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Amber', dec: 'Red' }
  },
  {
    id: 'munsiyari',
    name: 'Munsiyari',
    state: 'Uttarakhand',
    zone: 'Zone 2 — North India',
    keyFeature: 'Panchachuli base camp, wool market, zero mass tourism',
    description: 'A hidden gem in the Pithoragarh district, offering unmatched views of the Panchachuli peaks. It is the starting point for the Milam and Ralam Glacier treks.',
    altitude: 2200,
    bestTimeBanner: 'March to June and September to October.',
    seasonalRoadWarnings: 'Long, arduous mountain roads that are dangerous during monsoon.',
    stays: [
      { tier: 1, propertyName: 'Milam Inn', bookingUrl: 'https://www.makemytrip.com/hotels/munsiyari-hotels.html', pricePerNight: 1500, altitude: 2200, breakfastIncluded: false, distanceFromAttractions: 'Near main market', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'KMVN Tourist Rest House', bookingUrl: 'Unverified — book via KMVN portal', pricePerNight: 2500, altitude: 2200, breakfastIncluded: true, distanceFromAttractions: 'Best views of Panchachuli', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Wayfarer Mountain Resort', bookingUrl: 'https://www.makemytrip.com/hotels/munsiyari-hotels.html', pricePerNight: 4500, altitude: 2200, breakfastIncluded: true, distanceFromAttractions: 'Outskirts of Munsiyari', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Pantnagar (PGH)', airlines: ['IndiGo'], averageFareEstimate: 8000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 18 hours (Flight + 10 hour drive from Kathgodam/Pantnagar)'
    },
    commuteOptions: [{ type: 'Tempo Traveller from Kathgodam', cost: '₹6000/day for 10 people', vendorName: 'Kathgodam Taxi' }],
    food: {
      restaurants: [{ name: 'KMVN Canteen', mapLink: '#' }],
      localDishes: [{ name: 'Bhatt ki Churkani', whereToEat: 'Local homestays' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: true
    },
    seasonalCalendar: { jan: 'Red', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  },
  {
    id: 'har-ki-dun',
    name: 'Har Ki Dun',
    state: 'Uttarakhand',
    zone: 'Zone 2 — North India',
    keyFeature: 'Valley of Gods trek, camping, Swargarohini views',
    description: 'A cradle-shaped valley deep in the Garhwal Himalayas. The trek takes you through ancient villages that date back to the Mahabharata era, offering views of Swargarohini.',
    altitude: 3566,
    bestTimeBanner: 'April to June and September to December (snow trek).',
    seasonalRoadWarnings: 'Trek is inaccessible during peak monsoon.',
    stays: [
      { tier: 1, propertyName: 'Sankri Homestays (Base Camp)', bookingUrl: 'Unverified — book on arrival', pricePerNight: 500, altitude: 1950, breakfastIncluded: false, distanceFromAttractions: 'Sankri Village', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Meraki Triangle (Sankri)', bookingUrl: 'https://www.makemytrip.com/hotels/sankri-hotels.html', pricePerNight: 2000, altitude: 1950, breakfastIncluded: true, distanceFromAttractions: 'Sankri Base', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Forest Rest House (Osla)', bookingUrl: 'Unverified — book via forest dept', pricePerNight: 3000, altitude: 2500, breakfastIncluded: false, distanceFromAttractions: 'Enroute Har Ki Dun', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    trek: {
      name: 'Har Ki Dun Trek',
      route: 'Sankri -> Taluka -> Osla -> Har Ki Dun',
      startPoint: 'Sankri/Taluka',
      startCoordinates: '31.0772° N, 78.1888° E',
      endPoint: 'Har Ki Dun Valley',
      endCoordinates: '31.1345° N, 78.2912° E',
      totalDistanceKm: 47,
      elevationGainMeters: 1616,
      difficulty: 'Moderate',
      bestMonths: ['April', 'May', 'June', 'September', 'October', 'November'],
      guideRequirement: 'Mandatory',
      campingAvailable: true,
      gearChecklist: ['Trekking poles', 'Minus degree sleeping bag', 'Gaiters'],
      permitRequired: true,
      permitLink: 'Govind Pashu Vihar NP checkpost at Netwar',
      estimatedTime: '7 Days round trip',
      allTrailsLink: 'https://www.alltrails.com/trail/india/uttarakhand/har-ki-dun',
      acclimatizationDaysNeeded: 1
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Dehradun (DED)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 10 hours (Flight + 8 hr drive to Sankri)'
    },
    commuteOptions: [{ type: 'Private Bolero from Dehradun', cost: '₹5500 per drop' }],
    food: {
      restaurants: [{ name: 'Sankri Base Camp Kitchen', mapLink: '#' }],
      localDishes: [{ name: 'Phaanu', whereToEat: 'Sankri Homestays' }],
      vegetarianAvailability: 'Excellent. Mostly vegetarian on the trek.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Red', feb: 'Red', mar: 'Amber', apr: 'Green', may: 'Green', jun: 'Green', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  },
  {
    id: 'tirthan-valley',
    name: 'Tirthan Valley',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Great Himalayan National Park, fly fishing, eco homestays',
    description: 'A pristine valley beside the Tirthan river, acting as the gateway to the Great Himalayan National Park (GHNP). Famous for trout fishing, serene homestays, and deep forest treks.',
    altitude: 1600,
    bestTimeBanner: 'March to June and September to November.',
    seasonalRoadWarnings: 'Accessible year-round, but river levels rise dangerously during monsoon.',
    stays: [
      { tier: 1, propertyName: 'The Hosteller Tirthan Valley', bookingUrl: 'https://www.makemytrip.com/hotels/tirthan_valley-hotels.html', pricePerNight: 800, altitude: 1600, breakfastIncluded: false, distanceFromAttractions: 'Near River', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Raju Bharti\'s Guesthouse', bookingUrl: 'Unverified — call directly (famous community stay)', pricePerNight: 2500, altitude: 1600, breakfastIncluded: true, distanceFromAttractions: 'Gushaini', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Sunshine Himalayan Cottage', bookingUrl: 'https://www.makemytrip.com/hotels/tirthan_valley-hotels.html', pricePerNight: 6000, altitude: 1650, breakfastIncluded: true, distanceFromAttractions: 'Gushaini', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 11 hours (Flight + 7 hr drive via Aut tunnel)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Chandigarh Taxi Union' }],
    food: {
      restaurants: [{ name: 'Trout House', mapLink: '#' }],
      localDishes: [{ name: 'River Trout Fry', whereToEat: 'Raju Bharti\'s Guesthouse' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'GHNP Entry Permit',
        issuedBy: 'GHNP Office (Sai Ropa)',
        applicationPortalLink: 'Unverified — obtain at Sai Ropa center',
        processingTime: 'Instant',
        costPerPerson: 100,
        documentsRequired: ['ID Proof'],
        onArrivalPossible: true,
        groupSpecialRules: 'Trekking inside core zone requires guide.'
      }
    ],
    seasonalCalendar: { jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  },
  {
    id: 'barot-valley',
    name: 'Barot Valley',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Uhl river trout fishing, Nargu Wildlife Sanctuary',
    description: 'A secluded valley originally developed for the Shanan Hydel Project. Now a backpacker haven known for the Uhl river, terraced fields, and thick cedar forests.',
    altitude: 1819,
    bestTimeBanner: 'April to June and September to November.',
    seasonalRoadWarnings: 'Road from Jogindernagar can be prone to landslides during rain.',
    stays: [
      { tier: 1, propertyName: 'Trout Valley Homestay', bookingUrl: 'https://www.airbnb.co.in/s/Barot/homes', pricePerNight: 1000, altitude: 1819, breakfastIncluded: false, distanceFromAttractions: 'Near Uhl River', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'River View Guest House', bookingUrl: 'https://www.makemytrip.com/hotels/barot-hotels.html', pricePerNight: 2500, altitude: 1820, breakfastIncluded: true, distanceFromAttractions: 'Barot market', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'WilderKull Camps', bookingUrl: 'https://www.makemytrip.com/hotels/barot-hotels.html', pricePerNight: 4000, altitude: 1850, breakfastIncluded: true, distanceFromAttractions: 'Forest edge', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 11 hours (Flight + 7 hr drive via Mandi)'
    },
    commuteOptions: [{ type: 'Private Cab from Mandi', cost: '₹2500/drop' }],
    food: {
      restaurants: [{ name: 'Barot Dhabas', mapLink: '#' }],
      localDishes: [{ name: 'Trout Fish', whereToEat: 'Local dhabas' }],
      vegetarianAvailability: 'Moderate. Basic dal rice available everywhere.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  },
  {
    id: 'jibhi',
    name: 'Jibhi',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Pine forest, Jalori Pass gateway',
    description: 'A mesmerizing hamlet situated amidst lush green forests and surrounded by variegated mountains. It is untouched by industrialization and surrounded by nature.',
    altitude: 1600,
    bestTimeBanner: 'March to May and September to November.',
    seasonalRoadWarnings: 'Jalori Pass is closed in winter due to snow.',
    stays: [
      { tier: 1, propertyName: 'The Hosteller Jibhi', bookingUrl: 'https://www.makemytrip.com/hotels/jibhi-hotels.html', pricePerNight: 800, altitude: 1600, breakfastIncluded: false, distanceFromAttractions: 'Near Jibhi Waterfall', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'The Hidden Burrow', bookingUrl: 'https://www.makemytrip.com/hotels/jibhi-hotels.html', pricePerNight: 2500, altitude: 1650, breakfastIncluded: true, distanceFromAttractions: 'Treehouses near stream', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: true },
      { tier: 3, propertyName: 'Rock Top Inn', bookingUrl: 'https://www.makemytrip.com/hotels/jibhi-hotels.html', pricePerNight: 4500, altitude: 1700, breakfastIncluded: true, distanceFromAttractions: 'Hilltop views', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 11 hours (Flight + 7 hr drive via Aut)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Chandigarh Taxi' }],
    food: {
      restaurants: [{ name: 'Cafe Jibhi', mapLink: '#' }, { name: 'Hope Cafe', mapLink: '#' }],
      localDishes: [{ name: 'Siddu', whereToEat: 'Local tea stalls' }],
      vegetarianAvailability: 'Excellent. Many backpacker cafes with veg/vegan options.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  },
  {
    id: 'nako',
    name: 'Nako',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Nako Lake at 3,662m, ancient monastery',
    description: 'A serene high-altitude village in the Kinnaur district, featuring a sacred lake and an 11th-century monastery. It feels like stepping into a medieval Tibetan painting.',
    altitude: 3662,
    bestTimeBanner: 'May to October. Freezes over completely in winter.',
    seasonalRoadWarnings: 'Treacherous roads from Reckong Peo; prone to landslides.',
    stays: [
      { tier: 1, propertyName: 'Nako Homestay', bookingUrl: 'Unverified — book on arrival', pricePerNight: 1000, altitude: 3662, breakfastIncluded: false, distanceFromAttractions: 'Near Lake', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 2, propertyName: 'Lake View Hotel Nako', bookingUrl: 'https://www.makemytrip.com/hotels/nako-hotels.html', pricePerNight: 2800, altitude: 3665, breakfastIncluded: true, distanceFromAttractions: 'Overlooking Nako Lake', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Kinner Camps Nako', bookingUrl: 'https://www.makemytrip.com/hotels/nako-hotels.html', pricePerNight: 5500, altitude: 3662, breakfastIncluded: true, distanceFromAttractions: 'Luxury Tents', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 2 days (Flight + Drive via Shimla and Kalpa)'
    },
    commuteOptions: [{ type: 'Innova/Xylo', cost: '₹5500/day for 6 people', vendorName: 'Shimla Taxi' }],
    food: {
      restaurants: [{ name: 'Nako Monastery Cafe', mapLink: '#' }],
      localDishes: [{ name: 'Thukpa', whereToEat: 'Monastery Cafe' }],
      vegetarianAvailability: 'Moderate. Limited options in this remote region.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Red', feb: 'Red', mar: 'Red', apr: 'Amber', may: 'Green', jun: 'Green', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Amber', dec: 'Red' }
  },
  {
    id: 'sarahan',
    name: 'Sarahan',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Bhimakali Temple, gateway to Kinnaur',
    description: 'Famous for the majestic Bhimakali Temple featuring unique Indo-Tibetan architecture, Sarahan is steeped in mythology and surrounded by apple orchards and pine forests.',
    altitude: 2165,
    bestTimeBanner: 'April to June and September to November.',
    seasonalRoadWarnings: 'Accessible most of the year, but winter snow can cause delays.',
    stays: [
      { tier: 1, propertyName: 'HPTDC Hotel Shrikhand', bookingUrl: 'https://hptdc.in/index.php/hotel-shrikhand-sarahan/', pricePerNight: 1500, altitude: 2165, breakfastIncluded: false, distanceFromAttractions: 'Next to Temple', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 2, propertyName: 'The Srikhand (HPTDC Deluxe)', bookingUrl: 'https://hptdc.in/index.php/hotel-shrikhand-sarahan/', pricePerNight: 3500, altitude: 2165, breakfastIncluded: true, distanceFromAttractions: 'Next to Temple', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Green Valley Resort', bookingUrl: 'https://www.makemytrip.com/hotels/sarahan-hotels.html', pricePerNight: 5000, altitude: 2100, breakfastIncluded: true, distanceFromAttractions: 'Near main market', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: false }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Chandigarh (IXC)', airlines: ['IndiGo'], averageFareEstimate: 6000, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 11 hours (Flight + 7 hr drive via Narkanda)'
    },
    commuteOptions: [{ type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Chandigarh Taxi' }],
    food: {
      restaurants: [{ name: 'HPTDC Restaurant', mapLink: '#' }],
      localDishes: [{ name: 'Kadhi Chawal', whereToEat: 'HPTDC Restaurant' }],
      vegetarianAvailability: 'Excellent.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: { jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  }
];
