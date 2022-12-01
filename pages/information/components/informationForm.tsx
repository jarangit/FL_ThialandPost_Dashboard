import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SaveInformationModal from '../../../components/modal/saveInformationModal'

type Props = {
  setShowModal: any
}

const InformationForm = ({ setShowModal }: Props) => {
  const [data, setData] = useState({
    id: "123456",
    fname: "ทดสอบ ",
    lname: "ระบบ",
    idCardNumber: "1234567890123",
    type: "VIP",
    birthday: "18/07/2540",
    sex: "หญิง",
    email: "test@gmail.com",
    tel: "091-1234567",
    addressDoc: "xx/xx ม.x ต.xxxxx อ.xxxxx จ. xxxxx 202xx",
    addressProduct: "xx/xx ม.x ต.xxxxx อ.xxxxx จ. xxxxx 202xx"
  })

  const { id, fname, lname, idCardNumber, type, birthday, sex, email, tel, addressDoc, addressProduct } = data

  const styled = {
    input: `
    border-[1px] border-gray-light p-2 rounded-md drop-shadow-sm w-full mt-1 placeholder:text-gray
    `
  }
  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='flex  justify-center lg:justify-end gap-3 order-2 lg:order-1' >
          <button onClick={() => setShowModal(true)}>
            <div className='h-10 p-3 text-white flex items-center justify-center bg-red w-fit rounded-lg'>บันทึก</div>
          </button>
          <Link href={`/information`}>
            <div className='h-10 p-3 text-red flex items-center justify-center bg-white w-fit rounded-lg border border-gray-light'>ยกเลิก</div>
          </Link>
        </div>

        <div className='divide-y divide-gray-light w-full order-1 lg:order-2'>
          <div className='grid  grid-cols-1 lg:grid-cols-2 gap-6 p-0 pt-6 lg:p-20 order-1 lg:order-2'>
            <div>
              <div>รหัสสมาชิก</div>
              <input type="text" placeholder={id} className={`${styled.input}`} />
            </div>
            <div>
              <div>ชื่อ-นามสกุล</div>
              <input type="text" placeholder={fname} className={`${styled.input}`} />
            </div>
            <div>
              <div>เลขบัตรประจำตัวประชาชน</div>
              <input type="text" placeholder={idCardNumber} className={`${styled.input}`} />
            </div>
            <div>
              <div>ประเภทสมาชิก</div>
              <input type="text" placeholder={type} className={`${styled.input}`} />
            </div>
            <div>
              <div>วันเกิด</div>
              <input type="text" placeholder={birthday} className={`${styled.input}`} />
            </div>
            <div>
              <div>เพศ</div>
              <input type="text" placeholder={sex} className={`${styled.input}`} />
            </div>
            <div>
              <div>อีเมล</div>
              <input type="text" placeholder={email} className={`${styled.input}`} />
            </div>
            <div>
              <div>เบอร์โทรศัพท์</div>
              <input type="text" placeholder={tel} className={`${styled.input}`} />
            </div>
          </div>
          <div className='grid  grid-cols-1 lg:grid-cols-2 gap-6 p-0 pt-6 lg:p-20 order-1 lg:order-2'>
            <div className='col-span-1 lg:col-span-2 w-full'>
              ที่อยู่จัดส่งเอกสาร
            </div>
            <div>
              <div>เลขที่ </div>
              <input type="text" placeholder={"389/289 "} className={`${styled.input}`} />
            </div>
            <div>
              <div>ตำบล/แขวง </div>
              <input type="text" placeholder={"ทุ่งสุขลา "} className={`${styled.input}`} />
            </div>
            <div>
              <div>อำเภอ/เขต</div>
              <input type="text" placeholder={"ศรีราชา "} className={`${styled.input}`} />
            </div>
            <div>
              <div>จังหวัด</div>
              <input type="text" placeholder={"ชลบุรี "} className={`${styled.input}`} />
            </div>
            <div>
              <div>รหัสไปรษณีย์ </div>
              <input type="text" placeholder={"20230"} className={`${styled.input}`} />
            </div>
            <div>
              <div>ประเทศ </div>
              <input type="text" placeholder={"ไทย "} className={`${styled.input}`} />
            </div>
          </div>
          <div className='grid  grid-cols-1 lg:grid-cols-2 gap-6 p-0 pt-6 lg:p-20 order-1 lg:order-2'>
            <div className='col-span-1 lg:col-span-2 w-full '>
              ที่อยู่จัดส่งสินค้า
            </div>
            <div className='col-span-1 lg:col-span-2 w-full'>
              <div className="flex items-center">
                <label className="container">
                  ที่อยู่เดียวกับที่อยู่จัดส่งเอกสาร
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div>
              <div>เลขที่ </div>
              <input type="text" placeholder={"389/289 "} className={`${styled.input}`} />
            </div>
            <div>
              <div>ตำบล/แขวง </div>
              <input type="text" placeholder={"ทุ่งสุขลา "} className={`${styled.input}`} />
            </div>
            <div>
              <div>อำเภอ/เขต</div>
              <input type="text" placeholder={"ศรีราชา "} className={`${styled.input}`} />
            </div>
            <div>
              <div>จังหวัด</div>
              <input type="text" placeholder={"ชลบุรี "} className={`${styled.input}`} />
            </div>
            <div>
              <div>รหัสไปรษณีย์ </div>
              <input type="text" placeholder={"20230"} className={`${styled.input}`} />
            </div>
            <div>
              <div>ประเทศ </div>
              <input type="text" placeholder={"ไทย "} className={`${styled.input}`} />
            </div>
          </div>
        </div>
        {/* modal zone */}

      </div>

    </>
  )
}

export default InformationForm