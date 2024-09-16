/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { getCountryWisePriceList, updatePrice, addPrice, deletePrice } from '../../../api/apiConnections/adminConnections';
import { toast } from 'react-toastify';
import SingleCountryWisePrice from './SingleCountryWisePrice';
import { countryWisePriceInterface } from '../../../interfaces/priceInterface';


const rowsPerPage = 6;

const initialPrice = {
  _id: "",
  countryName: "",
  currencySymbol: "",
  oneWayRate: "",
  oneWayUrgentRate:"",
  oneWayHotelRate:"",
  oneWayUrgentHotelRate:"",
  roundTripRate: "",
  roundTripUrgentRate: "",
  roundTripHotelRate: "",
  roundTripUrgentHotelRate:""
}

const Prices = () => {
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [priceList, setPriceList] = useState<any[]>([]);
  const [singlePriceForModal, setSinglePriceForModal] = useState<countryWisePriceInterface | any>(initialPrice);
  const [priceData, setPriceData] = useState<countryWisePriceInterface | any>(initialPrice);
  const [deletionData, setDeletionData] = useState({ _id: "", countryName: "" });

  const getPriceList = async () => {
    const priceResponse = await getCountryWisePriceList()
    if (priceResponse?.data) {
      setPriceList(priceResponse.data)
    } else {
      toast.error(priceResponse.message)
    }
  }

  useEffect(() => {
    getPriceList()
  }, [])

  const toggleDeleteModal = () => {
    setIsOpenDelete(!isOpenDelete);
  };

  const deleteModalHandler = (data: { _id: string, countryName: string }) => {
    setIsOpenDelete(true);
    setDeletionData(data)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  const priceModalHandler = (singleCountryPrice: any = {}) => {
    setIsOpen(true);
    setPriceData({})
    const inputFields = document.getElementsByClassName('priceInput') as any;
    for (const each of inputFields) {
      each.value = ""
    }
    setSinglePriceForModal(singleCountryPrice)
  }

  const deleteAPrice = async () => {
    const deleteResponse = await deletePrice(deletionData._id)
    if (deleteResponse?.status) {
      setIsOpenDelete(false);
      setPriceList(previous => previous.filter(single => single._id !== deletionData._id))
      toast.success(deleteResponse.message)
      setDeletionData({ _id: "", countryName: "" })
    }
  }


  const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };


  const countryValidation = (object:any)=>{
    const value = object.target.value
    const updated = (/[^a-zA-Z\s]+$/).test(value) || (/\s{2,}/).test(value)
    if(updated){
      object.target.value = value.slice(0,-1)
    }
  }

  const priceValidation = (object: any) => {
    const value = object.target.value
    if (value.startsWith('0')) {
      object.target.value = value.slice(1)
    }
    if (value.length > object.target.maxLength) {
      object.target.value = value.slice(0, object.target.maxLength)
    }
    const decimalIndex = value.indexOf('.');

    if (decimalIndex !== -1 && value.substring(decimalIndex + 1).length > 2) {
      object.target.value = value.substring(0, decimalIndex + 3);
    }
  }

  const priceDataHandler = (event: { target: { name: string; value: string }; }) => {
    const { name, value } = event.target
    setPriceData((previous: any) => ({ ...previous, [name]: value }))
  }

  const submitPriceHandler = async () => {

    const objectExists = (data: any) => {
      for (const i in data) return true
      return false
    }

    if (singlePriceForModal._id) {
      const updatedForm: any = {}
      const checkValuesExists = (data: any) => {
        Object.entries(data).map((single: any) => {
          if (single[1].length) {
            updatedForm[`${single[0]}`] = single[1]
          }
        })
        return objectExists(updatedForm)
      }
      const response = checkValuesExists(priceData)
      if (response) {
        updatedForm._id = singlePriceForModal._id
        const updateResponse = await updatePrice(updatedForm)
        if (updateResponse?.status) {
          toast.success(updateResponse.message)
          setPriceData({})
          const inputFields = document.getElementsByClassName('priceInput') as any;
          for (const each of inputFields) {
            each.value = ""
          }
          setSinglePriceForModal(updateResponse.data)
          setPriceList((previous: any) => {
            return previous.map((single: any) => {
              return single._id === singlePriceForModal._id ? updateResponse.data : single;
            })
          })
        } else {
          toast.error(updateResponse.message)
        }
      }

    } else {
      const objectValidation = (saveData: any) => {
        const objectValid = objectExists(saveData)
        if (objectValid) {
          const checkAllKeysExists = Object.keys(saveData).length === 10
          const valueLength = Object.values(saveData).every(each => {
            return each !== undefined && typeof each === 'string' && each.length > 0;
          })
          if(checkAllKeysExists && valueLength){
            return true
          }else{
            return false
          }
        }
        return objectValid
      }
      const validation = objectValidation(priceData)
      if (validation) {

        const saveResponse = await addPrice(priceData)
        if (saveResponse?.status) {
          toast.success(saveResponse.message)
          setPriceList((previous: any) => [...previous, saveResponse.data].sort((a, b) => a.countryName.localeCompare(b.countryName)))
          setIsOpen(false);
          setPriceData(initialPrice)
        } else {
          toast.error(saveResponse.message)
        }

      }
    }
  }


  return (
    <main>
      {/* Hader */}
      <Navbar />
      {/* Hader */}
      <div className='py-6 w-10/12 mx-auto'>
        <div className='text-center mb-4'>
          <button onClick={priceModalHandler} className="cursor-pointer bg-main px-5 py-1 rounded-sm text-white hover:bg-green-600">Add</button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead className='bg-gray-200'>
              <TableRow>
                <TableCell><div className='text-center'>Sl. No.</div></TableCell>
                <TableCell><div className='text-left'>Country</div></TableCell>
                <TableCell><div className='text-center'>Currency</div></TableCell>
                <TableCell><div className='text-center'>One Way</div></TableCell>
                <TableCell><div className='text-center'>One Way Fast</div></TableCell>
                <TableCell><div className='text-center'>One Way + Hotel</div></TableCell>
                <TableCell><div className='text-center'>One Way Fast + Hotel</div></TableCell>
                <TableCell><div className='text-center'>Round Trip</div></TableCell>
                <TableCell><div className='text-center'>Round trip Fast</div></TableCell>
                <TableCell><div className='text-center'>Round trip + Hotel</div></TableCell>
                <TableCell><div className='text-center'>Round trip Fast + Hotel</div></TableCell>
                <TableCell><div className='text-center'>Actions</div></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {priceList?.length ? priceList.map((price: countryWisePriceInterface, index) => (
                <SingleCountryWisePrice key={price._id} index={index} price={price} priceModalHandler={priceModalHandler} deleteModalHandler={deleteModalHandler} />
              ))
                : null}
            </TableBody>
          </Table>
          <Pagination
            className='float-right py-3'
            count={Math.ceil(page / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </TableContainer>
      </div>
      {/* Adding Modal */}
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={toggleModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Your modal content goes here */}
              <div className="bg-white text-center p-5">
                <h3 className="font-medium text-xl mb-2">{singlePriceForModal?.countryName ? "Edit" : "Add"}</h3>
                {/* <form onSubmit={submitPriceHandler}> */}
                <div className="flex flex-col gap-3">
                  <TableContainer component={Paper}>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Country Name</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.countryName || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["countryName"]} name='countryName' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput capitalize' type="text" maxLength={40} onInput={(event) => countryValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Currency Symbol</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.currencySymbol || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["currencySymbol"]} name='currencySymbol' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput uppercase' type="text" maxLength={3} onInput={(event) => countryValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>One-Way Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.oneWayRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["oneWayRate"]} name='oneWayRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>One Way Fast Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.oneWayUrgentRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["oneWayUrgentRate"]} name='oneWayUrgentRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>One Way + Hotel Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.oneWayHotelRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["oneWayHotelRate"]} name='oneWayHotelRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>One Way Fast + Hotel Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.oneWayUrgentHotelRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["oneWayUrgentHotelRate"]} name='oneWayUrgentHotelRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Round-Trip Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.roundTripRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["roundTripRate"]} name='roundTripRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Round trip Fast Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.roundTripUrgentRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["roundTripUrgentRate"]} name='roundTripUrgentRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Round trip + Hotel Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.roundTripHotelRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["roundTripHotelRate"]} name='roundTripHotelRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Round trip Fast + Hotel Fare</TableCell>
                          <TableCell><h4 className='text-green-600'>{singlePriceForModal?.roundTripUrgentHotelRate || ""}</h4></TableCell>
                          <TableCell><input onChange={priceDataHandler} defaultValue={priceData["roundTripUrgentHotelRate"]} name='roundTripUrgentHotelRate' className='outline-none border border-gray-400 rounded h-8 mx-auto pl-2 priceInput' type="number" maxLength={8} onInput={(event) => priceValidation(event)} /></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <button type='submit' onClick={submitPriceHandler} className="bg-main hover:bg-green-600 text-white h-10 rounded-md">Submit</button>
                </div>
                {/* </form> */}
              </div>


            </div>
          </div>
        </div>
      )}




      {/*  */}
      {/* Delete Modal */}
      {isOpenDelete && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={toggleDeleteModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Your modal content goes here */}
              <div className="bg-white text-center p-5">
                <h3 className="font-medium text-xl">Are you sure you want to delete the price for</h3>
                <h3 className="font-medium text-xl">{deletionData.countryName} ?</h3>
                <div className="flex justify-center gap-2 p-2">
                  <button onClick={deleteAPrice} className="bg-main hover:bg-green-600 text-white h-10 rounded-md px-4">Yes</button>
                  <button onClick={toggleDeleteModal} className="bg-slate-400 hover:bg-slate-600 text-white h-10 rounded-md px-4">No</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
      {/*  */}
    </main>
  )
}

export default Prices