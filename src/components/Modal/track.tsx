/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { getOrderStatus } from "../../api/apiConnections/orderConnections";

const TarckModal = ({ isOpen, onClose }:{isOpen:boolean, onClose:()=>void}) => {
  // const modalRef = useRef();
  const [referenceId, setReferenceId] = useState("")
  const [orderStatus, setOrderStatus] = useState("")
  const [downloadUrl, setDownloadUrl] = useState("")
  const [btnDisable, setBtnDisable] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose()
    setReferenceId("")
    setOrderStatus("")
    setDownloadUrl("")
    const referenceField = document.getElementById("referenceField") as HTMLInputElement
    referenceField.value = ""
  }

  const getStatus = async () => {
    if (referenceId.trim().length) {
      const ticketOrderStatus = await getOrderStatus(referenceId)
      if (ticketOrderStatus?.status) {
        setDownloadUrl(ticketOrderStatus.ticketUrl)
        setOrderStatus(ticketOrderStatus.message)
      } else {
        setOrderStatus(ticketOrderStatus.message)
      }
    }
  }


  const downloadTicket = async () => {
    setBtnDisable(true)
    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    const filename:any = downloadUrl.split('/').pop();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);

    link.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);

    setTimeout(() => {
      setBtnDisable(false)
    }, 3000);
  }

  // const handleCloseModal = (e) => {
  //   if (modalRef.current === e.target) {
  //     onClose();
  //   }
  // };

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
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-[1px]  transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="bg-gradient-to-r from-bg-from to-bg-to text-white rounded-2xl p-5 py-10 md:p-10 w-[90%] md:w-[50%] xl:w-[35%] relative">
        <IoIosCloseCircle className="absolute top-2 cursor-pointer right-2 text-2xl" onClick={closeModal} />
        <div className="flex flex-col gap-5">
          <h2 className="text-center font-medium text-3xl">Track Your Ticket</h2>
          <div className="flex flex-col xl:flex-row gap-3 xl:gap-2">
            <input onChange={(e) => setReferenceId(e.target.value)} defaultValue={referenceId} id="referenceField" className="h-10 p-2 px-4 w-full rounded-full md:rounded-l-full text-base outline-none text-black lowercase" type="text" placeholder="Reference id..." />
            <button onClick={getStatus} className="bg-white text-main font-medium text-lg rounded-full md:rounded-r-full md:h-10 h-10 w-full xl:w-40 hover:shadow-2xl duration-200">Track</button>
          </div>
          <p className="text-center text-white">{orderStatus}</p>
          {downloadUrl.length ? <button disabled={btnDisable} onClick={downloadTicket} className={`${btnDisable ? "bg-stone-500" :"bg-white"} text-main h-10 rounded-full font-medium capitalize`}>Download Ticket</button> : null}
        </div>
      </div>
    </div>
  );
};

export default TarckModal;