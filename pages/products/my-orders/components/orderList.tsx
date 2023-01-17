import React, { useContext } from 'react'
import OrderItem from './orderItem'
import { AppContext } from '../../../../context/appState';

type Props = {
  toggle: boolean;
  onDelete: any;
}

const OrderList = ({ toggle, onDelete }: Props) => {
    // @ts-ignore
  const { myCheckout } = useContext(AppContext)
  return (
    <div className='divide-y divide-gray-light border-y border-gray-light'>
      {myCheckout.data && myCheckout.data.length ? (
        <>
          {myCheckout.data.map((item: any, key: any) => (
            <div key={key}>
              <OrderItem toggle={toggle} onDelete={onDelete} data={item} />
            </div>
          ))}
        </>
      ) : (
        <div className='w-full text-center py-3 text-red'>ยังไม่มีรายการสินค้า</div>
      )}
    </div>
  )
}

export default OrderList