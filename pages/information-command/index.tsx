import React from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import Table from './components/table'

type Props = {}

const InformationCommandPage = (props: Props) => {
  return (
    <CardWhite>
      <div>
        <div className='w-full flex justify-end'>
          <Button>จัดการข้อมูลคำสั่งประจำ</Button>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </CardWhite>
  )
}

export default InformationCommandPage