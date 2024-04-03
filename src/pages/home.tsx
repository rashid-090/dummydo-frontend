
import { Searches,DummyDiffrence, CustomerSay, FAQ } from '../components'

const Home = () => {
  return (
    <main>
      {/* banner */}
      <div className='w-11/12 xl:w-9/12 mx-auto flex flex-col gap-y-16 pt-10 md:pt-20 xl:pt-10  xl:h-[70vh] justify-center'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-2xl lg:text-4xl font-bold text-main'>Lorem ipsum dolor sit.</h1>
          <h3 className='text-base lg:text-lg font-normal'>Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        {/* Searches */}
        <Searches/>
      </div>
      {/*  */}
     <DummyDiffrence/>
     {/*  */}
     <CustomerSay/>
     {/*  */}
     <FAQ/>
    </main>
  )
}

export default Home