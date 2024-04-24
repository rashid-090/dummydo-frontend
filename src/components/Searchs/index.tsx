import { useState, useRef, useEffect } from 'react';
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import Select from 'react-select';
import Checkbox from '@mui/material/Checkbox';
import { IoArrowForwardSharp } from "react-icons/io5";
import Switch from "react-switch";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from 'react-router-dom';
const options = [
    { value: 'Calicut', label: 'Calicut' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Kochi', label: 'Kochi' },
    { value: 'Delhi', label: 'Delhi' },
];



const SearchPage = () => {
  
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeTab, setActiveTab] = useState('flight');
    const [checked, setChecked] = useState(false);
    const [passengerCount, setPassengerCount] = useState(0);
    const [openDate, setOpenDate] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null); 
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);


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

    const increasePassengerCount = () => {
        if (passengerCount < 10) {
          setPassengerCount(prevCount => prevCount + 1);
        }
      };
    
      const decreasePassengerCount = () => {
        if (passengerCount > 0) {
          setPassengerCount(prevCount => prevCount - 1);
        }
      };

    const handleCheck = nextChecked => {
      setChecked(nextChecked);
    };

    const handleTabChange = (tabId: any) => {
        setActiveTab(tabId);
    };
    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
      };

      const style = {
        control: (base:any, state:any) => ({
          ...base,
        //   border: state.isFocused ? 0 : 0,
        
          borderColor: state.isFocused ? '#8e2157' : '#8e2157',
          // This line disable the blue border
          boxShadow: state.isFocused ? 0 : 0,
          "&:hover": {
            borderColor: state.isFocused ? '#8e2157' : '#8e2157',
          }
        })
      };
    return (
        <div className="w-full bg-white rounded-2xl xl:rounded-[3rem] shades p-5 lg:p-10">
            <div className="flex mb-4 text-base font-medium">
                
                <button
                    className={`px-4 py-2 flex items-center gap-2 rounded-full ${activeTab === 'flight' ? 'bg-main text-white' : 'bg-gray-100 text-gray-800'
                        }`}
                    onClick={() => handleTabChange('flight')}
                >
                    <MdFlight/><p>Flight</p>
                </button>
                <button
                    className={`px-4 py-2 flex items-center gap-2 rounded-full ${activeTab === 'fighthotel' ? 'bg-main text-white' : 'bg-gray-100 text-gray-800'
                        } ml-2`}
                    onClick={() => handleTabChange('fighthotel')}
                >
                    <MdFlight/><FaHotel/><p>Flight + Hotels</p>
                </button>
            </div>
            {/* Flights */}
            {activeTab === 'flight' && (
                <>
                   <div className='flex flex-col md:flex-row gap-y-2 gap-x-10'>
                     {/* toolge */}
                
                     <div className='flex gap-2 items-center h-14 capitalize text-sm font-medium'>
                                <p>one way</p>
                                <Switch
                                onChange={handleCheck}
                                checked={checked}
                                onColor="#cfcfcf"
                                onHandleColor="#671042"
                                offColor="#cfcfcf"
                                offHandleColor="#671042"
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
                     {/* toolge */}
                     {/* Passenger */}

                            <div className="flex items-center gap-2 selection:bg-none pb-5 md:pb-0">
                                <span className="text-black font-medium px-1 text-center">Adults:</span>
                                <AiFillMinusCircle className={`text-main text-xl  ${passengerCount <= 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={decreasePassengerCount}/>
                                    <span className="text-gray-600 font-medium  text-center">{passengerCount}</span>
                                <AiFillPlusCircle className={`text-main text-xl cursor-pointer ${passengerCount >= 10 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={increasePassengerCount}/>
                                 
                            </div>
                    
                     {/* Passenger */}
                   </div>
                    <form className='w-full'>
                    
                   <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Select
                            placeholder='From'
                            className='w-full font-medium'
                            styles={style}
                            defaultValue={selectedOption}
                            onChange={handleChange}
                            options={options}
                            />
                    <LuArrowRightLeft className='text-main rotate-90 md:rotate-0 text-xl w-20'/>
                    <Select
                            placeholder='To'
                            className='w-full font-medium'
                            styles={style}
                            defaultValue={selectedOption}
                            onChange={handleChange}
                            options={options}
                            /> 
                    <div className='relative w-full' ref={modalRef}>
                        <span  className='border border-main font-medium py-2 text-gray-700 text-sm  rounded-md w-full grid place-items-center' onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "MMM d yyyy")} - ${format(
                                date[0].endDate,
                                "MMM d yyyy"
                                )}`}
                        </span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="customdate"
                                minDate={new Date()}
                            />
                            )}
                    </div>
                    <Link to={'/booking'} className='bg-main w-full md:w-32 rounded-full h-9 grid place-items-center text-white'><IoArrowForwardSharp/></Link>
                   </div>
                </form>
                </>
            )}
              {/* Hotels */}
            {activeTab === 'fighthotel' && (
                  <>
                  <div className='flex flex-col md:flex-row gap-y-2 gap-x-10'>
                    {/* toolge */}
               
                    <div className='flex gap-2 items-center h-14 capitalize text-sm font-medium'>
                               <p>one way</p>
                               <Switch
                               onChange={handleCheck}
                               checked={checked}
                               onColor="#cfcfcf"
                               onHandleColor="#671042"
                               offColor="#cfcfcf"
                               offHandleColor="#671042"
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
                    {/* toolge */}
                    {/* Passenger */}

                           <div className="flex items-center gap-2 selection:bg-none pb-5 md:pb-0">
                               <span className="text-black font-medium px-1 text-center">Adults:</span>
                               <AiFillMinusCircle className={`text-main text-xl  ${passengerCount <= 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={decreasePassengerCount}/>
                                   <span className="text-gray-600 font-medium  text-center">{passengerCount}</span>
                               <AiFillPlusCircle className={`text-main text-xl cursor-pointer ${passengerCount >= 10 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={increasePassengerCount}/>
                                
                           </div>
                   
                    {/* Passenger */}
                  </div>
                   <form className='w-full'>
                   
                  <div className='flex flex-col md:flex-row items-center gap-4'>
                   <Select
                           placeholder='From'
                           className='w-full font-medium'
                           styles={style}
                           defaultValue={selectedOption}
                           onChange={handleChange}
                           options={options}
                           />
                   <LuArrowRightLeft className='text-main rotate-90 md:rotate-0 text-xl w-20'/>
                   <Select
                           placeholder='To'
                           className='w-full font-medium'
                           styles={style}
                           defaultValue={selectedOption}
                           onChange={handleChange}
                           options={options}
                           /> 
                   <div className='relative w-full' ref={modalRef}>
                       <span  className='border border-main font-medium py-2 text-gray-700 text-sm  rounded-md w-full grid place-items-center' onClick={() => setOpenDate(!openDate)}>
                               {`${format(date[0].startDate, "MMM d yyyy")} - ${format(
                               date[0].endDate,
                               "MMM d yyyy"
                               )}`}
                       </span>
                       {openDate && (
                           <DateRange
                               editableDateInputs={true}
                               onChange={(item) => setDate([item.selection])}
                               moveRangeOnFirstSelection={false}
                               ranges={date}
                               className="customdate"
                               minDate={new Date()}
                           />
                           )}
                   </div>
                   <Link to={'/booking'} className='bg-main w-full md:w-32 rounded-full h-9 grid place-items-center text-white'><IoArrowForwardSharp/></Link>
                  </div>
               </form>
               </>
            )}
      
          
        </div>
    );
};

export default SearchPage;
