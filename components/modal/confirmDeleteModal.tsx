import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri';
import Backdrop from './backDrop'

type Props = {
  handleClose: any;
  open: boolean;
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

const ConfirmDeleteModal = ({ handleClose, open }: Props) => {
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
              <div>ยืนยันการลบข้อมูล</div>
              <div className='flex gap-3'>
                <button className='bg-red h-10 px-6 text-white rounded-lg' onClick={() => handleClose(false)}>ตกลง</button>
                <button className='border border-red h-10 px-6 text-red rounded-lg' onClick={() => handleClose(false)}>ยกเลิก</button>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default ConfirmDeleteModal