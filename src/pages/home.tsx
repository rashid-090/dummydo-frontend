
import { Searches,DummyDiffrence, CustomerSay, FAQ, Banner, Plans } from '../components'

const Home = () => {
  return (
    <main>
      {/* banner */}
      <div className='w-11/12 xl:w-9/12 mx-auto flex flex-col gap-y-0 '>
       <Banner/>
        {/* Searches */}
        <Searches/>
      </div>
      <div className="w-11/12 xl:w-9/12 mx-auto my-10 xl:mt-28 h-1 bg-gradient-to-r from-bg-from to-[#d8634000]"></div>

      {/*  */}
     <DummyDiffrence/>
     {/*  */}
     {/* <div className="w-11/12 xl:w-9/12 mx-auto h-1 bg-gradient-to-r from-bg-from to-[#d8634000]"></div> */}
     {/*  */}
     <Plans/>
     {/*  */}
     <CustomerSay/>
     {/*  */}
     {/* <FAQ/> */}
    </main>
  )
}

export default Home