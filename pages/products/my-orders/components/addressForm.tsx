import React from 'react'

type Props = {}

const AddressForm = (props: Props) => {
  const styled = {
    input: `
    border-[1px] border-gray-light p-2 rounded-md drop-shadow-sm w-full mt-1 placeholder:text-gray
    `
  }
  return (
    <div className='p-0 pt-6 lg:p-20'>
      <div>ที่อยู่สำหรับจัดส่งสินค้า (เฉพาะคำสั่งซื้อนี้)</div>
      <div className='grid  grid-cols-1 lg:grid-cols-2 gap-6 mt-6 order-1 lg:order-2'>
        <div>
          <div>ชื่อผู้รับ</div>
          <input type="text" placeholder={"เบญจพร ทองมูลตน"} className={`${styled.input}`} />
        </div>
        <div>
          <div>เบอร์โทรศัพท์</div>
          <input type="text" placeholder={"0989900084"} className={`${styled.input}`} />
        </div>
        <div>
          <div>เลขที่</div>
          <input type="text" placeholder={"125/40"} className={`${styled.input}`} />
        </div>
        <div>
          <div>ตำบล/แขวง</div>
          <input type="text" placeholder={"ทุ่งสุขลา"} className={`${styled.input}`} />
        </div>
        <div>
          <div>อำเภอ/เขต</div>
          <input type="text" placeholder={"ศรีราชา"} className={`${styled.input}`} />
        </div>
        <div>
          <div>รหัสไปรษณีย์</div>
          <input type="text" placeholder={"20230"} className={`${styled.input}`} />
        </div>
        <div>
          <div>จังหวัด</div>
          <input type="text" placeholder={"ชลบุรี"} className={`${styled.input}`} />
        </div>
        <div>
          <div>ประเทศ</div>
          <input type="text" placeholder={"ไทย"} className={`${styled.input}`} />
        </div>
      </div>
    </div>
  )
}

export default AddressForm