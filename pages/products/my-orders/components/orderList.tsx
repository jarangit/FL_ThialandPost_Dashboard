import React from 'react'
import OrderItem from './orderItem'

type Props = {
  toggle: boolean;
  onDelete: any;
}

const OrderList = ({ toggle,onDelete }: Props) => {
  return (
    <div className='divide-y divide-gray-light border-y border-gray-light'>
      <OrderItem toggle={toggle} onDelete={onDelete}/>
      <OrderItem toggle={toggle} onDelete={onDelete}/>
      <OrderItem toggle={toggle} onDelete={onDelete}/>
    </div>
  )
}

export default OrderList