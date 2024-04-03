import {avt1,avt2,avt3} from '../../assets';

const TestiData=[
    {
        testimonial:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit ipsa obcaecati aliquid nihil tempora magni ab, cupiditate sunt repellat.Quibusdam velit ipsa obcaecati aliquid nihil tempora magni ab, cupiditate sunt repellat.`,
        username:`lorem ipsum`,
        userlogo:avt1
    },
    {
        testimonial:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit ipsa obcaecati aliquid nihil tempora magni ab, cupiditate sunt repellat.Quibusdam velit ipsa obcaecati aliquid nihil tempora magni ab, cupiditate sunt repellat.`,
        username:`lorem ipsum`,
        userlogo:avt2
    },
    {
        testimonial:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit ipsa obcaecati aliquid nihil tempora magni ab, cupiditate sunt repellat.Quibusdam velit ipsa obcaecati aliquid nihil tempora magni ab, cupiditate sunt repellat.`,
        username:`lorem ipsum`,
        userlogo:avt3
    },
]

const CustomersSay = () => {
  return (
    <div className="w-11/12  xl:w-9/12 mx-auto py-10 xl:py-20">
        <h1 className='text-2xl lg:text-4xl font-bold capitalize text-center text-main'>What Our Customers Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 xl:pt-16">
            {TestiData?.map((dt,i)=>(
                <div className='p-5 xl:p-8 flex flex-col gap-y-3 xl:gap-y-5 border-2 rounded-3xl hover:shadow-xl duration-150' key={i}>
                    <p className='text-sm sm:text-base md:text-xs lg:text-base text-gray-500 font-medium'>{dt.testimonial}</p>
                    <span className='flex gap-3 items-center'>
                        <img className='h-12 w-12 md:h-10 md:w-10 lg:h-12 lg:w-12' src={dt.userlogo} alt={dt.username} />
                        <p className='text-base xl:text-xl text-main capitalize font-bold'>{dt.username}</p>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CustomersSay