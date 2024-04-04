import {verifiedsvg,contactsvg,securesvg,locationsvg} from '../../assets';

const Diffdata = [
  {
    icon:verifiedsvg,
    title:`Lorem ipsum dolor.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
  {
    icon:contactsvg,
    title:`Lorem ipsum dolor.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
  {
    icon:securesvg,
    title:`Lorem ipsum dolor.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
  {
    icon:locationsvg,
    title:`Lorem ipsum dolor.`,
    content:`Lorem ipsum dolor sit amet consectetur.`
  },
]

const DummyDifference = () => {
  return (
    <>
     <div className='w-11/12 xl:w-9/12 mx-auto py-10 xl:py-20'>
        <h1 className='text-2xl lg:text-4xl font-bold capitalize text-center text-main'>why DummyFree</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 pt-10 xl:pt-16'>
            {Diffdata?.map((dt,i)=>(
              <div className='hover:shadow-xl duration-150 border-2 rounded-3xl xl:py-16 p-5 flex flex-col gap-y-3 lg:gap-y-5 items-center text-center' key={i}>
                <img className='h-20 w-20 lg:h-24 lg:w-24' src={dt.icon} alt={dt.title} />
                <h3 className='text-xs sm:text-sm md:text-base font-bold capitalize'>{dt.title}</h3>
                <p className='text-xs sm:text-sm text-gray-500 font-medium'>{dt.content}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default DummyDifference