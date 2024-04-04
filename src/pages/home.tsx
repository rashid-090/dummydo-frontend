
import { Searches,DummyDiffrence, CustomerSay, FAQ, Banner } from '../components'

const Home = () => {
  return (
    <main>
      {/* banner */}
      <div className='w-11/12 xl:w-9/12 mx-auto flex flex-col gap-y-10 '>
       <Banner/>
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