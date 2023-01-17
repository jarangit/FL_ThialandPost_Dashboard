import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import Backdrop from './backDrop'
import { GrClose } from 'react-icons/gr';
import ButtonOutline from '../buttons/buttonOutline';
import Button from '../buttons/button';

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

const FilterProductModal = ({ handleClose, open, onSubmit }: Props) => {
  const styled = {
    input: `
    border-[1px] border-gray-light p-2 rounded-md drop-shadow-sm w-full mt-1 placeholder:text-gray text-sm font-thin
    `
  }
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
            <div className='flex flex-col items-center gap-6'>
              <div className='w-full'>
                <div className='w-full text-right flex justify-end cursor-pointer' onClick={handleClose}>
                  <GrClose size={20} />
                </div>
                <form className='w-full  mt-3'>
                  <div className='flex flex-col gap-3'>
                    <div className=' gap-2 items-center'>
                      <div className='text-md  min-w-[100px]'>หมวดหมู่สินค้า</div>
                      <input className={`${styled.input}`} />
                    </div>
                    <div className=' gap-3 items-center'>
                      <div className='text-md  min-w-[100px]'>ชื่อสินค้า</div>
                      <input className={`${styled.input}`} />
                    </div>
                    <div className=' gap-3 items-center'>
                      <div className='text-md  min-w-[100px]'>วันแรกจำหน่าย</div>
                      <div className='flex gap-3 w-full'>
                        <input className={`${styled.input}`} type={"date"} />
                        <input className={`${styled.input}`} type={"date"} />
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-3 mt-5 justify-center text-md'>
                    <Button>ค้นหา</Button>
                    <ButtonOutline onClick={handleClose}>ล้าง</ButtonOutline>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </Backdrop>
      ) : null}
    </AnimatePresence>
  )
}

export default FilterProductModal