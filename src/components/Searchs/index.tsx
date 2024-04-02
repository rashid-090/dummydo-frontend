import React, { useState } from 'react';

const SearchPage = () => {
    const [activeTab, setActiveTab] = useState('flight');

    const handleTabChange = (tabId: any) => {
        setActiveTab(tabId);
    };

    return (
        <div className="w-full">
            <div className="flex mb-4">
                <button
                    className={`px-4 py-2 ${activeTab === 'flight' ? 'bg-main text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleTabChange('flight')}
                >
                    Flight
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'fighthotel' ? 'bg-main text-white' : 'bg-gray-200 text-gray-800'
                        } ml-2`}
                    onClick={() => handleTabChange('fighthotel')}
                >
                    Flight + Hotels
                </button>
            </div>
            {/* Flights */}
            {activeTab === 'flight' && (
                <div className="border p-4">Flight Search Input Component Here</div>
            )}
              {/* Hotels */}
            {activeTab === 'fighthotel' && (
                <div className="border p-4">Hotel Search Input Component Here</div>
            )}
      
          
        </div>
    );
};

export default SearchPage;
