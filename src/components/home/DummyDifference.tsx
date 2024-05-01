import {verifiedsvg,contactsvg,securesvg,locationsvg} from '../../assets';

const Diffdata = [
  {
    icon:verifiedsvg,
    title:`verified pnr booking.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
  {
    icon:contactsvg,
    title:`talk with an expert.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
  {
    icon:securesvg,
    title:`secure payments.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
  {
    icon:locationsvg,
    title:`anywhere, anytime.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
]

const DummyDifference = () => {
  return (
    <>
     <div className='pl-44  py-10 xl:py-20 relative'>
        <div className='grid grid-cols-3'>
          <h1 className='text-2xl lg:text-4xl xl:text-7xl font-bold  text-left text-black font-futuracondensed uppercase'>choose <span className='gradient-text'>DummyFree.</span></h1>
          <div className='col-span-2'>

          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-10'>
          <div className='md:col-span-2 py-10 grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5 pt-10 xl:pt-16'>
              {Diffdata?.map((dt,i)=>(
                <div className='hover:shadow-2xl hover:shadow-main duration-300 border-2 rounded-3xl py-10  p-5 flex flex-col gap-y-2 items-start text-left' key={i}>
                  <img className='h-8 w-8' src={dt.icon} alt={dt.title} />
                  <h3 className='text-xs sm:text-sm md:text-base xl:text-3xl font-futuracondensed uppercase '>{dt.title}</h3>
                  <p className='text-xs sm:text-sm text-gray-500 font-medium'>{dt.content}</p>
                </div>
              ))}
          </div>
          <div className='bg-gradient-to-r from-[#004bff] to-[#002b9c] rounded-l-[15rem]'>

          </div>
        </div>
      </div>
    </>
  )
}

export default DummyDifference