import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import Backdrop from './backDrop'
import { RiErrorWarningFill } from 'react-icons/ri';

type Props = {
  handleClose: any;
  open: boolean;
  onSubmit?: any;
  titleName:string;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const FailModal = ({ handleClose, open, onSubmit, titleName}: Props) => {
  console.log('%cMyProject%cline:34%ctitleName', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(56, 13, 49);padding:3px;border-radius:2px', titleName)
  return (
    <AnimatePresence>
      {open ? (
        <Backdrop
          onClick={handleClose}
          open={open}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=" bg-white max-w-[600px] w-full h-fit p-10 rounded-lg drop-shadow-lg"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className='flex flex-col items-center gap-6'>
              <div>
              <RiErrorWarningFill size={100} color="#ECCA20" />
              </div>
              <div>{`บันทึกไม่สำเร็จ เนื่องจาก "${titleName}" ซ้ำ`}</div>
              <button  className='bg-red h-10 px-6 text-white rounded-lg' onClick={() => { handleClose(false); onSubmit();}}>ตกลง</button>
            </div>
          </motion.div>
        </Backdrop>
      ):null}
    </AnimatePresence>
  )
}

export default FailModal