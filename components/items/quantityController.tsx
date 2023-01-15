import React from 'react'
import { TiMinus, TiPlus } from 'react-icons/ti'

type Props = {
  quantity: number;
  onChangeQuantity: any;
}

const QuantityController = ({ quantity,onChangeQuantity }: Props) => {
  return (
    <div className='flex gap-3 border border-gray-light text-sm'>
      <div className='bg-red text-white px-[2px] cursor-pointer flex items-center justify-center' onClick={() => onChangeQuantity("DEL")}>
        <TiMinus size={20} />
      </div>
      <div>{quantity}</div>
      <div className='bg-red text-white px-[2px] cursor-pointer flex items-center justify-center' onClick={() => onChangeQuantity("ADD")}>
        <TiPlus size={20} />
      </div>
    </div>
  )
}

export default QuantityController