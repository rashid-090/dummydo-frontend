export interface priceRequestInterface {
  serviceType: string;
  isRoundTrip: boolean;
  passengerCount: number;
  fastProcess: boolean;
  journeyLocation: object;
  date: object;
}

export interface countryWisePriceInterface {
  _id: string;
  countryName: string;
  currencySymbol: string;
  oneWayRate: number;
  oneWayUrgentRate: number;
  oneWayHotelRate: number;
  oneWayUrgentHotelRate: number;
  roundTripRate: number;
  roundTripUrgentRate: number;
  roundTripHotelRate: number;
  roundTripUrgentHotelRate: number;
}
