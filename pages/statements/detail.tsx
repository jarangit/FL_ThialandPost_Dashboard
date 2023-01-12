import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import StatementDetailTable from './components/statementDetailTable'
import Button from '../../components/buttons/button'
import { useRouter } from 'next/router'
import ModalDetailStatement from './components/modalDetailStatement'

type Props = {}

const StatementDetailPage = (props: Props) => {
  const { push } = useRouter()
  const [showModalDetail, setShowModalDetail] = useState(false)
  return (
    <div>
      <div className='border-b-2 border-gray-light pb-3 text-xl'>รายละเอียดข้อมูลทางบัญชี (Statement)</div>
      <CardWhite>
        <StatementDetailTable setShowModalDetail={setShowModalDetail} />
        <div className='w-full flex justify-center'>
          <Button onClick={() => push('/statements')}>ย้อนกลับ</Button>
        </div>
      </CardWhite>

      {/* Modal zone */}
      <ModalDetailStatement handleClose={() => setShowModalDetail(false)} open={showModalDetail} onSubmit={() => setShowModalDetail(false)} />
    </div>
  )
}

export default StatementDetailPage