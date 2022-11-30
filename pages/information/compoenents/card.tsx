import Link from 'next/link';
import React from 'react'

type Props = {
  id: number;
  fname: string;
  lname: string;
  idCardNumber: string;
  type: string;
  birthday: string;
  sex: string;
  email: string;
  tel: string;
  addressDoc: string;
  addressProduct: string;
}

const CardInformation = ({
  id,
  fname,
  lname,
  idCardNumber,
  type,
  birthday,
  sex,
  email,
  tel,
  addressDoc,
  addressProduct,
}: Props) => {
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl'>ข้อมูลส่วนตัว</div>
      <div className='bg-white rounded-lg mt-6 p-6 flex flex-col gap-3 drop-shadow-lg'>
        <div className='flex justify-center lg:justify-end order-2 lg:order-1 w-full' >
          <Link href={`/information/edit`}>
            <div className='h-10 p-3 text-white flex items-center justify-center bg-red w-full lg:w-fit rounded-lg'>แก้ไขข้อมูลส่วนตัว</div>
          </Link>
        </div>

        <div className='grid  grid-cols-1 lg:grid-cols-2 gap-6 p-0 lg:p-20 order-1 lg:order-2'>
          <div>
            <div>รหัสสมาชิก</div>
            <div className='text-gray-light'>{id}</div>
          </div>
          <div>
            <div>ชื่อ-นามสกุล</div>
            <div className='text-gray-light'>{fname} {lname}</div>
          </div>
          <div>
            <div>เลขบัตรประจำตัวประชาชน</div>
            <div className='text-gray-light'>{idCardNumber}</div>
          </div>
          <div>
            <div>ประเภทสมาชิก</div>
            <div className='text-gray-light'>{type}</div>
          </div>
          <div>
            <div>วันเกิด</div>
            <div className='text-gray-light'>{birthday}</div>
          </div>
          <div>
            <div>เพศ</div>
            <div className='text-gray-light'>{sex}</div>
          </div>
          <div>
            <div>อีเมล</div>
            <div className='text-gray-light'>{email}</div>
          </div>
          <div>
            <div>เบอร์โทรศัพท์</div>
            <div className='text-gray-light'>{tel}</div>
          </div>
          <div>
            <div>ที่อยู่จัดส่งเอกสาร </div>
            <div className='text-gray-light'>{addressDoc}</div>
          </div>
          <div>
            <div>ที่อยู่จัดส่งสินค้า</div>
            <div className='text-gray-light'>{addressProduct}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardInformation