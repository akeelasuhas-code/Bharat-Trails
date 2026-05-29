import { zone1Destinations } from './destinations/zone1';
import { zone2Destinations } from './destinations/zone2';
import { zone3Destinations } from './destinations/zone3';
import { zone1DestinationsRest } from './destinations/zone1_rest';
import { zone2DestinationsRest } from './destinations/zone2_rest';
import { zone3DestinationsRest } from './destinations/zone3_rest';
import { aeyoValleyDestination } from './destinations/aeyo_valley';

export const allDestinations = [
  ...zone1Destinations,
  ...zone2Destinations,
  ...zone3Destinations,
  ...zone1DestinationsRest,
  ...zone2DestinationsRest,
  ...zone3DestinationsRest,
  ...aeyoValleyDestination
];

export const getDestinationById = (id: string) => {
  return allDestinations.find(d => d.id === id);
};
