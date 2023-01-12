import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import Backdrop from '../../../components/modal/backDrop';


type Props = {
  handleClose: any;
  open: boolean;
  onSubmit?: any;
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

const DetailModal = ({ handleClose, open, onSubmit }: Props) => {
  return (
    <AnimatePresence>
      {open ? (
        <Backdrop
          onClick={handleClose}
          open={open}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=" bg-white max-w-[600px] w-full h-fit p-10 rounded-lg drop-shadow-lg "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className='border-b border-gray-light pb-3'>รายละเอียดคำสั่งซื้อประจำ</div>
            <div className='flex flex-col  gap-6 mt-6 ml-0 lg:ml-16'>
              <div>
                <div>ประเภทสินค้า</div>
                <div className='text-gray font-thin ml-3'>01 - แสตมป์ที่ระลึก</div>
              </div>
              <div>
                <div>คำสั่งพิเศษ</div>
                <div className='text-gray font-thin ml-3'>VIP</div>
              </div>
              <div>
                <div>หมายเหตุ</div>
                <div className='text-gray font-thin ml-3'>-</div>
              </div>
              <div>
                <div>สถานะ</div>
                <div className='text-green ml-3 font-thin'>ใช้งาน</div>
              </div>
              <button className='bg-red h-10 px-6 text-white rounded-lg w-fit mx-auto' onClick={() => { handleClose(false) }}>ปิด</button>

            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default DetailModal