import React from 'react'
import SuccessModal from './successModal'
import Button from '../buttons/button';
import ButtonOutline from '../buttons/buttonOutline';

type Props = {
  handleClose: any;
  open: boolean;
  onSubmit: any;
}

const SuccessOrderModal = ({ handleClose, open, onSubmit }: Props) => {
  return (
    <SuccessModal handleClose={handleClose} open={open}>
      <div className='text-center flex flex-col gap-3 justify-center'>
        <div>
          ได้รับข้อมูลการสั่งซื้อเรียบร้อยแล้ว
        </div>

        <div className='flex gap-3'>
          <Button onClick={onSubmit}>รายละเอียดคำสั่งซื้อ</Button>
          <ButtonOutline onClick={handleClose}>กลับสู่หน้าหลัก</ButtonOutline>
        </div>
      </div>
    </SuccessModal>
  )
}

export default SuccessOrderModal