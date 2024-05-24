/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react"
import axios from 'axios'

const SearchInput = ({ setJourneyLocation, otherLocation, fieldName, placeHolderName }: { setJourneyLocation:(value:any)=>void, otherLocation:string, fieldName: string, placeHolderName: string }) => {
    const [searchText, setSearchText] = useState("")
    const [searchContainer, setSearchContainer] = useState(false)
    const [airportData, setAirportData] = useState([])
    const inputParentRef:any = useRef(null)
    const inputRef:any = useRef(null)
    const searchTimeOut:any = useRef(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputParentRef.current && !inputParentRef.current.contains(event.target as Node)) {
                setSearchContainer(false);
                inputRef.current.value = "";
                setJourneyLocation((prevData:any) => ({
                    ...prevData,
                    [fieldName]: "",
                }))
                setSearchText("")
            }
          }
          if (searchContainer) {
            document.addEventListener('mousedown', handleClickOutside);
          } else {
            document.removeEventListener('mousedown', handleClickOutside);
          }
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    }, [fieldName, searchContainer, searchText, setJourneyLocation])




    const fetchAirports = (event: { target: { value: string; } }) => {
        const searchValue = event.target.value.trim()
        if (searchValue.length) {
            if (!searchContainer) {
                setSearchContainer(true)
            }
            setSearchText(event.target.value.trim())

            if (searchTimeOut.current) {
                clearTimeout(searchTimeOut.current)
            }

            searchTimeOut.current = setTimeout(async () => {
                try {
                    // const response = await axios.post(`https://port-api.com/airport/search`,{search_string:searchValue})
                    const response = await axios.get(`https://port-api.com/airport/search/${searchValue}`)
                    const airportsData = response.data
                    if (airportsData?.features.length) {
                        const countLimited = airportsData.features.slice(0,5).map((eachObject: { properties: { name: object } }) => (eachObject.properties.name)).filter((location:string)=>location !== otherLocation && location !== "delete or reuse")
                        setAirportData(countLimited)
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }, 500);
        
        } else {
            if (airportData.length) {
                setAirportData([])
            }
        }
    }


    const airportSelectHandler = (airportName: string) => {
        const airportInput: any = inputRef.current
        if (airportInput) {
            airportInput.value = airportName
        }
        setJourneyLocation((prevData:any) => ({
            ...prevData,
            [fieldName]: airportName,
          }));
        setSearchText(airportName)
        setSearchContainer(false)
    }


    const clearInputField = () => {
        const airportInput: any = inputRef.current
        if (airportInput) {
            airportInput.value = "";
            airportInput.focus()
        }
        setJourneyLocation((prevData:any) => ({
            ...prevData,
            [fieldName]: "",
          }));
        setSearchText("")
        setAirportData([])
    }

    return (
        <div ref={inputParentRef} className='relative w-full group'>
            <input ref={inputRef} className='border border-gray-300 rounded-md w-full pl-2 overflow-hidden h-10 font-gilmerlight font-normal text-sm group-hover:border-blue-500 outline-none' onChange={fetchAirports} defaultValue={searchText} type='text' name={fieldName} placeholder={placeHolderName} />
            {searchText && <div className='absolute top-3.5 right-1 flex justify-center items-center rounded-full h-3 w-3 text-xs font-gilmerlight text-white bg-gray-300 hover:bg-gray-400 cursor-pointer' onClick={clearInputField}>x</div>}
            {searchContainer && <div className='absolute w-full p-2 max-h-44 z-10 shadow-xl rounded-lg bg-white overflow-y-scroll font-gilmerlight font-normal text-sm'>
                {airportData?.map((airport, index) => {
                    return (
                        <p onClick={() => airportSelectHandler(airport)} className='p-2 overflow-hidden text-ellipsis whitespace-nowrap h-8 rounded hover:bg-gray-100 cursor-pointer' key={index}>{airport}</p>
                    )
                })}
            </div>}
        </div>
    )

}

export default SearchInput