import React, { useContext, useEffect, useState } from 'react'
import HeaderPage from '../../../components/layouts/headerPage'
import CardWhite from '../../../components/cards/cardWhite'
import Button from '../../../components/buttons/button'
import OrderItem from './components/orderItem'
import OrderList from './components/orderList'
import AddressForm from './components/addressForm'
import ButtonOutline from '../../../components/buttons/buttonOutline'
import SuccessOrderModal from '../../../components/modal/successOrderModal'
import { useRouter } from 'next/router'
import ConfirmDeleteModal from '../../../components/modal/confirmDeleteModal'
import { AppContext } from '../../../context/appState'
import ErrorLabel from '../../../components/items/errorLabel'

type Props = {}

const MyOrdersPage = (props: Props) => {
  const credit = 100
  // @ts-ignore
  const { myCheckout, setMyCheckout } = useContext(AppContext)
  const { push } = useRouter()
  const [toggleCheckout, setToggleCheckout] = useState(false)
  const [showModalSuccessModal, setShowModalSuccessModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [selectedProductID, setSelectedProductID] = useState()
  const [showLabelCredit, setShowLabelCredit] = useState(false)
  const onSelectForDelete = (id: any) => {
    setSelectedProductID(id)
    setShowModalDelete(true)

  }
  const onDeleteProductFormCheckout = (id: any) => {
    if (id) {
      const find = myCheckout.data.find((item: any) => item.orderId === id)
      const found = myCheckout.data.filter((item: any) => item.orderId !== id)
      if (found) {
        setMyCheckout({
          counts: myCheckout.counts - 1,
          totalPrice: myCheckout.totalPrice - find.price,
          data: found,
        })
      }
    }
    setShowModalDelete(false)
  }
  const onConfirmOrder = () => {
    if (credit < myCheckout.totalPrice) {
      setShowLabelCredit(true)
    } else {
      setToggleCheckout(true)
    }
  }
  useEffect(() => {
    if (credit < myCheckout.totalPrice) {
      setShowLabelCredit(true)
    } else {
      setShowLabelCredit(false)
    }
  }, [myCheckout])

  return (
    <>
      <HeaderPage>
        <div>สรุปรายการสั่งซื้อสินค้า</div>
      </HeaderPage>

      {/* contents */}
      <CardWhite>
        <div className='flex flex-col gap-6 order-4 '>
          <div>
            {toggleCheckout ? (
              <div className='flex w-full justify-between items-center gap-3 flex-wrap'>
                <Button onClick={() => push('/products')}>สั่งสินค้าเพิ่ม</Button>
                <div className='flex gap-3'>
                  <Button onClick={() => setShowModalSuccessModal(true)}>ยืนยันคำสั่งซื้อ</Button>
                  <ButtonOutline onClick={() => setToggleCheckout(false)}>ย้อนกลับ</ButtonOutline>
                </div>
              </div>
            ) : (
              <div className='flex w-full justify-between items-center gap-3 flex-wrap'>
                <Button onClick={() => push('/products')}>สั่งสินค้าเพิ่ม</Button>
                <Button onClick={() => onConfirmOrder()}>ทำการสั่งซื้อ</Button>
              </div>
            )}
          </div>
          <div >
            <ErrorLabel text={'ยอดเงินของคุณไม่เพียงพอสำหรับสั่งซื้อสินค้า กรุณาลดจำนวนสินค้าหรือเติมเงินเข้าระบบ '} onShow={showLabelCredit} />
          </div>
          <div className=''>
            <OrderList toggle={toggleCheckout} onDelete={onSelectForDelete} />
          </div>

          <div className='flex w-full justify-end lg:px-10'>
            <div>
              <div className={`flex gap-1 lg:gap-10 justify-end ${showLabelCredit && "text-red"}`}>
                <div>ยอดเงินคงเหลือสุทธิ</div>
                <div className='w-16 text-right'>{credit}.00</div>
              </div>
              <div className='flex gap-1 lg:gap-10 justify-end'>
                <div>ยอดเงินสั่งซื้อ</div>
                <div className='w-16 text-right'>{myCheckout.totalPrice}.00</div>
              </div>
              <div className='flex gap-1 lg:gap-10 justify-end'>
                <div >ยอดเงินใช้ได้</div>
                <div className='w-16 text-right'>{credit}.00</div>
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
      <ConfirmDeleteModal handleClose={() => setShowModalDelete(false)} open={showModalDelete} onSubmit={() => onDeleteProductFormCheckout(selectedProductID)} />
    </>
  )
}

export default MyOrdersPage