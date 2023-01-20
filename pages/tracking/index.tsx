import React, { useState } from 'react'
import HeaderPage from '../../components/layouts/headerPage'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import TrackingForm from './components/trackingForm'
import HistoryTable from './components/historyTable'
import SavedModal from '../../components/modal/savedModal'

type Props = {}

const TrackingPage = (props: Props) => {
  const [showModalSaved, setShowModalSaved] = useState(false)
  return (
    <div>
      <HeaderPage>
        <div>ติดตาม/สอบถามข้อมูล</div>
      </HeaderPage>

      {/* card */}
      <CardWhite>
        <div className='flex flex-col gap-6'>
          <div className='w-full flex justify-end order-3 lg:order-1'>
            <Button onClick={() => setShowModalSaved(true)}>บันทึก</Button>
          </div>

          {/* form */}
          <div className='order-1'>
            <TrackingForm />
          </div>

          {/* Table */}
          <div className='order-2'>
            <HistoryTable />
          </div>
        </div>
      </CardWhite>

      {/* modal zone */}
      <SavedModal handleClose={() => setShowModalSaved(false)} open={showModalSaved} onSubmit={() => ""} />
    </div>
  )
}

export default TrackingPage