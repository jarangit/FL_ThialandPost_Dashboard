import Image from 'next/image'
import React from 'react'
import QuantityController from '../../../../components/items/quantityController'
import { ImBin2 } from 'react-icons/im'

type Props = {
  toggle: boolean;
  onDelete: any;
}

const OrderItem = ({ toggle, onDelete }: Props) => {
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
      <div>
        <Image src={'/img/stamp.png'} width={100} height={100} alt='' />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>ราคา</div>
        <div>30</div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>จำนวน</div>
        {!toggle ? (
          <div>
            <QuantityController quantity={0} onChangeQuantity={() => ""} />
          </div>
        ) : "0"}
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>หน่วย</div>
        <div>ชุด</div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div>รวม</div>
        <div>30</div>
      </div>
      <div>
        <div className={`cursor-pointer text-gray hover:text-red`} onClick={onDelete}>
          <ImBin2 size={20} />
        </div>
      </div>
    </div>
  )
}

export default OrderItem