import React from 'react'
import Button from '../../../components/buttons/button'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Props = {
  data: any
}

const HistoryOrderItem = ({ data }: Props) => {
  const { push } = useRouter()
  return (
    <>
      {data ? (
        <div className='py-3'>
          <div className='flex justify-between items-center w-full flex-wrap gap-3'>
            <div className='text-xl'>เลขที่คำสั่งซื้อ {data.id}</div>
            <div className='hidden lg:block'>
              <Button onClick={() => push(`/history-orders/${data.id}`)}>ดูรายละเอียด</Button>
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
      ) : ""}
    </>
  )
}

export default HistoryOrderItem