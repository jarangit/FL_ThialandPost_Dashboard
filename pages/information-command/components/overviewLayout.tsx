
import React from 'react'
import Button from '../../../components/buttons/button'
import Table from './table'

type Props = {
  setGoToCreate:any;
}

const OverviewLayout = ({setGoToCreate}: Props) => {
  return (
    <div>
      <div className='w-full flex justify-end'>
        <Button onClick={() => setGoToCreate("MANAGE")}>จัดการข้อมูลคำสั่งประจำ</Button>
      </div>
      <div>
        <Table />
      </div>
    </div>
  )
}

export default OverviewLayout