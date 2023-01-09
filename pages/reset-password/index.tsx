import React, { useState } from 'react'
import CardWhite from '../../components/cards/cardWhite'
import Button from '../../components/buttons/button'
import ResetPasswordForm from './components/resetPasswordForm'
import SavedModal from '../../components/modal/savedModal'

type Props = {}

const ResetPasswordPage = (props: Props) => {
  const [showModalSaved, setShowModalSaved] = useState(false)
  return (
    <>
      <SavedModal handleClose={() => setShowModalSaved(false)} open={showModalSaved} onSubmit={() => ""} />
      <CardWhite>
        <div className='flex flex-col'>
          <div className='w-full justify-end flex order-2 lg:order-1'>
            <Button onClick={() => setShowModalSaved(true)}>บันทึก</Button>
          </div>
          <div className='order-1 lg:order-2 mb-3'>
            <ResetPasswordForm setShowModalSaved={setShowModalSaved} />
          </div>
        </div>
      </CardWhite>
    </>
  )
}

export default ResetPasswordPage