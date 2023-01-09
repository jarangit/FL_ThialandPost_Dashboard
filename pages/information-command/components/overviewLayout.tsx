
import React from 'react'
import Button from '../../../components/buttons/button'
import Table from './table'

type Props = {
  setGoToCreate: any;
}

const OverviewLayout = ({ setGoToCreate }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-end order-2 lg:order-1'>
        <Button onClick={() => setGoToCreate("MANAGE")}>จัดการข้อมูลคำสั่งประจำ</Button>
      </div>
      <div className='order-1 lg:order-2'>
        <Table />
      </div>
    </div>
  )
}

export default OverviewLayout