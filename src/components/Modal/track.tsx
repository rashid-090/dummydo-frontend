import { useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";


const TarckModal = ({ isOpen, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [isOpen]);
  
    const handleCloseModal = (e) => {
      if (modalRef.current === e.target) {
        onClose();
      }
    };

    // const handleCloseModal = () => {
    //     const shouldClose = window.confirm('Do you want to close the modal?');
    //     if (shouldClose) {
    //       onClose();
    //     }
    //   };
    

    return (
      <div
    //   ref={modalRef}
    //   onClick={handleCloseModal}
    // onClick={(e) => e.target === modalRef.current && handleCloseModal()}

        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-[1px]  transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-bg-from to-bg-to text-white rounded-2xl p-5 py-10 md:p-10 w-[90%] md:w-[50%] xl:w-[35%] relative">
          <IoIosCloseCircle className="absolute top-2 cursor-pointer right-2 text-2xl" onClick={onClose}/>
          <div className="flex flex-col gap-5">
            <h2 className="text-center font-medium text-3xl">Track Your Ticket</h2>
            <div className="flex gap-2">
              <input className="h-10 p-2 px-4 w-full rounded-l-full text-base outline-none text-black" type="text" placeholder="Track ID..."/>
              <button className="bg-white text-main font-medium text-lg rounded-r-full h-10 w-24 md:w-40">Track</button>
            </div>
            <button className="bg-white text-main h-10 rounded-full font-medium capitalize">download ticket</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TarckModal;