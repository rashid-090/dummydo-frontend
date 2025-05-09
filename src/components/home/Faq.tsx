import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";

const FaqData=[
  {
    question:`Lorem ipsum dolor sit amet consectetur adipisicing elit.?`,
    answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolores odit quam laudantium nam quasi voluptas nostrum molestiae placeat cumque!`
  },
  {
    question:`Lorem ipsum dolor sit amet consectetur adipisicing elit.?`,
    answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolores odit quam laudantium nam quasi voluptas nostrum molestiae placeat cumque!`
  },
  {
    question:`Lorem ipsum dolor sit amet consectetur adipisicing elit.?`,
    answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolores odit quam laudantium nam quasi voluptas nostrum molestiae placeat cumque!`
  },
  {
    question:`Lorem ipsum dolor sit amet consectetur adipisicing elit.?`,
    answer:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolores odit quam laudantium nam quasi voluptas nostrum molestiae placeat cumque!`
  },
]

const FAQItem = ( {question, answer}:{question:string, answer:string}) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <div
        className={`flex gap-x-10 md:gap-x-0 py3 justify-between items-center bg-white border-b  pl-0 p-4 cursor-pointer transition duration-300 ease-in-out `}
        onClick={toggleOpen}
      >
        <div className="font-medium text-sm md:text-base xl:text-lg">{question}</div>

         {!isOpen ? <FiPlus className="text-main text-2xl"/> :
         <HiOutlineMinusSm className="text-main text-2xl"/> }

      </div>
      <div
        className={`bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className='p-4 pl-0 text-sm xl:text-base' >{answer}</p>
      </div>
    </div>
  );
};



const Faq = () => {
  return (
  <div className="w-11/12  xl:w-9/12 mx-auto py-10 xl:py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
      <div className="flex items-center justify-center md:justify-start">
        <h1 className='text-2xl lg:text-4xl font-bold capitalize text-center md:text-left text-main'>Frequently Asked Questions</h1>
      </div>
      <div className="md:col-span-2 pt-8 md:pt-0">
        {FaqData.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
      </div>
    </div>
</div>
  )
}

export default Faq