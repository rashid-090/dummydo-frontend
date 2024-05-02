import { useState, useRef, useEffect } from 'react';
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import Select from 'react-select';
import Checkbox from '@mui/material/Checkbox';
import { IoArrowForwardSharp } from "react-icons/io5";
import Switch from "react-switch";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { DateRange, Calendar  } from 'react-date-range';
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const options = [
    { value: 'Calicut', label: 'Calicut' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Kochi', label: 'Kochi' },
    { value: 'Delhi', label: 'Delhi' },
];



const SearchPage = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeButton, setActiveButton] = useState("flight");
    const [checked, setChecked] = useState(false);
    const [passengerCount, setPassengerCount] = useState(1);
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
        if (passengerCount > 1) {
          setPassengerCount(prevCount => prevCount - 1);
        }
      };

    const handleCheck = nextChecked => {
      setChecked(nextChecked);
    };

  
    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
      };

      const style = {
        control: (base:any, state:any) => ({
          ...base,
        //   border: state.isFocused ? 0 : 0,
        
          borderColor: state.isFocused ? '#0002a6' : '#0002a6',
          // This line disable the blue border
          boxShadow: state.isFocused ? 0 : 0,
          "&:hover": {
            borderColor: state.isFocused ? '#0002a6' : '#0002a6',
          }
        })
      };
    return (
        <div className="w-full bg-white selection:bg-transparent rounded-2xl xl:rounded-[10rem] shadow-2xl shadow-[#3e7ff9a6] p-5 lg:p-10 lg:px-20 up">
          <div className="flex">
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 flex items-center  gap-2 rounded-full ${
                  activeButton === "flight" ? "bg-gradient-to-r from-[#004bff] to-[#002b9c] text-white" : "bg-gray-100 text-gray-800"
                }`}
                onClick={() => setActiveButton("flight")}
              >
                <MdFlight/><p>Flight</p>
              </button>
              <button
                className={`px-4 py-2 flex items-center  gap-2 rounded-full ${
                  activeButton === "flight+hotel" ? "bg-gradient-to-r from-[#004bff] to-[#002b9c] text-white" : "bg-gray-100 text-gray-800"
                } `}
                onClick={() => setActiveButton("flight+hotel")}
              >
               <MdFlight/><FaHotel/><p>Flight + Hotels</p>
              </button>
            </div>
          </div>
           
          <>
                   <div className='flex flex-col lg:flex-row gap-y-2 gap-x-10'>
                     {/* toolge */}
                
                     <div className='flex gap-2 items-center h-14 capitalize text-sm font-medium'>
                                <p>one way</p>
                                <Switch
                                onChange={handleCheck}
                                checked={checked}
                                onColor="#cfcfcf"
                                onHandleColor="#0668e1"
                                offColor="#cfcfcf"
                                offHandleColor="#0668e1"
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
                                <AiFillMinusCircle className={`text-main text-xl  ${passengerCount <= 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={decreasePassengerCount}/>
                                    <span className="text-gray-600 font-medium  text-center">{passengerCount}</span>
                                <AiFillPlusCircle className={`text-main text-xl  ${passengerCount >= 10 ? 'cursor-pointer opacity-50' : 'cursor-pointer'}`} onClick={increasePassengerCount}/>
                                 
                            </div>
                    
                     {/* Passenger */}
                     {/* Processing speed */}
                        <div className='flex items-center gap-3 text-black font-medium'>
                          <p>Processing Speed:</p>
                          <div className='flex items-center gap-3 '>
                            <div className='flex items-center'>
                              <label>Fast:</label>
                              <Checkbox  sx={{color:'#0668e1','&.Mui-checked': {color: '#0668e1',}}} required/>
                            </div>
                            {/* <div className='flex items-center'>
                              <label>Slow:</label>
                              <Checkbox  sx={{color:'#0668e1','&.Mui-checked': {color: '#0668e1',}}} required/>
                            </div>
                            */}
                          </div>
                        </div>
                     {/* Processing speed */}
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
                                className="customdate z-[99999]"
                                minDate={new Date()}
                            />
                            )}
                    </div>
                    <button onClick={()=>navigate(`/booking`)} className='bg-gradient-to-r from-[#004bff] to-[#002b9c] w-full md:w-32 rounded-full h-9 grid place-items-center text-white'><IoArrowForwardSharp/></button>
                   </div>
                </form>
                </>
      
          
        </div>
    );
};

export default SearchPage;
