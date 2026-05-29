import { Destination } from '@/types';

export const zone3Destinations: Destination[] = [
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    state: 'Tamil Nadu',
    zone: 'Zone 3 — South India',
    keyFeature: 'Coaker\'s Walk, Pillar Rocks, lake',
    description: 'The "Princess of Hill Stations," Kodaikanal sits at 2000 meters in the Palani Hills. It features a star-shaped lake, dense shola forests, and mist-covered viewpoints like Coaker\'s Walk. A romantic and serene getaway from the heat of the plains.',
    altitude: 2133,
    bestTimeBanner: 'September to May. Monsoon (July-August) brings heavy fog and rain, which has its own charm.',
    seasonalRoadWarnings: 'Landslides are possible on the Batlagundu ghat road during heavy monsoons.',
    stays: [
      {
        tier: 1,
        propertyName: 'Zostel Kodaikanal',
        bookingUrl: 'https://www.zostel.com/zostel/kodaikanal/',
        pricePerNight: 800,
        altitude: 2100,
        breakfastIncluded: false,
        distanceFromAttractions: '2 km from Kodai Lake',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Vivera Grande',
        bookingUrl: 'https://www.makemytrip.com/hotels/kodaikanal-hotels.html',
        pricePerNight: 3500,
        altitude: 2133,
        breakfastIncluded: true,
        distanceFromAttractions: 'Near Coaker\'s Walk',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 3,
        propertyName: 'The Tamara Kodai',
        bookingUrl: 'https://www.makemytrip.com/hotels/the_tamara_kodai-details-kodaikanal.html',
        pricePerNight: 12000,
        altitude: 2200,
        breakfastIncluded: true,
        distanceFromAttractions: 'Heritage property in the hills',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Madurai (IXM)',
        airlines: ['IndiGo'],
        averageFareEstimate: 5000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      trains: {
        name: 'Kacheguda Madurai Express',
        number: '17615',
        route: 'KCG to Kodaikanal Road (KQN)',
        journeyHours: 19,
        bookingUrl: 'https://www.irctc.co.in/'
      },
      totalTravelTime: 'Approx 6 hours (Flight + 3.5 hr drive from Madurai)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹4500/day for 10 people', vendorName: 'Madurai Taxi Union' },
      { type: 'Bicycles at the Lake', cost: '₹50/hour' }
    ],
    food: {
      restaurants: [
        { name: 'Cloud Street', mapLink: 'https://goo.gl/maps/search/Cloud+Street+Kodai' },
        { name: 'Astoria Veg', mapLink: 'https://goo.gl/maps/search/Astoria+Veg+Kodai' }
      ],
      localDishes: [
        { name: 'Kavuni Arisi (Black Rice Kheer)', whereToEat: 'Local sweet shops' },
        { name: 'Wood-fired Pizza', whereToEat: 'Cloud Street' }
      ],
      vegetarianAvailability: 'Excellent. Plenty of South Indian veg restaurants.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: {
      jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Amber', dec: 'Green'
    }
  },
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    zone: 'Zone 3 — South India',
    keyFeature: 'Tea estates, Eravikulam National Park, Neelakurinji',
    description: 'Endless expanses of tea plantations, pristine valleys, and exotic species of flora and fauna in its wild sanctuaries. Famous for the Neelakurinji flower which blooms once in 12 years.',
    altitude: 1532,
    bestTimeBanner: 'September to March offers pleasant weather. Monsoon (June-August) is lush but restricts wildlife safaris.',
    seasonalRoadWarnings: 'Ghat sections from Kochi can be prone to washouts during heavy monsoon.',
    stays: [
      {
        tier: 1,
        propertyName: 'Zostel Munnar',
        bookingUrl: 'https://www.zostel.com/zostel/munnar/',
        pricePerNight: 800,
        altitude: 1400,
        breakfastIncluded: false,
        distanceFromAttractions: 'Amidst tea gardens',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'The Leaf Munnar',
        bookingUrl: 'https://www.makemytrip.com/hotels/munnar-hotels.html',
        pricePerNight: 4000,
        altitude: 1500,
        breakfastIncluded: true,
        distanceFromAttractions: 'Away from town center',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 3,
        propertyName: 'Windermere Estate',
        bookingUrl: 'https://www.makemytrip.com/hotels/windermere_estate-details-munnar.html',
        pricePerNight: 11000,
        altitude: 1600,
        breakfastIncluded: true,
        distanceFromAttractions: 'Surrounded by cardamom and tea plantations',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Kochi (COK)',
        airlines: ['IndiGo', 'AirAsia'],
        averageFareEstimate: 4500,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 7 hours (Flight + 4 hr drive from Kochi airport)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹5000/day for 10 people', vendorName: 'Kochi Airport Taxis' }
    ],
    food: {
      restaurants: [
        { name: 'Saravana Bhavan', mapLink: 'https://goo.gl/maps/search/Saravana+Bhavan+Munnar' },
        { name: 'Rapsy Restaurant', mapLink: 'https://goo.gl/maps/search/Rapsy+Restaurant+Munnar' }
      ],
      localDishes: [
        { name: 'Appam and Stew', whereToEat: 'Rapsy Restaurant' },
        { name: 'Kerala Parotta & Beef Fry', whereToEat: 'Local dhabas' }
      ],
      vegetarianAvailability: 'Excellent. Saravana Bhavan and other Udupi-style restaurants are widely available.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Eravikulam National Park Entry',
        issuedBy: 'Kerala Forest Department',
        applicationPortalLink: 'https://www.eravikulamnationalpark.in/',
        processingTime: 'Instant online',
        costPerPerson: 200,
        documentsRequired: ['ID Proof'],
        onArrivalPossible: true,
        groupSpecialRules: 'Advance booking recommended to skip long queues.'
      }
    ],
    seasonalCalendar: {
      jan: 'Green', feb: 'Green', mar: 'Green', apr: 'Amber', may: 'Amber', jun: 'Red', jul: 'Red', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green'
    }
  },
  {
    id: 'araku-valley',
    name: 'Araku Valley',
    state: 'Andhra Pradesh',
    zone: 'Zone 3 — South India',
    keyFeature: 'Tribal villages, coffee plantations, Borra Caves, Vistadome train',
    description: 'A valley situated in the Eastern Ghats known for its organic coffee plantations and the spectacular Vistadome train ride through tunnels and waterfalls from Vizag.',
    altitude: 910,
    bestTimeBanner: 'October to February is best, with chilly nights and misty mornings.',
    seasonalRoadWarnings: 'Safe year-round. Ghat roads are well maintained.',
    stays: [
      {
        tier: 1,
        propertyName: 'Tribal Welfare Guest House',
        bookingUrl: 'Unverified — book locally or via AP Tourism',
        pricePerNight: 1000,
        altitude: 900,
        breakfastIncluded: false,
        distanceFromAttractions: 'Near Tribal Museum',
        cloudMountainViews: false,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Haritha Valley Resort (APSTDC)',
        bookingUrl: 'https://tourism.ap.gov.in/hotels',
        pricePerNight: 2500,
        altitude: 910,
        breakfastIncluded: false,
        distanceFromAttractions: 'Central Araku',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 3,
        propertyName: 'Natures Nest Araku',
        bookingUrl: 'https://www.makemytrip.com/hotels/araku-hotels.html',
        pricePerNight: 5000,
        altitude: 950,
        breakfastIncluded: true,
        distanceFromAttractions: 'Outskirts of town',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Visakhapatnam (VTZ)',
        airlines: ['IndiGo', 'Air India'],
        averageFareEstimate: 4000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      trains: {
        name: 'Godavari Express + Vistadome Train',
        number: '12728 -> 18551',
        route: 'SC to VSKP, then Vistadome to Araku',
        journeyHours: 16,
        bookingUrl: 'https://www.irctc.co.in/'
      },
      totalTravelTime: 'Approx 7 hours (Flight to Vizag + 3 hr Vistadome train or 4 hr drive)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹4000/day for 10 people', vendorName: 'Vizag Taxis' }
    ],
    food: {
      restaurants: [
        { name: 'Araku Coffee House', mapLink: 'https://goo.gl/maps/search/Araku+Coffee+House' }
      ],
      localDishes: [
        { name: 'Bamboo Chicken', whereToEat: 'Roadside stalls across the valley' },
        { name: 'Araku Organic Coffee', whereToEat: 'Araku Coffee House' }
      ],
      vegetarianAvailability: 'Moderate. Meals are mostly standard South Indian thalis in town.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: {
      jan: 'Green', feb: 'Green', mar: 'Amber', apr: 'Amber', may: 'Amber', jun: 'Amber', jul: 'Amber', aug: 'Green', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Green'
    }
  }
];
