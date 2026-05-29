import { Destination } from '@/types';

export const aeyoValleyDestination: Destination[] = [
  {
    id: 'aeyo-valley',
    name: 'Aeyo Valley (Dibang)',
    state: 'Arunachal Pradesh',
    zone: 'Zone 1 — Northeast India',
    keyFeature: 'Glacier lakes, Idu Mishmi tribe, absolute isolation',
    description: 'An ultra-remote, high-altitude trekking destination in the Dibang Valley near the China border. Known as the "Valley of Glaciers", it features pristine alpine meadows, turquoise glacial lakes, and dense forests untouched by mass tourism. The cost is high due to the necessity of hiring local Idu Mishmi guides and porters for a multi-day expedition.',
    altitude: 3500,
    bestTimeBanner: 'March to May and September to November.',
    seasonalRoadWarnings: 'Completely inaccessible during monsoon (June-August) due to severe landslides and swollen rivers.',
    stays: [
      { tier: 1, propertyName: 'Anini Basic Homestays', bookingUrl: 'Unverified — book via local guide in Anini', pricePerNight: 1500, altitude: 1968, breakfastIncluded: true, distanceFromAttractions: 'Base town', cloudMountainViews: true, isCloudLevel: false, isCommunityRecommended: true },
      { tier: 2, propertyName: 'Mishmi Hills Resort (Roing/Anini)', bookingUrl: 'Unverified — local booking', pricePerNight: 3500, altitude: 1968, breakfastIncluded: true, distanceFromAttractions: 'Roing/Anini base', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false },
      { tier: 3, propertyName: 'Fully Catered Expedition Tents', bookingUrl: 'Unverified — contact local expedition agencies', pricePerNight: 8000, altitude: 3500, breakfastIncluded: true, distanceFromAttractions: 'Aeyo Valley Camp', cloudMountainViews: true, isCloudLevel: true, isCommunityRecommended: false }
    ],
    trek: {
      name: 'Aeyo Valley Glacier Trek',
      route: 'Anini -> Mathu Valley -> Aeyo Valley',
      startPoint: 'Anini',
      startCoordinates: '28.7950° N, 95.9020° E',
      endPoint: 'Aeyo Valley Glacial Lakes',
      endCoordinates: '28.8500° N, 95.9500° E',
      totalDistanceKm: 35,
      elevationGainMeters: 1532,
      difficulty: 'Challenging',
      bestMonths: ['April', 'May', 'September', 'October', 'November'],
      guideRequirement: 'Mandatory Idu Mishmi guide (approx ₹2000/day) + porters',
      campingAvailable: true,
      gearChecklist: ['Minus 10 sleeping bag', 'Crampons/Microspikes', 'Gore-Tex layers', 'Water filters'],
      permitRequired: true,
      permitLink: 'https://ilp.arunachalpradesh.gov.in/',
      estimatedTime: '5-6 days round trip',
      allTrailsLink: 'Unverified — no commercial maps exist',
      acclimatizationDaysNeeded: 2
    },
    transport: {
      fromCity: 'Hyderabad',
      flights: { route: 'HYD -> Dibrugarh (DIB)', airlines: ['IndiGo'], averageFareEstimate: 8500, bookingUrl: 'https://www.makemytrip.com/flights/' },
      totalTravelTime: 'Approx 2 days (Flight + 12 hr drive from Dibrugarh via Roing to Anini)'
    },
    commuteOptions: [{ type: '4x4 Bolero/Sumo', cost: '₹6000/day for 6 people', vendorName: 'Dibrugarh/Roing Taxi Stand' }],
    food: {
      restaurants: [{ name: 'Expedition Cook Meals', mapLink: '#' }],
      localDishes: [{ name: 'Rice and Smoked Meat', whereToEat: 'Trek Camps' }],
      vegetarianAvailability: 'Very Poor. Must carry dehydrated meals if strictly vegetarian.',
      approxMealCostPerDay: 1200,
      cookingAvailableAtStay: true
    },
    permits: [
      {
        type: 'Arunachal Inner Line Permit (ILP)',
        issuedBy: 'Govt of Arunachal Pradesh',
        applicationPortalLink: 'https://eilp.arunachal.gov.in/',
        processingTime: '2-3 days',
        costPerPerson: 100,
        documentsRequired: ['Aadhaar', 'Passport Photo'],
        onArrivalPossible: false,
        groupSpecialRules: 'Requires local sponsor/guide for Dibang Valley deep entry.'
      }
    ],
    seasonalCalendar: { jan: 'Red', feb: 'Red', mar: 'Amber', apr: 'Green', may: 'Green', jun: 'Red', jul: 'Red', aug: 'Red', sep: 'Green', oct: 'Green', nov: 'Green', dec: 'Amber' }
  }
];
