export type Zone = 'Zone 1 — Northeast India' | 'Zone 2 — North India' | 'Zone 3 — South India';
export type BudgetTier = 1 | 2 | 3;
export type TrekDifficulty = 'Easy' | 'Moderate' | 'Hard' | 'Challenging';
export type MonthStatus = 'Green' | 'Amber' | 'Red';

export interface Stay {
  tier: BudgetTier;
  propertyName: string;
  bookingUrl: string;
  pricePerNight: number;
  altitude: number;
  breakfastIncluded: boolean;
  distanceFromAttractions: string;
  cloudMountainViews: boolean;
  isCloudLevel: boolean;
  isCommunityRecommended: boolean;
}

export interface CommuteOption {
  type: string;
  cost: string;
  vendorName?: string;
  notes?: string;
}

export interface Transport {
  fromCity: string;
  flights?: { route: string; airlines: string[]; averageFareEstimate: number; bookingUrl: string };
  trains?: { name: string; number: string; route: string; journeyHours: number; bookingUrl: string };
  buses?: { operator: string; bookingUrl: string };
  totalTravelTime: string;
}

export interface Trek {
  name: string;
  route: string;
  startPoint: string;
  startCoordinates: string;
  endPoint: string;
  endCoordinates: string;
  totalDistanceKm: number;
  elevationGainMeters: number;
  difficulty: TrekDifficulty;
  bestMonths: string[];
  guideRequirement: string;
  guideCostPerDay?: number;
  campingAvailable: boolean;
  campingCostPerNight?: number;
  gearChecklist: string[];
  permitRequired: boolean;
  permitLink?: string;
  estimatedTime: string;
  allTrailsLink: string;
  acclimatizationDaysNeeded: number;
}

export interface Food {
  restaurants: { name: string; mapLink: string }[];
  localDishes: { name: string; whereToEat: string }[];
  streetFoodMarket?: { name: string; timing: string };
  vegetarianAvailability: string;
  approxMealCostPerDay: number;
  cookingAvailableAtStay: boolean;
}

export interface Permit {
  type: string;
  issuedBy: string;
  applicationPortalLink: string;
  processingTime: string;
  costPerPerson: number;
  documentsRequired: string[];
  onArrivalPossible: boolean;
  groupSpecialRules?: string;
}

export interface SeasonalCalendar {
  jan: MonthStatus;
  feb: MonthStatus;
  mar: MonthStatus;
  apr: MonthStatus;
  may: MonthStatus;
  jun: MonthStatus;
  jul: MonthStatus;
  aug: MonthStatus;
  sep: MonthStatus;
  oct: MonthStatus;
  nov: MonthStatus;
  dec: MonthStatus;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  zone: Zone;
  keyFeature: string;
  description: string;
  altitude: number;
  bestTimeBanner: string;
  seasonalRoadWarnings: string;
  
  stays: Stay[];
  transport: Transport;
  commuteOptions: CommuteOption[];
  trek?: Trek;
  food: Food;
  permits?: Permit[];
  seasonalCalendar: SeasonalCalendar;
}

export interface ItineraryDay {
  dayNumber: number;
  wakeUpTime: string;
  morningActivity: string;
  transitDuration: string;
  lunchSpot: string;
  afternoonActivity: string;
  eveningCheckIn: string;
  dinnerRecommendation: string;
  altitude: number;
}

export interface Itinerary {
  id: string;
  name: string;
  zone: Zone;
  durationDays: number;
  routeTitle: string;
  days: ItineraryDay[];
  totalKm: number;
  permitsRequired: { name: string; link: string }[];
  costPerPerson: { tier1: number; tier2: number; tier3: number };
  bestTimeToGoBanner: string;
  seasonalWarnings: string;
}
