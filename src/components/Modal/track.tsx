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
        <div className="bg-main text-white rounded-lg p-10 w-[90%] md:w-[50%] xl:w-[35%] relative">
          <IoIosCloseCircle className="absolute top-2 cursor-pointer right-2 text-2xl" onClick={onClose}/>
          <div className="flex flex-col gap-5">
            <h2 className="text-center font-medium text-3xl">Track Your Ticket</h2>
            <input className="h-10 p-2 w-full rounded-md text-base outline-none text-black" type="text" placeholder="PNR number..."/>
            <button className="bg-white text-main font-medium text-lg rounded-full h-10">Track</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TarckModal;