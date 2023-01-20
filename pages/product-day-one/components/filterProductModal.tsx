import React, { useEffect, useRef } from 'react'
import Input from '../../../components/inputs/input';
import Button from '../../../components/buttons/button';
import ButtonOutline from '../../../components/buttons/buttonOutline';
import { GrClose } from 'react-icons/gr'
type Props = {
  onClose: any;
  onShow: any;
}

const FilterProductModal = ({ onClose, onShow }: Props) => {
  // const ref = useRef(null);
  // const handleClickOutside = (event: any) => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     onClose()
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, []);
  const styled = {
    input: `
    border-[1px] border-gray-light p-2 rounded-md drop-shadow-sm w-full mt-1 placeholder:text-gray
    `
  }
  return (
    <>
      {onShow && (
        <div className="absolute z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray bg-opacity-50 transition-opacity"></div>
          <div className=" inset-0 z-10 ">
            <div className="absolute min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 top-0 right-0">
              <div className="relative transform overflow-hidden rounded-md bg-white text-left shadow-xl transition-all text-sm">
                <div className='w-[600px] p-6'>
                  <div className='w-full text-right flex justify-end cursor-pointer' onClick={onClose}>
                    <GrClose size={20} />
                  </div>
                  <form className='w-[450px] mx-auto mt-3'>
                    <div className='flex flex-col gap-1'>
                      <div className='flex gap-2 items-center'>
                        <div className='text-sm text-right min-w-[100px]'>รหัสสินค้า</div>
                        <input className={`${styled.input}`} />
                      </div>
                      <div className='flex gap-3 items-center'>
                        <div className='text-sm text-right min-w-[100px]'>ชื่อสินค้า</div>
                        <input className={`${styled.input}`} />
                      </div>
                      {/* <div className='flex gap-3 items-center'>
                        <div className='text-sm text-right min-w-[100px]'>วันแรกจำหน่าย</div>
                        <div className='flex gap-3 w-full'>
                          <input className={`${styled.input}`} type={"date"} />
                          <input className={`${styled.input}`} type={"date"} />
                        </div>
                      </div> */}
                    </div>

                    <div className='flex gap-3 mt-3 justify-center'>
                      <Button>ค้นหา</Button>
                      <ButtonOutline onClick={onClose}>ล้าง</ButtonOutline>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FilterProductModal