import React, { useState } from 'react'
import HeaderPage from '../../../components/layouts/headerPage'
import CardWhite from '../../../components/cards/cardWhite'
import Button from '../../../components/buttons/button'
import OrderItem from './components/orderItem'
import OrderList from './components/orderList'
import AddressForm from './components/addressForm'
import ButtonOutline from '../../../components/buttons/buttonOutline'
import SuccessOrderModal from '../../../components/modal/successOrderModal'
import { useRouter } from 'next/router'

type Props = {}

const MyOrdersPage = (props: Props) => {
  const { push } = useRouter()
  const [toggleCheckout, setToggleCheckout] = useState(false)
  const [showModalSuccessModal, setShowModalSuccessModal] = useState(false)
  return (
    <>
      <HeaderPage>
        <div>สรุปรายการสั่งซื้อสินค้า</div>
      </HeaderPage>

      {/* contents */}
      <CardWhite>
        <div className='flex flex-col gap-10 order-4 '>
          {toggleCheckout ? (
            <div className='flex w-full justify-between items-center gap-3 flex-wrap'>
              <Button>สั่งสินค้าเพิ่ม</Button>
              <div className='flex gap-3'>
                <Button onClick={() => setShowModalSuccessModal(true)}>ยืนยันคำสั่งซื้อ</Button>
                <ButtonOutline onClick={() => setToggleCheckout(false)}>ย้อนกลับ</ButtonOutline>
              </div>
            </div>
          ) : (
            <div className='flex w-full justify-between items-center gap-3 flex-wrap'>
              <Button>สั่งสินค้าเพิ่ม</Button>
              <Button onClick={() => setToggleCheckout(true)}>ทำการสั่งซื้อ</Button>
            </div>
          )}

          <div className='mt-6'>
            <OrderList toggle={toggleCheckout} />
          </div>

          <div className='flex w-full justify-end lg:px-10'>
            <div>
              <div className='flex gap-1 lg:gap-10 justify-end'>
                <div>ยอดเงินคงเหลือสุทธิ</div>
                <div className='w-16 text-right'>100.00</div>
              </div>
              <div className='flex gap-1 lg:gap-10 justify-end'>
                <div>ยอดเงินสั่งซื้อ</div>
                <div className='w-16 text-right'>90.00</div>
              </div>
              <div className='flex gap-1 lg:gap-10 justify-end'>
                <div >ยอดเงินใช้ได้</div>
                <div className='w-16 text-right'>10.00</div>
              </div>
            </div>
          </div>

          {/* address form */}
          <div className='lg:border  lg:border-gray-light rounded-xl'>
            <AddressForm />
          </div>
        </div>
      </CardWhite>
      {/* modal zone */}
      <SuccessOrderModal handleClose={() => setShowModalSuccessModal(false)} open={showModalSuccessModal} onSubmit={() => push('/history-orders')} />
    </>
  )
}

export default MyOrdersPage