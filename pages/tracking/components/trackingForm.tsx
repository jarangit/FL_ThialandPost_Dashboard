import React from 'react'
import Selector from '../../../components/seletors/selector'
import InputUploadFile from '../../../components/inputs/inputUploadFile'

type Props = {}
const options = [
  {
    value: 1,
    label: "VIP",
  },
  {
    value: 1,
    label: "NORMAL",
  },
]
const TrackingForm = (props: Props) => {
  return (
    <div>
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

      <form>
        <div className='flex flex-col gap-6 mt-6'>
          <div>
            <div>ประเภทเรื่อง</div>
            <Selector options={options} onChangeDataForm={() => ""} />
          </div>
          <div>
            <div>รายละเอียด</div>
            <textarea rows={5} className='border w-full  border-gray-light rounded-lg p-3
            ' />
          </div>
          <div>
            <div>แนบไฟล์ภาพ</div>
            <InputUploadFile />
          </div>
        </div>
      </form>
    </div>
  )
}

export default TrackingForm