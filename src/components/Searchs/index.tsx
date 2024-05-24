/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from 'react';
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
// import { LuArrowRightLeft } from "react-icons/lu";
// import Select from 'react-select';
import Checkbox from '@mui/material/Checkbox';
import { IoArrowForwardSharp } from "react-icons/io5";
import Switch from "react-switch";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { DatePicker } from 'antd';
import moment from 'moment'
import SearchInput from './SearchInput';

// const option = [
//   { label: "Trivandrum International Airport, Thiruvananthapuram (TRV)", value: "Trivandrum International Airport, Thiruvananthapuram (TRV)" },
//   { label: "Calicut International Airport, Kozhikode (CCJ)", value: "Calicut International Airport, Kozhikode (CCJ)" },
//   { label: "Cochin International Airport, Kochi (COK)", value: "Cochin International Airport, Kochi (COK)" },
//   { label: "Kannur International Airport (CNN)", value: "Kannur International Airport (CNN)" },
//   { label: "Indira Gandhi International Airport, Delhi (DEL)", value: "Indira Gandhi International Airport, Delhi (DEL)" },
//   { label: "Chhatrapati Shivaji Maharaj International Airport, Mumbai (BOM)", value: "Chhatrapati Shivaji Maharaj International Airport, Mumbai (BOM)" },
//   { label: "Kempegowda International Airport, Bangalore (BLR)", value: "Kempegowda International Airport, Bangalore (BLR)" },
//   { label: "Chennai International Airport, Chennai (MAA)", value: "Chennai International Airport, Chennai (MAA)" },
//   { label: "Netaji Subhas Chandra Bose International Airport, Kolkata (CCU)", value: "Netaji Subhas Chandra Bose International Airport, Kolkata (CCU)" },
//   { label: "Rajiv Gandhi International Airport, Hyderabad (HYD)", value: "Rajiv Gandhi International Airport, Hyderabad (HYD)" },
//   { label: "Sardar Vallabhbhai Patel International Airport, Ahmedabad (AMD)", value: "Sardar Vallabhbhai Patel International Airport, Ahmedabad (AMD)" },
//   { label: "Pune Airport, Pune (PNQ)", value: "Pune Airport, Pune (PNQ)" },
//   { label: "Goa International Airport, Goa (GOI)", value: "Goa International Airport, Goa (GOI)" },
//   { label: "Jaipur International Airport, Jaipur (JAI)", value: "Jaipur International Airport, Jaipur (JAI)" },
//   { label: "Lokpriya Gopinath Bordoloi International Airport, Guwahati (GAU)", value: "Lokpriya Gopinath Bordoloi International Airport, Guwahati (GAU)" },
//   { label: "Chaudhary Charan Singh International Airport, Lucknow (LKO)", value: "Chaudhary Charan Singh International Airport, Lucknow (LKO)" },
//   { label: "Srinagar International Airport, Srinagar (SXR)", value: "Srinagar International Airport, Srinagar (SXR)" },
//   { label: "Madurai Airport, Madurai (IXM)", value: "Madurai Airport, Madurai (IXM)" },
//   { label: "Visakhapatnam Airport, Visakhapatnam (VTZ)", value: "Visakhapatnam Airport, Visakhapatnam (VTZ)" },
//   { label: "Coimbatore International Airport, Coimbatore (CJB)", value: "Coimbatore International Airport, Coimbatore (CJB)" },
//   { label: "Chandigarh International Airport, Chandigarh (IXC)", value: "Chandigarh International Airport, Chandigarh (IXC)" },
//   { label: "Tiruchirappalli International Airport, Tiruchirappalli (TRZ)", value: "Tiruchirappalli International Airport, Tiruchirappalli (TRZ)" },
//   { label: "Mangalore International Airport, Mangalore (IXE)", value: "Mangalore International Airport, Mangalore (IXE)" },
//   { label: "Rajahmundry Airport, Rajahmundry (RJA)", value: "Rajahmundry Airport, Rajahmundry (RJA)" },
//   { label: "Devi Ahilya Bai Holkar Airport, Indore (IDR)", value: "Devi Ahilya Bai Holkar Airport, Indore (IDR)" },
//   { label: "Veer Savarkar International Airport, Port Blair (IXZ)", value: "Veer Savarkar International Airport, Port Blair (IXZ)" },
//   { label: "Jammu Airport, Jammu (IXJ)", value: "Jammu Airport, Jammu (IXJ)" },
//   { label: "Dabolim Airport, Dabolim (GOI)", value: "Dabolim Airport, Dabolim (GOI)" },
//   { label: "Surat Airport, Surat (STV)", value: "Surat Airport, Surat (STV)" },
//   { label: "Bagdogra Airport, Bagdogra (IXB)", value: "Bagdogra Airport, Bagdogra (IXB)" },
//   { label: "Lal Bahadur Shastri Airport, Varanasi (VNS)", value: "Lal Bahadur Shastri Airport, Varanasi (VNS)" },
//   { label: "Dr. Babasaheb Ambedkar International Airport, Nagpur (NAG)", value: "Dr. Babasaheb Ambedkar International Airport, Nagpur (NAG)" },
//   { label: "Jolly Grant Airport, Dehradun (DED)", value: "Jolly Grant Airport, Dehradun (DED)" },
//   { label: "Maharana Pratap Airport, Udaipur (UDR)", value: "Maharana Pratap Airport, Udaipur (UDR)" },
//   { label: "Vadodara Airport, Vadodara (BDQ)", value: "Vadodara Airport, Vadodara (BDQ)" },
//   { label: "Vijayawada Airport, Vijayawada (VGA)", value: "Vijayawada Airport, Vijayawada (VGA)" },
//   { label: "Birsa Munda Airport, Ranchi (IXR)", value: "Birsa Munda Airport, Ranchi (IXR)" },
//   { label: "Rajkot Airport, Rajkot (RAJ)", value: "Rajkot Airport, Rajkot (RAJ)" },
//   { label: "Raja Bhoj Airport, Bhopal (BHO)", value: "Raja Bhoj Airport, Bhopal (BHO)" },
//   { label: "Shirdi Airport, Shirdi (SAG)", value: "Shirdi Airport, Shirdi (SAG)" },
//   { label: "Aurangabad Airport, Aurangabad (IXU)", value: "Aurangabad Airport, Aurangabad (IXU)" },
//   { label: "Agatti Airport, Agatti Island (AGX)", value: "Agatti Airport, Agatti Island (AGX)" },
//   { label: "Leh Kushok Bakula Rimpochee Airport, Leh (IXL)", value: "Leh Kushok Bakula Rimpochee Airport, Leh (IXL)" },
//   { label: "Silchar Airport, Silchar (IXS)", value: "Silchar Airport, Silchar (IXS)" },
//   { label: "Kullu Manali Airport, Kullu (KUU)", value: "Kullu Manali Airport, Kullu (KUU)" },
//   { label: "Dimapur Airport, Dimapur (DMU)", value: "Dimapur Airport, Dimapur (DMU)" },
//   { label: "Imphal Airport, Imphal (IMF)", value: "Imphal Airport, Imphal (IMF)" },
//   { label: "Siliguri Bagdogra Airport, Siliguri (IXB)", value: "Siliguri Bagdogra Airport, Siliguri (IXB)" },
//   { label: "Belgaum Airport, Belgaum (IXG)", value: "Belgaum Airport, Belgaum (IXG)" },
//   { label: "Hubli Airport, Hubli (HBX)", value: "Hubli Airport, Hubli (HBX)" },
//   { label: "Dibrugarh Airport, Dibrugarh (DIB)", value: "Dibrugarh Airport, Dibrugarh (DIB)" },
//   { label: "Bhavnagar Airport, Bhavnagar (BHU)", value: "Bhavnagar Airport, Bhavnagar (BHU)" },
//   { label: "Diu Airport, Diu (DIU)", value: "Diu Airport, Diu (DIU)" },
//   { label: "Dharamsala Kangra Airport, Dharamsala (DHM)", value: "Dharamsala Kangra Airport, Dharamsala (DHM)" },
//   { label: "Pantnagar Airport, Pantnagar (PGH)", value: "Pantnagar Airport, Pantnagar (PGH)" },
//   { label: "Gaya Airport, Gaya (GAY)", value: "Gaya Airport, Gaya (GAY)" },
//   { label: "Jabalpur Airport, Jabalpur (JLR)", value: "Jabalpur Airport, Jabalpur (JLR)" },
//   { label: "Kanpur Airport, Kanpur (KNU)", value: "Kanpur Airport, Kanpur (KNU)" },
//   { label: "Kandla Airport, Kandla (IXY)", value: "Kandla Airport, Kandla (IXY)" },
//   { label: "Agartala Airport, Agartala (IXA)", value: "Agartala Airport, Agartala (IXA)" },
// ];


const SearchPage = () => {
  const navigate = useNavigate();
  const [journeyLocation, setJourneyLocation] = useState({ from: "", to: "" });
  const [serviceType, setServiceType] = useState("flight");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);
  const [fastProcess, setFastProcess] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState({ startDate: "", returnDate: "" })
  const [errorMessage, setErrorMessage] = useState({ from: "", to: "", startDate: "", returnDate: "" })
  const [startDate, setStartDate] = useState(null);
  const today = moment().startOf('day')
  
  

  useEffect(() => {
    // Function to handle click outside of modal
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) { // Type assertion to Node
        setOpenDate(false);
      }
    }

    // Add event listener when modal is open
    if (openDate) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when modal is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDate]);


  const disablePreviousDates = (current: any)=>{
    return current && current < today
  }
  const disablePreviousDatesOfStartDate = (current: any)=>{
    return current && current <= moment(startDate).endOf('day')
  }


  const navToBooking = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (!journeyLocation.from.length || !journeyLocation.to.length || !date.startDate || (!date.returnDate && isRoundTrip)) {
      if (!journeyLocation.from.length) {
        setErrorMessage(previous => ({ ...previous, from: "Required" }))
      }
      if (!journeyLocation.to.length) {
        setErrorMessage(previous => ({ ...previous, to: "Required" }))
      }
      if (!date.startDate) {
        setErrorMessage(previous => ({ ...previous, startDate: "Required" }))
      }
      if (isRoundTrip) {
        if (!date.returnDate) {
          setErrorMessage(previous => ({ ...previous, returnDate: "Required" }))
        }
      }
      setTimeout(() => {
        setErrorMessage({ from: "", to: "", startDate: "", returnDate: "" })
      }, 3000);
      return
    }
    
    if(isRoundTrip){
      if(date.startDate > date.returnDate){
        setErrorMessage(previous => ({ ...previous, returnDate: "Return date must be later than start date" }))
        setTimeout(() => {
          setErrorMessage({ from: "", to: "", startDate: "", returnDate: "" })
        }, 3000);
        return
      }
    }
    
    navigate('/booking', {
      state: {
        serviceType,
        isRoundTrip,
        passengerCount,
        fastProcess,
        journeyLocation,
        date
      }
    })
  }


  const dateHandler = (dateType: string, datePicked: string) => {
    setDate((prevDate) => ({
      ...prevDate,
      [dateType]: datePicked,
    }))
  }


  const increasePassengerCount = () => {
    if (passengerCount < 10) {
      setPassengerCount(prevCount => prevCount + 1);
    }
  };

  const decreasePassengerCount = () => {
    if (passengerCount > 1) {
      setPassengerCount(prevCount => prevCount - 1);
    }
  };

  const handleCheck = (nextChecked: boolean) => {
    setIsRoundTrip(nextChecked);
  };


  return (
    <div className="w-full bg-white selection:bg-transparent rounded-2xl xl:rounded-[10rem] shadow-2xl shadow-[#25d64044] p-5 lg:p-10 lg:px-20">
      <div className="flex">
        <div className="flex space-x-4 text-xs sm:text-base">
          <button
            className={`px-4 py-2 flex items-center  gap-2 rounded-full ${serviceType === "flight" ? "bg-gradient-to-r from-bg-from to-bg-to text-white" : "bg-gray-100 text-gray-800"
              }`}
            onClick={() => setServiceType("flight")}
          >
            <MdFlight /><p>Flight</p>
          </button>
          <button
            className={`px-4 py-2 flex items-center  gap-2 rounded-full ${serviceType === "flightwithhotel" ? "bg-gradient-to-r from-bg-from to-bg-to text-white" : "bg-gray-100 text-gray-800"
              } `}
            onClick={() => setServiceType("flightwithhotel")}
          >
            <MdFlight /><FaHotel /><p>Flight + Hotels</p>
          </button>
        </div>
      </div>

      <div className=' flex items-center justify-between md:justify-start text-[10px] md:text-base gap-y-2 gap-x-3 md:gap-x-10'>
        {/* toolge */}

        <div className='flex gap-2 items-center h-14 capitalize font-medium'>
          <p>one way</p>
          <Switch
            onChange={handleCheck}
            checked={isRoundTrip}
            onColor="#cfcfcf"
            onHandleColor="#42c653"
            offColor="#cfcfcf"
            offHandleColor="#42c653"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            checkedIcon={false}
            uncheckedIcon={false}
          />
          <p>Round trip</p>
        </div>
        
        {/* Passenger */}

        <div className="flex items-center gap-1 selection:bg-none">
          <span className="text-black font-medium px-1 text-center">Adults:</span>
          <AiFillMinusCircle className={`text-main text-xl ${passengerCount <= 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={decreasePassengerCount} />
          <span className="text-gray-600 font-medium  text-center">{passengerCount}</span>
          <AiFillPlusCircle className={`text-main text-xl ${passengerCount >= 10 ? 'cursor-pointer opacity-50' : 'cursor-pointer'}`} onClick={increasePassengerCount} />

        </div>

        {/* Passenger */}

      </div>
      {/* Processing speed */}
      <div className='flex text-xs md:text-base items-center gap-3 text-black font-medium'>
        <p>Processing Speed:</p>
        <div className='flex items-center gap-3 '>
          <div className='flex items-center'>
            <label>Fast:</label>
            <Checkbox onChange={() => setFastProcess(!fastProcess)} sx={{ color: '#42c653', '&.Mui-checked': { color: '#42c653', } }} required />
          </div>
        </div>
      </div>

      <form onSubmit={navToBooking} className='w-full'>
        <div className='flex flex-col md:flex-row items-center gap-x-2 gap-y-4'>

          <div className='w-full'>
            <SearchInput setJourneyLocation={setJourneyLocation} otherLocation={journeyLocation["to"]} fieldName={"from"} placeHolderName={"From"} />
            <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{errorMessage["from"]}</p>
          </div>
          <div className='w-full'>
            <SearchInput setJourneyLocation={setJourneyLocation} otherLocation={journeyLocation["from"]} fieldName={"to"} placeHolderName={"To"} />
            <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{errorMessage["to"]}</p>
          </div>

          <div className='w-full'>
            <DatePicker placeholder='Start date' onChange={(picked) => {
              if (picked) {
                const { $d }: any = picked;
                dateHandler("startDate", $d);
                setStartDate($d)
              } else {
                dateHandler("startDate", "");
              }
            }}
            disabledDate={disablePreviousDates}
            className='w-full h-10 antdate' />
            <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{errorMessage["startDate"]}</p>
          </div>
          {isRoundTrip && (
            <div className='w-full'>
              <DatePicker placeholder='Return date' onChange={(picked) => {
                if (picked) {
                  const { $d }: any = picked;
                  dateHandler("returnDate", $d);
                } else {
                  dateHandler("returnDate", "");
                }
              }}
              disabledDate={disablePreviousDatesOfStartDate}
              className='w-full h-10 antdate' />
              <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{errorMessage["returnDate"]}</p>
            </div>
          )}
          <button type='submit' className={`self-start bg-gradient-to-r from-bg-from to-bg-to w-full h-10 ${isRoundTrip ? 'md:w-44' : 'md:w-32'} rounded-full  grid place-items-center text-white`}><IoArrowForwardSharp /></button>
        </div>
      </form>

    </div>
  );
};

export default SearchPage;