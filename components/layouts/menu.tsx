import Image from 'next/image'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='bg-red'>
      <div className='myContainer'>
        <div className='flex gap-3 justify-between items-center  my-auto text-white'>
          <div className='flex items-center gap-6 '>
            <div className='relative w-32 h-[110px] border bg-white'>
              <Image
                src={'/img/logo.png'}
                alt=""
                // width={300}
                // height={300}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>ระบบบริหารจัดการเว็บเพจสมาชิกแสตมป์ไทย</div>
          </div>
          <div className='flex items-center gap-3'>
            <div>
              <FaUserAlt size={20} />
            </div>
            <div>เบญจพร ทองมูลตน</div>
            <div>
              <MdKeyboardArrowDown size = {20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu