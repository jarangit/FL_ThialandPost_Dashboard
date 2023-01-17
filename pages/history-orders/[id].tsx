import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { mockHistoryOrderList } from '../../constants/historyOrderList'
import Button from '../../components/buttons/button'
import Image from 'next/image'
import CardWhite from '../../components/cards/cardWhite'
import HeaderPage from '../../components/layouts/headerPage'
import AddressBox from './components/addressBox'
type Props = {}

const HistoryDetailPage = (props: Props) => {
  const { query, push } = useRouter()
  const [data, setData] = useState<any>()

  const getData = useCallback((id: number) => {
    if (id) {
      const found: any = mockHistoryOrderList.find((item) => item.id == id)
      if (found) {
        setData(found)
      }
    }
  }, [query])

  useEffect(() => {
    if (query.id) {
      const id: number = parseFloat(query.id as '')
      getData(id)
    }
  }, [query])

  return (
    <>
      <HeaderPage>
        <div>รายละเอียดการสั่งซื้อ</div>
      </HeaderPage>
      <CardWhite>
        {data ? (
          <>
            <div className='py-3 border-b border-gray-light pb-10'>
              <div className='flex justify-between items-center w-full flex-wrap gap-3'>
                <div className='text-xl'>เลขที่คำสั่งซื้อ {data.id}</div>
                <div className='hidden lg:block'>
                  <Button onClick={() => push(`/history-orders`)}>ย้อนกลับ</Button>
                </div>
              </div>

              <div className='grid grid-cols-4 mt-3 gap-3'>
                <div className=' col-span-4 lg:col-span-1 justify-center text-center items-center'>
                  <div className='justify-center flex'>
                    <Image src={data.image} alt='' width={200} height={200} />
                  </div>
                </div>
                <div className=' col-span-4 lg:col-span-3'>
                  <div className='flex flex-col gap-2 text-sm'>
                    <div className='text-lg'>{data.name}</div>
                    <div className='flex items-center gap-3'>
                      <div className='min-w-[150px]'>จำนวน </div>
                      <div>{data.qty} ชุด</div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='min-w-[150px]'>รวมเป็นเงิน (บาท)   </div>
                      <div>{data.totalPrice} บาท</div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='min-w-[150px]'>วันที่     </div>
                      <div>{data.orderDate}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-3 lg:hidden'>
                <Button>ดูรายละเอียด</Button>
              </div>
            </div>
            {/* total */}
            <div className='mt-6 text-red flex w-full justify-end flex-col items-end'>
              <div>รวมการสั่งซื้อ (บาท)</div>
              <div>{data.totalPrice} บาท</div>
            </div>

            <div className='mt-6'>
              <AddressBox />
            </div>
          </>
        ) : ""}

      </CardWhite>
    </>
  )
}

export default HistoryDetailPage