import { Destination } from '@/types';

export const zone2Destinations: Destination[] = [
  {
    id: 'zanskar-valley',
    name: 'Zanskar Valley',
    state: 'Ladakh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Frozen river trek (Chadar), ancient monasteries',
    description: 'One of the most isolated valleys in the Himalayas. Famous for the Chadar Trek in winter, where you walk on the frozen Zanskar river, and ancient cliffside monasteries like Phugtal. It is a harsh, raw, and unimaginably beautiful high-altitude desert.',
    altitude: 3500,
    bestTimeBanner: 'January-February (Chadar Trek only). June-September for summer road access.',
    seasonalRoadWarnings: 'Road to Padum washes out during monsoon (July-Aug). Completely snowed in from Nov-May.',
    stays: [
      {
        tier: 1,
        propertyName: 'Omasi La Guesthouse (Padum)',
        bookingUrl: 'Unverified — book on arrival',
        pricePerNight: 800,
        altitude: 3660,
        breakfastIncluded: false,
        distanceFromAttractions: 'Central Padum',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Hotel Ibex Padum',
        bookingUrl: 'https://www.makemytrip.com/hotels/padum-hotels.html',
        pricePerNight: 2500,
        altitude: 3660,
        breakfastIncluded: true,
        distanceFromAttractions: 'Near Padum Market',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 3,
        propertyName: 'Zanskar Lodge (Stongdey)',
        bookingUrl: 'Unverified — check local agents',
        pricePerNight: 4500,
        altitude: 3700,
        breakfastIncluded: true,
        distanceFromAttractions: 'Near Stongdey Monastery',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Delhi (DEL) -> Leh (IXL)',
        airlines: ['IndiGo', 'Vistara', 'Air India'],
        averageFareEstimate: 12000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 3 days (Flight to Leh + Acclimatization + 2 day drive to Padum via Kargil)'
    },
    commuteOptions: [
      { type: 'Shared Innova/Xylo', cost: '₹2000/seat from Kargil' },
      { type: 'Private Xylo/Innova', cost: '₹7500/day for 6-8 people', vendorName: 'Kargil Taxi Union' }
    ],
    food: {
      restaurants: [
        { name: 'Padum Local Dhabas', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Skyu (Wheat pasta stew)', whereToEat: 'Homestays' },
        { name: 'Thukpa', whereToEat: 'Padum Market' }
      ],
      vegetarianAvailability: 'Moderate. Lentils, rice, and basic vegetables available during summer.',
      approxMealCostPerDay: 600,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Inner Line Permit (Ladakh)',
        issuedBy: 'LAHDC',
        applicationPortalLink: 'https://www.lahdclehpermit.in/',
        processingTime: 'Instant online',
        costPerPerson: 400,
        documentsRequired: ['Aadhaar Card'],
        onArrivalPossible: true,
        groupSpecialRules: 'Environmental fee applies to all tourists.'
      }
    ],
    seasonalCalendar: {
      jan: 'Amber', feb: 'Amber', mar: 'Red', apr: 'Red', may: 'Red', jun: 'Amber', jul: 'Green', aug: 'Green', sep: 'Green', oct: 'Amber', nov: 'Red', dec: 'Red'
    }
  },
  {
    id: 'spiti-valley',
    name: 'Spiti Valley Loop',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'Kaza, Langza, Komic, Key Monastery',
    description: 'A cold desert mountain valley located high in the Himalayas. Known for its stark landscapes, ancient Buddhist monasteries, and villages like Komic (highest motorable village) and Hikkim (highest post office).',
    altitude: 3800,
    bestTimeBanner: 'June to September for full loop (Manali and Shimla sides open).',
    seasonalRoadWarnings: 'Rohtang Pass (Manali side) closed Nov-May. Shimla side remains open but treacherous in winter.',
    stays: [
      {
        tier: 1,
        propertyName: 'Zostel Spiti (Kaza)',
        bookingUrl: 'https://www.zostel.com/zostel/spiti/',
        pricePerNight: 700,
        altitude: 3800,
        breakfastIncluded: false,
        distanceFromAttractions: 'Kaza Town',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Spiti Heritage Homestay (Langza)',
        bookingUrl: 'https://www.airbnb.co.in/s/Langza/homes',
        pricePerNight: 2000,
        altitude: 4400,
        breakfastIncluded: true,
        distanceFromAttractions: 'Langza Village (near Buddha statue)',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      },
      {
        tier: 3,
        propertyName: 'The Alpinist (Kaza)',
        bookingUrl: 'https://www.makemytrip.com/hotels/kaza-hotels.html',
        pricePerNight: 4500,
        altitude: 3800,
        breakfastIncluded: true,
        distanceFromAttractions: 'Kaza Town',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Delhi (DEL) -> Kullu (KUU)',
        airlines: ['IndiGo', 'Alliance Air'],
        averageFareEstimate: 10000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 2 days (Flight to Kullu/Chandigarh + 14 hour drive via Manali)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹7500/day for 10 people', vendorName: 'Manali Taxi Union' },
      { type: 'Royal Enfield 500cc', cost: '₹1500/day', vendorName: 'Manali Bike Rentals' }
    ],
    food: {
      restaurants: [
        { name: 'The Himalayan Cafe (Kaza)', mapLink: 'https://goo.gl/maps/search/Himalayan+Cafe+Kaza' },
        { name: 'Sol Cafe (Kaza)', mapLink: 'https://goo.gl/maps/search/Sol+Cafe+Kaza' }
      ],
      localDishes: [
        { name: 'Churpe (Dried cheese soup)', whereToEat: 'Langza homestays' }
      ],
      vegetarianAvailability: 'Excellent. Most cafes in Kaza cater heavily to Israeli/Western and Indian veg diets.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Inner Line Permit (Spiti)',
        issuedBy: 'SDM Office (Kaza / Reckong Peo)',
        applicationPortalLink: 'Offline only — Apply in person at DM/SDM Office (Shimla, Kaza, Reckong Peo)',
        processingTime: '1 day',
        costPerPerson: 200,
        documentsRequired: ['Aadhaar Card'],
        onArrivalPossible: true,
        groupSpecialRules: 'Required only for foreigners (PAP), Indian nationals do not require ILP for Spiti.'
      }
    ],
    seasonalCalendar: {
      jan: 'Red', feb: 'Red', mar: 'Red', apr: 'Amber', may: 'Amber', jun: 'Green', jul: 'Green', aug: 'Green', sep: 'Green', oct: 'Amber', nov: 'Red', dec: 'Red'
    }
  },
  {
    id: 'chopta-tungnath',
    name: 'Chopta + Tungnath',
    state: 'Uttarakhand',
    zone: 'Zone 2 — North India',
    keyFeature: 'Highest Shiva temple, Chandrashila summit',
    description: 'Known as the "Mini Switzerland of Uttarakhand," Chopta is the base for the trek to Tungnath, the highest Shiva temple in the world, and the Chandrashila summit offering 360-degree Himalayan views.',
    altitude: 2680,
    bestTimeBanner: 'April to June and September to November. Heavy snow blocks the trek in peak winter.',
    seasonalRoadWarnings: 'Road to Chopta gets blocked by snow from December to March.',
    stays: [
      {
        tier: 1,
        propertyName: 'Chopta Dome Tents',
        bookingUrl: 'Unverified — book locally at Baniyakund',
        pricePerNight: 800,
        altitude: 2680,
        breakfastIncluded: true,
        distanceFromAttractions: 'Chopta Meadows',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Pristine Peaks Eco Camp',
        bookingUrl: 'https://www.makemytrip.com/hotels/chopta-hotels.html',
        pricePerNight: 2500,
        altitude: 2650,
        breakfastIncluded: true,
        distanceFromAttractions: 'Baniyakund (3km before Chopta)',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      },
      {
        tier: 3,
        propertyName: 'Snow View Resort, Chopta',
        bookingUrl: 'https://www.makemytrip.com/hotels/chopta-hotels.html',
        pricePerNight: 4000,
        altitude: 2600,
        breakfastIncluded: true,
        distanceFromAttractions: 'Ukhimath road',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      }
    ],
    trek: {
      name: 'Tungnath & Chandrashila Trek',
      route: 'Chopta Base -> Tungnath Temple -> Chandrashila Peak',
      startPoint: 'Chopta',
      startCoordinates: '30.4851° N, 79.1738° E',
      endPoint: 'Chandrashila Peak',
      endCoordinates: '30.4880° N, 79.1770° E',
      totalDistanceKm: 5,
      elevationGainMeters: 1000,
      difficulty: 'Moderate',
      bestMonths: ['May', 'June', 'September', 'October'],
      guideRequirement: 'Optional. Trail is well paved up to Tungnath.',
      campingAvailable: false,
      gearChecklist: ['Trekking shoes', 'Warm jacket', 'Water bottle'],
      permitRequired: false,
      estimatedTime: '3-4 hours one way',
      allTrailsLink: 'https://www.alltrails.com/trail/india/uttarakhand/chandrashila-peak-via-tungnath',
      acclimatizationDaysNeeded: 0
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Dehradun (DED)',
        airlines: ['IndiGo', 'Vistara'],
        averageFareEstimate: 7500,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 10 hours (Flight + 6 hr drive to Chopta)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹5500/day for 10 people', vendorName: 'Rishikesh Taxi Union' }
    ],
    food: {
      restaurants: [
        { name: 'Chopta Base Maggi Points', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Garhwali Thali', whereToEat: 'Local dhabas at Baniyakund' }
      ],
      vegetarianAvailability: 'Excellent. Completely vegetarian zone near the temple.',
      approxMealCostPerDay: 500,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: {
      jan: 'Red', feb: 'Red', mar: 'Amber', apr: 'Green', may: 'Green', jun: 'Green', jul: 'Amber', aug: 'Amber', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber'
    }
  },
  {
    id: 'bir-billing',
    name: 'Bir Billing',
    state: 'Himachal Pradesh',
    zone: 'Zone 2 — North India',
    keyFeature: 'World paragliding capital, Tibetan colony',
    description: 'Bir is a Tibetan refugee settlement with sprawling tea gardens and monasteries. Billing, located 14km above, is one of the highest paragliding takeoff sites in the world. It’s a hub for backpackers and adventure seekers.',
    altitude: 1525,
    bestTimeBanner: 'October-November and March-May are best for paragliding thermals.',
    seasonalRoadWarnings: 'Monsoon (July-August) suspends all paragliding activities.',
    stays: [
      {
        tier: 1,
        propertyName: 'Zostel Bir',
        bookingUrl: 'https://www.zostel.com/zostel/bir/',
        pricePerNight: 600,
        altitude: 1500,
        breakfastIncluded: false,
        distanceFromAttractions: 'Walking distance to landing site',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'The Hosteller Bir',
        bookingUrl: 'https://www.makemytrip.com/hotels/bir-hotels.html',
        pricePerNight: 1800,
        altitude: 1520,
        breakfastIncluded: true,
        distanceFromAttractions: 'Near Tibetan Colony',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 3,
        propertyName: 'Tatva Bir Tents and Resorts',
        bookingUrl: 'https://www.makemytrip.com/hotels/tatva_bir_tents_and_resorts-details-bir.html',
        pricePerNight: 4500,
        altitude: 1600,
        breakfastIncluded: true,
        distanceFromAttractions: 'Edge of the valley',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Delhi (DEL)',
        airlines: ['IndiGo'],
        averageFareEstimate: 5000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      buses: {
        operator: 'Zingbus / HRTC (Delhi to Bir)',
        bookingUrl: 'https://www.redbus.in/'
      },
      totalTravelTime: 'Approx 15 hours (Flight to Delhi + Overnight Volvo Bus to Bir)'
    },
    commuteOptions: [
      { type: 'Scooter Rental', cost: '₹500/day', vendorName: 'Bir Rentals' },
      { type: 'Taxi to Billing Takeoff', cost: '₹600 per car' }
    ],
    food: {
      restaurants: [
        { name: 'Avva\'s Cafe', mapLink: 'https://goo.gl/maps/search/Avvas+Cafe+Bir' },
        { name: 'June 16 Cafe', mapLink: 'https://goo.gl/maps/search/June+16+Cafe+Bir' }
      ],
      localDishes: [
        { name: 'Laphing', whereToEat: 'Tibetan Colony Streets' },
        { name: 'South Indian Filter Coffee', whereToEat: 'Avva\'s Cafe' }
      ],
      vegetarianAvailability: 'Excellent. Plenty of vegan and vegetarian cafes.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: false
    },
    seasonalCalendar: {
      jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber'
    }
  }
];
