import React from 'react'
import HeaderPage from '../../components/layouts/headerPage'
import CardWhite from '../../components/cards/cardWhite'
import PerformanceTable from './components/performanceTable'

type Props = {}

const TrackingDetailPage = (props: Props) => {
  return (
    <div>
      <HeaderPage>
        <div>รายละเอียดการติดตาม/สอบถามข้อมูล</div>
      </HeaderPage>

      {/* contents */}
      <CardWhite>
        <div className='flex flex-col gap-6'>
          <div>
            การติดตาม/สอบถามข้อมูล
          </div>
          <div className='flex flex-col gap-6 mt-6 ml-6'>
            <div className='grid grid-cols-2'>
              <div>
                <div>รหัสสมาชิก</div>
                <div className=' text-gray'>123456</div>
              </div>
              <div>
                <div>ชื่อ-นามสกุล</div>
                <div className=' text-gray'>พิมพ์ศุภางค์  สุขดี</div>
              </div>
            </div>
            <div>
              <div>ประเภทเรื่อง</div>
              <div className=' text-gray'>ไม่ได้รับแสตมป์</div>
            </div>
            <div>
              <div>รายละเอียด</div>
              <div className=' text-gray'>สั่งซื้อแสตมป์เมื่อวันที่ 25/05/2565 รบกวนตรวจสอบด้วยค่ะ</div>
            </div>
            <div>
              <div>ไฟล์ภาพ</div>
              <div className=' text-blue underline underline-blue'>stamp.jpeg</div>
            </div>
          </div>
          <div>
            <div>ผลการดำเนินงาน</div>
            <div className='ml-6 mt-3'>
              <PerformanceTable />
            </div>
          </div>
        </div>
      </CardWhite>
    </div>
  )
}

export default TrackingDetailPage