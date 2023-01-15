import React from 'react'
import OrderItem from './orderItem'

type Props = {
  toggle: boolean;
}

const OrderList = ({ toggle }: Props) => {
  return (
    <div className='divide-y divide-gray-light border-y border-gray-light'>
      <OrderItem toggle={toggle} />
      <OrderItem toggle={toggle} />
      <OrderItem toggle={toggle} />
    </div>
  )
}

export default OrderList