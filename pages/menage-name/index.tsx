import React from 'react'
import InputSearch from '../../components/inputs/inputSearch'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'

type Props = {}

const menageNamePage = (props: Props) => {
  return (
    <div>
      <div className='flex items-center justify-between w-full border-b-2 border-gray-light pb-3'>
        <div className=' pb-3 text-xl'>จัดการคำนำหน้าชื่อ</div>
        <div>
          <InputSearch placeholder='Search candidates' />
        </div>
      </div>

      {/* table */}
      <CardWhite>
        <div className={`w-full flex justify-end gap-3`}>
          <Button>
            เพิ่ม
          </Button>
          <Button
            disabled
          >
            ลบทั้งหมด
          </Button>
        </div>

        <Table />
      </CardWhite>
    </div>
  )
}

export default menageNamePage