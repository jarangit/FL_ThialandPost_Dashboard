import React, { useState } from 'react'
import BankItem from './bankItem'
import { mockDataBank } from '../../../constants/mockDataBank'
import Input from '../../../components/inputs/input'
import InputUploadFile from '../../../components/inputs/inputUploadFile'
type Props = {}

const BankForm = (props: Props) => {
  const [bankSelected, setBankSelected] = useState(1)
  const styled = {
    input: `
    border-[1px] border-gray-light p-2 rounded-md drop-shadow-sm w-full mt-1 placeholder:text-gray text-sm font-thin
    `
  }
  return (
    <div>
      <div>โอนเงินผ่านบัญชีธนาคาร</div>
      <div className='mt-3'>
        <div className='flex flex-col gap-4'>
          {mockDataBank.map((item, key) => (
            <div key={key}>
              <BankItem
                id={item.id}
                image={item.image}
                name={item.name}
                detail={item.detail}
                type={item.type}
                branch={item.branch}
                number={item.number}
                bankSelected={bankSelected}
                setBankSelected={setBankSelected}
              />
            </div>
          ))}
        </div>
      </div>
      {/* form */}
      <form action="" className='mt-10'>
        <div className='grid grid-cols-10 gap-6'>
          <div className='col-span-10 lg:col-span-4'>
            <div>จำนวนเงินที่โอนเข้าบัญชี (บาท)</div>
            <input type="text" className={`${styled.input}`} />
          </div>
          <div className='col-span-10 lg:col-span-4'>
            <div>วันที่ และเวลาโอนเงิน</div>
            <input type="date" className={`${styled.input}`} />
          </div>
          <div className='col-span-10 lg:col-span-2 flex items-end'>
            <input type="time" className={`${styled.input}`} />
          </div>
          <div className='col-span-10'>
            <div>จหลักฐานการชำระเงิน</div>
            <InputUploadFile />
          </div>
          <div className='col-span-10'>
            <div>รายละเอียด</div>
            <textarea rows={6} className={`${styled.input}`} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default BankForm