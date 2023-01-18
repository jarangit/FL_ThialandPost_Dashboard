import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { BiMinus } from 'react-icons/bi'
import CardWhite from '../../../components/cards/cardWhite'
import { useRouter } from 'next/router'
import { mockDataStampList } from '../../../constants/stampList'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../../components/buttons/button'
import ButtonOutline from '../../../components/buttons/buttonOutline'
import SavedModal from '../../../components/modal/savedModal'
import SuccessModal from '../../../components/modal/successModal'
import HeaderPage from '../../../components/layouts/headerPage'
import SimpleSuccessModal from '../../../components/modal/simpleSuccessModal'
import { AppContext } from '../../../context/appState'
import Cart from '../../../components/items/cart'

type Props = {}

const StampDetailPage = (props: Props) => {
  // @ts-ignore
  const { myCheckout, setMyCheckout } = useContext(AppContext)

  const { query, push } = useRouter()
  const [countSelect, setCountSelect] = useState(1)
  const [dataStamp, setDataStamp] = useState<any>()
  const [showModalConfirm, setShowModalConfirm] = useState(false)
  const styled = {
    textDetail: ``,
  }
  const getData = (id: any) => {
    if (id) {
      const found = mockDataStampList.find((item: any) => item.id == id)
      if (found) {
        setDataStamp(found)
      }
    }
  }

  const onChangeQTY = useCallback((type: string) => {
    switch (type) {
      case "ADD":
        setCountSelect(countSelect + 1)
        break;
      case "DEL":
        if (countSelect !== 0) {
          setCountSelect(countSelect - 1)
        }
        break;
      default:
        break;
    }
  }, [countSelect])

  const onAddProduct = useCallback(() => {
    if (dataStamp) {
      const product = {
        orderId: myCheckout.counts + 1,
        ...dataStamp,
      }
      myCheckout.data.push(product)
      setMyCheckout({
        ...myCheckout,
        counts: myCheckout.counts + 1,
        totalPrice: myCheckout.totalPrice + product.price,
      })
      setShowModalConfirm(true)
    }
  }, [dataStamp, myCheckout])

  useEffect(() => {
    if (query.id) {
      getData(query.id)
    }
  }, [query])

  return (
    <>
      <div>
        <HeaderPage>
          <div>รายละเอียดสินค้า</div>
          <div>
            <Cart counts={myCheckout.counts} />
          </div>
        </HeaderPage>

        <CardWhite>
          <div>
            <div className=''>
              {/* card */}
              <div className=''>
                <div className='flex flex-wrap lg:flex-nowrap gap-3 justify-center lg:justify-between items-center pb-3'>
                  <div className='line-clamp-1 text-xl'>{dataStamp?.name}</div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
                  <div>
                    <div className='relative max-w-[600px] w-full h-[300px]'>
                      <Image src={dataStamp?.image} alt="" fill style={{ objectFit: "contain" }} />
                    </div>
                  </div>
                  <div className='flex gap-5 flex-col'>
                    <div className=''>{dataStamp?.name}</div>
                    <div className='text-red text-2xl'>{dataStamp?.price} บาท</div>
                    <ul className='flex flex-col gap-3 text-sm'>
                      <li className='flex gap-3'>
                        <div className='min-w-[120px] font-bold'>ภาพ</div>
                        <div className={`${styled.textDetail}`}>: {dataStamp?.description}</div>
                      </li>
                      <li className='flex gap-3'>
                        <div className='min-w-[120px] font-bold'>ขนาด</div>
                        <div className={`${styled.textDetail}`}>: {dataStamp?.size}</div>
                      </li>
                      <li className='flex gap-3'>
                        <div className='min-w-[120px] font-bold'>วิธีการพิมพ์และสี</div>
                        <div className={`${styled.textDetail}`}>: {dataStamp?.colors}</div>
                      </li>
                      <li className='flex gap-3'>
                        <div className='min-w-[120px] font-bold'>จำนวนดวงในแผ่น </div>
                        <div className={`${styled.textDetail}`}>: {dataStamp?.stock} ดวง</div>
                      </li>
                      <li className='flex gap-3'>
                        <div className='min-w-[120px] font-bold'>ซองวันแรกจำหน่าย </div>
                        <div className={`${styled.textDetail}`}>: {dataStamp?.sellDayOne}</div>
                      </li>
                      <li className='flex gap-3'>
                        <div className='min-w-[120px] font-bold'>ผู้ประกอบแบบ </div>
                        <div className={`${styled.textDetail}`}>: {dataStamp?.author}</div>
                      </li>
                    </ul>
                    {/* controller */}
                    <div className='flex gap-3 items-center flex-wrap'>
                      <div className='min-w-[120px]'>
                        ตัวเลือกสินค้า
                      </div>
                      <div className='flex gap-3 flex-wrap w-full lg:w-auto'>
                        <Button>ชุด</Button>
                        <ButtonOutline>แผ่น</ButtonOutline>
                      </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                      <div className='min-w-[120px]'>
                        จำนวน
                      </div>
                      <div className='flex gap-3 border border-gray-light text-sm'>
                        <div className='bg-red text-white px-[2px] cursor-pointer flex items-center justify-center' onClick={() => onChangeQTY("DEL")}>
                          <TiMinus size={20} />
                        </div>
                        <div>{countSelect}</div>
                        <div className='bg-red text-white px-[2px] cursor-pointer flex items-center justify-center' onClick={() => onChangeQTY("ADD")}>
                          <TiPlus size={20} />
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-3 items-center flex-wrap '>
                      <Button onClick={onAddProduct}>
                        <div className='mr-2'>
                          <FaShoppingCart size={20} />
                        </div>
                        <div >
                          เพิ่มไปยังรถเข็น
                        </div>
                      </Button>
                      <Button onClick={() => push('/products/my-orders')}>สั่งสินค้า</Button>
                      <ButtonOutline onClick={() => push('/products')}>ย้อนกลับ</ButtonOutline>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardWhite>
      </div>

      {/* modal zone */}
      <SimpleSuccessModal text={"เพิ่มไปยังรถเข็นแล้ว"} handleClose={() => setShowModalConfirm(false)} open={showModalConfirm} />
    </>
  )
}

export default StampDetailPage