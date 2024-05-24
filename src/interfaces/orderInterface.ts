export interface OrderInterface {
    _id: string;
    email: string;
    mobileNumber: string;
    originCountry: string;
    serviceType: string;
    tripType: string;
    processingSpeed: string;
    purpose: string;
    journeyLocation: {
      from: string;
      to: string;
    };
    passengerCount: number;
    passengerData: {
      title: string;
      firstName: string;
      lastName: string;
    }[];
    date: {
      startDate: Date;
      returnDate: Date;
    };
    currency: string;
    total: number;
    paymentStatus: string;
    orderStatus: string;
    referenceId: string;
    createdAt: Date;
    ticketUrl?: string;
  }
  
  export interface FormikValuesForBooking {
    purpose: string;
    email: string;
    // countryCode: string;
    mobileNumber: string;
    passengerData: {
      title: string;
      firstName: string;
      lastName: string;
    }[]
  }