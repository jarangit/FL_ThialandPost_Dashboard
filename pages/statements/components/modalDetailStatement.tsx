import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri';
import Backdrop from '../../../components/modal/backDrop';

type Props = {
  handleClose: any;
  open: boolean;
  onSubmit: any;
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

const ModalDetailStatement = ({ handleClose, open, onSubmit }: Props) => {
  return (
    <AnimatePresence>
      {open ? (
        <Backdrop
          onClick={handleClose}
          open={open}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className=" bg-white max-w-fit w-full h-fit p-10 rounded-lg drop-shadow-lg"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className='flex flex-col gap-6 overflow-y-scroll lg:overflow-hidden max-h-[500px] lg:max-h-full keep-scrolling'>
              <div className='border-b-2 border-gray-light pb-3'>รายละเอียดข้อมูลทางบัญชี (Statement)</div>

              {/* data account */}
              <div className='p-3' >
                <div>ข้อมูลทางบัญชี</div>
                <div className='grid grid-cols-1 lg:grid-cols-3  gap-3 mt-3  ml-12 lg:ml-24 lg:w-[800px] mx-auto'>
                  <div>
                    <div>ประเภทเอกสาร</div>
                    <div className='text-gray font-thin'>CA POS</div>
                  </div>

                  <div>
                    <div>เลขที่เอกสาร</div>
                    <div className='text-gray font-thin'>62-1-109032</div>
                  </div>

                  <div>
                    <div>ธนาคาร</div>
                    <div className='text-gray font-thin'>-</div>
                  </div>

                  <div>
                    <div>วันที่เอกสาร</div>
                    <div className='text-gray font-thin'>31/05/2562</div>
                  </div>

                  <div>
                    <div>วันที่บันทึก</div>
                    <div className='text-gray font-thin'>10/06/2562</div>
                  </div>

                  <div>
                    <div>รหัสไปรษณีย์</div>
                    <div className='text-gray font-thin'>50301</div>
                  </div>

                </div>
              </div>
              <div className='border rounded-xl border-gray-light p-3 w-full' >
                <div>ข้อมูลทางบัญชี</div>
                <div className='flex justify-center '>
                  <div className='grid grid-cols-1 lg:grid-cols-2  gap-3 mt-3   lg:w-[500px] mx-auto'>
                    <div>
                      <div>ประเภทรายการ</div>
                      <div className='text-gray font-thin'>เพิ่มบัญชี</div>
                    </div>

                    <div>
                      <div>ประเภทเงิน</div>
                      <div className='text-gray font-thin'>คำสั่งประจำสิ่งสะสม</div>
                    </div>

                    <div>
                      <div>รหัสสมาชิก</div>
                      <div className='text-gray font-thin'>358228</div>
                    </div>

                    <div>
                      <div>ชื่อ-นามสกุล</div>
                      <div className='text-gray font-thin'>เบญจพร ทองมูลตน</div>
                    </div>

                    <div>
                      <div>จำนวนเงิน (บาท)</div>
                      <div className='text-gray font-thin'>1,458.00</div>
                    </div>

                    <div>
                      <div>ใบเสร็จรับเงิน/ใบกำกับภาษี</div>
                      <div className='text-gray font-thin'>663744</div>
                    </div>

                  </div>
                </div>
              </div>
              <div className='flex gap-3 justify-center'>
                <button className='bg-red h-10 px-6 text-white rounded-lg' onClick={onSubmit}>ปิด</button>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default ModalDetailStatement