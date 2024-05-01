// Tabs.js
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('flight');

  return (
    <div className="">
      <div className="flex  border-gray-200 w-full">
        <button
          onClick={() => setActiveTab('flight')}
          className={`${
            activeTab === 'flight'
              ? 'border-indigo-500 text-indigo-600 bg-main'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } uppercase flex justify-center px-4 py-2 text-sm font-medium border-b-2 focus:outline-none transition duration-300`}
        >
          Flight
        </button>
        <button
          onClick={() => setActiveTab('flight+hotel')}
          className={`${
            activeTab === 'flight+hotel'
              ? 'border-indigo-500 text-indigo-600 bg-main'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } uppercase flex justify-center px-4 py-2 text-sm font-medium border-b-2 focus:outline-none transition duration-300`}
        >
          Flight + Hotel
        </button>
      </div>
      <div className="">
        <div
          className={`transition-opacity duration-300 ${
            activeTab === 'flight' ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <p className='bg-main'>This is the flight tab</p>
        </div>
        <div
          className={`transition-opacity duration-300 ${
            activeTab === 'flight+hotel' ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <p className='bg-main'>This is the flight + hotel tab</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
