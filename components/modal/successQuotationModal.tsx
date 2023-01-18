import React from 'react'
import SuccessModal from './successModal'
import Button from '../buttons/button';

type Props = {
  handleClose: any;
  open: any
}

const SuccessQuotationModal = ({ handleClose, open }: Props) => {
  return (
    <>
      <SuccessModal handleClose={handleClose} open={open}>
        <div className='flex flex-col gap-3 items-center'>
          <div>
            สร้างใบสั่งซื้อสำเร็จ
          </div>
          <div>
            <Button onClick={handleClose}>ตกลง</Button>
          </div>
        </div>
      </SuccessModal>
    </>
  )
}

export default SuccessQuotationModal