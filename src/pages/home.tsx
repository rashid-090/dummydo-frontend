
import { Searches } from '../components'

const Home = () => {
  return (
    <main>
      {/* banner */}
      <div className='w-11/12 xl:w-10/12 mx-auto flex flex-col gap-y-16  h-[70vh] justify-center'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-4xl font-bold text-main'>Lorem ipsum dolor sit.</h1>
          <h3 className='text-lg font-normal'>Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        {/* Searches */}
        <Searches/>
      </div>
    </main>
  )
}

export default Home