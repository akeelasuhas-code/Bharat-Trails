import { Itinerary } from '@/types';
import { itinerariesRest } from './itineraries_rest';

export const itineraries: Itinerary[] = [
  ...itinerariesRest,
  {
    id: 'ne-1',
    name: 'NE-1: Arunachal Deep',
    zone: 'Zone 1 — Northeast India',
    durationDays: 7,
    routeTitle: 'Hyderabad → Guwahati → Ziro → Mechuka → Pasighat → Guwahati → Hyderabad',
    totalKm: 1200,
    permitsRequired: [
      { name: 'Arunachal Pradesh ILP', link: 'https://ilp.arunachalpradesh.gov.in/' }
    ],
    costPerPerson: { tier1: 29000, tier2: 32000, tier3: 35000 },
    bestTimeToGoBanner: 'October to April. Avoid Peak Monsoon (July-August) due to heavy landslides on the Ziro-Aalo road.',
    seasonalWarnings: 'Road to Mechuka from Aalo is extremely remote; travel only during daylight hours.',
    days: [
      {
        dayNumber: 1,
        wakeUpTime: '05:00 AM',
        morningActivity: 'Flight from Hyderabad to Guwahati, then begin the 10-hour drive towards Ziro.',
        transitDuration: '10 Hours Drive',
        lunchSpot: 'Highway Dhaba near Tezpur (Assam)',
        afternoonActivity: 'Cross the Assam-Arunachal border at Banderdewa checkpost (ILP Check).',
        eveningCheckIn: 'Check into homestay at Ziro Valley.',
        dinnerRecommendation: 'Traditional Apatani meal (Bamboo Shoot Pork / Rice) at homestay.',
        altitude: 1500
      },
      {
        dayNumber: 2,
        wakeUpTime: '06:30 AM',
        morningActivity: 'Explore Hong Village, one of the largest Apatani villages. Meet the elder women with facial tattoos and nose plugs.',
        transitDuration: '1 Hour Local',
        lunchSpot: 'A&C\'s Kitchen, Ziro Town',
        afternoonActivity: 'Walk through the Tarin High Altitude Fish Farm and pine bamboo groves.',
        eveningCheckIn: 'Overnight in Ziro.',
        dinnerRecommendation: 'City Burger Ziro or local rice beer (Apong) at the homestay.',
        altitude: 1500
      },
      {
        dayNumber: 3,
        wakeUpTime: '04:30 AM',
        morningActivity: 'Early departure for the long drive to Mechuka via Daporijo and Aalo.',
        transitDuration: '12-14 Hours Drive',
        lunchSpot: 'Basic Dhaba in Daporijo',
        afternoonActivity: 'Navigate the rugged mountain roads following the Siyom river.',
        eveningCheckIn: 'Late night arrival in Mechuka valley.',
        dinnerRecommendation: 'Hot Maggi and Butter Tea at homestay upon arrival.',
        altitude: 1829
      },
      {
        dayNumber: 4,
        wakeUpTime: '07:00 AM',
        morningActivity: 'Visit the 400-year-old Samten Yongcha Monastery on the hilltop.',
        transitDuration: '2 Hours Local',
        lunchSpot: 'Tashi\'s Cafe (Momos and Thukpa)',
        afternoonActivity: 'Hike across the wooden suspension bridges over the Yargyap Chu river. Spot wild horses in the valley.',
        eveningCheckIn: 'Overnight in Mechuka.',
        dinnerRecommendation: 'Memba tribal dinner at Gaybo\'s Homestay.',
        altitude: 1850
      },
      {
        dayNumber: 5,
        wakeUpTime: '06:00 AM',
        morningActivity: 'Drive from Mechuka down to Pasighat, following the Siang river (Brahmaputra).',
        transitDuration: '9 Hours Drive',
        lunchSpot: 'Local eatery in Aalo',
        afternoonActivity: 'Arrive in Pasighat, the oldest town of Arunachal. Walk by the massive Siang river.',
        eveningCheckIn: 'Check into hotel in Pasighat.',
        dinnerRecommendation: 'River fish curry at a local Pasighat restaurant.',
        altitude: 155
      },
      {
        dayNumber: 6,
        wakeUpTime: '07:00 AM',
        morningActivity: 'Cross the mighty Bogibeel bridge over the Brahmaputra towards Dibrugarh/Guwahati.',
        transitDuration: '9 Hours Drive',
        lunchSpot: 'Assamese Thali on the highway',
        afternoonActivity: 'Drive back through the tea estates of Assam to Guwahati.',
        eveningCheckIn: 'Check into hotel in Guwahati.',
        dinnerRecommendation: 'Dinner cruise on the Brahmaputra river or Khorikaa restaurant.',
        altitude: 55
      },
      {
        dayNumber: 7,
        wakeUpTime: '08:00 AM',
        morningActivity: 'Visit Kamakhya Temple (if time permits) before heading to the airport.',
        transitDuration: 'Flight to HYD',
        lunchSpot: 'Guwahati Airport',
        afternoonActivity: 'Flight back to Hyderabad.',
        eveningCheckIn: 'Home.',
        dinnerRecommendation: 'N/A',
        altitude: 540
      }
    ]
  },
  {
    id: 'n-1',
    name: 'N-1: Kinnaur-Spiti High Altitude Loop',
    zone: 'Zone 2 — North India',
    durationDays: 7,
    routeTitle: 'Hyderabad → Delhi → Shimla → Kalpa → Kaza → Manali',
    totalKm: 1450,
    permitsRequired: [],
    costPerPerson: { tier1: 27000, tier2: 30000, tier3: 33000 },
    bestTimeToGoBanner: 'June to September when both Rohtang and Kunzum passes are open.',
    seasonalWarnings: 'Loop is impossible from November to May due to Rohtang/Kunzum pass closure.',
    days: [
      {
        dayNumber: 1,
        wakeUpTime: '05:00 AM',
        morningActivity: 'Flight HYD to Delhi. Drive from Delhi to Shimla.',
        transitDuration: '8 Hours Drive',
        lunchSpot: 'Murthal Dhabas',
        afternoonActivity: 'Ascend into the lower Himalayas towards Shimla.',
        eveningCheckIn: 'Overnight in Shimla / Narkanda.',
        dinnerRecommendation: 'Local Himachali food at hotel.',
        altitude: 2276
      },
      {
        dayNumber: 2,
        wakeUpTime: '07:00 AM',
        morningActivity: 'Drive along the Sutlej river into Kinnaur Valley.',
        transitDuration: '6 Hours Drive',
        lunchSpot: 'Rampur Bushahr',
        afternoonActivity: 'Arrive in Kalpa, walk through the apple orchards with views of Kinner Kailash.',
        eveningCheckIn: 'Overnight in Kalpa.',
        dinnerRecommendation: 'Tibetan dinner in Kalpa market.',
        altitude: 2960
      },
      {
        dayNumber: 3,
        wakeUpTime: '06:00 AM',
        morningActivity: 'Drive via the treacherous cliffhanger roads towards Nako.',
        transitDuration: '5 Hours Drive',
        lunchSpot: 'Pooh village',
        afternoonActivity: 'Visit Nako Lake and the 1000-year-old Nako Monastery. Continue to Tabo.',
        eveningCheckIn: 'Overnight in Tabo.',
        dinnerRecommendation: 'Tabo Monastery guesthouse cafe.',
        altitude: 3280
      },
      {
        dayNumber: 4,
        wakeUpTime: '07:30 AM',
        morningActivity: 'Explore Tabo Monastery (Ajanta of the Himalayas). Drive to Kaza.',
        transitDuration: '2 Hours Drive',
        lunchSpot: 'The Himalayan Cafe, Kaza',
        afternoonActivity: 'Rest and acclimatize in Kaza town. Visit local market.',
        eveningCheckIn: 'Overnight in Kaza.',
        dinnerRecommendation: 'Sol Cafe for Sea Buckthorn tea and pizza.',
        altitude: 3800
      },
      {
        dayNumber: 5,
        wakeUpTime: '07:00 AM',
        morningActivity: 'Visit Key Monastery, perched spectacularly on a hill. Then drive to Hikkim (Highest Post Office).',
        transitDuration: '3 Hours Local',
        lunchSpot: 'Langza Homestay',
        afternoonActivity: 'Visit Komic (highest motorable village) and Langza (Buddha statue).',
        eveningCheckIn: 'Overnight in Kaza.',
        dinnerRecommendation: 'Spitian local thali.',
        altitude: 4400
      },
      {
        dayNumber: 6,
        wakeUpTime: '05:00 AM',
        morningActivity: 'Early departure for Manali. Cross Kunzum Pass (4590m) and Rohtang Pass.',
        transitDuration: '10 Hours Drive',
        lunchSpot: 'Batal (Chacha Chachi Dhaba)',
        afternoonActivity: 'Descend from the barren desert into the lush green Kullu valley.',
        eveningCheckIn: 'Overnight in Manali.',
        dinnerRecommendation: 'Old Manali cafes (Cafe 1947).',
        altitude: 2050
      },
      {
        dayNumber: 7,
        wakeUpTime: '08:00 AM',
        morningActivity: 'Drive Manali to Chandigarh/Kullu airport.',
        transitDuration: 'Flight to HYD',
        lunchSpot: 'Highway Dhaba near Mandi',
        afternoonActivity: 'Flight back to Hyderabad.',
        eveningCheckIn: 'Home.',
        dinnerRecommendation: 'N/A',
        altitude: 540
      }
    ]
  },
  {
    id: 's-3',
    name: 'S-3: Tamil Nadu Nilgiri Loop',
    zone: 'Zone 3 — South India',
    durationDays: 7,
    routeTitle: 'Hyderabad → Coimbatore → Kodaikanal → Munnar → Wayanad',
    totalKm: 850,
    permitsRequired: [
      { name: 'Eravikulam Entry Ticket', link: 'https://eravikulamnationalpark.in/landing/booking.php' }
    ],
    costPerPerson: { tier1: 25000, tier2: 28000, tier3: 33000 },
    bestTimeToGoBanner: 'September to March. Avoid May (extremely crowded).',
    seasonalWarnings: 'Safe year-round, but expect heavy mist in Vattakanal during monsoons.',
    days: [
      {
        dayNumber: 1,
        wakeUpTime: '06:00 AM',
        morningActivity: 'Flight HYD to Coimbatore/Madurai. Drive up the ghats to Kodaikanal.',
        transitDuration: '4 Hours Drive',
        lunchSpot: 'Batlagundu base town',
        afternoonActivity: 'Check in, walk around the star-shaped Kodai Lake. Rent a bicycle.',
        eveningCheckIn: 'Overnight in Kodaikanal.',
        dinnerRecommendation: 'Cloud Street for wood-fired pizza.',
        altitude: 2133
      },
      {
        dayNumber: 2,
        wakeUpTime: '07:30 AM',
        morningActivity: 'Walk along Coaker\'s Walk for panoramic valley views. Visit Pillar Rocks.',
        transitDuration: 'Local',
        lunchSpot: 'Astoria Veg',
        afternoonActivity: 'Drive to Vattakanal (Little Israel). Hike down to Dolphin\'s Nose viewpoint.',
        eveningCheckIn: 'Overnight in Kodaikanal.',
        dinnerRecommendation: 'Altaf\'s Cafe (Vattakanal) for Middle Eastern food.',
        altitude: 2100
      },
      {
        dayNumber: 3,
        wakeUpTime: '08:00 AM',
        morningActivity: 'Drive down the ghats and up into Kerala towards Munnar.',
        transitDuration: '5 Hours Drive',
        lunchSpot: 'En route Kerala-TN border',
        afternoonActivity: 'Enter the endless tea estates of Munnar. Stop at Top Station for views.',
        eveningCheckIn: 'Overnight in Munnar.',
        dinnerRecommendation: 'Rapsy Restaurant (Appam and Stew).',
        altitude: 1532
      },
      {
        dayNumber: 4,
        wakeUpTime: '06:30 AM',
        morningActivity: 'Visit Eravikulam National Park to spot the endangered Nilgiri Tahr.',
        transitDuration: '2 Hours Local',
        lunchSpot: 'Saravana Bhavan Munnar',
        afternoonActivity: 'Visit the Tea Museum and relax at Mattupetty Dam.',
        eveningCheckIn: 'Overnight in Munnar.',
        dinnerRecommendation: 'Local Kerala Thali at the resort.',
        altitude: 1600
      },
      {
        dayNumber: 5,
        wakeUpTime: '07:00 AM',
        morningActivity: 'Drive north towards Wayanad through forest corridors.',
        transitDuration: '7 Hours Drive',
        lunchSpot: 'Kozhikode bypass road',
        afternoonActivity: 'Arrive in Wayanad, check into a jungle or treehouse stay.',
        eveningCheckIn: 'Overnight in Wayanad.',
        dinnerRecommendation: 'Traditional Malabar Biryani.',
        altitude: 700
      },
      {
        dayNumber: 6,
        wakeUpTime: '06:00 AM',
        morningActivity: 'Early morning trek to Chembra Peak (heart-shaped lake) or visit Edakkal Caves.',
        transitDuration: 'Local',
        lunchSpot: 'Kalpetta town',
        afternoonActivity: 'Relax at Pookode Lake or take a wildlife safari at Muthanga Wildlife Sanctuary.',
        eveningCheckIn: 'Overnight in Wayanad.',
        dinnerRecommendation: 'Dinner at the resort.',
        altitude: 2100
      },
      {
        dayNumber: 7,
        wakeUpTime: '08:00 AM',
        morningActivity: 'Drive to Calicut (Kozhikode) airport for departure.',
        transitDuration: '3 Hours Drive + Flight to HYD',
        lunchSpot: 'Paragon Restaurant, Calicut',
        afternoonActivity: 'Flight back to Hyderabad.',
        eveningCheckIn: 'Home.',
        dinnerRecommendation: 'N/A',
        altitude: 540
      }
    ]
  }
];
