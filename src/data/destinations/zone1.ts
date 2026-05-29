import { Destination } from '@/types';

export const zone1Destinations: Destination[] = [
  {
    id: 'ziro-valley',
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Apatani tribe, Ziro Music Festival zone',
    description: 'A mesmerizing pine-clad valley hidden in the lower Subansiri district. Famous for the Apatani tribe who practice sustainable farming and the globally renowned Ziro Festival of Music. Waking up here means watching mist roll over emerald rice fields and bamboo groves.',
    altitude: 1500,
    bestTimeBanner: 'Best visited during September (for the music festival) or March to May for clear weather.',
    seasonalRoadWarnings: 'Roads from Itanagar can be muddy and prone to minor landslides during peak monsoon (July-August).',
    stays: [
      {
        tier: 1,
        propertyName: 'Ziro Valley Resort',
        bookingUrl: 'https://www.makemytrip.com/hotels/ziro_valley_resort-details-ziro.html',
        pricePerNight: 1200,
        altitude: 1500,
        breakfastIncluded: false,
        distanceFromAttractions: '2 km from Hong Village',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Apatani Heritage Homestay',
        bookingUrl: 'https://www.airbnb.co.in/s/Ziro--Arunachal-Pradesh/homes',
        pricePerNight: 2500,
        altitude: 1520,
        breakfastIncluded: true,
        distanceFromAttractions: 'Located inside Hari village',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: true
      },
      {
        tier: 3,
        propertyName: 'Kasa Resort',
        bookingUrl: 'https://www.makemytrip.com/hotels/kasa_resort-details-ziro.html',
        pricePerNight: 4500,
        altitude: 1550,
        breakfastIncluded: true,
        distanceFromAttractions: '5 km from main town, secluded',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Guwahati (GAU)',
        airlines: ['IndiGo', 'Air India'],
        averageFareEstimate: 6500,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      trains: {
        name: 'Guwahati Express',
        number: '12513',
        route: 'Secunderabad (SC) to Guwahati (GHY)',
        journeyHours: 36,
        bookingUrl: 'https://www.irctc.co.in/'
      },
      totalTravelTime: 'Approx 14 hours (Flight + 10-hour drive from Guwahati)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹6000/day for 10 people', vendorName: 'Northeast Explorers (Guwahati)' },
      { type: 'Shared Sumo', cost: '₹800/seat from Itanagar to Ziro' },
      { type: 'Helicopter', cost: '₹3500/seat (Seasonal)', notes: 'Check pawanhans.co.in for Naharlagun to Ziro service' }
    ],
    food: {
      restaurants: [
        { name: 'City Burger Ziro', mapLink: 'https://goo.gl/maps/search/City+Burger+Ziro' },
        { name: 'A&C\'s Kitchen', mapLink: 'https://goo.gl/maps/search/ACs+Kitchen+Ziro' },
        { name: 'Siiro Resort Restaurant', mapLink: 'https://goo.gl/maps/search/Siiro+Resort+Ziro' }
      ],
      localDishes: [
        { name: 'Apong (Rice Beer)', whereToEat: 'Local Apatani homestays' },
        { name: 'Bamboo Shoot Pork', whereToEat: 'A&C\'s Kitchen' }
      ],
      vegetarianAvailability: 'Limited in local tribal homestays; mostly available in town restaurants.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: true
    },
    permits: [
      {
        type: 'Inner Line Permit (ILP)',
        issuedBy: 'Government of Arunachal Pradesh',
        applicationPortalLink: 'https://eilp.arunachal.gov.in/',
        processingTime: '1-2 working days',
        costPerPerson: 100,
        documentsRequired: ['Aadhaar Card', 'Passport size photo'],
        onArrivalPossible: false,
        groupSpecialRules: 'Group ILP can be applied together by a designated leader.'
      }
    ],
    seasonalCalendar: {
      jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber'
    }
  },
  {
    id: 'mechuka',
    name: 'Mechuka',
    state: 'Arunachal Pradesh',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Near China border, rarely visited, helicopter access',
    description: 'A stunning valley nestled 6,000 feet above sea level in the Shi Yomi district. Famous for its pristine Menchukha river, wooden bridges, wild horses, and the 400-year-old Samten Yongcha Monastery. Often described as the surreal edge of India.',
    altitude: 1829,
    bestTimeBanner: 'October to March offers the clearest views of snow-capped peaks.',
    seasonalRoadWarnings: 'Roads from Along (Aalo) to Mechuka are remote and often blocked during monsoons (June-August).',
    stays: [
      {
        tier: 1,
        propertyName: 'Mechuka Homestay',
        bookingUrl: 'https://www.airbnb.co.in/s/Mechuka/homes',
        pricePerNight: 1000,
        altitude: 1800,
        breakfastIncluded: false,
        distanceFromAttractions: 'Central town',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      },
      {
        tier: 2,
        propertyName: 'Gaybo\'s Traditional Homestay',
        bookingUrl: 'https://www.airbnb.co.in/s/Mechuka/homes',
        pricePerNight: 2200,
        altitude: 1829,
        breakfastIncluded: true,
        distanceFromAttractions: 'Near the river bank',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      },
      {
        tier: 3,
        propertyName: 'The Myst, Mechuka',
        bookingUrl: 'Unverified — contact local guides',
        pricePerNight: 5000,
        altitude: 1850,
        breakfastIncluded: true,
        distanceFromAttractions: 'Hilltop overlooking the valley',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Dibrugarh (DIB)',
        airlines: ['IndiGo'],
        averageFareEstimate: 8500,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 2 days (Flight + Ferry across Brahmaputra + 14 hour drive via Aalo)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller / Sumo', cost: '₹7000/day for 10 people', vendorName: 'Dibrugarh Taxi Union' },
      { type: 'Helicopter', cost: '₹4000/seat', notes: 'Status unverified for this season — check Pawan Hans at pawanhans.co.in or call Arunachal Tourism' }
    ],
    food: {
      restaurants: [
        { name: 'Tashi\'s Cafe', mapLink: 'https://goo.gl/maps/search/Mechuka+Cafe' },
        { name: 'Pema Homestay Kitchen', mapLink: 'https://goo.gl/maps/search/Mechuka+Homestay' }
      ],
      localDishes: [
        { name: 'Butter Tea and Tsampa', whereToEat: 'Local Memba households' }
      ],
      vegetarianAvailability: 'Very limited. Mostly Maggi/Momos and basic dal rice in town.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: true
    },
    permits: [
      {
        type: 'Inner Line Permit (ILP)',
        issuedBy: 'Government of Arunachal Pradesh',
        applicationPortalLink: 'https://eilp.arunachal.gov.in/',
        processingTime: '1-2 working days',
        costPerPerson: 100,
        documentsRequired: ['Aadhaar Card', 'Passport photo'],
        onArrivalPossible: false,
        groupSpecialRules: 'Requires Shi Yomi district explicitly mentioned on ILP.'
      }
    ],
    seasonalCalendar: {
      jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Amber', oct: 'Green', nov: 'Green', dec: 'Amber'
    }
  },
  {
    id: 'tawang',
    name: 'Tawang',
    state: 'Arunachal Pradesh',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Monastery at 10,000 ft, ILP + PAP required',
    description: 'A high-altitude paradise known for the majestic Tawang Monastery, Sela Pass, and glacial lakes. Deeply rooted in Mahayana Buddhism, Tawang offers a spiritual and rugged Himalayan experience.',
    altitude: 3048,
    bestTimeBanner: 'April to October (avoiding July-August). Winters are harsh and roads may be blocked by snow.',
    seasonalRoadWarnings: 'Sela Pass can get blocked by heavy snow in Jan-Feb. Monsoon triggers landslides.',
    stays: [
      {
        tier: 1,
        propertyName: 'Zostel Tawang',
        bookingUrl: 'Unverified — check zostel.com',
        pricePerNight: 800,
        altitude: 3000,
        breakfastIncluded: false,
        distanceFromAttractions: 'Near main market',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Hotel Tawang Holiday',
        bookingUrl: 'https://www.makemytrip.com/hotels/hotel_tawang_holiday-details-tawang.html',
        pricePerNight: 2800,
        altitude: 3048,
        breakfastIncluded: true,
        distanceFromAttractions: '1 km from Monastery',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 3,
        propertyName: 'Vivanta Arunachal Pradesh, Tawang',
        bookingUrl: 'https://www.makemytrip.com/hotels/vivanta_arunachal_pradesh_tawang-details-tawang.html',
        pricePerNight: 9500,
        altitude: 3050,
        breakfastIncluded: true,
        distanceFromAttractions: 'Premium property near town center',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Guwahati (GAU)',
        airlines: ['IndiGo'],
        averageFareEstimate: 6000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 2 days (Flight + 14 hour drive spread over 2 days with stop at Bomdila/Dirang)'
    },
    commuteOptions: [
      { type: 'Tempo Traveller', cost: '₹6500/day for 10 people', vendorName: 'Guwahati Taxi Association' },
      { type: 'Helicopter', cost: '₹5000/seat', notes: 'Check pawanhans.co.in from Guwahati. Highly weather dependent.' }
    ],
    food: {
      restaurants: [
        { name: 'The Dragon', mapLink: 'https://goo.gl/maps/search/The+Dragon+Tawang' },
        { name: 'Woodland Restaurant', mapLink: 'https://goo.gl/maps/search/Woodland+Tawang' }
      ],
      localDishes: [
        { name: 'Zan (Millet porridge)', whereToEat: 'Local eateries' },
        { name: 'Churpi (Fermented cheese dish)', whereToEat: 'The Dragon' }
      ],
      vegetarianAvailability: 'Moderate. Many Tibetan veg dishes available.',
      approxMealCostPerDay: 900,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'ILP & Protected Area Permit (PAP)',
        issuedBy: 'Government of Arunachal Pradesh',
        applicationPortalLink: 'https://ilp.arunachalpradesh.gov.in/',
        processingTime: '3-4 working days',
        costPerPerson: 100,
        documentsRequired: ['Aadhaar Card', 'Passport photo'],
        onArrivalPossible: false,
        groupSpecialRules: 'Foreign nationals require PAP applied via registered tour operators.'
      }
    ],
    seasonalCalendar: {
      jan: 'Red', feb: 'Red', mar: 'Amber', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Amber', dec: 'Amber'
    }
  },
  {
    id: 'dzongu',
    name: 'Dzongu',
    state: 'North Sikkim',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Lepcha tribal reserve, Inner Line Permit',
    description: 'A special reserve created for the indigenous Lepcha community of Sikkim. Surrounded by dense forests, hot springs, and unparalleled views of Mt. Kanchenjunga. Pure isolation and deep cultural immersion.',
    altitude: 1500,
    bestTimeBanner: 'March to May for rhododendrons; October to December for clear mountain views.',
    seasonalRoadWarnings: 'North Sikkim highways often wash out during monsoon (July-Sept).',
    stays: [
      {
        tier: 1,
        propertyName: 'Munlom Nature Resort',
        bookingUrl: 'https://www.airbnb.co.in/s/Dzongu/homes',
        pricePerNight: 1500,
        altitude: 1500,
        breakfastIncluded: true,
        distanceFromAttractions: 'Near Tingvong village',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: true
      },
      {
        tier: 2,
        propertyName: 'Dzongu Lee Homestay',
        bookingUrl: 'https://www.airbnb.co.in/s/Dzongu/homes',
        pricePerNight: 3000,
        altitude: 1600,
        breakfastIncluded: true,
        distanceFromAttractions: 'Passingdang village',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      },
      {
        tier: 3,
        propertyName: 'Mayal Lyang Homestay',
        bookingUrl: 'Community-recommended — verify before booking via Instagram @mayallyang',
        pricePerNight: 4500,
        altitude: 1650,
        breakfastIncluded: true,
        distanceFromAttractions: 'Passingdang',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: true
      }
    ],
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Bagdogra (IXB)',
        airlines: ['IndiGo', 'SpiceJet'],
        averageFareEstimate: 7000,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 10 hours (Flight + 6 hr drive to Gangtok + 3 hr drive to Dzongu)'
    },
    commuteOptions: [
      { type: 'Private Bolero / Maxx', cost: '₹5000/day for 10 people', vendorName: 'Gangtok Taxi Stand' }
    ],
    food: {
      restaurants: [
        { name: 'Homestay Kitchens Only', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Khuri (Buckwheat pancakes)', whereToEat: 'Mayal Lyang Homestay' },
        { name: 'Chi (Millet beer)', whereToEat: 'Local homestays' }
      ],
      vegetarianAvailability: 'Available if requested in advance at homestays.',
      approxMealCostPerDay: 800,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Inner Line Permit (Sikkim)',
        issuedBy: 'Sikkim Tourism / DC Office Mangan',
        applicationPortalLink: 'Unverified — apply via local travel agents in Gangtok',
        processingTime: '1 day',
        costPerPerson: 200,
        documentsRequired: ['Aadhaar Card', 'Passport photos'],
        onArrivalPossible: false,
        groupSpecialRules: 'Must be arranged through registered Sikkim travel agents.'
      }
    ],
    seasonalCalendar: {
      jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Amber', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber'
    }
  },
  {
    id: 'dzukou-valley',
    name: 'Dzukou Valley',
    state: 'Nagaland',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Seasonal lily valley trek',
    description: 'Renowned for its rolling emerald green hills and the endemic Dzukou Lily. Situated on the border of Nagaland and Manipur, it\'s one of the most picturesque trekking destinations in the Northeast.',
    altitude: 2452,
    bestTimeBanner: 'June to September to see the valley in full bloom (Dzukou Lilies), or October-November for clear skies.',
    seasonalRoadWarnings: 'Trek trails can be slippery and infested with leeches during peak monsoon.',
    stays: [
      {
        tier: 1,
        propertyName: 'Dzukou Valley Base Camp (Dormitory/Tents)',
        bookingUrl: 'Unverified — book on arrival at the valley camp',
        pricePerNight: 500,
        altitude: 2452,
        breakfastIncluded: false,
        distanceFromAttractions: 'Inside the valley',
        cloudMountainViews: true,
        isCloudLevel: true,
        isCommunityRecommended: false
      },
      {
        tier: 2,
        propertyName: 'Morung Lodge (Kohima)',
        bookingUrl: 'https://www.makemytrip.com/hotels/kohima-hotels.html',
        pricePerNight: 2000,
        altitude: 1444,
        breakfastIncluded: true,
        distanceFromAttractions: 'Kohima town',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: true
      },
      {
        tier: 3,
        propertyName: 'Alder Retreat (Kohima)',
        bookingUrl: 'https://www.makemytrip.com/hotels/kohima-hotels.html',
        pricePerNight: 4000,
        altitude: 1450,
        breakfastIncluded: true,
        distanceFromAttractions: 'Kohima town',
        cloudMountainViews: true,
        isCloudLevel: false,
        isCommunityRecommended: false
      }
    ],
    trek: {
      name: 'Dzukou Valley Trek',
      route: 'Viswema Village / Zakhama Village to Dzukou Base Camp',
      startPoint: 'Viswema Village',
      startCoordinates: '25.5678° N, 94.1234° E',
      endPoint: 'Dzukou Valley Rest House',
      endCoordinates: '25.5512° N, 94.0890° E',
      totalDistanceKm: 18,
      elevationGainMeters: 600,
      difficulty: 'Moderate',
      bestMonths: ['June', 'July', 'August', 'September', 'October'],
      guideRequirement: 'Optional, but recommended for first-timers (₹1500/day)',
      campingAvailable: true,
      campingCostPerNight: 500,
      gearChecklist: ['Trekking poles', 'Rain poncho', 'Leech socks', 'Warm sleeping bag'],
      permitRequired: true,
      permitLink: 'Nagaland Tourism entry at trailhead',
      estimatedTime: '5-6 hours one way',
      allTrailsLink: 'https://www.alltrails.com/trail/india/nagaland/dzukou-valley',
      acclimatizationDaysNeeded: 0
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: {
        route: 'HYD -> Dimapur (DMU)',
        airlines: ['IndiGo'],
        averageFareEstimate: 7500,
        bookingUrl: 'https://www.makemytrip.com/flights/'
      },
      totalTravelTime: 'Approx 9 hours (Flight + 3 hour drive to Kohima)'
    },
    commuteOptions: [
      { type: 'Shared Taxi (Kohima to Viswema)', cost: '₹100/seat' },
      { type: 'Private Sumo to Trailhead', cost: '₹1500 per drop' }
    ],
    food: {
      restaurants: [
        { name: 'Ozone Cafe (Kohima)', mapLink: 'https://goo.gl/maps/search/Ozone+Cafe' },
        { name: 'Dzukou Valley Camp Kitchen', mapLink: '#' }
      ],
      localDishes: [
        { name: 'Smoked Pork with Bamboo Shoot', whereToEat: 'Kohima local dhabas' },
        { name: 'Naga Thali', whereToEat: 'Ozone Cafe' }
      ],
      vegetarianAvailability: 'Basic Maggi, Dal, Rice at the valley camp. Good veg options in Kohima.',
      approxMealCostPerDay: 700,
      cookingAvailableAtStay: false
    },
    permits: [
      {
        type: 'Inner Line Permit (ILP) + Valley Entry Fee',
        issuedBy: 'Government of Nagaland / Local Youth Association',
        applicationPortalLink: 'https://ilp.nagaland.gov.in/',
        processingTime: '1-2 days',
        costPerPerson: 100,
        documentsRequired: ['Aadhaar Card', 'Passport Photo'],
        onArrivalPossible: true,
        groupSpecialRules: 'Valley entry fee paid at the trailhead.'
      }
    ],
    seasonalCalendar: {
      jan: 'Amber', feb: 'Amber', mar: 'Green', apr: 'Green', may: 'Green', jun: 'Green', jul: 'Green', aug: 'Green', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber'
    }
  }
];
