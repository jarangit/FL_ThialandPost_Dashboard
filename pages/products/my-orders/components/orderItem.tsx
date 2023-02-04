import Image from 'next/image'
import React from 'react'
import QuantityController from '../../../../components/items/quantityController'
import { ImBin2 } from 'react-icons/im'

type Props = {
  toggle: boolean;
  onDelete: any;
  data: any;
}

const OrderItem = ({ toggle, onDelete, data }: Props) => {
  return (
    <div className='flex justify-between items-center px-10 py-3'>
      {!toggle && (
        <div>
          <label className="container  bottom-2">
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      )}
      <div className='w-[100px] h-[100px] relative'>
        <Image src={data?.image} fill alt='' style={{ objectFit: "contain" }} />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>ราคา/หน่วย</div>
        <div className='w-full text-right'>{data?.price}.00</div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>จำนวน</div>
        {!toggle ? (
          <div>
            <QuantityController quantity={1} onChangeQuantity={() => ""} />
          </div>
        ) : "0"}
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>หน่วย</div>
        <div>ชุด</div>
      </div>
      <div className='flex flex-col items-end gap-2 text-right'>
        <div>รวม</div>
        <div className='w-full text-right'>{data?.price}.00</div>
      </div>
      <div>
        {!toggle && (
          <div className={`cursor-pointer text-gray hover:text-red`} onClick={() => onDelete(data?.orderId)}>
            <ImBin2 size={20} />
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderItem