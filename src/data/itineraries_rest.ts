import { Itinerary } from '@/types';

export const itinerariesRest: Itinerary[] = [
  {
    id: 'ne-2',
    name: 'NE-2: Tawang Monastery Circuit',
    zone: 'Zone 1 — Northeast India',
    durationDays: 7,
    routeTitle: 'Hyderabad → Guwahati → Bomdila → Tawang → Dirang → Guwahati',
    totalKm: 1000,
    permitsRequired: [{ name: 'Arunachal ILP + PAP', link: 'https://ilp.arunachalpradesh.gov.in/' }],
    costPerPerson: { tier1: 28000, tier2: 31000, tier3: 35000 },
    bestTimeToGoBanner: 'October to May. Avoid monsoon due to Bhalukpong landslides.',
    seasonalWarnings: 'Sela Pass can occasionally close due to heavy snow in Jan-Feb.',
    days: [
      { dayNumber: 1, wakeUpTime: '06:00 AM', morningActivity: 'Flight HYD to Guwahati. Drive to Bhalukpong/Bomdila.', transitDuration: '7 Hours Drive', lunchSpot: 'Highway Dhaba, Tezpur', afternoonActivity: 'Cross ILP gate, ascend into the hills.', eveningCheckIn: 'Overnight in Bomdila.', dinnerRecommendation: 'Local Momos.', altitude: 2415 },
      { dayNumber: 2, wakeUpTime: '06:00 AM', morningActivity: 'Drive to Tawang via Sela Pass (13,700 ft).', transitDuration: '7 Hours Drive', lunchSpot: 'Army Canteen at Sela Pass', afternoonActivity: 'Stop at Jaswant Garh War Memorial.', eveningCheckIn: 'Check into Tawang.', dinnerRecommendation: 'Dragon Restaurant.', altitude: 3048 },
      { dayNumber: 3, wakeUpTime: '07:00 AM', morningActivity: 'Visit the 400-year-old Tawang Monastery.', transitDuration: 'Local', lunchSpot: 'Tawang market', afternoonActivity: 'Visit Urgelling Gompa and local craft center.', eveningCheckIn: 'Overnight in Tawang.', dinnerRecommendation: 'Thukpa at homestay.', altitude: 3048 },
      { dayNumber: 4, wakeUpTime: '05:30 AM', morningActivity: 'Excursion to Bum La Pass (China Border) and Madhuri Lake.', transitDuration: '5 Hours Local', lunchSpot: 'Packed Lunch', afternoonActivity: 'Explore the high-altitude lakes.', eveningCheckIn: 'Overnight in Tawang.', dinnerRecommendation: 'Local cafe.', altitude: 4600 },
      { dayNumber: 5, wakeUpTime: '07:00 AM', morningActivity: 'Drive down to Dirang. Stop at Nuranang Falls.', transitDuration: '6 Hours Drive', lunchSpot: 'Jang', afternoonActivity: 'Visit Dirang Dzong and apple orchards.', eveningCheckIn: 'Overnight in Dirang.', dinnerRecommendation: 'Resort dinner.', altitude: 1497 },
      { dayNumber: 6, wakeUpTime: '07:00 AM', morningActivity: 'Drive back to Guwahati.', transitDuration: '8 Hours Drive', lunchSpot: 'Tezpur', afternoonActivity: 'Descend to the plains of Assam.', eveningCheckIn: 'Overnight in Guwahati.', dinnerRecommendation: 'Assamese Thali.', altitude: 55 },
      { dayNumber: 7, wakeUpTime: '08:00 AM', morningActivity: 'Visit Kamakhya Temple.', transitDuration: 'Flight to HYD', lunchSpot: 'Airport', afternoonActivity: 'Flight home.', eveningCheckIn: 'Home.', dinnerRecommendation: 'N/A', altitude: 540 }
    ]
  },
  {
    id: 'n-4',
    name: 'N-4: Valley of Gods Trek',
    zone: 'Zone 2 — North India',
    durationDays: 7,
    routeTitle: 'Hyderabad → Delhi → Dehradun → Sankri → Har Ki Dun',
    totalKm: 600,
    permitsRequired: [{ name: 'Govind Pashu Vihar Permit', link: 'Checkpost at Netwar' }],
    costPerPerson: { tier1: 26000, tier2: 29000, tier3: 32000 },
    bestTimeToGoBanner: 'April to June and September to November.',
    seasonalWarnings: 'Trek closed in peak monsoon.',
    days: [
      { dayNumber: 1, wakeUpTime: '05:00 AM', morningActivity: 'Flight to Dehradun. Drive to Sankri.', transitDuration: '8 Hours Drive', lunchSpot: 'Mussoorie/Naugaon', afternoonActivity: 'Drive through pine forests.', eveningCheckIn: 'Overnight Sankri Base Camp.', dinnerRecommendation: 'Homestay Thali.', altitude: 1950 },
      { dayNumber: 2, wakeUpTime: '06:00 AM', morningActivity: 'Drive to Taluka. Start trek to Osla.', transitDuration: '1 Hr Drive, 5 Hr Trek', lunchSpot: 'Packed Lunch', afternoonActivity: 'Trek along the Supin river.', eveningCheckIn: 'Camp at Osla.', dinnerRecommendation: 'Camp Dinner.', altitude: 2500 },
      { dayNumber: 3, wakeUpTime: '06:30 AM', morningActivity: 'Trek from Osla to Har Ki Dun.', transitDuration: '6 Hr Trek', lunchSpot: 'Packed Lunch', afternoonActivity: 'Enter the Valley of Gods with views of Swargarohini.', eveningCheckIn: 'Camp at Har Ki Dun.', dinnerRecommendation: 'Camp Dinner.', altitude: 3566 },
      { dayNumber: 4, wakeUpTime: '07:00 AM', morningActivity: 'Explore Jaundhar Glacier or Maninda Tal.', transitDuration: 'Local Trek', lunchSpot: 'Camp', afternoonActivity: 'Relax in the valley.', eveningCheckIn: 'Camp at Har Ki Dun.', dinnerRecommendation: 'Camp Dinner.', altitude: 3566 },
      { dayNumber: 5, wakeUpTime: '07:00 AM', morningActivity: 'Trek back to Osla.', transitDuration: '5 Hr Trek', lunchSpot: 'Packed Lunch', afternoonActivity: 'Descend through the meadows.', eveningCheckIn: 'Camp at Osla.', dinnerRecommendation: 'Camp Dinner.', altitude: 2500 },
      { dayNumber: 6, wakeUpTime: '07:00 AM', morningActivity: 'Trek down to Taluka and drive to Sankri.', transitDuration: '5 Hr Trek, 1 Hr Drive', lunchSpot: 'Taluka', afternoonActivity: 'Rest at base camp.', eveningCheckIn: 'Overnight Sankri.', dinnerRecommendation: 'Celebration Dinner.', altitude: 1950 },
      { dayNumber: 7, wakeUpTime: '06:00 AM', morningActivity: 'Drive back to Dehradun.', transitDuration: '8 Hours Drive + Flight', lunchSpot: 'Highway', afternoonActivity: 'Flight to HYD.', eveningCheckIn: 'Home.', dinnerRecommendation: 'N/A', altitude: 540 }
    ]
  },
  {
    id: 's-1',
    name: 'S-1: Andhra Highlands Drive',
    zone: 'Zone 3 — South India',
    durationDays: 6,
    routeTitle: 'Hyderabad → Lambasingi → Araku Valley → Vizag',
    totalKm: 850,
    permitsRequired: [],
    costPerPerson: { tier1: 15000, tier2: 18000, tier3: 25000 },
    bestTimeToGoBanner: 'October to February for the best mist and cool weather.',
    seasonalWarnings: 'Safe year-round. Monsoons make the Borra Caves slippery.',
    days: [
      { dayNumber: 1, wakeUpTime: '05:00 AM', morningActivity: 'Drive from Hyderabad to Lambasingi (approx 500km).', transitDuration: '10 Hours Drive', lunchSpot: 'Suryapet Highway Dhaba', afternoonActivity: 'Ascend the eastern ghats.', eveningCheckIn: 'Overnight in Lambasingi.', dinnerRecommendation: 'Bamboo Chicken.', altitude: 1000 },
      { dayNumber: 2, wakeUpTime: '05:00 AM', morningActivity: 'Early morning walk in the strawberry farms to catch the frost/fog.', transitDuration: 'Local', lunchSpot: 'Local Dhaba', afternoonActivity: 'Relax and visit nearby waterfalls.', eveningCheckIn: 'Overnight in Lambasingi.', dinnerRecommendation: 'Resort dinner.', altitude: 1000 },
      { dayNumber: 3, wakeUpTime: '08:00 AM', morningActivity: 'Drive to Araku Valley.', transitDuration: '2.5 Hours Drive', lunchSpot: 'Araku Town', afternoonActivity: 'Visit the Coffee Museum and Tribal Museum.', eveningCheckIn: 'Overnight in Araku.', dinnerRecommendation: 'Local Andhra Thali.', altitude: 910 },
      { dayNumber: 4, wakeUpTime: '07:30 AM', morningActivity: 'Visit Borra Caves and Katiki Waterfalls.', transitDuration: 'Local', lunchSpot: 'Near Borra Caves', afternoonActivity: 'Explore the million-year-old limestone caves.', eveningCheckIn: 'Overnight in Araku.', dinnerRecommendation: 'Araku Coffee and snacks.', altitude: 910 },
      { dayNumber: 5, wakeUpTime: '08:00 AM', morningActivity: 'Drive down the ghats to Visakhapatnam.', transitDuration: '3.5 Hours Drive', lunchSpot: 'Vizag City', afternoonActivity: 'Relax at Rushikonda Beach or visit the Submarine Museum.', eveningCheckIn: 'Overnight in Vizag.', dinnerRecommendation: 'Seafood near the beach.', altitude: 5 },
      { dayNumber: 6, wakeUpTime: '08:00 AM', morningActivity: 'Drive back to Hyderabad or take a flight.', transitDuration: '11 Hours Drive / 1 Hr Flight', lunchSpot: 'Rajahmundry', afternoonActivity: 'Transit back home.', eveningCheckIn: 'Home.', dinnerRecommendation: 'N/A', altitude: 540 }
    ]
  },
  {
    id: 'ne-aeyo',
    name: 'NE-Aeyo: Dibang Frontier Trek',
    zone: 'Zone 1 — Northeast India',
    durationDays: 7,
    routeTitle: 'Hyderabad → Dibrugarh → Roing → Anini → Aeyo Valley',
    totalKm: 850,
    permitsRequired: [{ name: 'Arunachal ILP (Dibang Valley)', link: 'https://ilp.arunachalpradesh.gov.in/' }],
    costPerPerson: { tier1: 45000, tier2: 55000, tier3: 75000 },
    bestTimeToGoBanner: 'April to May. Highly specialized trek requiring experienced guides.',
    seasonalWarnings: 'Strictly avoid monsoon (June-August). Flooding makes roads and trails impassable.',
    days: [
      { dayNumber: 1, wakeUpTime: '04:00 AM', morningActivity: 'Flight HYD to Dibrugarh. Drive via Bogibeel bridge to Roing.', transitDuration: '6 Hours Drive', lunchSpot: 'Dhaba in Assam', afternoonActivity: 'Enter Arunachal through the ILP gate at Roing.', eveningCheckIn: 'Overnight in Roing.', dinnerRecommendation: 'Local thali.', altitude: 390 },
      { dayNumber: 2, wakeUpTime: '05:00 AM', morningActivity: 'Extreme mountain drive from Roing to Anini via Mayudia Pass.', transitDuration: '10 Hours Drive', lunchSpot: 'Packed Lunch/Basic tea stall', afternoonActivity: 'Navigate treacherous cliff roads into Dibang Valley.', eveningCheckIn: 'Overnight in Anini.', dinnerRecommendation: 'Idu Mishmi dinner.', altitude: 1968 },
      { dayNumber: 3, wakeUpTime: '06:00 AM', morningActivity: 'Meet local guides. Drive to trail head and start trek towards Aeyo Valley.', transitDuration: '2 Hr Drive, 5 Hr Trek', lunchSpot: 'Packed Trail Lunch', afternoonActivity: 'Trek through virgin alpine forests.', eveningCheckIn: 'Camp in Mathu Valley.', dinnerRecommendation: 'Camp Dinner.', altitude: 2500 },
      { dayNumber: 4, wakeUpTime: '06:30 AM', morningActivity: 'Trek to the Aeyo Valley Glacial Lakes.', transitDuration: '6 Hr Trek', lunchSpot: 'Packed Lunch', afternoonActivity: 'Explore the high-altitude turquoise lakes surrounded by glaciers.', eveningCheckIn: 'Camp at Aeyo Valley.', dinnerRecommendation: 'Camp Dinner.', altitude: 3500 },
      { dayNumber: 5, wakeUpTime: '07:00 AM', morningActivity: 'Descend back towards Anini.', transitDuration: '7 Hr Trek', lunchSpot: 'Trail Stop', afternoonActivity: 'Return to civilization in Anini.', eveningCheckIn: 'Overnight in Anini.', dinnerRecommendation: 'Homestay dinner.', altitude: 1968 },
      { dayNumber: 6, wakeUpTime: '05:00 AM', morningActivity: 'Long drive back from Anini to Dibrugarh.', transitDuration: '12 Hours Drive', lunchSpot: 'Roing', afternoonActivity: 'Cross the Brahmaputra back into Assam.', eveningCheckIn: 'Overnight in Dibrugarh.', dinnerRecommendation: 'Hotel Dinner.', altitude: 108 },
      { dayNumber: 7, wakeUpTime: '07:00 AM', morningActivity: 'Relax and transfer to airport.', transitDuration: 'Flight to HYD', lunchSpot: 'Airport', afternoonActivity: 'Flight home.', eveningCheckIn: 'Home.', dinnerRecommendation: 'N/A', altitude: 540 }
    ]
  }
];
