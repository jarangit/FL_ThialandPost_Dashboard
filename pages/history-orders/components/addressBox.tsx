import React from 'react'

type Props = {}

const AddressBox = (props: Props) => {
  return (
    <div className='p-6 border border-gray-light rounded-xl'>
      <div>ที่อยู่การจัดส่ง</div>
      <div className='text-gray font-thin mt-3'>
        <div>เบญจพร ทองมูลตน</div>
        <div>(+66) 896990001</div>
        <div>{`125/40 แขวง/ตำบล ทุ่งสุขลา เขต/อำเภอ ศรีราชา จังหวัด ชลบุรี 20230 ประเทศไทย`}</div>
      </div>
    </div>
  )
}

export default AddressBox