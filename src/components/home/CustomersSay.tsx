import {avt1,avt2,avt3} from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
        <h1 className='text-4xl xl:text-7xl font-bold  text-center text-black font-futuracondensed uppercase'>client <span className='gradient-text'>testimonials</span></h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 xl:pt-16 ">
            {TestiData?.map((dt,i)=>(
                <div className='p-5 xl:p-8 flex flex-col gap-y-3 xl:gap-y-5 border-2 h-fit xl:even:bg-gradient-to-r from-bg-from to-bg-to  xl:even:text-white text-gray-500 rounded-3xl hover:shadow-2xl duration-300' key={i}>
                    <p className='text-sm sm:text-base md:text-xs lg:text-base  font-medium'>{dt.testimonial}</p>
                    <span className='flex gap-3 items-center'>
                        <img className='h-12 w-12 md:h-10 md:w-10 lg:h-12 lg:w-12' src={dt.userlogo} alt={dt.username} />
                        <p className='text-base xl:text-xl  capitalize font-medium'>{dt.username}</p>
                    </span>
                </div>
            ))}
        </div> */}
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
          
        },
      }}
      modules={[Autoplay]}
    >
        {TestiData?.map((dt,i)=>(
      <SwiperSlide className='py-8 pb-16' key={i}>
          <div className='p-5 xl:p-8 flex flex-col gap-y-3 xl:gap-y-5 border-2 h-fit xl:even:bg-gradient-to-r from-bg-from to-bg-to  xl:even:text-white text-gray-500 rounded-3xl hover:shadow-2xl  duration-300' key={i}>
                    <p className='text-sm sm:text-base md:text-xs lg:text-base  font-medium'>{dt.testimonial}</p>
                    <span className='flex gap-3 items-center'>
                        <img className='h-12 w-12 md:h-10 md:w-10 lg:h-12 lg:w-12' src={dt.userlogo} alt={dt.username} />
                        <p className='text-base xl:text-xl  capitalize font-medium'>{dt.username}</p>
                    </span>
                </div>
      </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default CustomersSay