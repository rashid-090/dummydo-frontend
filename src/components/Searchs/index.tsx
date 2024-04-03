import { useState } from 'react';
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import Select from 'react-select';
import Checkbox from '@mui/material/Checkbox';
import { IoArrowForwardSharp } from "react-icons/io5";



const options = [
    { value: 'Calicut', label: 'Calicut' },
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Kochi', label: 'Kochi' },
    { value: 'Delhi', label: 'Delhi' },
];



const SearchPage = () => {
  
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeTab, setActiveTab] = useState('flight');

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
        
          borderColor: state.isFocused ? '#f0582b' : '#f0582b',
          // This line disable the blue border
          boxShadow: state.isFocused ? 0 : 0,
          "&:hover": {
            borderColor: state.isFocused ? '#f0582b' : '#f0582b',
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
                <form className='w-full'>
                    <div className='flex gap-3 py-3'>
                       <span className='flex items-center'>
                            <Checkbox defaultChecked sx={{color:'#f0582b','&.Mui-checked': {color: '#f0582b',}}} required/>
                            <label className='text-sm capitalize font-medium'>Ony way</label>
                       </span>
                       <span className='flex items-center'>
                            <Checkbox  sx={{color:'#f0582b','&.Mui-checked': {color: '#f0582b',}}} required/>
                            <label className='text-sm capitalize font-medium'>round trip</label>
                       </span>

                    </div>
                   <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Select
                            placeholder='From'
                            className='w-full'
                            styles={style}
                            defaultValue={selectedOption}
                            onChange={handleChange}
                            options={options}
                            />
                    <LuArrowRightLeft className='text-main rotate-90 md:rotate-0 text-xl w-20'/>
                    <Select
                            placeholder='To'
                            className='w-full'
                            styles={style}
                            defaultValue={selectedOption}
                            onChange={handleChange}
                            options={options}
                            />
                    <input className='outline-none h-9 w-full px-5 rounded-md border-main border' type="date" name="" id="" />
                    <input className='outline-none h-9 w-full px-5 rounded-md border-main border' type="date" name="" id="" />
                    <button className='text-2xl text-white bg-main border border-main w-full lg:w-80 h-10 md:h-9 grid place-items-center rounded-full' type='submit'><IoArrowForwardSharp/></button>
                   </div>
                </form>
            )}
              {/* Hotels */}
            {activeTab === 'fighthotel' && (
                 <form className='w-full'>
                 <div className='flex gap-3 py-3'>
                    <span className='flex items-center'>
                         <Checkbox defaultChecked sx={{color:'#f0582b','&.Mui-checked': {color: '#f0582b',}}} required/>
                         <label className='text-sm capitalize font-medium'>Ony way</label>
                    </span>
                    <span className='flex items-center'>
                         <Checkbox  sx={{color:'#f0582b','&.Mui-checked': {color: '#f0582b',}}} required/>
                         <label className='text-sm capitalize font-medium'>round trip</label>
                    </span>

                 </div>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                 <Select
                         placeholder='From'
                         className='w-full'
                         styles={style}
                         defaultValue={selectedOption}
                         onChange={handleChange}
                         options={options}
                         />
                 <LuArrowRightLeft className='text-main rotate-90 md:rotate-0 text-xl w-20'/>
                 <Select
                         placeholder='To'
                         className='w-full'
                         styles={style}
                         defaultValue={selectedOption}
                         onChange={handleChange}
                         options={options}
                         />
                 <input className='outline-none h-9 w-full px-5 rounded-md border-main border' type="date" name="" id="" />
                 <button className='text-2xl text-white bg-main border border-main w-full lg:w-80 h-10 md:h-9 grid place-items-center rounded-full' type='submit'><IoArrowForwardSharp/></button>
                </div>
             </form>
            )}
      
          
        </div>
    );
};

export default SearchPage;
