export interface priceRequestInterface{
    serviceType:string,
    isRoundTrip:boolean,
    passengerCount:number,
    fastProcess:boolean,
    journeyLocation:object,
    date:object
}

export interface countryWisePriceInterface{
    _id:string,
    countryName:string,
    currencySymbol:string,
    baseRate:number,
    roundTripRate:number,
    fastProcessSurCharge:number,
    flightWithHotelSurCharge:number,
}