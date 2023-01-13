import React from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Link from 'next/link'
import CardStatement from './components/cardStatement'

type Props = {}

const StatementsPage = (props: Props) => {
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl'>ข้อมูลทางบัญชี (Statement)</div>
      <CardWhite>
        <div className='flex justify-center lg:justify-end order-2 lg:order-1 w-full' >
          <Link href={`/statements/detail`}>
            <div className='h-10 p-3 text-white flex items-center justify-center bg-red w-full lg:w-fit rounded-lg'>รายละเอียดข้อมูลทางบัญชี</div>
          </Link>
        </div>
        {/* contnets */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3'>
          <CardStatement title={'คำสั่งประจำตราไปรฯ (บาท) '} balance={'1,580.00'} availableBalance={'1,580.00'} />
          <CardStatement color='#FCC1B1' title={'คำสั่งประจำสิ่งสะสม (บาท) '} balance={'1,000.00'} availableBalance={'1,000.00'} />
          <CardStatement color='#EFBDC7' title={'คำสั่งซื้อ/สั่งจองตราไปรฯ (บาท) '} balance={'1,580.00'} availableBalance={'0.00'} />
          <CardStatement color='#FCC1B1' title={'คำสั่งซื้อ/สั่งจองสิ่งสะสม (บาท) '} balance={'0.00'} availableBalance={'0.00'} />
          <CardStatement color='#BEDFF7' title={`ประเภทเงินนิตยสารแสตมป์
และสิ่งสะสม (บาท) `} balance={'0.00'} availableBalance={'0.00'} />
          <CardStatement color='#BBE2D7' title={`ประเภทเงินจุลสารข่าวแสตมป์ไทย 
(บาท) `} balance={'0.00'} availableBalance={'0.00'} />
        </div>

        {/* footer text */}
        <div className='w-full flex justify-end flex-col items-end mt-3 gap-1'>
          <div className='flex items-center gap-3 lg:gap-24'>
            <div>ยอดเงินคงเหลือรวม (บาท)</div>
            <div>3,580.00</div>
          </div >
          <div className='flex items-center gap-3 lg:gap-24'>
            <div>ยอดเงินใช้ได้รวม (บาท)</div>
            <div>2,000.00</div>
          </div>
        </div>
      </CardWhite>
    </div>
  )
}

export default StatementsPage