import { useRouter } from 'next/router'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

type Props = {
  counts: any
}

const Cart = ({ counts }: Props) => {
  const { push } = useRouter()
  return (
    <div className='flex items-center gap-3' onClick={() => push('/products/my-orders')}>
      <div className='relative border h-8 w-8 flex items-center justify-center border-gray-light bg-gray-supperLight rounded-md cursor-pointer'>
        <FaShoppingCart size={20} />
        <div className='absolute text-xs -top-2 -right-2 bg-red text-white w-5 h-5 flex justify-center items-center scale-75 rounded-full overflow-hidden font-bold'>{counts}</div>
      </div>
    </div>
  )
}

export default Cart